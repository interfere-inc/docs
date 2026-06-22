# Source: https://interfere.com/changelog

[**Introducing Consent Management**](https://interfere.com/changelog/consent-management)

[![Luke Shiels](https://ojlajfkioceqxno6.public.blob.vercel-storage.com/marketing-site/homepage/luke.avif)\\ \\ Luke Shiels\\ \\ Founder, CEO](https://x.com/lukeshiels) [![Phillip Snyder](https://ojlajfkioceqxno6.public.blob.vercel-storage.com/marketing-site/homepage/phillip.avif)\\ \\ Phillip Snyder\\ \\ Founding Full-Stack Engineer](https://x.com/PhilipSnyder)

[![consent](https://interfere.com/cdn-cgi/image/width=2640,quality=80,format=auto/https://ojlajfkioceqxno6.public.blob.vercel-storage.com/cms-production/consent-light.png)![consent](https://interfere.com/cdn-cgi/image/width=2640,quality=80,format=auto/https://ojlajfkioceqxno6.public.blob.vercel-storage.com/cms-production/consent-dark.png)](https://interfere.com/changelog/consent-management)

We've added consent gating to our SDKs, giving you full control over which features activate based on your users' consent preferences, with native support for all modern consent platforms: c15t, CookieYes, OneTrust, or your own.

This brings Interfere in-line with modern requirements from audit frameworks like SOC 2 Type II and GDPR. You can learn more by reading the SDK's [README](https://www.npmjs.com/package/@interfere/next/v/0.2.0-alpha.6).

# How it works

Pass a `consent` prop to `InterfereProvider` and only the categories your users have agreed to will run. Error tracking is always on — it's treated as a necessary function. Analytics (page events, rage clicks, fingerprint) and session replay are independently toggleable.

layout.tsx

```
<InterfereProvider consent={{ analytics: true, replay: false }}>
  {children}
</InterfereProvider>
```

Additionally, consent state is reactive. When a user updates their preferences through your consent banner or by logging in, call `consent.set()` and the SDK will load or tear down plugins in real time.

layout.tsx

```
import { InterfereProvider } from "@interfere/next/provider";

export default function Layout({ children }: LayoutProps<"/">) {
  const { has } = useConsentManager(); // from your CMP

  return (
    <InterfereProvider
      consent={{ analytics: has("measurement"), replay: has("experience") }}
    >
      {children}
    </InterfereProvider>
  );
}
```

# What's next

We recently rolled out the `identify` feature, allowing you to associate visitors with persistent users in your app across surfaces. That means that a user of your iOS app and a user of your Next.js app are just one user – even across different authentication providers, giving you total visibility into your user's sessions across your entire product surface area.

[![Luke Shiels](https://ojlajfkioceqxno6.public.blob.vercel-storage.com/marketing-site/homepage/luke.avif)\\ \\ Luke Shiels\\ \\ Founder, CEO](https://x.com/lukeshiels) [![Phillip Snyder](https://ojlajfkioceqxno6.public.blob.vercel-storage.com/marketing-site/homepage/phillip.avif)\\ \\ Phillip Snyder\\ \\ Founding Full-Stack Engineer](https://x.com/PhilipSnyder)

[**Timeline Improvements**](https://interfere.com/changelog/timeline-improvements)

[![Luke Shiels](https://ojlajfkioceqxno6.public.blob.vercel-storage.com/marketing-site/homepage/luke.avif)\\ \\ Luke Shiels\\ \\ Founder, CEO](https://x.com/lukeshiels) [![Jakub Krehel](https://ojlajfkioceqxno6.public.blob.vercel-storage.com/marketing-site/homepage/jakub.avif)\\ \\ Jakub Krehel\\ \\ Founding Design Engineer](https://x.com/jakubkrehel)

[![timeline](https://interfere.com/cdn-cgi/image/width=2640,quality=80,format=auto/https://ojlajfkioceqxno6.public.blob.vercel-storage.com/cms-production/timeline-light.png)![timeline](https://interfere.com/cdn-cgi/image/width=2640,quality=80,format=auto/https://ojlajfkioceqxno6.public.blob.vercel-storage.com/cms-production/timeline-dark.png)](https://interfere.com/changelog/timeline-improvements)

When something breaks in production, the story of what happened is never simple. An agent flags an anomaly. A developer starts investigating. A pull request lands. CI runs. Another agent proposes a fix. If the process is particularly bad, we've seen cases where someone leaves a note for the on-call engineer picking up the next shift.

When you're in the middle of an outage, the last thing you need is to try to piece together the context from scratch, trying to figure out which action was taken by an agent, which was a human decision, and what was the reason behind every choice taken.

To that end, we’ve redesigned the problem timeline to better distinguish between agent findings, human actions, and external events like pull requests and CI runs, as well as new commenting features like threading.

Interfere aims to be the centralized place where agents and humans collaborate together, especially during urgent issues like an outage. We're actively shaping the roadmap around how teams actually use Interfere during incidents, and we want your input. What's still missing? What would make the problem timeline more useful for your team? Where are the gaps between what Interfere surfaces and what you need to make a fast decision? Let us know!

[![Luke Shiels](https://ojlajfkioceqxno6.public.blob.vercel-storage.com/marketing-site/homepage/luke.avif)\\ \\ Luke Shiels\\ \\ Founder, CEO](https://x.com/lukeshiels) [![Jakub Krehel](https://ojlajfkioceqxno6.public.blob.vercel-storage.com/marketing-site/homepage/jakub.avif)\\ \\ Jakub Krehel\\ \\ Founding Design Engineer](https://x.com/jakubkrehel)

[**OAuth applications & scoped API keys**](https://interfere.com/changelog/oauth-integrations)

[![Phillip Snyder](https://ojlajfkioceqxno6.public.blob.vercel-storage.com/marketing-site/homepage/phillip.avif)\\ \\ Phillip Snyder\\ \\ Founding Full-Stack Engineer](https://x.com/PhilipSnyder)

[![oauth](https://interfere.com/cdn-cgi/image/width=2640,quality=80,format=auto/https://ojlajfkioceqxno6.public.blob.vercel-storage.com/cms-production/oauth-light.png)![oauth](https://interfere.com/cdn-cgi/image/width=2640,quality=80,format=auto/https://ojlajfkioceqxno6.public.blob.vercel-storage.com/cms-production/oauth-dark.png)](https://interfere.com/changelog/oauth-integrations)

We've always known that the most powerful version of Interfere isn't one that just works _for_ you. It's one that works _with_ everything else you've already built. and so today, we're opening up a piece of that vision: **developers can now create OAuth applications and generate API keys with granular scopes on Interfere.**

# Getting Started

The API is currently in private beta. We're working closely with early partners to refine the developer experience and make sure the endpoints, documentation, and tooling are solid before we open the doors more widely.

If you're interested in building on top of Interfere - whether it's a lightweight internal integration or something more ambitious, we'd love to hear from you. Reach out to us on Slack or shoot us an email and we'll get you set up.

We're just getting started with the platform side of Interfere, and the API is a foundational piece of where we're headed. More to share soon.

[![Phillip Snyder](https://ojlajfkioceqxno6.public.blob.vercel-storage.com/marketing-site/homepage/phillip.avif)\\ \\ Phillip Snyder\\ \\ Founding Full-Stack Engineer](https://x.com/PhilipSnyder)

[**We're in review to be certified as SOC 2 Type II compliant**](https://interfere.com/changelog/soc-2-observation-period)

[![Luke Shiels](https://ojlajfkioceqxno6.public.blob.vercel-storage.com/marketing-site/homepage/luke.avif)\\ \\ Luke Shiels\\ \\ Founder, CEO](https://x.com/lukeshiels)

[![soc-2](https://interfere.com/cdn-cgi/image/width=2640,quality=80,format=auto/https://ojlajfkioceqxno6.public.blob.vercel-storage.com/cms-production/soc-2-light.png)![soc-2](https://interfere.com/cdn-cgi/image/width=2640,quality=80,format=auto/https://ojlajfkioceqxno6.public.blob.vercel-storage.com/cms-production/soc-2-dark.png)](https://interfere.com/changelog/soc-2-observation-period)

We’re excited to share a major milestone in Interfere’s security and compliance journey: **Interfere is officially in its SOC 2 Type II observation period 🎉**, between now and March 2026.

This marks an important step forward in our ongoing commitment to protecting customer data and operating with transparency, reliability, and trust.

We're not stopping here - as many of you operate globally, GDPR and ISO 27001 compliance is next on our roadmap. We’re continuing the work required to meet European data protection requirements, with a focus on:

- Data minimization and purpose limitation
- User rights and transparency
- Strong technical and organizational safeguards

Security is foundational to everything we build at Interfere. You can track our compliance status and security posture anytime on our [Trust Center](https://trust.interfere.com)

[![Luke Shiels](https://ojlajfkioceqxno6.public.blob.vercel-storage.com/marketing-site/homepage/luke.avif)\\ \\ Luke Shiels\\ \\ Founder, CEO](https://x.com/lukeshiels)