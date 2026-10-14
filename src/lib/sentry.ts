import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: process.env.NEXT_PUBLIC_SENTRY_TRACES_SAMPLE_RATE ? Number(process.env.NEXT_PUBLIC_SENTRY_TRACES_SAMPLE_RATE) : 0.1,
  debug: process.env.NODE_ENV === "development",
});
