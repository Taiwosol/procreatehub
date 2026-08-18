"use server";

import nodemailer from "nodemailer";

export async function sendInquiry(prevState, formData) {
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const businessName = formData.get("businessName");
  const businessWebsite = formData.get("businessWebsite");
  const service = formData.get("service");

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
    subject: `New Service Inquiry from ${firstName} ${lastName}`,
    text: `
      You have a new service inquiry:
      
      Name: ${firstName} ${lastName}
      Email: ${email}
      Business Name: ${businessName || "N/A"}
      Business Website: ${businessWebsite || "N/A"}
      Preferred Service: ${service}
    `,
    html: `
      <h2>New Service Inquiry</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Business Name:</strong> ${businessName || "N/A"}</p>
      <p><strong>Business Website:</strong> ${businessWebsite || "N/A"}</p>
      <p><strong>Preferred Service:</strong> ${service}</p>
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
