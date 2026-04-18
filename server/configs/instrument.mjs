import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "https://f2af6e842dba42b4108f8fe0b801f53e@o4511233727201280.ingest.us.sentry.io/4511233737293824",
  
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});