import nodemailer from "nodemailer";
export const sendResetPasswordLink = async (
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
    const resetPasswordLink = `${process.env.DOMAIN}/reset-password/${verificationToken}`;
    await transporter.sendMail({
      from: `"Postly" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Postly - Reset Password",
      html: ` 
      <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
      
       <h2 style="color: #333;">Reset your Postly password 🔐</h2>

        <p style="font-size: 16px; color: #555;"> We received a request to reset your password. Click the button below to choose a new one: </p> 
        
        <a href="${resetPasswordLink}" style="display: inline-block; margin-top: 20px; padding: 10px 20px; background-color: #f59e0b; color: #fff; text-decoration: none; border-radius: 5px; font-weight: bold;"> Reset Password </a> 

        <p style="margin-top: 20px; font-size: 12px; color: #999;"> This link will expire soon for security reasons. </p>
        
         <p style="margin-top: 10px; font-size: 12px; color: #999;"> If you didn’t request a password reset, you can safely ignore this email. </p> 
      </div> `,
    });
    return {
      success: true,
      message: "A password reset link has been sent",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "The link could not be sent. Please try again",
    };
  }
};
