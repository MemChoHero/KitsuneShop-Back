import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {

    private readonly transporter = nodemailer.createTransport({
        host: process.env['SMTP_HOST'],
        port: +process.env['SMTP_PORT']!,
        secure: false,
        auth: {
            user: process.env['SMTP_USER'],
            pass: process.env['SMTP_PASSWORD']
        }
    });

    public async sendMail(to: string, subject: string, html: string): Promise<void> {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject,
            html
        });
    }
}