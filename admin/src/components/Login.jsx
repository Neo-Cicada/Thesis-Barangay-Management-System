import React, { useState } from 'react'
import '../styles/login.css'
import TextField from '@mui/material/TextField';
import { Button, } from '@mui/material';
import { signInWithEmailAndPassword } from "firebase/auth";
import { NavLink, Navigate, useNavigate, } from 'react-router-dom';
import { auth } from '../firebase'
import App from '../App';
import GreenToast from './GreenToast';
import Logo from '../assets/oiweo.png'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
export default function Login({ setLoginStatus }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);
  const [toast, setToast] = useState(false)
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
        console.log('Hello error', errorCode, errorMessage);
      })
  }
  const onResetPassword = (e) => {
    e.preventDefault
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
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
            label="Email"
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
            label="Password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button
            onClick={onLogin}
            variant="contained"
          >
            Login
          </Button>
          <div id='forgot-password' onClick={onResetPassword} >Forgot password</div>
        </form>
      </div>
      <GreenToast open={toast} onClose={() => setToast(!toast)} />
    </>
  )
}
