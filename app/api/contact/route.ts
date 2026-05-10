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
    html: `
    <div style="background:#050505;padding:40px 20px;font-family:Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center">

        <table width="700" cellpadding="0" cellspacing="0" border="0"
          style="max-width:700px;background:#0d0d0d;border:1px solid #f4b400;border-radius:20px;overflow:hidden;">

          <tr>
            <td style="padding:40px;background:#111111;">

              <table width="100%">
                <tr>
                  <td align="left">
                    <h1 style="margin:0;color:#f4b400;font-size:38px;font-weight:bold;">
                      BarberzLink
                    </h1>

                    <p style="margin-top:10px;color:#999;font-size:14px;">
                      New Contact Form Submission
                    </p>
                  </td>

                  <td align="right">
                    <span style="background:#f4b400;color:#000;padding:10px 18px;border-radius:40px;font-size:12px;font-weight:bold;">
                      ADMIN ALERT
                    </span>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <tr>
            <td style="padding:50px;">

              <h2 style="margin:0 0 20px;color:#ffffff;font-size:34px;font-weight:bold;line-height:44px;">
                Someone submitted your contact form.
              </h2>

              <p style="margin:0 0 35px;color:#b0b0b0;font-size:16px;line-height:28px;">
                A new support request has been received from your BarberzLink website.
              </p>

              <table width="100%" cellpadding="0" cellspacing="0" border="0"
                style="background:#111111;border-radius:16px;border:1px solid rgba(255,255,255,0.05);">

                <tr>
                  <td style="padding:22px 28px;border-bottom:1px solid rgba(255,255,255,0.05);">
                    <p style="margin:0 0 6px;color:#f4b400;font-size:12px;font-weight:bold;text-transform:uppercase;">
                      Full Name
                    </p>

                    <p style="margin:0;color:#fff;font-size:18px;font-weight:600;">
                      ${name}
                    </p>
                  </td>
                </tr>

                <tr>
                  <td style="padding:22px 28px;border-bottom:1px solid rgba(255,255,255,0.05);">
                    <p style="margin:0 0 6px;color:#f4b400;font-size:12px;font-weight:bold;text-transform:uppercase;">
                      Email Address
                    </p>

                    <p style="margin:0;color:#fff;font-size:18px;font-weight:600;">
                      ${email}
                    </p>
                  </td>
                </tr>

                <tr>
                  <td style="padding:22px 28px;border-bottom:1px solid rgba(255,255,255,0.05);">
                    <p style="margin:0 0 6px;color:#f4b400;font-size:12px;font-weight:bold;text-transform:uppercase;">
                      Phone Number
                    </p>

                    <p style="margin:0;color:#fff;font-size:18px;font-weight:600;">
                      ${phone || "Not Provided"}
                    </p>
                  </td>
                </tr>

                <tr>
                  <td style="padding:22px 28px;">
                    <p style="margin:0 0 6px;color:#f4b400;font-size:12px;font-weight:bold;text-transform:uppercase;">
                      Subject
                    </p>

                    <p style="margin:0;color:#fff;font-size:18px;font-weight:600;">
                      ${subject}
                    </p>
                  </td>
                </tr>

              </table>

              <div style="margin-top:30px;">

                <p style="margin:0 0 12px;color:#f4b400;font-size:13px;font-weight:bold;text-transform:uppercase;">
                  Message
                </p>

                <div style="background:#0a0a0a;border-radius:16px;padding:24px;border:1px solid rgba(255,255,255,0.05);">

                  <p style="margin:0;color:#d8d8d8;font-size:16px;line-height:30px;">
                    ${message}
                  </p>

                </div>

              </div>

              <div style="text-align:center;margin-top:40px;">

                <a href="mailto:${email}"
                  style="display:inline-block;background:#f4b400;color:#000;text-decoration:none;padding:16px 36px;border-radius:999px;font-size:16px;font-weight:bold;">
                  Reply to Customer
                </a>

              </div>

            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</div>
    `
    });

    // User confirmation
    await transporter.sendMail({
      from: sender,
      to: email,
      subject: `We received your support request`,
     
      html:
      
      `
<div style="background:#050505;padding:40px 20px;font-family:Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center">

        <table width="700" cellpadding="0" cellspacing="0" border="0"
          style="max-width:700px;background:#0d0d0d;border:1px solid #f4b400;border-radius:20px;overflow:hidden;">

          <!-- HEADER -->
          <tr>
            <td style="padding:40px;background:#111111;">

              <table width="100%">
                <tr>
                  <td align="left">
                    <h1 style="margin:0;color:#f4b400;font-size:38px;font-weight:bold;">
                      BarberzLink
                    </h1>

                    <p style="margin-top:10px;color:#999;font-size:14px;">
                      Customer Confirmation
                    </p>
                  </td>

                  <td align="right">
                    <span style="background:#f4b400;color:#000;padding:10px 18px;border-radius:40px;font-size:12px;font-weight:bold;">
                      CONFIRMED
                    </span>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="padding:55px 50px;">

              <h2 style="margin:0 0 20px;color:#ffffff;font-size:36px;font-weight:bold;line-height:48px;">
                Hi ${name},
              </h2>

              <p style="margin:0 0 30px;color:#b0b0b0;font-size:17px;line-height:30px;">
                Thank you for contacting BarberzLink. We have successfully received your message and our team will review it shortly.
              </p>

              <div style="background:#111111;border:1px solid rgba(255,255,255,0.05);border-radius:18px;padding:30px;">

                <p style="margin:0 0 8px;color:#f4b400;font-size:12px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;">
                  Subject
                </p>

                <p style="margin:0 0 25px;color:#ffffff;font-size:20px;font-weight:600;">
                  ${subject}
                </p>

                <p style="margin:0 0 8px;color:#f4b400;font-size:12px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;">
                  Your Message
                </p>

                <p style="margin:0;color:#d8d8d8;font-size:16px;line-height:30px;">
                  ${message}
                </p>

              </div>

              <p style="margin:35px 0 0;color:#999;font-size:15px;line-height:28px;">
                Our support team usually responds within 24 hours. We appreciate your patience and look forward to helping you.
              </p>

              <!-- BUTTON -->
              <div style="text-align:center;margin-top:45px;">

                <a href="https://barberzlinks.com"
                  style="display:inline-block;background:#f4b400;color:#000;text-decoration:none;padding:16px 38px;border-radius:999px;font-size:16px;font-weight:bold;">
                  Visit Website
                </a>

              </div>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="padding:35px 40px;background:#0a0a0a;border-top:1px solid rgba(255,255,255,0.05);">

              <table width="100%">
                <tr>
                  <td align="left">

                    <h3 style="margin:0;color:#f4b400;font-size:22px;">
                      BarberzLink
                    </h3>

                    <p style="margin:12px 0 0;color:#777;font-size:14px;line-height:24px;max-width:320px;">
                      Connecting barbers and clients through a modern booking experience designed for professionals.
                    </p>

                  </td>

                  <td align="right">

                    <p style="margin:0 0 10px;color:#ffffff;font-size:14px;font-weight:bold;">
                      Contact
                    </p>

                    <p style="margin:0;color:#777;font-size:13px;line-height:24px;">
                      support@barberzlink.com
                    </p>

                    <p style="margin:0;color:#777;font-size:13px;line-height:24px;">
                      www.barberzlink.com
                    </p>

                  </td>
                </tr>
              </table>

              <div style="margin-top:30px;padding-top:20px;border-top:1px solid rgba(255,255,255,0.05);text-align:center;">

                <p style="margin:0;color:#666;font-size:13px;">
                  © 2026 BarberzLink. All rights reserved.
                </p>

              </div>

            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</div>


      `
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