const { registerOTel } = require('@vercel/otel');
const { Resource } = require('@opentelemetry/resources');

module.exports.register = () => {
  console.error("🔥 This is a forced rebuild marker");
  console.error('🚀 Rajeev OTel instrumentation initialized');
  console.error('Rajesh OTEL_EXPORTER_OTLP_ENDPOINT:', process.env.OTEL_EXPORTER_OTLP_ENDPOINT);
  console.error('Rajesh OTEL_EXPORTER_OTLP_HEADERS:', process.env.OTEL_EXPORTER_OTLP_HEADERS);
  console.error('Rajesh OTEL_RESOURCE_ATTRIBUTES:', process.env.OTEL_RESOURCE_ATTRIBUTES);

  registerOTel({
    serviceName: 'vercel-otel-demo',
    resource: new Resource({
      'cx.application.name': 'cx-app-payments',
      'cx.subsystem.name': 'cx-subsys-payments',
    }),
  });
};

