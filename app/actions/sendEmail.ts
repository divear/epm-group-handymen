// app/actions/sendEmail.ts
"use server";

import nodemailer from "nodemailer";

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  const files = formData.getAll("files") as File[];

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 0);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
    return {
      success: false,
      error:
        "SMTP configuration is missing. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS.",
    };
  }

  try {
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

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: `"Dublin Handyman Services" <${smtpUser}>`,
      to: [
        "contact@easypropertymaintenance.ie",
        "lukyn.odehnal333@gmail.com",
        "lukas.odehnal0@gmail.com",
      ],
      replyTo: email,
      subject: `New Project Inquiry from ${name}`,
      html: `
        <h2>New Message via Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
      attachments: attachments.length > 0 ? attachments : undefined,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error: any) {
    console.error("Nodemailer processing error:", error);
    return {
      success: false,
      error: error.message || "Failed to send email with nodemailer.",
    };
  }
}
