import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, role, company, email, phone, message } = await request.json();

    // Validate required fields
    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: 'First name, email, and message are required' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'dev.patel.codinggita@gmail.com',
        pass: process.env.SMTP_PASS, // Use environment variable
      },
    });

    // Email content
    const mailOptions = {
      from: email, // User's email
      to: 'dev.patel.codinggita@gmail.com',
      subject: `New Contact Form Submission from ${firstName} ${lastName || ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">New Contact Form Submission</h2>
          <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; background-color: #f9fafb;">
            <h3 style="color: #374151; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName || ''}</p>
            <p><strong>Role:</strong> ${role || 'Not provided'}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <h3 style="color: #374151;">Message:</h3>
            <p style="background-color: white; padding: 12px; border-radius: 4px; border-left: 4px solid #3b82f6;">${message}</p>
          </div>
          <p style="color: #6b7280; font-size: 14px; margin-top: 20px;">
            This email was sent from the SavioERP contact form.
          </p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}