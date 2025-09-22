import nodemailer from "nodemailer";

const sendMail = async ({ name, email, message }) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_SECURE === "true",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Portfolio Bot" <${process.env.EMAIL_USER}>`,
    to: process.env.MY_EMAIL_TO,
    subject: `New Portfolio Message from ${name}`,
    text: `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  });
};

export default sendMail;
