import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
function SendEmail({ to, setEmail, setEmailFail, setEmailSuccess }) {

  const [subject, setSubject] = useState('')
  const [html, setHtml] = useState('')




  const sendEmail = async () => {
    const emailData = {
      to: to,
      subject: subject,
      html: html
    }
    try {
      const response = await fetch('http://localhost:3001/send-email', {
        // mode: 'no-cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      if (response.status === 200) {
        console.log('sucess')
        setEmailSuccess(true)
      } else {
        console.error('Email sending failed');
        setEmailFail(true)

      }
    } catch (error) {
      console.error('Error sending email:', error);
      setEmailFail(true)
    }
    setSubject('');
    setHtml('');
    setEmail(false)
  };

  return (
    <>


      <TextField
        fullWidth
        label="Email Subject"
        type="text"
        name="subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />


      <TextField
        fullWidth
        multiline
        rows={4}
        label="Email Body"
        value={html}
        onChange={(e) => setHtml(e.target.value)}
      />


      <Button style={{ backgroundColor: '#3B5998', fontWeight: 600 }} variant="contained" onClick={sendEmail}>Send Email</Button>


    </>
  );
}

export default SendEmail;