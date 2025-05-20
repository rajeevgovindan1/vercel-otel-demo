const { trace } = require("@opentelemetry/api");

export default function handler(req, res) {
  const tracer = trace.getTracer("vercel-otel-demo");
  const span = tracer.startSpan("hello-api-span");
  span.end();

  console.log("Handling /api/hello with trace");
  res.status(200).json({ message: "Hello from /api/hello with trace" });
}

