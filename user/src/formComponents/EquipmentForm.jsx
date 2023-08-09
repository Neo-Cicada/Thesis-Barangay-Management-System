//TODO: use Select not dropdown on choosing an equipment
import React from 'react'
import {
  TextField, Box, Grid, FormControl, Select, MenuItem, InputLabel, TextareaAutosize,
  FormControlLabel, Checkbox, FormGroup, Button, Dialog, DialogContent
} from '@mui/material'
import { useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import useUpload from '../hooks/useUpload';
import useRead from '../hooks/useRead';
import Agreement from '../components/dialogs/Agreement';
export default function EquipmentForm() {

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('');
  const [messege, setMessege] = useState('');

  const [showAgreement, setShowAgreement] = useState(false)
    const handleAgreement  = (e) =>{
        e.preventDefault();
        setShowAgreement(!showAgreement)
    }
    const handleCloseAgreement = (e) =>{
        e.preventDefault();
        setShowAgreement(false)
    }

  const [data, setData] = useState([])
  useRead('Equipments', setData);



  // const selection = data.map((items) =>{
  //   <MenuItem id={items.id}>{items.Equipment}</MenuItem>
  // })
  const items = data.map((item) => {
    return (
      <MenuItem key={item.id} id={item.id} value={item.Equipment}>
        {item.Equipment}
      </MenuItem>
    )
  })

  const formData = {
    firstname: firstname,
    lastname: lastname,
    startDate: startDate,
    endDate: endDate,
    phoneNumber: phoneNumber,
    email: email,
    type: type,
    message: messege,
  }
  const style = {
    display: 'flex',
    justifyContent: 'center',
    height: '14%',
    alignItems: 'center'
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    useUpload(formData, 'EquipmentRequest').then('upload successfully')
    // console.log(formData)
    setFirstName('')
    setLastName('')
    setStartDate('')
    setStartDate('')
    setEndDate('')
    setPhoneNumber('')
    setEmail('')
    setType('')
    setMessege('')
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box sx={{ ...style, gap: '4em' }}>
          <TextField
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            label="Firstname" />
          <TextField
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            label="Lastname" />

        </Box>
        <Box sx={{ ...style, gap: '4em' }}>
          <TextField
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            label="Phone Number" />
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            label="Email address" />
        </Box>
        <Box sx={{ ...style, gap: '4em' }}>
          <FormControl fullWidth>
            <InputLabel >Select Available Equipment</InputLabel>
            <Select
              value={type}
              onChange={(e) => setType(e.target.value)}
              label="Select Available Equipment">
              {items}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ ...style, gap: '4em' }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Start Date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              label="End Date"
            />
          </LocalizationProvider>
        </Box>
        <Box sx={style}>
          <TextareaAutosize
            value={messege}
            onChange={(e) => setMessege(e.target.value)}
            style={{ resize: 'none', height: '100%', width: '100%', fontSize: '1.2rem', paddingLeft: '.8em' }} // Disable resizing
            placeholder="Messege"
            aria-label="fixed size textarea"
          />
        </Box>
        <Box sx={style}>

          <FormControlLabel
            required
            control={<Checkbox />}
            label={
              <span onClick={handleAgreement} >
                Agree to the <u>terms and conditions</u>
              </span>
            }
          />

        </Box>
        <Box sx={style}>
          <Button type='submit' variant="contained">Submit</Button>
        </Box>
      </form>
      {showAgreement && (
        <Dialog open={showAgreement} onClose={handleCloseAgreement} maxWidth="md" fullWidth>
          <DialogContent>
            <Agreement />
          </DialogContent>
        </Dialog>)}
    </>
  )
}
