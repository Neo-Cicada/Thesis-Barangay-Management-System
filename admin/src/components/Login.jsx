import React from 'react'
import '../styles/login.css'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
export default function Login() {
  return (
    <>
      <div className='login-container'>
        <div className='login-box'>
          <h1 className='e-barangay'>E-Barangay</h1>
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <Button variant="contained">Login</Button>
        <a id='forgot-password'>forgot password</a>
        </div>
      </div>
    </>
  )
}
