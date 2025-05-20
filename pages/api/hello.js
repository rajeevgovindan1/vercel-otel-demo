export default function handler(req, res) {
  console.log("📡 /api/hello hit (auto-traced)");
  res.status(200).json({ message: "hello" });
}

