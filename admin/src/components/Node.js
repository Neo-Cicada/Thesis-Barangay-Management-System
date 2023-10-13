// 5c88d8fc6088c5a22bfda030af8526d2
import express from 'express';
import Semaphore from 'node-semaphore-sms';
import nodemailer from 'nodemailer';
import cors from 'cors';
import fetch from 'node-fetch';
import admin from 'firebase-admin';

const app = express();
const port = 3001;
app.use(cors({ origin: '*' }));

// Replace with your Semaphore API key
const smsApiKey = '5c88d8fc6088c5a22bfda030af8526d2';
const sendername = 'SEMAPHORE';

const sms = new Semaphore(smsApiKey);

// Initialize Firebase Admin
admin.initializeApp();

// Initialize Nodemailer transporter for email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yourgmailaccount@gmail.com',
    pass: 'yourgmailaccpassword',
  },
});

app.use(express.json());

app.post('/send-sms', async (req, res) => {
  const { message, number } = req.body;

  const apiUrl = 'https://api.semaphore.co/api/v4/messages';

  const smsPayload = {
    apikey: smsApiKey,
    sendername: sendername,
    number: number,
    message: message,
  };

  const smsHeaders = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${smsApiKey}`,
  };

  try {
    const semaphoreResponse = await fetch(apiUrl, {
      method: 'POST',
      headers: smsHeaders,
      body: JSON.stringify(smsPayload),
    });

    if (semaphoreResponse.ok) {
      const responseData = await semaphoreResponse.json();
      console.log('SMS Sent:', responseData);
      res.status(200).json({ success: true, message: 'SMS Sent' });
    } else {
      console.error('Error sending SMS:', semaphoreResponse.statusText);
      res.status(500).json({ success: false, message: 'Failed to send SMS' });
    }
  } catch (error) {
    console.error('Error sending SMS:', error);
    res.status(500).json({ success: false, message: 'Failed to send SMS' });
  }
});

app.post('/send-email', async (req, res) => {
  const { dest, subject, html } = req.body;

  const mailOptions = {
    from: 'Your Account Name <yourgmailaccount@gmail.com>',
    to: dest,
    subject: subject,
    html: html,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Failed to send email' });
    } else {
      console.log('Email Sent:', info.response);
      res.status(200).json({ success: true, message: 'Email Sent' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
