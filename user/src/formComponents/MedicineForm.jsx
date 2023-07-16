import React from 'react'
import {
  TextField, Box, Grid, FormControl, Select, MenuItem, InputLabel, TextareaAutosize,
  FormControlLabel, Checkbox, FormGroup, Button,
} from '@mui/material'
import { useState } from 'react'
export default function MedicineForm() {
  const [firstName, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [medicine, setMedicine] = useState('');
  const [messege, setMessege] = useState('')

  const style = {
    display: 'flex',
    justifyContent: 'center',
    height: '15%',
    alignItems: 'center'
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastname, email, phoneNumber, medicine, messege)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box sx={{ ...style, gap: '4em' }}>
          <TextField
            label="Firstname"
            onChange={(e)=>setFirstName(e.target.value)}
          />
          <TextField
            label="Lastname"
            onChange={(e)=>setLastName(e.target.value)}
            />

        </Box>
        <Box sx={{ ...style, gap: '4em' }}>
          <TextField
            label="Phone Number"
            onChange={(e)=>setPhoneNumber(e.target.value)}

           />
          <TextField
           label="Email address"
           onChange={(e)=>setEmail(e.target.value)}

           />
        </Box>
        <Box sx={{ ...style, gap: '4em' }}>
          <FormControl fullWidth>
            <InputLabel >Select Medicine</InputLabel>
            <Select
              label="Select Medicine"
              onChange={(e)=>setMedicine(e.target.value)}

              >
              <MenuItem value='cert'>Test</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={style}>
          <TextareaAutosize
            onChange={(e)=>setMessege(e.target.value)}
            style={{ resize: 'none', height: '100%', width: '100%', fontSize: '1.2rem', paddingLeft: '.8em' }} // Disable resizing
            placeholder="Messege"
            aria-label="fixed size textarea"
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
