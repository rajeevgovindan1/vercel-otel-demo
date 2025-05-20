// app/instrumentation.js
import { registerOTel } from '@vercel/otel';
import { Resource } from '@opentelemetry/resources';

export function register() {
  console.error("🔥 Rajeev OTel instrumentation initialized");
  console.error('OTEL_EXPORTER_OTLP_ENDPOINT:', process.env.OTEL_EXPORTER_OTLP_ENDPOINT);
  console.error('OTEL_EXPORTER_OTLP_HEADERS:', process.env.OTEL_EXPORTER_OTLP_HEADERS);
  console.error('OTEL_RESOURCE_ATTRIBUTES:', process.env.OTEL_RESOURCE_ATTRIBUTES);

  registerOTel({
    serviceName: 'vercel-otel-demo',
    resource: new Resource({
      'cx.application.name': 'cx-app-payments',
      'cx.subsystem.name': 'cx-subsys-payments',
    }),
  });
}

