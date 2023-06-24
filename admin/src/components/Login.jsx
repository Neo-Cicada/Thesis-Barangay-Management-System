import React from 'react'
import '../styles/login.css'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
export default function Login() {
  return (
    <>
      <div className='login-container'>
        <div className='login-box'>
        <TextField id="outlined-basic" label="Email or Phone number" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <Button variant="contained">Login</Button>
        </div>
      </div>
    </>
  )
}
