"use server";

import nodemailer from "nodemailer";

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendInquiry(prevState, formData) {
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const businessName = formData.get("businessName");
  const service = formData.get("service");
  const projectBrief = formData.get("projectBrief");

  if (!firstName || !lastName || !email || !service) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    };
  }

  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER,
    replyTo: email,
    subject: `New Service Inquiry from ${firstName} ${lastName}`,
    text: `
      You have a new service inquiry:

      Name: ${firstName} ${lastName}
      Business Email: ${email}
      Business Name: ${businessName || "N/A"}
      Preferred Service: ${service}
      Project Brief: ${projectBrief || "N/A"}
    `,
    html: `
      <h2>New Service Inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
      <p><strong>Business Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Business Name:</strong> ${escapeHtml(businessName || "N/A")}</p>
      <p><strong>Preferred Service:</strong> ${escapeHtml(service)}</p>
      <p><strong>Project Brief:</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(projectBrief || "N/A")}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      success: true,
      message: "Thank you for your inquiry! We'll get back to you soon.",
    };
  } catch (error) {
    console.error("Email sending error:", error);
    return {
      success: false,
      message: "Oops! Something went wrong. Please try again later.",
    };
  }
}
