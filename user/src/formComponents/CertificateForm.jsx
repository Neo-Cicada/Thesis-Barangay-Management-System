import React from 'react'
import { TextField, Box, Grid, FormControl, Select, MenuItem, InputLabel, TextareaAutosize,
          FormControlLabel, Checkbox, FormGroup, Button, Alert } from '@mui/material'
import { useState } from 'react'
export default function CertificateForm() {

  const [firstName, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [certificate, setCertificate] = useState('');
  const [messege, setMessege] = useState('')
  const style ={
    display: 'flex',
    justifyContent: 'center',
    height: '15%',
    alignItems: 'center'
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(firstName, lastname, phoneNumber, email, certificate, messege);
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
    setEmail('');
    setCertificate('');
    setMessege('');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
      
        <Box sx={{...style, gap: '4em'}}>
          <TextField
            variant="outlined"
            label="Firstname"
            value={firstName}
            onChange={(e)=>{
              setFirstName(e.target.value)
            }}
            required
          />

          <TextField
            variant="outlined"
            label="Lastname"
            value={lastname}
            onChange={(e)=>{
              setLastName(e.target.value)
            }}
            required

            />

        </Box>
        <Box sx={{...style, gap: '4em'}}>
          <TextField
            variant="outlined"
            label="Phone Number"
            value={phoneNumber}
            onChange={(e)=>setPhoneNumber(e.target.value)}
            required
          />
          <TextField
            variant="outlined"
            label="Email address"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required

            />
        </Box>
        <Box sx={{...style, gap: '4em'}}>
          <FormControl fullWidth>
            <InputLabel >Select Certificate</InputLabel>
            <Select label="Select Certificate"
              value={certificate}
              onChange={(e)=>setCertificate(e.target.value)
              }
            >
              <MenuItem value="test">Test</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={style}>
          <TextareaAutosize
            value={messege}
            style={{ resize: 'none', height: '100%', width: '100%', fontSize: '1.2rem', paddingLeft: '.8em'}} // Disable resizing
            placeholder="Messege"
            aria-label="fixed size textarea"
            onChange={(e)=>setMessege(e.target.value)}
          />
        </Box>
        <Box sx={style}>

            <FormControlLabel required control={<Checkbox />} label="Agree" />

        </Box>
        <Box sx={style}>
          <Button type='submit' variant="contained">Submit</Button>
        </Box>
      </form>

    </>
  )
}
