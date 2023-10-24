import React, { useState } from 'react'
import '../styles/login.css'
import TextField from '@mui/material/TextField';
import { Button, Snackbar, Alert } from '@mui/material';
import { signInWithEmailAndPassword } from "firebase/auth";
import { NavLink, Navigate, useNavigate, } from 'react-router-dom';
import { auth } from '../firebase'
import App from '../App';
import GreenToast from './GreenToast';
import RedToast from './RedToast'
import Logo from '../assets/oiweo.png'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
export default function Login({ setLoginStatus }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);
  const [toast, setToast] = useState(false)
  const [redToast, setRedToast] = useState(false)
  const [emailToast, setEmailToast] = useState(false)
  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        setToast(true)
        setTimeout(() => {
          setLoginStatus(true);
        }, 2000); // 3000 milliseconds (3 seconds)
      }
      )
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setRedToast(true)
        console.log('Hello error', errorCode, errorMessage);
      })
  }
  const onResetPassword = (e) => {
    e.preventDefault
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setEmailToast(true)
        // Password reset email sent!
        console.log('send in email')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  return (
    <>
      <div className='login-container'>
        <form className='login-box'>
          {/* <h1 className='ebarangay' style={{textAlign:'center'}}>eBarangay Login</h1> */}
          <div><img src={Logo} alt="" /></div>
          <TextField
            sx={{
              width: {
                xs: 200,
                sm: 300,
                md: 400,
                lg: 500,
                xl: 600,
              }
            }}
            name='email'
            type='email'
            label={redToast ? "Wrong Email" : "Email"}
            error={redToast}
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            sx={{
              width: {
                xs: 200,
                sm: 300,
                md: 400,
                lg: 500,
                xl: 600,
              }
            }}
            name='password'
            type='password'
            label={redToast ? "Wrong Password" : "Password"}
            variant="outlined"
            error={redToast}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            style={{ backgroundColor: '#3B5998', fontWeight: 600 }}
            onClick={onLogin}
            variant="contained"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                onLogin();
              }
            }}
          >
            Login
          </Button>
          <div id='forgot-password' onClick={onResetPassword} >Forgot password</div>
        </form>
      </div>
      <GreenToast open={toast} onClose={() => setToast(!toast)} />
      <RedToast
        open={redToast}
        onClose={() => setRedToast(false)}
        content={"Invalid Credentials: The email or password you entered is incorrect. Please double-check and try again."} />
      <Snackbar open={emailToast} autoHideDuration={6000} onClose={() => setEmailToast(false)}>
        <Alert onClose={() => setEmailToast(false)} severity="success" sx={{ width: '100%' }}>
          Password reset email sent!
        </Alert>
      </Snackbar>
    </>
  )
}
