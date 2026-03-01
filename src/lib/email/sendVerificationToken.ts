import nodemailer from "nodemailer";
export const sendVerificationToken = async (
  email: string,
  verificationToken: string,
): Promise<{ success: boolean; message: string }> => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    const verificationLink = `${process.env.DOMAIN}/verify/${verificationToken}`;
    await transporter.sendMail({
      from: `"Postly" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Postly - Email Verification",
      html: `
  <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
    <h2 style="color: #333;">Welcome to Postly 👋</h2>
    <p style="font-size: 16px; color: #555;">
      Thank you for signing up! Please verify your email by clicking the button below:
    </p>
    <a href="${verificationLink}" 
       style="display: inline-block; margin-top: 20px; padding: 10px 20px; 
              background-color: #f59e0b; color: #fff; text-decoration: none; 
              border-radius: 5px; font-weight: bold;">
      Verify Email
    </a>
    <p style="margin-top: 20px; font-size: 12px; color: #999;">
      If you did not sign up for Postly, you can ignore this email.
    </p>
  </div>
  `,
    });
    return {
      success: true,
      message: "A verification link has been sent to your email",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Failed to send verificationToken, try again",
    };
  }
};
