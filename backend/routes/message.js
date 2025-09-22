import express from "express";
import sendMail from "../utils/mailer.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) return res.status(400).json({ error: "All fields required" });

    await sendMail({ name, email, message });
    res.json({ success: true, message: "Sent successfully" });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Failed to send" });
  }
});

export default router;
