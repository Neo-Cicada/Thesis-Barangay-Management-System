import React, { useState } from 'react';

export default function SendMessage() {
  const [response, setResponse] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const sendMessage = async () => {
    const apiUrl = 'http://localhost:3001/send-sms'; // Replace with your server URL

    const messageData = {
      number: phoneNumber,
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
    } catch (error) {
      console.error('Error sending SMS:', error);
    }
  };

  return (
    <div>
      <h2>Send SMS</h2>
      <label>
        Recipient's Phone Number:
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </label>
      <label>
        Message:
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <button onClick={sendMessage}>Send SMS</button>
      {response && (
        <div>
          <h2>Response:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
