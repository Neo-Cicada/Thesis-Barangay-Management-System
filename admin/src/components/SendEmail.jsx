import React, { useState } from "react";
function SendEmail() {

  const [to, setTo] = useState('')
  const [subject, setSubject] = useState('')
  const [html, setHtml] = useState('')




  const sendEmail = async () => {
    const emailData = {
      to : to,
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
      } else {
        console.error('Email sending failed');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div>
      <div>
        <label>
          To:
          <input
            type="text"
            name="to"
            value={to}
            onChange={(e)=>setTo(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Subject:
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e)=>setSubject(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          HTML:
          <textarea
            name="html"
            value={html}
            onChange={(e)=>setHtml(e.target.value)}
          />
        </label>
      </div>
      <div>
        <button onClick={sendEmail}>Send Email</button>
      </div>
     
    </div>
  );
}

export default SendEmail;