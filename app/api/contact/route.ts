// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = (formData.get("name") as string) || "No name";
    const email = (formData.get("email") as string) || "no-reply@example.com";
    const message = (formData.get("message") as string) || "";
    const files = formData.getAll("files") as unknown[] as File[];

    // Parse the multiple uploaded photo objects into native stream buffers
    const attachments = await Promise.all(
      files
        .filter(
          (file) =>
            file &&
            (file as File).size > 0 &&
            (file as File).name !== "undefined",
        )
        .map(async (file) => {
          const f = file as File;
          const arrayBuffer = await f.arrayBuffer();
          const buffer = Buffer.from(arrayBuffer);
          return {
            filename: f.name,
            content: buffer,
          };
        }),
    );

    // Initialize the native transport client using your new secure configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // Secure port 465 integration
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      // Shows up neatly in the inbox indicating a new inquiry
      from: `"Dublin Handyman Form" <${process.env.SMTP_USER}>`,
      to: "contact@easypropertymaintenance.ie",
      replyTo: email, // Lets your boss hit 'Reply' to text/email the client back directly
      subject: `New message from ${name} | Dublin Handyman Services`,
      html: `
        <h2>New Message via Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
      attachments: attachments.length > 0 ? attachments : undefined,
    };

    // Fire the message down the wire
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("SMTP Client Processing Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to deliver form data.",
      },
      { status: 500 },
    );
  }
}
