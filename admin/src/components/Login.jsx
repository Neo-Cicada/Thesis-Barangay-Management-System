import React, { useState } from 'react'
import '../styles/login.css'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { signInWithEmailAndPassword } from "firebase/auth";
import { NavLink, Navigate, useNavigate,} from 'react-router-dom';
import { auth } from '../firebase'
import App from '../App';
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);
  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log('welcome')
        navigate('/')
      }
      )
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Hello error',errorCode, errorMessage);
      })
  }




  return (
    <>
      <div className='login-container'>
        <form className='login-box'>
          <h1 className='e-barangay'>E-Barangay</h1>
          <TextField
            name='email'
            type='email'
            label="Email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
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
          <a id='forgot-password'>forgot password</a>
        </form>
      </div>
    </>
  )
}
