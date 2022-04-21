import * as dotenv from 'dotenv';
dotenv.config();
export const mailConfig: any = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT, 10) || 465,
  secure: true,
  // ignoreTLS: process.env.SMTP_SECURE === 'false',
  auth: {
    user: process.env.SMTP_AUTH_USER,
    pass: process.env.SMTP_AUTH_PASS,
  },
};
