import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Configure Mailer Transport
    // Gmail App Password must be placed in process.env.GMAIL_PASS
    // Gmail User must be placed in process.env.GMAIL_USER
    const gmailUser = process.env.GMAIL_USER || "jahanzaibshakeel5@gmail.com";
    const gmailPass = process.env.GMAIL_PASS;

    if (!gmailPass) {
      console.warn("Gmail App Password (GMAIL_PASS) is not set in environment variables. Email will not be sent.");
      // Fallback response for development (simulating success)
      return NextResponse.json({
        success: true,
        message: "API hit successfully! In production, set GMAIL_PASS environment variable to send email.",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    const mailOptions = {
      from: `"${name}" <${gmailUser}>`,
      replyTo: email,
      to: "jahanzaibshakeel5@gmail.com",
      subject: `🌌 Portfolio Message from ${name}`,
      text: `New message from: ${name}\nSender Email: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="background-color: #0b0720; color: #fff; padding: 30px; font-family: sans-serif; border-radius: 12px; max-width: 600px; border: 1px solid #7042f8;">
          <h2 style="color: #b49bff; border-bottom: 1px solid #7042f83d; padding-bottom: 10px;">New Transmission Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #00d4ff; text-decoration: none;">${email}</a></p>
          <div style="background-color: #030014; padding: 20px; border-radius: 8px; margin-top: 20px; border-left: 4px solid #7042f8;">
            <p style="white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
          <p style="color: #6b7db3; font-size: 11px; margin-top: 30px; border-top: 1px solid #7042f81a; padding-top: 10px;">
            Sent from Jahanzaib's Space Portfolio.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Transmission sent successfully!",
    });
  } catch (error: any) {
    console.error("Nodemailer error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to send email" },
      { status: 500 }
    );
  }
}
