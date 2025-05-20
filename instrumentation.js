const { registerOTel } = require('@vercel/otel');
const { Resource } = require('@opentelemetry/resources');

module.exports.register = () => {
  console.log('🚀 OTel instrumentation initialized');
  console.log('OTEL_EXPORTER_OTLP_ENDPOINT:', process.env.OTEL_EXPORTER_OTLP_ENDPOINT);
  console.log('OTEL_EXPORTER_OTLP_HEADERS:', process.env.OTEL_EXPORTER_OTLP_HEADERS);
  console.log('OTEL_RESOURCE_ATTRIBUTES:', process.env.OTEL_RESOURCE_ATTRIBUTES);

  registerOTel({
    serviceName: 'vercel-otel-demo',
    resource: new Resource({
      'cx.application.name': 'cx-app-payments',
      'cx.subsystem.name': 'cx-subsys-payments',
    }),
  });
};

