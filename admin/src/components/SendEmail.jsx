import React, { useState } from 'react';

export default function SendEmail() {
  const [emailData, setEmailData] = useState({
    dest: '',
    subject: '',
    html: '',
  });

  const handleEmailChange = (e) => {
    const { name, value } = e.target;
    setEmailData({ ...emailData, [name]: value });
  };

  const sendEmail = async () => {
    // Define the endpoint URL for sending emails (replace with your server URL)
    const emailEndpoint = '/send-email';

    try {
      // Make an HTTP POST request to your server
      const response = await fetch(emailEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        // Email request was sent successfully
        console.log('Email request sent successfully');
      } else {
        // Handle the error when the email request fails
        console.error('Error sending email request');
      }
    } catch (error) {
      // Handle network or request-related errors
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Send Email</h2>
      <div>
        <label>Recipient Email:</label>
        <input
          type="text"
          name="dest"
          value={emailData.dest}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <label>Subject:</label>
        <input
          type="text"
          name="subject"
          value={emailData.subject}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <label>HTML Content:</label>
        <textarea
          name="html"
          value={emailData.html}
          onChange={handleEmailChange}
        />
      </div>
      <button onClick={sendEmail}>Send Email</button>
    </div>
  );
}
