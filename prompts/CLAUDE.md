1. Core Operating Principles
Always Do First
Invoke the frontend-design skill before writing any code, every session, no exceptions.

Behavior & Execution Rules

Precise Execution: You are a precise executor. Do not act as a creative or strategic collaborator. Do not "improve" or reinterpret a design. Match it exactly.

Efficiency Constraint: Do not change, delete, or rewrite any existing text content. The copy is final. To conserve processing resources, only output the specific CSS blocks or structural HTML modifications required. Do not regenerate entire files unnecessarily.

File Integrity: Never modify an existing file unless explicitly instructed.

No Assumptions: Never assume missing information. Always ask before proceeding if something is unclear. Only raise concerns if a request is technically impossible.

2. Positioning & Aesthetics
Brand Identity

moneta is the operating system for cloud reseller billing and financial infrastructure for AWS and Azure resellers.

It is NOT a generic SaaS dashboard, generic billing tool, or marketing-heavy website.

Target Audience: CEOs and operators at AWS/Azure resellers focused on margins, pricing, and scalability.

Visual System

Vibe: Premium fintech infrastructure, technical, structured, calm, high-end, and sharp. Infrastructure-first, not SaaS-template-first.

Colors: * Blue: System, infrastructure, active logic.

Red: Margin loss, leakage, consequence.

Gray: Inactive, broken, unsupported, neutral system state.

Typography: Primary sans-serif (Inter, Roboto, or system UI). Monospace (JetBrains Mono, Fira Code, etc.) for data points, financial figures, or code to reinforce the technical OS feel. Maintain a strict H1-H6 scaling system.

Depth & Craft: * Surfaces must follow a layering system (base > elevated > floating).

Never use flat single-layer shadows. Use layered, color-tinted shadows with low opacity.

Layer multiple radial gradients for depth. Add grain/texture via SVG noise filter for richness.

Images: Add a gradient overlay and color treatment layer using mix-blend-multiply for visual cohesion.

3. Architecture & Code Quality
Project Structure
Use a simple, minimal DOM structure. All development occurs inside monetaCodex/ using strictly one CSS file (css/styles.css) and one JS file (js/main.js).

Coding Standards

No inline styles. Use reusable classes and CSS custom properties (variables) for colors, spacing, shadows, radii, and typography.

Add clear, descriptive comments explaining sections.

Animations: Only animate transform and opacity. Never use transition-all. Keep transitions fast and snappy (150ms to 300ms). Use JS only for complex orchestrations (like modal opening).

Avoid unnecessary libraries unless explicitly requested.

CSS Organization Structure
Use the following block comments in styles.css:

Design Tokens

Reset / Base

Layout

Navigation

Hero

Sections

Components

Modal

Responsive

4. Responsive & Accessibility (a11y)
Breakpoints (Desktop-First Approach)
Design and build for desktop primarily, ensuring mobile/tablet functionality.

Mobile: < 768px

Tablet: 768px to 1023px

Desktop: 1024px to 1279px

Large Display: 1280px+

Accessibility Standards

Semantic HTML: Use proper HTML5 landmarks.

Focus States: Every interactive element MUST have a visible, premium focus state (e.g., a solid blue ring) for keyboard navigation. No default browser outlines.

Interactive States: Every clickable element must have hover, focus-visible, and active states defined. Disabled states should use 50% opacity and cursor: not-allowed.

Alt Text & ARIA: Descriptive alt attributes for images. ARIA labels for modal dialogs and mobile nav toggles.

Motion: Wrap animations in @media (prefers-reduced-motion: reduce).

5. Content Requirements
Strict Copy Rules

Use ONLY the text provided in the content/ folder. Do not write, invent, paraphrase, or infer copy.

No placeholder text (e.g., "Lorem ipsum") under any circumstances.

If content is missing, insert: `` and leave the section empty.

6. Component Specifications
Navigation Bar

Left: Brand lockup (moneta wordmark + cloud logo).

Center: Navigation tabs (Platform, Cloud FinOps, Why moneta).

Right: "Book a Demo" CTA button.

Behavior: Calm, structured, responsive. Use a clean collapsed menu on mobile.

Demo Modal

Triggered by both the Nav CTA and the Hero CTA ("See your margin gaps"). One shared modal implementation controlled by js/main.js.

Behavior: Overlay above a dimmed background. Closes via 'X' button, clicking outside, or Escape key.

Fields: First name, Last name, Business email, Phone number, Company, Title, Message box.

Hero Section

Must copy the visual direction of assets/monetaHeroAnchor.png as closely as possible (layout, spacing, typography hierarchy, dark background, system graphic).

Do not simplify away the operating-system feeling or introduce generic illustrations.

7. Workflow & QA
Local Server & Screenshots

Always capture screenshots from the active local server at http://127.0.0.1:5500/. Never screenshot a file:/// URL.

Do not consider a task complete without screenshotting the result via Puppeteer.

Puppeteer is installed in ./node_modules/puppeteer. Chrome cache is at C:/Users/Karso/.cache/puppeteer/.

Node.js is located at C:/Program Files/Microsoft Visual Studio/2022/Community/MSBuild/Microsoft/VisualStudio/NodeJs/node.exe (use this full path if node is not on your PATH).

Screenshot Command: node screenshot.mjs http://127.0.0.1:5500/

Read the resulting PNG from the temporary screenshots/ folder to verify spacing, typography, colors, and layout against the reference. Iterate until the result is exact.