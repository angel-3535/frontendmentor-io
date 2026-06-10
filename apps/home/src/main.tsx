import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider
} from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const challenges = [
  {
    label: "qr-code-component",
    href: "/challenges/qr-code-component/"
  },
  {
    label: "blog-preview-card",
    href: "/challenges/blog-preview-card/"
  },
  {
    label: "social-links-profile",
    href: "/challenges/social-links-profile/"
  }
];

const rootRoute = createRootRoute({
  component: () => <Outlet />
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage
});

const router = createRouter({
  routeTree: rootRoute.addChildren([indexRoute])
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function HomePage() {
  return (
    <main className="site-shell">
      <section className="link-index" aria-labelledby="page-title">
        <header className="site-header">
          <h1 id="page-title">angel</h1>
          <p>frontend mentor challenges</p>
        </header>

        <nav className="primary-links" aria-label="Challenges">
          {challenges.map((challenge) => (
            <a className="text-link" href={challenge.href} key={challenge.href}>
              {challenge.label}
            </a>
          ))}
        </nav>

        <footer className="site-footer">
          <a href="https://www.frontendmentor.io/" rel="noreferrer" target="_blank">
            fm
          </a>
          <a href="https://github.com/" rel="noreferrer" target="_blank">
            gh
          </a>
          <a href="https://www.thangel3535.com/" rel="noreferrer" target="_blank">
            web
          </a>
        </footer>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
