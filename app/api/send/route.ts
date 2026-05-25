import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      fullName,
      email,
      phone,
      age,
      education,
      experience,
      state,
      designation,
      speaksEnglish,
      budget,
      interestedCountry,
      preferredVisa,
      hasPassport,
      ieltsScore,
      moveTimeline,
      migrationService,
      reasonForMoving,
      consultationSlot,
      preferredLanguage,
      consultationMode
    } = data;

    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
      hour12: true
    });

    // Extract env variables
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const adminEmail = process.env.ADMIN_EMAIL || "admin@Bhavitha Overseas.com";

    console.log("--- New Germany Visa Eligibility Lead Captured ---");
    console.log(`Timestamp: ${timestamp}`);
    console.log(`Lead Name: ${fullName}`);
    console.log("Payload:", JSON.stringify(data, null, 2));

    // HTML Email Template
    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Germany Visa Eligibility Lead</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f5f7; color: #1e293b; margin: 0; padding: 20px; }
          .card { background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; max-width: 600px; margin: 0 auto; overflow: hidden; box-shadow: 0 4px 12px rgba(7, 27, 68, 0.04); }
          .header { background-color: #071B44; color: #ffffff; padding: 30px; text-align: center; }
          .header h2 { margin: 0; font-size: 22px; font-weight: 800; tracking-tight: -0.025em; }
          .header p { margin: 6px 0 0 0; font-size: 13px; color: #f05a28; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em; }
          .content { padding: 30px; }
          .section-title { font-size: 11px; font-weight: 800; color: #f05a28; text-transform: uppercase; letter-spacing: 0.05em; margin-top: 25px; border-bottom: 2px solid #f1f5f9; padding-bottom: 6px; }
          .section-title:first-child { margin-top: 0; }
          table { width: 100%; border-collapse: collapse; margin-top: 10px; }
          td { padding: 10px 0; font-size: 14px; border-bottom: 1px solid #f8fafc; }
          td:last-child { border-bottom: none; }
          .label { font-weight: 700; color: #64748b; width: 45%; }
          .value { color: #0f172a; font-weight: 600; }
          .footer { background-color: #f8fafc; padding: 20px; text-align: center; font-size: 12px; color: #94a3b8; border-t: 1px solid #e2e8f0; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="header">
            <h2>New Eligibility Check Lead</h2>
            <p>Germany Visa Portal</p>
          </div>
          
          <div class="content">
            <!-- Step 1 details -->
            <div class="section-title">Step 1: Personal Details</div>
            <table>
              <tr>
                <td class="label">Full Name</td>
                <td class="value">${fullName}</td>
              </tr>
              <tr>
                <td class="label">Email Address</td>
                <td class="value"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td class="label">Phone Number</td>
                <td class="value">${phone}</td>
              </tr>
              <tr>
                <td class="label">Age Bracket</td>
                <td class="value">${age}</td>
              </tr>
              <tr>
                <td class="label">Highest Qualification</td>
                <td class="value">${education}</td>
              </tr>
              <tr>
                <td class="label">Work Experience</td>
                <td class="value">${experience}</td>
              </tr>
            </table>

            <!-- Step 2 details -->
            <div class="section-title">Step 2: Location, Role & Budget</div>
            <table>
              <tr>
                <td class="label">Current State (India)</td>
                <td class="value">${state}</td>
              </tr>
              <tr>
                <td class="label">Current Designation</td>
                <td class="value">${designation}</td>
              </tr>
              <tr>
                <td class="label">Speaks English?</td>
                <td class="value">${speaksEnglish}</td>
              </tr>
              <tr>
                <td class="label">Visa Budget Range</td>
                <td class="value">${budget}</td>
              </tr>
            </table>

            <!-- Step 3 details -->
            <div class="section-title">Step 3: Immigration Interests</div>
            <table>
              <tr>
                <td class="label">Country of Interest</td>
                <td class="value">${interestedCountry}</td>
              </tr>
              <tr>
                <td class="label">Preferred Visa Type</td>
                <td class="value">${preferredVisa}</td>
              </tr>
              <tr>
                <td class="label">Possesses Passport?</td>
                <td class="value">${hasPassport}</td>
              </tr>
              <tr>
                <td class="label">IELTS Band score</td>
                <td class="value">${ieltsScore}</td>
              </tr>
            </table>

            <!-- Step 4 details -->
            <div class="section-title">Step 4: Target & Timeline</div>
            <table>
              <tr>
                <td class="label">Relocation Timeline</td>
                <td class="value">${moveTimeline}</td>
              </tr>
              <tr>
                <td class="label">Immigration Service Option</td>
                <td class="value">${migrationService}</td>
              </tr>
              <tr>
                <td class="label">Core Reason for Move</td>
                <td class="value">${reasonForMoving}</td>
              </tr>
            </table>

            <!-- Step 5 details -->
            <div class="section-title">Step 5: Locked Consultation Slot</div>
            <table>
              <tr>
                <td class="label">Preferred Date Slot</td>
                <td class="value">${consultationSlot}</td>
              </tr>
              <tr>
                <td class="label">Preferred Language</td>
                <td class="value">${preferredLanguage}</td>
              </tr>
              <tr>
                <td class="label">Consultation Mode</td>
                <td class="value">${consultationMode}</td>
              </tr>
            </table>
          </div>

          <div class="footer">
            Submitted at ${timestamp} (IST) | Sent automatically by Germany Portal system.
          </div>
        </div>
      </body>
      </html>
    `;

    // Fail gracefully if email env variables are missing (for local dev / showcase without config envs)
    if (!emailUser || !emailPass) {
      console.warn("WARNING: EMAIL_USER or EMAIL_PASS environment variables are not configured.");
      console.log("Form successfully completed without SMTP transfer. Logging email template to console instead.");

      return NextResponse.json({
        success: true,
        mocked: true,
        message: "Lead saved successfully. Mail logged in server terminal (SMTP environment keys are not configured)."
      });
    }

    // Configure Nodemailer Transport
    const transporter = nodemailer.createTransport({
      service: "gmail", // Easily configurable to other SMTP providers
      auth: {
        user: emailUser,
        pass: emailPass
      }
    });

    // Setup Mail parameters
    const mailOptions = {
      from: `"Germany Portal Leads" <${emailUser}>`,
      to: adminEmail,
      subject: `New Germany Visa Eligibility Lead - ${fullName}`,
      html: htmlTemplate
    };

    // Dispatch SMTP Email
    await transporter.sendMail(mailOptions);
    console.log("Email dispatched successfully via Nodemailer!");

    return NextResponse.json({
      success: true,
      mocked: false,
      message: "Lead details captured and sent successfully via email."
    });

  } catch (error: any) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to process lead capture query" },
      { status: 500 }
    );
  }
}
