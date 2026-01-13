import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Form Body:", body);

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'mehedihasansohag980@gmail.com',
      subject: `New Message from ${body.name}`,
      html: `<p>Name: ${body.name}</p><p>Email: ${body.email}</p><p>Message: ${body.message}</p>`,
    });

    console.log("Resend Response:", data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}