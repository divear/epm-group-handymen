// app/actions/sendEmail.ts
"use server";

import { Resend } from "resend";

// Initialize Resend with your API Key stored in environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  const files = formData.getAll("files") as File[];

  try {
    // Process attachments cleanly if any files were uploaded
    const attachments = await Promise.all(
      files
        .filter((file) => file.size > 0 && file.name !== "undefined")
        .map(async (file) => {
          const arrayBuffer = await file.arrayBuffer();
          const buffer = Buffer.from(arrayBuffer);
          return {
            filename: file.name,
            content: buffer,
          };
        }),
    );

    // Send the email layout via Resend
    const data = await resend.emails.send({
      from: "Dublin Handyman Services <onboarding@resend.dev>", // Replace with your verified domain later
      to: ["contact@easypropertymaintenance.ie"],
      //   to: ["lukas.odehnal0@gmail.com"],
      subject: `New Project Inquiry from ${name}`,
      replyTo: email,
      html: `
        <h2>New Message via Contact Form from the Dublin Handyman Services</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    return { success: true, data };
  } catch (error: any) {
    console.error("Email processing error:", error);
    return { success: false, error: error.message || "Failed to send email." };
  }
}
