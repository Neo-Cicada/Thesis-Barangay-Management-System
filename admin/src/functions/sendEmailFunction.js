async function sendEmailFunction(to, subject, html) {
    console.log('Sending email to:', to);
    const emailData = {
      to: to,
      subject: subject,
      html: html,
    };
  
    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });
  
      if (response.status === 200) {
        console.log('Email sent successfully');
        return true; // Indicate success
      } else {
        console.error('Email sending failed. Status:', response.status);
        return false; // Indicate failure
      }
    } catch (error) {
      console.error('Error sending email:', error);
      return false; // Indicate failure
    }
  }
  
  export default sendEmailFunction;
  