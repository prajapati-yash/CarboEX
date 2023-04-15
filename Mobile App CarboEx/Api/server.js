const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running on port 5000"));

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  requireTLS: true,
  auth: {
    user: "development.testing253@gmail.com",
    pass: process.env.APP_PASSWORD,
  },
});

contactEmail.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

router.post("/contact", (req, res) => {
  const { fname, lname, email, phone, message } = req.body;

  console.log("From server.js file " + fname);

  const mail = {
    from: fname,
    to: "development.testing253@gmail.com",
    subject: "Contact Form Submission",
    html: `<p>Name: ${fname} ${lname} </p>
            <p>Email: ${email} </p>
            <p>Contact Number: ${phone} </p>
            <p>Message: ${message} </p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Message Sent");
    }
  });
});
