# Interfere documentation

This repository publishes the Interfere documentation through Mintlify. Pages use MDX, site configuration lives in `docs.json`, and navigation lives in `config/navigation.json`.

## Sources and terminology

Verify instructions against the corresponding product or SDK implementation. Treat a release status explicitly supplied by the maintainer as authoritative. Never invent command flags, API paths, permissions, or setup steps.

A workspace belongs to the team using Interfere. A surface is an app that team monitors. A company is a customer account in that app. Problems group related occurrences; findings and telemetry provide investigation evidence.

## Writing

Use active voice, sentence case, and concrete instructions. Describe what a feature does and how to use it. Avoid promotional claims, generic introductions, em dashes, guaranteed investigation timing, and unsupported promises to capture everything.

Use bold for UI labels and code formatting for commands, paths, variables, and API fields. Keep secrets out of examples. Do not add source-code comments to examples.

Use sidebar icons only for destinations that have icons in the product navigation, and match the product icon. Task pages, subsections, SDK guides, and reference pages have no sidebar icon. Use SVGs from the Interfere icon pack under `icons/ui/`; do not substitute generic glyphs.

Product pages explain the UI and how to use it. Keep SDK APIs, build configuration, and upload scripts in the SDK section, linked from product pages when needed.

## Validation

Install with `bun install --frozen-lockfile --ignore-scripts`.

Run `bun run format`, `bun run lint`, `bun run typecheck`, `bun run validate`, and `bun run check:links`. Preview with `bun run dev` and inspect changed pages in a browser. This docs repository has no application test suite; Mintlify validates MDX and configuration.

## Publishing

Mintlify is connected to `interfere-inc/docs`, branch `main`, with `docs.json` at the repository root. Updates to that branch trigger production deployments at `https://interfere.com/docs`. Check the deployment in Mintlify Activity after publishing. Preview deployments depend on workspace availability.

The API reference reads `https://api.interfere.com/openapi.json`. Keep the build validation enabled for OpenAPI so a broken specification fails the check. Scraped files under `sources/` are reference material, excluded through `.mintignore`.

## Visual explanations

Use Mermaid for relationships and flows, with an accessible title and description. Use framed screenshots when readers need to recognize a specific UI control; exclude outdated navigation and unrelated settings. Add callouts for plan availability, prerequisites, and concrete footguns. Verify diagrams, captions, and callouts against the product, and inspect their rendered output.
