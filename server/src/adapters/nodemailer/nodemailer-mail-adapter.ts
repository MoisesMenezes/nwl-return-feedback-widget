import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "093d1ab6dafbef",
    pass: "1210e571ec3e7b"
  }
});


export class NodemailerMailAdapter implements MailAdapter { 

  async sendMail({body,subject}: SendMailData): Promise<void> {
  await transport.sendMail({
    from: "Equipe Feedget <oi@feedget.com>",
    to: "Moisés Menezes <moisesmenezes90@gmail.com>",
    subject,
    html: body,
  })
  }
}