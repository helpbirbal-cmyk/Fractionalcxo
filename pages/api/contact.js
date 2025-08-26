export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  try {
    const body = req.body
    console.log("New contact submission:", body)
    // TODO: integrate email/Slack/CRM here
    return res.status(200).json({ ok: true })
  } catch (e) {
    return res.status(500).json({ ok: false })
  }
}
