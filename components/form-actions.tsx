"use server";

import { Resend } from "resend";

export const submitAction = async (_: any, formData: FormData) => {
  const resend = new Resend(process.env.RESEND_API_KEY ?? "");
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    honeypotName: formData.get("h-name"),
  };

  if (rawFormData.honeypotName) {
    console.log("Honeypot triggered - No email sent");
    return;
  }

  const { data } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL ?? "",
    to: process.env.RESEND_TO_EMAIL ?? "",
    subject: `${rawFormData.name} <${rawFormData.email}> email from g2sitework.com/contact `,
    html: `<div>${rawFormData.message}</div>`,
  });

  console.log(`"Sending email" ${data?.id}`);
  if (data?.id) {
    return { message: "✅ Email sent successfully" };
  }
  return {
    message: `❌ Email failed to send, try again or email us directly at ${process.env.RESEND_TO_EMAIL}`,
  };
};
