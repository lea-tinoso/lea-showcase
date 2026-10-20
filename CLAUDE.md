# CLAUDE.md

Guidance for Claude Code (and other agents) working on Lea Tinoso's portfolio.

## What this site is for

A portfolio that shows **how Lea thinks and works** as a software engineer building with Claude Code, not just a list of tools. Every section should show process: the problem, the decision, what was done, the result.

**Audience:** engineering hiring managers and recruiters for senior full-stack and AI-tooling roles.

## Content rules

- Facts come only from Lea's resume or things Lea says in conversation. Never invent projects, numbers, quotes, logos or testimonials.
- Lea is a Senior Full-Stack Engineer (currently Pod Lead at Anervea.ai). Do **not** frame her as moving into developer relations.
- Do not mention nationality.
- Do not publish her email address or phone number unless she asks.
- Links: LinkedIn `https://www.linkedin.com/in/lealynltinoso/`, GitHub `https://github.com/lea-tinoso`.
- Copy is plain and direct, first person, short sentences. No buzzwords.

## Design rules

- Style is **neo-brutalism** (the Gumroad look): thick black outlines, flat bright colours, hard offset shadows, no gradients.
- Palette tokens live in `:root` in `index.html`: paper, ink, pink, sun (yellow), mint (teal). Add colours as tokens, never as literals in component rules.
- One typeface: Bricolage Grotesque (Google Fonts).
- Hero: the name split around the cartoon portrait, with an Instagram-style note bubble for the current side quest. Keep the cartoon as inline SVG.
- Light and dark themes must both work. The page must work at 390px wide with no horizontal scroll.
- Design references: [taste-skill](https://github.com/lea-tinoso/taste-skill) for art direction and its page checks, [awesome-design-md](https://github.com/lea-tinoso/awesome-design-md) for design-system examples.

## How to work

1. **Plan first.** For anything bigger than a copy tweak, propose a short plan before editing.
2. **Keep it static.** One `index.html`, no build step, unless Lea decides otherwise.
3. **Verify before the PR.** Screenshot the page at desktop (1440px) and phone (390px) widths and check it in both themes. Run taste-skill's `inspect.mjs` when layout changes.
4. **Ship through a PR.** Never push to `main` directly. Vercel deploys `main` on merge and gives each PR a preview link.
