import { Resend } from "resend";
import { ENV } from "./env.js";

if (!ENV.RESEND_API_KEY) {
  throw new Error(
    "Missing RESEND_API_KEY environment variable. Please add it to your .env file:\nRESEND_API_KEY=re_your_api_key_here"
  );
}

export const resendClient = new Resend(ENV.RESEND_API_KEY);

export const sender = {
  email: ENV.EMAIL_FROM,
  name: ENV.EMAIL_FROM_NAME,
};
