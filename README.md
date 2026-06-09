# Frontend Mentor Challenges

Monorepo for Frontend Mentor challenge solutions. The root project is a navigation page, and each challenge lives in its own workspace package under `challenges/`.

## Stack

- React
- TypeScript
- Tailwind CSS
- CSS, if a challenge does not need Tailwind utilities
- Vite
- pnpm workspaces

## Structure

```text
apps/
  home/                     Root navigation app
challenges/
  qr-code-component/        First Frontend Mentor challenge
  social-links-profile/     Social links profile challenge
```

## Commands

```bash
pnpm install
pnpm dev
pnpm dev:qr
pnpm dev:social
pnpm typecheck
pnpm build
pnpm preview
```

`pnpm build` creates one deployable `dist/` folder:

- `/` serves the challenge navigation page.
- `/challenges/qr-code-component/` serves the QR code component challenge.
- `/challenges/social-links-profile/` serves the social links profile challenge.

## Adding A Challenge

Create a new folder under `challenges/<challenge-name>` with the same files used by `challenges/qr-code-component`:

- `package.json`
- `index.html`
- `tsconfig.json`
- `vite.config.ts`
- `src/main.tsx`
- `src/styles.css`

Set the challenge Vite `base` to `/challenges/<challenge-name>/` and its `build.outDir` to `../../dist/challenges/<challenge-name>`. Add the new challenge to the `challenges` array in `apps/home/src/main.tsx`, then include it in the root `build` script.

Each challenge has React, TypeScript, Tailwind CSS, and Vite available. Tailwind is optional per challenge: plain CSS in `src/styles.css` is the default when that keeps the solution closer to the original Frontend Mentor exercise.
