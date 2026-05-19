export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const formId = process.env.FORMSPREE_FORM_ID;
  const { name, email, subject, message } = req.body || {};

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ message: "Name, email, and message are required." });
  }

  if (formId) {
    try {
      const formspreeRes = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          subject: subject?.trim() || "(No subject)",
          message: message.trim(),
        }),
      });

      if (!formspreeRes.ok) {
        const err = await formspreeRes.text();
        console.error("Formspree error:", err);
        return res.status(502).json({ message: "Failed to send message. Please try again." });
      }

      return res.status(200).json({ ok: true });
    } catch (err) {
      console.error("Contact API error:", err);
      return res.status(500).json({ message: "Server error. Please try again." });
    }
  }

  return res.status(503).json({
    message:
      "Contact form is not configured. Please email frabanzoo@gmail.com directly.",
  });
}
