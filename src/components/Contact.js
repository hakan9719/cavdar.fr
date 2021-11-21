// import React from "react";
// import { Col, Container, Form, Row } from "react-bootstrap";
// require('dotenv').config();
const dotenv = require('dotenv');
export default function Contact() {
  // using Twilio SendGrid's v3 Node.js Library
  // https://github.com/sendgrid/sendgrid-nodejs
  const sgMail = require("@sendgrid/mail");
  console.log(process.env);
  console.log(dotenv);
  console.log(dotenv.config());
  sgMail.setApiKey('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');
  const msg = {
    to: "contact@cavdar.fr", // Change to your recipient
    from: "contact@cavdar.fr", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
    return ('');
}
