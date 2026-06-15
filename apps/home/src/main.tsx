import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function getDistinctId(): string {
  const key = "ph_distinct_id";
  let id = sessionStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem(key, id);
  }
  return id;
}

function trackEvent(event: string, properties?: Record<string, unknown>): void {
  fetch("/api/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ event, properties, distinctId: getDistinctId() }),
  }).catch(() => {});
}

const challenges = [
  {
    label: "qr-code-component",
    href: "/challenges/qr-code-component/",
  },
  {
    label: "blog-preview-card",
    href: "/challenges/blog-preview-card/",
  },
  {
    label: "nft-preview-card-component",
    href: "/challenges/nft-preview-card-component/",
  },
  {
    label: "order-summary-component",
    href: "/challenges/order-summary-component/",
  },
  {
    label: "product-preview-card-component",
    href: "/challenges/product-preview-card-component/",
  },
  {
    label: "social-links-profile",
    href: "/challenges/social-links-profile/",
  },
  {
    label: "results-summary-component",
    href: "/challenges/results-summary-component/",
  },
  {
    label: "stats-preview-card-component",
    href: "/challenges/stats-preview-card-component/",
  },
];

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const router = createRouter({
  routeTree: rootRoute.addChildren([indexRoute]),
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
            <a
              className="text-link"
              href={challenge.href}
              key={challenge.href}
              onClick={() =>
                trackEvent("challenge_visited", { challenge: challenge.label })
              }
            >
              {challenge.label}
            </a>
          ))}
        </nav>

        <footer className="site-footer">
          <a
            href="https://www.frontendmentor.io/"
            rel="noreferrer"
            target="_blank"
            onClick={() =>
              trackEvent("external_link_clicked", {
                destination: "frontendmentor",
                url: "https://www.frontendmentor.io/",
              })
            }
          >
            fm
          </a>
          <a
            href="https://github.com/angel-3535"
            rel="noreferrer"
            target="_blank"
            onClick={() =>
              trackEvent("external_link_clicked", {
                destination: "github",
                url: "https://github.com/angel-3535",
              })
            }
          >
            gh
          </a>
          <a
            href="https://www.thangel3535.com/"
            rel="noreferrer"
            target="_blank"
            onClick={() =>
              trackEvent("external_link_clicked", {
                destination: "website",
                url: "https://www.thangel3535.com/",
              })
            }
          >
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
  </StrictMode>,
);
