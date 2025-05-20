const { registerOTel } = require('@vercel/otel');
const { Resource } = require('@opentelemetry/resources');

module.exports.register = function () {
  console.log('🚀 OTel instrumentation initialized');

  registerOTel({
    serviceName: 'vercel-otel-demo',
    resource: new Resource({
      'cx.application.name': 'vercel-otel-app',
      'cx.subsystem.name': 'api',
    }),
  });
};

