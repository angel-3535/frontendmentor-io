# Repository Guidance

This repo is a pnpm workspace for Frontend Mentor challenges. Future challenge setup should match the existing workspace shape without completing the challenge solution for the user.

## Adding A New Challenge

When the user asks to transfer or add a new Frontend Mentor challenge:

1. Move the extracted starter folder into `challenges/` and remove the `-main` suffix from the directory name.
   - Example: `blog-preview-card-main` becomes `challenges/blog-preview-card`.
   - Leave any downloaded zip file in Downloads unless the user asks otherwise.
2. Add the challenge as a workspace package with the same baseline files used by existing challenges:
   - `package.json`
   - `tsconfig.json`
   - `vite.config.ts`
   - `src/main.tsx`
   - `src/styles.css`
   - `src/vite-env.d.ts`
3. Configure Vite with React and Tailwind:
   - Use `@vitejs/plugin-react`.
   - Use `@tailwindcss/vite`.
   - Set `base` to `/challenges/<challenge-name>/`.
   - Set `build.outDir` to `../../dist/challenges/<challenge-name>`.
4. Keep CSS available as the default editing path:
   - Import `./styles.css` from `src/main.tsx`.
   - Include `@import "tailwindcss";` at the top of `src/styles.css`.
   - It is fine to add design tokens from `style-guide.md`, but do not implement the finished design.
5. Update the root `package.json`:
   - Add a start script named `dev:<short-name>` that filters to the new package.
   - Add the new package to the root `build` command.
6. Add the new challenge to `apps/home/src/main.tsx` so it appears on the home page.
7. Run `pnpm install` after adding the package so workspace links are created.
8. Verify with typecheck and build commands as appropriate.

## Important Boundaries

- Do not solve the challenge during setup.
- Do not recreate the finished page, write the finished component tree, or add polished final CSS unless the user explicitly asks for implementation help.
- Starter code should be minimal: a placeholder React component and enough CSS to confirm the app is wired correctly.
- Do not start a dev server unless the user explicitly asks for it.
- If verification is needed, prefer non-persistent commands such as `pnpm --filter <package> typecheck` or `pnpm build`.
