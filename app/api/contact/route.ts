// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { Buffer } from "buffer";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY as string);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = (formData.get("name") as string) || "No name";
    const email = (formData.get("email") as string) || "no-reply@example.com";
    const message = (formData.get("message") as string) || "";
    const files = formData.getAll("files") as unknown[] as File[];

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
            content: buffer.toString("base64"),
          };
        }),
    );

    const payload: any = {
      from: "Dublin Handyman Services <onboarding@resend.dev>",
      to: ["contact@easypropertymaintenance.ie"],
      subject: `New Project Inquiry from ${name} | Dublin Handyman Services`,
      replyTo: email,
      html: `
        <h2>New Message via Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    };

    if (attachments.length > 0) {
      payload.attachments = attachments.map((a) => ({
        filename: a.filename,
        content: a.content,
      }));
    }

    const data = await resend.emails.send(payload);

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to process form.",
      },
      { status: 500 },
    );
  }
}
