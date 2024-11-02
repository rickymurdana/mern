import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendTemplateEmail = async (to: string) => {
  await transporter.sendMail({
    from: "peoplerich296@gmail.com",
    to,
    subject: "Hello!",
    text: "Hi, salam kenal",
  });
};
