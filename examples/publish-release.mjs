import { uploadSourceMapChunks } from "@interfere/build/upload-source-map-chunks";
import { InterfereClient } from "@interfere/javascript";
import { injectDebugIdIntoJs, readDebugIdFromJs } from "@interfere/types/data/source-maps";
import { extractRichness } from "@interfere/types/sdk/source-map-richness";
import { execFileSync } from "node:child_process";
import { createHash, randomUUID } from "node:crypto";
import { readFile, readdir, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

export async function prepareSourceMaps(directory) {
  const entries = await readdir(directory, { recursive: true });
  const paths = entries.filter((path) => /\.(?:js|mjs|cjs)\.map$/.test(path)).sort();
  if (paths.length === 0) throw new Error(`No JavaScript source maps found in ${directory}`);

  const files = [];
  for (const path of paths) {
    const chunkPath = path.slice(0, -4);
    const original = await readFile(join(directory, chunkPath), "utf8");
    const map = JSON.parse(await readFile(join(directory, path), "utf8"));
    if (map.version !== 3 || typeof map.mappings !== "string") {
      throw new Error(`Expected a flat version 3 source map: ${path}`);
    }
    const debugId = readDebugIdFromJs(original) ?? randomUUID();
    const content = JSON.stringify({ ...map, debugId });
    await writeFile(join(directory, chunkPath), injectDebugIdIntoJs(original, debugId));
    await writeFile(join(directory, path), content);
    files.push({
      path: path.replaceAll("\\", "/"),
      chunkUrl: chunkPath.replaceAll("\\", "/"),
      debugId,
      hash: createHash("sha256").update(content).digest("hex"),
      content,
    });
  }
  return files;
}

export async function publishRelease(client, directory, source) {
  const files = await prepareSourceMaps(directory);
  const release = await client.releases.createRelease({
    buildId: source.commitSha,
    destination: null,
    source: { provider: "github", ...source },
  });
  const releaseSlug = release.destination.slug;
  const signed = await client.releases.signSourceMapUploads({
    releaseSlug,
    files: files.map(({ path, content }) => ({
      path,
      sizeBytes: Buffer.byteLength(content),
      ...extractRichness(content),
    })),
  });
  await uploadSourceMapChunks({ client, releaseSlug, signed, files });
  const result = await client.releases.finalizeSourceMaps({
    releaseSlug,
    bundler: "tsc",
    sourceFileCount: files.length,
    files: files.map(({ content, ...file }) => file),
  });
  if (!result.ok || result.fileCount !== files.length) {
    throw new Error("Source-map finalization did not accept the complete batch");
  }
  return { releaseSlug, fileCount: result.fileCount };
}

async function main() {
  const token = process.env.INTERFERE_API_KEY;
  const commitSha = process.env.INTERFERE_SOURCE_ID;
  if (!token) throw new Error("Set INTERFERE_API_KEY to the surface build key");
  if (!commitSha || !/^[0-9a-f]{40}$/i.test(commitSha)) {
    throw new Error("Set INTERFERE_SOURCE_ID to the full Git commit SHA");
  }
  if (!process.argv[2]) throw new Error("Usage: node scripts/publish-release.mjs dist");

  const git = (...args) => execFileSync("git", args, { encoding: "utf8" }).trim();
  const client = new InterfereClient({
    baseUrl: "https://api.interfere.com",
    apiKey: { token },
    maxRetries: 0,
  });
  const result = await publishRelease(client, resolve(process.argv[2]), {
    commitSha: commitSha.toLowerCase(),
    branch: process.env.GITHUB_REF_NAME || git("branch", "--show-current"),
    commitMessage: git("log", "-1", "--format=%B"),
  });
  console.log(`Published ${result.fileCount} source maps for ${result.releaseSlug}`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  await main();
}
