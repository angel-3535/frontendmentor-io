<wizard-report>
# PostHog post-wizard report

The wizard has completed a PostHog Node.js integration for this portfolio monorepo. Since the project is a static React SPA (no existing server code), a Vercel serverless function was added at `api/track.js` to serve as the server-side Node.js layer. The React home app (`apps/home/src/main.tsx`) now generates an anonymous session-scoped distinct ID and fires tracking calls via `fetch` to the `/api/track` endpoint on two key user interactions. PostHog credentials are stored in `.env` and referenced as environment variables in the serverless function.

| Event | Description | File |
|---|---|---|
| `challenge_visited` | Fired when a visitor clicks a challenge link on the home page; includes `challenge` property with the challenge name | `api/track.js` |
| `external_link_clicked` | Fired when a visitor clicks a footer external link (Frontend Mentor, GitHub, personal website); includes `destination` and `url` properties | `api/track.js` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) — Dashboard](https://us.posthog.com/project/442184/dashboard/1695338)
- [Challenge visits over time](https://us.posthog.com/project/442184/insights/dS4RU6RA)
- [Challenge visits by challenge](https://us.posthog.com/project/442184/insights/vJAH1SRO)
- [External link clicks over time](https://us.posthog.com/project/442184/insights/4xxvEZJW)
- [External link clicks by destination](https://us.posthog.com/project/442184/insights/IHIFca9C)
- [Total visitor actions](https://us.posthog.com/project/442184/insights/mhldMbWb)

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
