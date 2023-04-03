const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const router = express.Router();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use("/contact", router);

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    requireTLS: true,
    auth: {
        user: 'devtestingexample1@gmail.com',
        pass: 'tpkzsykpaalcwinp'
    }
});

transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take our messages");
    }
});

router.post('/send-email', (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;

    const mailOptions = {
        from: `"${firstName} ${lastName}" ${email}`,
        to: 'devtestingexample1@gmail.com',
        subject: 'New message from contact form',
        html: `
      <p> First Name: ${firstName}</p>
      <p>Last Name: ${lastName}</p>
      <p>Email Address: ${email}</p>
      <p>Phone Number: ${phone}</p>
      <p>Message: ${message}</p>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Something went wrong, please try again later.');
        } else {
            console.log(`Email sent: ${info.response} `);
            // res.status(200).send('Your message has been sent!');
            res.json({ status: 'success' })
        }
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port} `);
});
