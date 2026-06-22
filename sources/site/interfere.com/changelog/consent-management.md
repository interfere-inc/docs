# Source: https://interfere.com/changelog/consent-management

### Introducing Consent Management

![consent](https://interfere.com/cdn-cgi/image/width=2640,quality=80,format=auto/https://ojlajfkioceqxno6.public.blob.vercel-storage.com/cms-production/consent-light.png)![consent](https://interfere.com/cdn-cgi/image/width=2640,quality=80,format=auto/https://ojlajfkioceqxno6.public.blob.vercel-storage.com/cms-production/consent-dark.png)

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