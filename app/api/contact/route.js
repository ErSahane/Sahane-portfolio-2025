// app/api/contact/route.js
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs"; // ensure nodemailer can run (node runtime)

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body || {};

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Please provide name, email and message." },
        { status: 400 }
      );
    }

    // Transporter - using Gmail App Password (recommended)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // set in .env.local
        pass: process.env.GMAIL_PASS, // set in .env.local (App Password)
      },
    });

    // Mail options
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_TO || process.env.GMAIL_USER,
      subject: `New message from ${name} (Portfolio)`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Message sent." });
  } catch (err) {
    console.error("API /api/contact error:", err);
    return NextResponse.json(
      { success: false, error: "Server error. See server logs." },
      { status: 500 }
    );
  }
}
