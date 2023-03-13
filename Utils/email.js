import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API);

dotenv.config();

export const usePasswordHashToMakeToken = ({
    password: passwordHash,
    id: userId,
    createdAt
  }) => {
    const secret = `${passwordHash - createdAt}`;
    const token = jwt.sign({ userId }, secret, {
      expiresIn: 3600 // 1 hour
    });
    return token;
};

export const transporter = async (msg, res) => {
    try {
      await sgMail.send(msg);
      return res.status(200).json({ message: 'Mail sent successfully' });
    } catch (err) {
      return res.status(500).json({ 'Error sending email': err });
    }
};

export const getPasswordResetURL = (user, token) => `${process.env.RESET_PASSWORD_URL}${user.id}/${token}`;

export const resetPasswordTemplate = (user, url) => {
    const from = 'bright@storescantopay.com';
    const to = user.email;
    const subject = 'ScanToPay Password Reset';
    const html = `
    <p>Hey ${user.name || user.email},</p>
    <p>We heard that you lost your ScanToPay password. Sorry about that!</p>
    <p>But don’t worry! You can use the following link to reset your password:</p>
    <a href=${url}>${url}</a>
    <p>If you don’t use this link within 1 hour, it will expire.</p>
    <p>Enjoy Awesome Shopping Experience! </p>
    <p>–Your friends at ScanToPay</p>
    `;
    return {
      from, to, subject, html
    };
};