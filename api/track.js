import { PostHog } from 'posthog-node';

const posthog = new PostHog(process.env.POSTHOG_API_KEY, {
  host: process.env.POSTHOG_HOST,
  enableExceptionAutocapture: true,
  flushAt: 1,
  flushInterval: 0,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { event, properties, distinctId } = req.body ?? {};

  if (!event || !distinctId) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    posthog.capture({ distinctId, event, properties: properties ?? {} });
    await posthog.flush();
    res.status(200).json({ success: true });
  } catch (err) {
    posthog.captureException(err, distinctId);
    res.status(500).json({ error: 'Failed to track event' });
  }
}
