const { registerOTel } = require('@vercel/otel')

module.exports.register = function () {
  console.log("🚀 OTel instrumentation initialized")
  registerOTel({
    serviceName: 'vercel-otel-demo'
  })
}

