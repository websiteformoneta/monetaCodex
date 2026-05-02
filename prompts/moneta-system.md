# Moneta Codex System File

## Project Root

All development occurs inside the following root directory:

```txt
monetaCodex/
Folder Structure
Use a simple, Codex-friendly structure with one CSS file and one JavaScript file.

Plaintext
monetaCodex/
├── index.html
├── platform.html
├── finops-services.html
├── why-moneta.html
│
├── assets/
│   ├── AWS spot 2-transparent.png
│   ├── AWS spot 2.png
│   ├── Azure spot 3-transparent.png
│   ├── Azure spot 3.png
│   ├── beneathCTAstrip.png
│   ├── Cloud spot 1-transparent.png
│   ├── Cloud spot 1.png
│   ├── favicon.png
│   ├── moneta-logo.png
│   ├── monetaFooterExample.png
│   ├── monetaHeroAnchor.png
│   ├── Purpose built spot 4-transparent.png
│   ├── Purpose built spot 4.png
│   └── spot 4 only image.png
│
├── content/
│   ├── finops-services.md
│   ├── homepage.md
│   ├── platform.md
│   ├── TextForFinOpsService...
│   ├── TextForLandingPage-...
│   ├── TextForPlatformPage...
│   ├── TextForWhyMonetaP...
│   └── why-moneta.md
│
├── css/
│   └── styles.css
│
├── js/
│   └── main.js
│
└── prompts/
    └── moneta-system.md
Core Development Principles
1. Simplicity First
Use one CSS file: css/styles.css

Use one JavaScript file: js/main.js

Avoid over-engineering

Keep DOM structure clean and minimal

Prefer reusable classes over one-off styling

Avoid unnecessary libraries unless explicitly requested

2. Moneta Positioning
Moneta is:

The operating system for cloud reseller billing

Financial infrastructure for AWS and Azure resellers

A system for aligning billing, pricing, discounts, invoicing, and customer-level margins

Moneta is NOT:

A generic SaaS dashboard

A generic billing tool

A generic FinOps analytics UI

A marketing-heavy software website

3. Target Audience
The website is for:

CEOs at AWS and Azure resellers

Operators at cloud resellers / MSPs

Leaders responsible for margins, pricing, billing, cloud operations, and growth

Their priorities are:

Margin control

Pricing discipline

Accurate customer invoicing

Operational scalability

Clear customer-level profitability

New recurring revenue from Cloud FinOps services

4. Accessibility (a11y)
Semantic HTML: Use proper HTML5 landmarks (<header>, <nav>, <main>, <section>, <footer>).

Focus States: Every interactive element (links, buttons, form inputs) MUST have a clearly visible, premium focus state (e.g., a solid blue ring) for keyboard navigation. Do not use default browser outlines.

Alt Text: All images must include descriptive alt attributes. Decorative images should use alt="".

ARIA Attributes: Use ARIA labels where semantic HTML is insufficient, particularly for modal dialogs and mobile navigation toggles.

Motion: Respect user preferences by wrapping animations in @media (prefers-reduced-motion: reduce).

Visual System Rules
Overall Aesthetic
The Moneta site should feel like:

Premium fintech infrastructure

A cloud billing operating system

Technical, structured, and calm

High-end, credible, and sharp

Infrastructure-first, not SaaS-template-first

Color Logic
Use the following conceptual color system consistently:

Blue = system / infrastructure / active logic

Red = margin loss / leakage / consequence

Gray = inactive / broken / unsupported / neutral system state

Typography Rules
Primary Font: Use a clean, modern sans-serif (e.g., Inter, Roboto, or system UI fonts like -apple-system, BlinkMacSystemFont).

Monospace Font: Use a monospace font (e.g., JetBrains Mono, Fira Code, or SF Mono) for any data points, financial figures, or code snippets to reinforce the technical, operating-system feel.

Hierarchy: Maintain a strict scaling system for headings (H1 through H6) to ensure visual rhythm.

Responsive Breakpoints
Use the following standard breakpoints in the CSS:

Mobile: < 768px

Tablet: 768px to 1023px

Desktop: 1024px to 1279px

Large Display: 1280px+

Interactive States
Every interactive element must account for the following states:

Default: Clean, high-contrast.

Hover: Subtle brightness adjustment or slight transform (e.g., translateY(-1px)). No extreme color shifts.

Active / Pressed: Slight scale down or darkening to mimic physical press.

Focus: Sharp, high-contrast outline (do not remove focus outlines).

Disabled: Dimmed opacity (e.g., 50%) and cursor: not-allowed (specifically for the form Submit button if required fields are empty).

Design Style
Use:

Premium dark mode

High-contrast typography

Subtle gradients

Disciplined rounded corners

Minimal glassmorphism

Structured layouts

Strong spacing

Calm technical density

Clear hierarchy

Avoid:

Generic SaaS cards

Excessive icons

Busy diagrams

Decorative dashboards

Cartoon illustrations

Overly bright gradients

Marketing fluff

Alert-style UI everywhere

Excessive orange warning colors

Navigation Requirements
The site navigation must be implemented consistently across the website.

Navigation Layout
The navigation bar must include:

Left side brand lockup

moneta wordmark

moneta cloud logo

Displayed horizontally as one unified brand element

Center navigation tabs

Platform

Cloud FinOps

Why moneta

Right side CTA

Button label: Book a Demo

Positioned on the far right side of the nav

Styled as a premium CTA consistent with the Moneta dark infrastructure aesthetic

Navigation Behavior
The nav should feel calm, structured, and premium.

The center tabs should be visually balanced in the middle of the navigation bar.

The CTA must be clearly visible but not visually loud.

The nav must remain responsive on tablet and mobile.

On mobile, use a clean collapsed menu or stacked mobile-friendly layout.

Do not let the navigation feel crowded or generic.

Book a Demo Modal Requirements
Clicking the Book a Demo CTA must open a modal form in front of the current page.

Modal Behavior
The form appears as an overlay above the current page.

The background page should remain visible but dimmed.

The modal should use premium dark styling consistent with Moneta.

Include a close button.

Close the modal when:

the close button is clicked

the user clicks outside the modal panel

the Escape key is pressed

Modal Form Fields
The demo form must include the following fields:

First name

Last name

Business email

Phone number

Company

Title

Message box

Submit Button
Include a submit button below the message box.

Button label: Submit

The submit button should match the premium CTA style.

Form Requirements
Use semantic HTML form elements.

Use proper labels for accessibility.

Use appropriate input types:

email for business email

tel for phone number

textarea for the message box

Required fields:

first name

last name

business email

company

Do not connect to a backend yet unless explicitly requested.

For now, submit behavior may prevent default form submission and show a clean success state or console confirmation.

Hero Section Requirements
The Hero section must copy the visual direction of:

Plaintext
assets/monetaHeroAnchor.png
as closely as possible.

Hero Visual Fidelity
Codex must treat monetaHeroAnchor.png as the primary visual reference for the homepage Hero.

The implementation should match:

Overall layout

Spacing

Typography hierarchy

Premium dark background

System / infrastructure diagram feel

CTA button styling

CTA button shape, spacing, and visual treatment

Glassmorphic and gradient details

Calm technical density

Visual balance between copy and system graphic

Operating-system feeling

High-end fintech polish

Do not reinterpret the Hero into a generic SaaS layout.

Do not simplify away the operating-system / infrastructure feeling.

Do not introduce unrelated illustrations, icons, dashboards, or decorative graphics.

Hero CTA Behavior
The Hero CTA button must use the same format and styling logic shown in monetaHeroAnchor.png.

The Hero CTA button label is:

Plaintext
See your margin gaps
Clicking this Hero CTA must open the same Book a Demo modal form used by the navigation CTA.

There should be one shared modal implementation controlled by JavaScript, not duplicate modal code.

Both of these buttons must trigger the same modal:

Navigation CTA: Book a Demo

Hero CTA: See your margin gaps

Homepage Content Source of Truth
Use the approved homepage copy from content/homepage.md.

Primary homepage headline:

Plaintext
Cloud Reseller Billing That Eliminates Margin Loss
Homepage subheadline:

Plaintext
moneta is the billing infrastructure for AWS and Azure resellers, aligning cost, pricing, and discounts across every customer account to ensure accurate invoicing and full margin visibility.
Platform line:

Plaintext
Built for AWS and Azure resellers managing multiple customers.
Hero CTA:

Plaintext
See your margin gaps
Credibility line:

Plaintext
Trusted by AWS & Azure resellers managing $100M+ in annual cloud spend
Do not invent new positioning unless explicitly requested.

CSS Organization
All CSS belongs in:

Plaintext
css/styles.css
Use this structure inside styles.css:

CSS
/* ================================
   1. Design Tokens
================================ */

/* ================================
   2. Reset / Base
================================ */

/* ================================
   3. Layout
================================ */

/* ================================
   4. Navigation
================================ */

/* ================================
   5. Hero
================================ */

/* ================================
   6. Sections
================================ */

/* ================================
   7. Components
================================ */

/* ================================
   8. Modal
================================ */

/* ================================
   9. Responsive
================================ */
CSS Rules
No inline styles

Use reusable classes

Use consistent spacing

Use CSS custom properties for colors, spacing, shadows, radii, and typography

Keep selectors readable

Avoid unnecessary specificity

Keep responsive rules organized at the bottom

JavaScript Organization
All JavaScript belongs in:

Plaintext
js/main.js
Use this structure inside main.js:

JavaScript
// ================================
// Navigation
// ================================

// ================================
// Demo Modal
// ================================

// ================================
// Scroll Effects
// ================================

// ================================
// Micro Animations
// ================================
JavaScript Rules
Keep JS minimal and purposeful

No unnecessary frameworks

Use one shared modal trigger pattern

Any button with the proper demo-modal trigger attribute/class should open the same modal

Support Escape key close behavior

Keep accessibility in mind when opening and closing the modal

Animation Philosophy: Animations must feel like an operating system interface, not a marketing presentation. Use CSS transitions for state changes (hover, focus). Use JS only for complex orchestrations (like modal opening).

Easing: Use purposeful easing curves (e.g., ease-out for entering elements, ease-in for exiting).

Duration: Keep transitions fast and snappy (150ms to 300ms).

Performance & SEO Standards
HTML Header
Every page must include a descriptive <title>.

Every page must include a <meta name="description" content="...">.

Include standard Open Graph (OG) tags for social sharing.

Ensure the viewport meta tag is present: <meta name="viewport" content="width=device-width, initial-scale=1.0">.

Asset Loading
Images: Add loading="lazy" to all images below the fold. The Hero image must load eagerly.

Fonts: Use font-display: swap for any custom web fonts to prevent invisible text during loading.

CSS/JS: Load the CSS in the <head> and defer the JS by placing it at the bottom of the <body> or using the defer attribute.

Development Workflow
Build the website step by step.

Build Order
Navigation + Hero

Problem Section

Solution Section

Results Section

Cloud FinOps Section

Why Moneta Section

Final CTA

Supporting pages

Do not build all sections at once unless explicitly requested.

Prompting Rules for Codex
Every prompt should begin with:

Plaintext
Use moneta-system.md as the source of truth.
Structure every Codex prompt like this:

Plaintext
Objective

Context

Constraints

Task

Output Requirements
Always Include Constraints
No generic SaaS UI patterns

Keep layout structured

Maintain infrastructure / operating-system feel

Keep spacing disciplined

Use the approved content

Keep code clean and simple

Use one CSS file and one JS file

Code Quality Standards
No inline styles

Reusable classes only

Consistent spacing system

Minimal DOM nesting

Semantic HTML

Accessible form labels

Responsive layout

Clean, readable structure

Production-quality naming

Avoid placeholder copy unless explicitly asked

Final Rule
This is not a generic marketing site.

This is a product-level interface representing infrastructure.

Every design and code decision must reinforce that.
