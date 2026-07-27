# Source: https://interfere.com/

# Ship software that never breaks

## Interfere empowers engineers, product managers and designers with real-time understanding of previously unseen bugs and issues.

[Join waitlist](https://interfere.com/auth/waitlist) [Request a demo](https://interfere.com/contact-sales)

Inbox

Broken Password Reset Link

LS

PF

JK

PS

Subscribed

#120

### Broken password reset link

Users are unable to complete password resets after clicking reset links generated in production.

Title

Broken password reset link

Priority

High

Assignee

LS

Luke Shiels

Status

Active

Surface

Website Frontend

iOS App

Regression

Yes

First detection

36 minutes ago

Latest detection

Just now

Duration

36 min 47 s

Evidence

146 evidence

Impacted Users

12,881

Activity

Sessions

Evidence

Problem detected

·

4 min ago

Interfere detected a surge in failed password reset attempts. Users are clicking reset links but failing to complete the flow.

Status updated to Investigating…

·

4 min ago

Finding

·

3 min ago

A recent change in auth/reset.ts may cause invalid token validation.

auth/reset.ts

Open

7export function buildResetLink(userId: string) {

8 const token = sign<ResetTokenPayload\>({ uid: userId });

9 

10

const baseUrl = "https://staging.example.com";

11

const baseUrl = "https://example.com/reset-password";

12 

13 const path = "/reset-password";

14 const url = new URL(path, baseUrl);

15 url.searchParams.set("token", token);

Fact

·

3 min ago

Error rate increased from 0.2% to 12% within 6 minutes after deployment.

LS

Assigned to Luke Shiels

·

3 min ago

Priority set to High

·

3 min ago

Status updated to Active

·

3 min ago

JK

Jakub Krehel commented·2h ago

Looks related to yesterday’s auth refactor. Investigating token validation.

Suggesting a fix...

The reset link points to a route that no longer exists after the latest deployment. Users are redirected to a generic error page instead of the password reset form.

Trusted and funded by

## Interfere finds01issues in your app, understands02what's happening, and owns resolution03from first signal to production.

## Interfere finds01issues in your app, understands02what's happening, and owns resolution03from first signal to production.

Reset PasswordReset Password Link

01

### Learn about issues before your customers do

Interfere continuously monitors your app and notices when behavior or outcomes change, before errors escalate or users report issues.

#112

Reset password flow issue

Investigating...

Medium priority

02

### Understand what's going wrong

Interfere goes beyond logs, metrics, and traces. It finds the root cause and explains what’s broken, why, and who it impacts.

7export function buildResetLink(userId: string) {

8 const token = sign<ResetTokenPayload\>({ uid: userId });

9 

10

const baseUrl = "https://acme.com/auth";

10

const baseUrl = "https://staging.acme.com/auth";

11 const path = "/reset-password";

12

13 const url = new URL(path, baseUrl);

14 url.searchParams.set("token", token);

15

16 return url.toString();

17}

18 

19export function buildResetEmail(userId: string) {

20 const resetLink = buildResetLink(userId);

21 return \`

22 Hi there,

23 

24 Click the link below to reset your password:

25 ${resetLink}

26 

27 If you didn't request this, you can ignore this email.

28 \`.trim();

29}

03

### Fix problems with confidence

Interfere turns insight into action by suggesting fixes, linking them to your codebase, and tracking progress until resolved. You're always in control.

> “Every hour spent chasing bugs is time away from building features that users actually want. Interfere gives your team time to focus on what actually matters.”

[![Dylan Babbs](https://ojlajfkioceqxno6.public.blob.vercel-storage.com/marketing-site/homepage/dylan.png)![Profound](https://ojlajfkioceqxno6.public.blob.vercel-storage.com/marketing-site/homepage/profound.png)\\ \\ Dylan Babbs\\ \\ CTO of Profound](https://x.com/dbabbs)

01

### Learn about issues before your customers do

Interfere continuously monitors your app and notices when behavior or outcomes change, before errors escalate or users report issues.

Full-stack understanding

User Tracking

Logging & Alerting

Session Replays

Predictive Analysis

Release Tracking

Inbox

Under Investigation

2

#87

PF

Users unable to export billing invoices

High

1,521

Reasoning

#65

JK

Payments failing for users in Brazil

Low

340

Reasoning

Active

3

#120

JK

Broken password reset link

High

2,122

#108

PS

Onboarding emails not being delivered

Medium

870

#95

PF

Search results showing wrong products

Low

109

In Recovery

3

#74

LS

Team invite links expiring too soon

Medium

1,120

#61

JK

Dashboard charts blank for new accounts

Low

891

02

### Understand what's going wrong

Interfere goes beyond logs, metrics, and traces. It finds the root cause and explains what’s broken, why, and who it impacts.

Zero-touch triage

Prioritization

User Impact

Team Routing

Root Cause Analysis

Inbox

#120

#120

### Broken password reset link

Users are unable to complete password resets after clicking reset links generated in production.

Title

Broken password reset link

Priority

High

Assignee

LS

Luke Shiels

Status

Active

Surface

Website Frontend

iOS App

Regression

Yes

First detection

36 minutes ago

Latest detection

Just now

Duration

36 min 47 s

Evidence

146 evidence

Impacted Users

12,881

Activity

Sessions

Evidence

Problem detected

·

4 min ago

Interfere detected a surge in failed password reset attempts. Users are clicking reset links but failing to complete the flow.

Status updated to Investigating…

·

4 min ago

Finding

·

3 min ago

A recent change in auth/reset.ts may cause invalid token validation.

auth/reset.ts

Open

7export function buildResetLink(userId: string) {

8 const token = sign<ResetTokenPayload\>({ uid: userId });

9 

10

const baseUrl = "https://staging.example.com";

11

const baseUrl = "https://example.com/reset-password";

12 

13 const path = "/reset-password";

14 const url = new URL(path, baseUrl);

15 url.searchParams.set("token", token);

Fact

·

3 min ago

Error rate increased from 0.2% to 12% within 6 minutes after deployment.

LS

Assigned to Luke Shiels

·

3 min ago

Priority set to High

·

3 min ago

Status updated to Active

·

3 min ago

JK

Jakub Krehel commented·2h ago

Looks related to yesterday’s auth refactor. Investigating token validation.

Suggesting a fix...

The reset link points to a route that no longer exists after the latest deployment. Users are redirected to a generic error page instead of the password reset form.

03

### Fix problems with confidence

Interfere turns insight into action by suggesting fixes, linking them to your codebase, and tracking progress until resolved. You're always in control.

Built for speed & teams of any size

Multiplayer Collaboration

SAML/OIDC SSO

Offline-first Architecture

SCIM Provisioning

Custom Roles & Permissions

Domain Whitelisting

Inbox

#120

Activity

Sessions

Evidence

Problem detected

·

4 min ago

Interfere detected a surge in failed password reset attempts. Users are clicking reset links but failing to complete the flow.

Status updated to Investigating…

·

4 min ago

Finding

·

3 min ago

A recent change in auth/reset.ts may cause invalid token validation.

auth/reset.ts

Open

7export function buildResetLink(userId: string) {

8 const token = sign<ResetTokenPayload\>({ uid: userId });

9 

10

const baseUrl = "https://staging.example.com";

11

const baseUrl = "https://example.com/reset-password";

12 

13 const path = "/reset-password";

14 const url = new URL(path, baseUrl);

15 url.searchParams.set("token", token);

Fact

·

3 min ago

Error rate increased from 0.2% to 12% within 6 minutes after deployment.

LS

Assigned to Luke Shiels

·

3 min ago

Priority set to High

·

3 min ago

Status updated to Active

·

3 min ago

JK

Jakub Krehel commented·2h ago

Looks related to yesterday’s auth refactor. Investigating token validation.

Suggesting a fix...

The reset link points to a route that no longer exists after the latest deployment. Users are redirected to a generic error page instead of the password reset form.

Security

### Secure by design.

Safe by default.

SOC 2 Type II

We’re in our SOC 2 observation period, with estimated completion in Q2 2026.

GDPR & ISO 27001

We’re working on compliance with GDPR and ISO 27001, with additional auditing available upon request.

Changelog

### The Latest

[MAR 12, 2026\\ \\ Introducing Consent Management\\ \\ We've added consent gating to our SDKs, giving you full control over which features activate based on your users' consent preferences, with native support for all modern consent platforms: c15t, CookieYes, OneTrust, or your own.](https://interfere.com/changelog/consent-management) [FEB 11, 2026\\ \\ Timeline Improvements\\ \\ We’ve redesigned the problem timeline to better distinguish between agent findings, human actions, and external events like pull requests and CI runs, as well as new commenting features like threading.](https://interfere.com/changelog/timeline-improvements) [FEB 1, 2026\\ \\ OAuth applications & scoped API keys\\ \\ Today, we've launched support for developers to create custom OAuth applications and API keys with granular scopes on Interfere.](https://interfere.com/changelog/oauth-integrations)

[See all releases](https://interfere.com/changelog)

[See all releases](https://interfere.com/changelog)
