// 5c88d8fc6088c5a22bfda030af8526d2
import express from'express';
import Semaphore from 'node-semaphore-sms';
import cors from 'cors'
import fetch from "node-fetch";
const app = express();
const port = 3001;
app.use(cors({
    origin: '*',
  }));

// Replace with your Semaphore API key
const apikey = '5c88d8fc6088c5a22bfda030af8526d2';
const sendername = 'SEMAPHORE';

const sms = new Semaphore(apikey);

app.use(express.json());

app.post('/send-sms', async (req, res) => {
  const { message, number } = req.body;

  const apiKey = '5c88d8fc6088c5a22bfda030af8526d2'; // Replace with your Semaphore API key
  const apiUrl = 'https://api.semaphore.co/api/v4/messages';

  const payload = {
    apikey: apiKey,
    sendername: sendername,
    number: number,
    message: message
  };

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
  };

  try {
    const semaphoreResponse = await fetch(apiUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
    });

    if (semaphoreResponse.ok) {
      const responseData = await semaphoreResponse.json();
      console.log('Message Sent:', responseData);
      res.status(200).json({ success: true, message: 'Message Sent' });
    } else {
      console.error('Error sending message:', semaphoreResponse.statusText);
      res.status(500).json({ success: false, message: 'Failed to send message' });
    }
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ success: false, message: 'Failed to send message' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
