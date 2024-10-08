import { createRoot } from '@modern-js/runtime/react';
import { render } from '@modern-js/runtime/browser';
import * as Sentry from '@sentry/react';
import { launchCoreWebVitals } from './lib/core_web_vitals';

const ModernRoot = createRoot();

Sentry.init({
  dsn: 'https://2c3ed3889b6f7e8406145c2b5f54742c@o4507875491708928.ingest.us.sentry.io/4507875498131456',
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.browserProfilingIntegration(),
    Sentry.replayIntegration(),
  ],
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],
  // Set profilesSampleRate to 1.0 to profile every transaction.
  // Since profilesSampleRate is relative to tracesSampleRate,
  // the final profiling rate can be computed as tracesSampleRate * profilesSampleRate
  // For example, a tracesSampleRate of 0.5 and profilesSampleRate of 0.5 would
  // results in 25% of transactions being profiled (0.5*0.5=0.25)
  profilesSampleRate: 1.0,
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

render(<ModernRoot />).then(() => {
  launchCoreWebVitals({});
});
