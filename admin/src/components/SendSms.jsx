import React, { useState } from 'react';
import { TextField, Button, Snackbar } from '@mui/material';
import RedToast from './RedToast';
export default function SendMessage({ number, setSms, setOpenSnack, setFail }) {
  const [response, setResponse] = useState(null);
  const [message, setMessage] = useState('');
  const sendMessage = async () => {
    const apiUrl = 'http://localhost:3001/send-sms'; // Replace with your server URL
    const messageData = {
      number: number,
      message: message,
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(messageData),
      });

      const responseData = await response.json();
      setResponse(responseData);
      setMessage('')
      setOpenSnack(true)
      setSms(false)

    } catch (error) {
      console.error('Error sending SMS:', error);
      setFail(true)
    }
  };

  return (
    <>
      <TextField
        label="Type your message"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <Button style={{backgroundColor: '#3B5998', fontWeight: 600}} variant='contained' onClick={sendMessage}>Send SMS</Button>

    </>
  );
}
