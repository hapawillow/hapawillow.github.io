# Personal portfolio: content and image guide

The page lives at `personal-portfolio/index.html`. Styles live at `personal-portfolio/portfolio.css`; slideshow behavior lives at `personal-portfolio/portfolio.js`; images live at `personal-portfolio/assets/`. It is a standalone, buildless GitHub Pages page. The homepage has no link to it, and the sitemap has not been changed. Its intended address is `https://hapawillow.com/personal-portfolio/` (the repository's existing CNAME uses `www.hapawillow.com`, so the hosting configuration may redirect to that hostname).

This file is an authoring guide, not page copy. No “coming soon” image boxes or requests for more content are shown to visitors. The page is usable now; the additions below would make the technical evidence stronger.

## What to add first

1. **The Notifier:** two paragraphs explaining an actual request through the system, your ownership, and one engineering tradeoff. A sanitized architecture diagram would be the most useful new image.
2. **WooCommerce:** one or two paragraphs and a short screenshot sequence demonstrating a variant-specific back-in-stock alert.
3. **Senshin:** two paragraphs about the app's interaction architecture, local data, subscriptions, and cloud services. Confirm the current release status.
4. **Results:** add one concrete, supportable result for each lead project where available. A shipped integration or working platform is useful evidence even without revenue or usage metrics. Do not invent numbers.

## How to supply updates

Write your draft directly under the matching project heading in this guide, or replace the matching section in `personal-portfolio/index.html`. HTML sections have stable IDs, shown below. Put new images in `personal-portfolio/assets/` with the suggested filenames. Merely placing a new image in the folder will not display it; its `<img>` reference and alt text must also be added to the matching HTML section.

For prose, aim for **70–110 words per paragraph**. Prefer: the problem, what you personally implemented, a difficult decision, and what worked. Separate personal work from collaborators' work. Identify prototypes and planned architecture explicitly. Screenshots should show test data, omit credentials and customer information, and be readable at roughly 600 px wide. WebP or PNG is ideal; use an SVG for a simple architecture diagram if possible.

## The Notifier

- **Update:** `personal-portfolio/index.html`, section `id="the-notifier"`.
- **Write:** two paragraphs, about 160–220 words total.
  - Paragraph 1: follow a single alert from the SvelteKit dashboard or API through authentication, organization/group lookup, persistence, scheduling, and push delivery. Explain which of Workers, Containers, KV, D1, R2, and PostgreSQL participate in that path, and why. Avoid implying every tool is in the same request path.
  - Paragraph 2: identify what you personally built versus the other engineer. Give one specific tradeoff or problem: native notification behavior, retries, duplicated sends, organization boundaries, SQLite synchronization, or scheduling. Describe the actual solution and any verified result.
- **Image:** `personal-portfolio/assets/notifier-architecture.svg` (or `.webp`), about 1600 × 1000 px. Show dashboard/API, authentication, organization boundary, services, databases, scheduler, push service, and mobile client. Label a few arrows with the data or event passed. Include only implemented pieces, or label planned ones.
- **Existing images:** `notifier-slide-4.webp`, `notifier-slide-5.webp`, and `notifier-slide-6.webp`, copied from your supplied Portfolio images / the notifier folder. The slideshow follows dashboard → lock-screen notification → opened alert, with persistent Previous/Next buttons, a counter, touch scrolling, and keyboard navigation.
- **Optional screenshot replacement:** a current, full-width dashboard with safe demo data, 1400–1800 px wide. The current slideshow already uses one matching Builders Expo demo scenario.
- **Confirm:** API/sandbox release status, the two engineers' contributions, and how Stripe and Containers are used today. The reference chat and the public developer page disagreed on availability, so the portfolio makes no claim that the public API is generally available.

**Your draft:**

<!-- Add two paragraphs here. -->

## WordPress / WooCommerce integration

- **Update:** `personal-portfolio/index.html`, section `id="woocommerce"`.
- **Write:** one or two paragraphs, about 100–180 words total. Describe manual storewide alerts separately from per-variant stock alerts. Explain the actual WooCommerce hook or trigger, how a variant maps to a Notifier group, how authentication works, and how duplicate alerts or failed requests are handled if those mechanisms exist. State whether this is a private integration, a released plugin, or awaiting distribution.
- **Images:** `personal-portfolio/assets/woocommerce-variant.webp` and `personal-portfolio/assets/woocommerce-alert.webp`. Use a test product with two or three variants: show the relevant stock or plugin setting, then the resulting phone notification. Desktop: at least 1200 px wide. Phone: at least 600 px wide. A third image, `woocommerce-settings.webp`, could show plugin setup with API keys masked.
- **Optional:** a 10–20 second silent screen recording with captions, saved as `woocommerce-demo.mp4`, showing stock change → alert. A static screenshot sequence is sufficient.
- **Confirm:** which alerts are automatic, publication status, and any real usage before adding adoption claims. The current flow graphic illustrates the basic integration; it is not a deployment diagram.

**Your draft:**

<!-- Add one or two paragraphs here. -->

## Senshin

- **Update:** `personal-portfolio/index.html`, section `id="senshin"`.
- **Write:** two paragraphs, about 160–220 words total.
  - Paragraph 1: how activities/modules are structured and how audio, visuals, haptics, timing, and session controls work together. Name one interaction you implemented and one difficult mobile behavior you solved.
  - Paragraph 2: what SQLite stores, what Workers/D1/R2 serve, how RevenueCat entitlements work, and how you deliver localized content or new modules. Describe offline behavior only if implemented. Clarify iPhone release status and whether Android is actively supported or only a codebase target.
- **Existing images:** `senshin-enigma.webp` and `senshin-dashboard.webp` show the real English-language app screens.
- **Useful new image:** `personal-portfolio/assets/senshin-modules.svg`, about 1400 × 900 px. Show the app shell, activity/module boundary, local storage, cloud content, and subscription check. Keep it explanatory rather than a list of libraries.
- **Optional visual:** `senshin-interaction.mp4`, a 10–15 second recording of an interaction with captions explaining the audio/haptic behavior. Provide a static poster image, `senshin-interaction-poster.webp`. Static images cannot demonstrate sound or haptics.
- **Confirm:** the public site said “Coming to iPhone” when reviewed on November 8, 2026. Update or remove that note when the product launches. Its current public website describes one-minute activities, four categories, and five languages; the page does not make health or treatment claims.

**Your draft:**

<!-- Add two paragraphs here. -->

## FinLit IQ

- **Update:** `personal-portfolio/index.html`, section `id="finlit-iq"`.
- **Write:** two paragraphs, about 150–200 words total. Explain your personally implemented pieces, how the content workflow used agents, where human review entered the flow, and why Neon plus Turso were chosen. Clearly separate the beta, prototypes, and architecture that remained planned. Include a concrete example of content moving into an app lesson.
- **Existing image:** `personal-portfolio/assets/finlit-architecture.webp`, optimized from your supplied architecture PNG. It is explicitly labeled as a planning artifact.
- **Useful new image:** `personal-portfolio/assets/finlit-lesson.webp`, a 600–900 px wide mobile lesson screen with demo data. Alternatively, supply `finlit-content-workflow.svg` showing the implemented editorial/agent workflow.
- **Confirm:** which parts of the diagram shipped. Pitch-deck fundraising, projected revenue, and market claims have not been carried into the portfolio.

**Your draft:**

<!-- Add two paragraphs here. -->

## Yez

- **Update:** `personal-portfolio/index.html`, section `id="yez"`.
- **Write:** one or two paragraphs, about 100–160 words total. Identify your personal implementation work. Walk through an invoice/payment or escrow flow and explain the boundaries between Lambda, DynamoDB, email, and Stellar. Identify whether the escrow and dispute flows were production, prototypes, or designs.
- **Image:** `personal-portfolio/assets/yez-payment-flow.svg`, about 1400 × 900 px. A simplified diagram derived from the supplied flow documents is preferable to publishing the entire dense original. Show the payer, payee, API, escrow state, and ledger with no private identifiers.
- **Current wording:** describes project scope and stack without claiming transaction volume, settlement guarantees, or specific personal ownership that the supplied material does not establish.

**Your draft:**

<!-- Add one or two paragraphs here. -->

## Givful

- **Update:** `personal-portfolio/index.html`, section `id="givful"`.
- **Write:** one paragraph, about 90–130 words. Specify your role in the registration, reminder, donation authorization, Stripe, Twilio, OAuth, or reporting work. Describe one payment failure or state-management issue you solved, if applicable.
- **Image:** `personal-portfolio/assets/givful-donation.webp`, a 600–900 px wide test donation flow. Your supplied 2017 simulator screenshots can work if the visible names and contact/payment data are appropriate for publication. Do not publish the private slide decks themselves.

**Your draft:**

<!-- Add one paragraph here. -->

## Dnote Mobile

- **Update:** `personal-portfolio/index.html`, section `id="dnote"`.
- **Write:** one or two paragraphs, about 100–170 words. Name your direct contributions rather than the team's entire output. Explain one transaction from request through PIN authorization to the ledger/reporting system. Describe the API/authentication or mobile client work you personally implemented.
- **Image:** `personal-portfolio/assets/dnote-system.svg`, about 1400 × 900 px, a simplified public-safe version of the supplied system overview; or `dnote-payment.webp`, a screenshot sequence with test payment data.
- **Current wording:** does not repeat historical pricing, security superlatives, customer names, fundraising information, or transaction volume from the decks.

**Your draft:**

<!-- Add one or two paragraphs here. -->

## TuneGO Dashboard

- **Update:** `personal-portfolio/index.html`, section `id="tunego-dashboard"`.
- **Write:** one paragraph, about 90–130 words. Explain which metrics/data pipeline and visualizations you built, why the reporting database was isolated, and one data-quality, performance, or authentication decision.
- **Image:** `personal-portfolio/assets/tunego-dashboard.webp`, a 1400–1800 px wide screenshot with synthetic or redacted financial data. The supplied revenue screenshot was reviewed but deliberately not copied into the public page because it contains business financial figures. Supply an approved version before adding it.
- **Current evidence:** the repository README documents ten-minute refreshes, pushed reporting data, Turso, SvelteKit, Lucia, Loops, and ApexCharts. These are described as historical project choices.

**Your draft:**

<!-- Add one paragraph here. -->

## Tiki Totems

- **Update:** `personal-portfolio/index.html`, section `id="tiki-totems"`.
- **Write:** one paragraph, about 80–120 words. Clarify which generator code you wrote or extended, versus upstream code, and what you implemented for trait inventory, uniqueness, rarity reporting, storage, and minting. The README references an upstream generator, so original authorship of the whole generator should not be implied without clarification.
- **Image:** `personal-portfolio/assets/tiki-generator.webp`, about 1400 × 900 px, showing 6–12 generated pieces alongside a small trait/rarity table. A crop of the supplied browser-site screenshot can also work if it shows the generator's output clearly.

**Your draft:**

<!-- Add one paragraph here. -->

## APM Collectibles / TuneGO

- **Update:** `personal-portfolio/index.html`, section `id="apm-collectibles"`.
- **Write:** one paragraph, about 80–120 words. Explain your implementation role, the CSV-to-overlay-to-GIF pipeline, and a practical issue such as long track-title wrapping, asset consistency, batch generation, or animation handling. Distinguish the generator's work from the wider Flow-based product.
- **Image:** `personal-portfolio/assets/apm-generator.webp`, about 1400 × 900 px, showing a safe sample CSV row and its rendered collectible. An approved animated example, `apm-example.gif`, could sit alongside it; keep it small and add a static equivalent if animation is used.
- **Confirm:** any rights restrictions on artist names, music artwork, or collectible assets before selecting a public example.

**Your draft:**

<!-- Add one paragraph here. -->

## Contact and positioning

- **Update:** `personal-portfolio/index.html`, sections `id="main"`, `id="about"`, and `id="contact"`.
- The contact email is taken from the supplied resume. The phone number and resume PDF are not published. Change the two project-inquiry mail links and the visible contact address together if you prefer a business email.
- Optional: provide **one sentence** with preferred engagement size/hours, remote or onsite preferences, or a specific type of client. None has been invented.
- Optional: provide a public LinkedIn or GitHub profile URL. No profile has been guessed.
- The reference conversation was used for positioning, not as proof of pricing, market demand, product availability, performance, or vendor claims.

## Preview and release

From the repository root, run `python3 -m http.server 8765 --bind 127.0.0.1`, then visit `http://127.0.0.1:8765/personal-portfolio/`. No package install or build is required. Stop the server with Ctrl-C when finished.

Publishing uses the repository's existing GitHub Pages workflow: deploy the `personal-portfolio/` directory with its assets alongside the existing homepage. This change does not introduce a separate hosting service, analytics, or a backend. The local implementation has not been pushed or deployed.

An unlinked URL is still a public page after deployment; it is not access-controlled. Search indexing follows the site's existing policy. No `noindex` directive has been added because the request specified no homepage navigation, rather than search exclusion.
