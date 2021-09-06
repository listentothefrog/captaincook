import * as functions from "firebase-functions";
require("dotenv").config();

exports.sendWelcomeEmail = functions.auth.user().onCreate((_) => {
  const email = "hellocaptiancook@gmail.com";
  const nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: email,
      pass: process.env.EMAIL_PASSWORD_FOR_NODE_MAILER,
    },
  });

  const mailOptions = {
    from: email,
    to: "hihaha7608@mnqlm.com",
    subject: "Welcome to CaptianCook",
    text: "Hello",
  };

  transporter.sendMail(mailOptions, function (error: string, info: any) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});
