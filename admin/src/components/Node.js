// 5c88d8fc6088c5a22bfda030af8526d2
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import admin from 'firebase-admin';
import nodemailer from 'nodemailer';

const app = express();
const port = 3001;
app.use(cors({ origin: '*' }));

// Replace with your Semaphore API key
const smsApiKey = '5c88d8fc6088c5a22bfda030af8526d2';
const sendername = 'SEMAPHORE';


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
// Email

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
//Firebase
admin.initializeApp({
  credential: admin.credential.cert({
    "type": "service_account",
    "project_id": "e-barangay-15146",
    "private_key_id": "8e202f9f60f4041e5a4b0bfdaab0be00d0a8f444",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC34W3HKmyLb7ba\no7U1jSblgCOuQ6I2WuCh8utAl/2lBS5IBpx3Zt8NV4eIyx7/kOX8fbuYUKa62vrK\nzRLB0w2TZi077+xcpXqY2iWyyEeun/SkeYojjzNtqwJEudzGLNGa2iqpeL/wRApe\nUwC0dzbkAgFf3ze3KQuUjwKw9qghMYNhS7N59rsePKPY7OHIRdMIF2ECois1WXrt\nRnEOuRSFoE51680nr4MGQFWsidBGyALjve+tq16VwsGDwwctAS1pDCc/skCTJVtP\nKGGQRy9eyvB3FlBo/U+P+TA0GchqL7hP2Mi+ft0zRV7ieCd+3u3NwSB6G0S8SjeX\nVwhryFtTAgMBAAECggEACnYUSUb0GvC1nfW/WvcXVeo23XSyl1YPPpdz495hy1Ai\npG1f3HkpSniG2PT5Y//J3dYHZLB989Z+eyg0n3tS4+Zlv2m0cEbn1SdgCq5TSa+G\n+w6BGenNOrmGbQOH+GxXVnCACdk5TkGIt3oQabP4lvs4OcyYvl5i7sY+GHRH929h\ngXPzhCy+TgWVDrBiXGrSvCdMH3bw/tNtfdEw/eb2yT4t+hSp7t60UAU2+fT2VxNC\nc/Ea+4eV3Emx+A6mZLh8e2oC1tjAGjQrqJiMZ/1f6CQyI0DiXr/yfV9e92jw/xy1\niv3gi7n5RTTfgU6nMDeDOvLXSebjI8ekaRwYj4Y14QKBgQDdQ8jGe09u4JwVETRz\nkqEnVikxcztRTRrf6T9NdjLqed3W+cSbWRZ3bcU2DqzTLuMlWMJM1+v5FNzpt4IE\n3qqKpQ74H5FtaCGfMxkohFSpWGnVI2CsDgdFnc4/1+CXjt1wr3q35UTEk2kM/D6L\n/ElRg8Kuf7oYDA9eMGVStwPM4QKBgQDUvz5npdLUcdEYW1gYvbchPjxNYAWP8RKb\nV5v5MQ5WzFqr7G/5OoW9PSBjnOf8/N6L9erak+6bpp9y0McAxSEIUi9bfWWpDE4A\nGW+n9vyW4ULpT7nJmCZkwvkr1cr2j3jSaNOk34INa6J1hYpaMFDIO/t5/p/by4mO\nIhPSgDlaswKBgQCOemyZ6qN+uWGoazjERyJAq0nBTvteYfExSAf8QGWO+URxfsos\nYpSF+Qhpw89j+ahIzzvmsY+BB/8s/H7b1eopdxoJioJh2hD0a7oCjhvaJFWZ6rsA\nb9Qc7v31vHQiA9vyCP1T122Ny4J02yUHjUBFHjxJk3PosjNfKnjEZ5cp4QKBgQC5\nd0OC/ifO9q4vSqqBXxqAC45scdJHiwUKkZSy59Y1Sw+co5F2N1OSBvDuhkIj5Zpp\nb2hfRumTne2RHXrvK+tBIsyQOMBgYA67vXD+f63yJsy7MrqniVGnM+YfFdFLowXU\ngHhJWmQ5KOVHCLT1LPuvo8L2tkhMR6NSWljngMr/SwKBgBU64q2eE4MNxsQISbwe\ngjfZc8kcMUYP8ZFMgKN3NJDXEGt7vunTHS7+bWJP1ZfZTgFURkPV72R0wk0Z6Dv/\n3yrJqFJeK+noUNczwSvvqgdHayU/yoILbVzOq+jEj8zUGsGa3TxV5PH611Gve3rY\ncIlQGMsSWmws/n64ybjr7W0M\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-2zptr@e-barangay-15146.iam.gserviceaccount.com",
    "client_id": "104708178136214279464",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-2zptr%40e-barangay-15146.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  })
});
app.get('/api/listUsers', async (req, res) => {
  try {
    const listUsersResult = await admin.auth().listUsers();
    const users = listUsersResult.users.map(user => user.toJSON());
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error listing users' });
  }
});

app.put('/api/updateUser/:uid', async (req, res) => {
  try {
    const { uid } = req.params;
    const { displayName, email } = req.body;

    // Implement the logic to update the user with the provided UID
    // You can use admin.auth().updateUser() to update user information
    // For example:
    await admin.auth().updateUser(uid, {
      displayName,
      email,
    });

    res.json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error updating user' });
  }
});
app.delete('/api/deleteUser/:uid', async (req, res) => {
  try {
    const { uid } = req.params;

    // Implement the logic to delete the user with the provided UID
    // You can use admin.auth().deleteUser() to delete the user
    await admin.auth().deleteUser(uid);

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting user' });
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
