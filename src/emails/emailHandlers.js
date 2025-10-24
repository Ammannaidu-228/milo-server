import { createWelcomeEmailTemplate } from "./emailTemplates.js";
import nodemailer from "nodemailer";
import { ENV } from "../lib/env.js";

// Create transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Using Gmail's predefined settings
  auth: {
    user: ENV.EMAIL_FROM || "n160228@rguktn.ac.in",
    pass: ENV.EMAIL_APP_PASSWORD, // Use an App Password for Gmail
  },
});

export const sendMail = async (email, name, clientURL) => {
  try {
    const info = await transporter.sendMail({
      from: `"${ENV.EMAIL_FROM_NAME}" <${ENV.EMAIL_FROM}>`,
      to: email,
      subject: "Welcome To Milo!",
      html: createWelcomeEmailTemplate(name, clientURL),
    });

    console.log("Message sent:", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    if (error.code === 'EAUTH') {
      throw new Error("Email authentication failed. Please check your credentials.");
    }
    throw error;
  }
};
