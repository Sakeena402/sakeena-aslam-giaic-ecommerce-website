import nodemailer from 'nodemailer';
import User from "@/models/userModel";
import bcryptjs from 'bcryptjs';


interface SendEmailParams {
    email: string;
    emailType: "VERIFY" | "RESET";
    userId: string;
}

export const sendEmail = async ({ email, emailType, userId }: SendEmailParams) => {
    try {
        // Generate a hashed token
        const hashedToken = await bcryptjs.hash(userId.toString(), 10);

        // Update the user model with the appropriate token and expiry time
        const tokenUpdate = {
            verifyToken: emailType === "VERIFY" ? hashedToken : undefined,
            verifyTokenExpiry: emailType === "VERIFY" ? Date.now() + 3600000 : undefined,
            forgotPasswordToken: emailType === "RESET" ? hashedToken : undefined,
            forgotPasswordTokenExpiry: emailType === "RESET" ? Date.now() + 3600000 : undefined
        };

        await User.findByIdAndUpdate(userId, tokenUpdate, { new: true });

        // Configure Nodemailer transport
        const transport = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST || "sandbox.smtp.mailtrap.io",
            port: Number(process.env.MAILTRAP_PORT) || 587, // Use 587 or other specified port
            auth: {
                user: process.env.MAILTRAP_USER,
                pass: process.env.MAILTRAP_PASSWORD
            }
        });

        // Prepare the email content
        const actionUrl = `${process.env.DOMAIN}/${emailType === "VERIFY" ? "verifyemail" : "resetpassword"}?token=${hashedToken}`;
        const mailOptions = {
            from: process.env.SENDER_EMAIL || 'sakeenaf315@gmail.com',
            to: email,
            subject: emailType === "VERIFY" ? "Verify your Email" : "Reset your Password",
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
                    <h2>${emailType === "VERIFY" ? "Verify Your Email" : "Reset Your Password"}</h2>
                    <p>Click the link below to ${emailType === "VERIFY" ? "verify your email address" : "reset your password"}:</p>
                    <a href="${actionUrl}" style="background: #007BFF; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
                        ${emailType === "VERIFY" ? "Verify Email" : "Reset Password"}
                    </a>
                    <p>If you cannot click the link, copy and paste the following URL into your browser:</p>
                    <p>${actionUrl}</p>
                    <p>This link will expire in 1 hour.</p>
                </div>
            `
        };

        // Send the email
        const mailResponse = await transport.sendMail(mailOptions);
        console.log(`Email sent: ${mailResponse.response}`);
        return mailResponse;

    } catch (error: any) {
        console.error("Error sending email:", error.message);
        throw new Error("Failed to send email. Please try again later.");
    }
};
