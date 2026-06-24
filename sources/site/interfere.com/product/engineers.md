# Source: https://interfere.com/product/engineers

Interfere for Engineers

# More time building, less time fixing.

Stop correlating logs and bug reports across scattered tools. Interfere finds the root cause and owns the fix.

[Join waitlist](https://interfere.com/auth/waitlist) [Request a demo](https://interfere.com/contact-sales)

Source code

Code

Latest release

Release

Events

Logs

Users

Deployment

Sessions

Findings

Facts

Suggested fix

Trusted and funded by

## From signal to resolution

Interfere automatically connects the signals surrounding a problem—from affected users and sessions to deployments, pull requests, and code changes—so engineers can focus on fixing issues instead of gathering context.

- Understand the root cause

Interfere analyzes errors, traces, sessions, and deployments to identify the signals most likely to explain a problem. Spend less time searching and more time solving.

- Connect problems to code

- Resolve with confidence

Inbox

#118 Broken password reset link

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

#134

JK

New user onboarding completion falls

A recent change introduces friction in the signup flow, causing users to abandon onboarding before activation.

High

332

#127

PF

API requests return stale data

A caching configuration change causes users to receive outdated responses.

High

1,270

#114

LS

Session creation fails for new users

An unexpected error prevents successful account creation after signup.

Medium

78

#98

PS

Subscription upgrades fail

Customers attempting to upgrade their plan encounter an error during checkout and remain on their current subscription.

High

332

#134

JK

New user onboarding completion falls

A recent change introduces friction in the signup flow, causing users to abandon onboarding before activation.

High

332

#127

PF

API requests return stale data

A caching configuration change causes users to receive outdated responses.

High

1,270

#114

LS

Session creation fails for new users

An unexpected error prevents successful account creation after signup.

Medium

78

#98

PS

Subscription upgrades fail

Customers attempting to upgrade their plan encounter an error during checkout and remain on their current subscription.

High

332

## Interfere is built by engineers, for engineers.

Sessions

See a list of sessions impacted by the problem, with every detail you need.

Collaborate with your team

Comment and reply on problems directly in Interfere, Slack, or Teams.

Code connection

Interfere is safely connected to your code to understand your product, and link each problem to a previous release.

Evidence

Each problem comes with a list of evidence that helps you understand the root cause of the problem.

Facts and findings

Interfere automatically surfaces facts and findings that helped it understand the problem.
