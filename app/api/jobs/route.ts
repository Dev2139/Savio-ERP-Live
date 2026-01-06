import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    // Handle form data with file upload
    const formData = await request.formData();
    
    const candidateName = formData.get('candidateName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const positionApplied = formData.get('positionApplied') as string;
    const noticePeriod = formData.get('noticePeriod') as string;
    const currentLocation = formData.get('currentLocation') as string;
    const currentSalary = formData.get('currentSalary') as string;
    const expectedSalary = formData.get('expectedSalary') as string;
    const experienceYear = formData.get('experienceYear') as string;
    
    // Get resume file
    const resumeFile = formData.get('resume') as File | null;

    // Validate required fields
    if (!candidateName || !email || !positionApplied) {
      return NextResponse.json(
        { error: 'Candidate name, email, and position applied are required' },
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

    // Prepare email attachments
    const attachments = [];
    
    if (resumeFile) {
      // Convert File to Buffer
      const buffer = await resumeFile.arrayBuffer();
      
      attachments.push({
        filename: resumeFile.name,
        content: Buffer.from(buffer),
        contentType: resumeFile.type,
      });
    }
    
    // Email content
    const mailOptions = {
      from: email, // Candidate's email
      to: 'dev.patel.codinggita@gmail.com',
      subject: `New Job Application: ${positionApplied} - ${candidateName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">New Job Application</h2>
          <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; background-color: #f9fafb;">
            <h3 style="color: #374151; margin-top: 0;">Candidate Details:</h3>
            <p><strong>Name:</strong> ${candidateName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Position Applied:</strong> ${positionApplied}</p>
            <p><strong>Notice Period:</strong> ${noticePeriod || 'Not provided'}</p>
            <p><strong>Current Location:</strong> ${currentLocation || 'Not provided'}</p>
            <p><strong>Current Salary:</strong> ${currentSalary || 'Not provided'}</p>
            <p><strong>Expected Salary:</strong> ${expectedSalary || 'Not provided'}</p>
            <p><strong>Experience Years:</strong> ${experienceYear || 'Not provided'}</p>
          </div>
          <p style="color: #6b7280; font-size: 14px; margin-top: 20px;">
            This email was sent from the SavioERP careers page job application form.
          </p>
        </div>
      `,
      attachments,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Job application submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending job application email:', error);
    return NextResponse.json(
      { error: 'Failed to send job application' },
      { status: 500 }
    );
  }
}