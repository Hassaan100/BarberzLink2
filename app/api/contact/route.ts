import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const sender = `"${process.env.NEXT_PUBLIC_COMPANY_NAME}" <${process.env.SMTP_USER}>`;

    // Admin email
    await transporter.sendMail({
      from: sender,
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: `Support Request: ${subject} | ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Subject: ${subject}

Message:
${message}
      `,
    });

    // User confirmation
    await transporter.sendMail({
      from: sender,
      to: email,
      subject: `We received your support request`,
      html: `
        <div style="font-family: Arial;">
          <h2>Hi ${name},</h2>
          <p>We’ve received your support request regarding <b>${subject}</b>.</p>
          <p>Our team will respond within 24–48 business hours.</p>
          <hr/>
          <p><b>Message Summary:</b></p>
          <p>${message}</p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Support request sent successfully",
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}