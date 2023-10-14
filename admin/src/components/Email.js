import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
app.use(cors()); // Use the cors middleware
app.use(express.json());
app.use((req, res, next) => {
  res.header({ "Access-Control-Allow-Origin": "*" });
  next();
})
app.post('/send-email', async (req, res) => {
  const { to, subject, html } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: "amamperez858@gmail.com",
      pass: "yjxb runx apfj nsex",
    },
  });

  try {
    const info = await transporter.sendMail({
      from: 'amamperez858@gmail.com',
      to: to,
      subject: subject,
      html: html,
    });

    console.log(info.messageId);
    console.log(info.accepted);
    console.log(info.rejected);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Email sending failed' });
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
