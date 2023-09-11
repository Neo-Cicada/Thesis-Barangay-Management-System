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
import ShowInformation from '../components/dialogs/ShowInformation';
export default function EquipmentForm() {
  const [isValidEmail, setIsValidEmail] = useState(true);

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('');
  const [messege, setMessege] = useState('');

  const [showInformation, setShowInformation] = useState(false);

  const handleShowInformation = (e) => {
    e.preventDefault()
    setShowInformation(!showInformation)
  }
  const handleCloseInformation = (e) => {
    e.preventDefault()
    setShowInformation(false)
  }
  const [showAgreement, setShowAgreement] = useState(false)
  const handleAgreement = (e) => {
    e.preventDefault();
    setShowAgreement(!showAgreement)
  }
  const handleCloseAgreement = (e) => {
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
      <MenuItem key={item.id} id={item.id} value={item.equipment}>
        {item.equipment}
      </MenuItem>
    )
  })

  const formData = {
    firstname: firstname,
    lastname: lastname,
    startDate: String(startDate.$d),
    endDate: String(endDate.$d),
    phoneNumber: phoneNumber,
    email: email,
    type: type,
    message: messege,
    status: 'ongoing'
  }
  const style = {
    display: 'flex',
    justifyContent: 'center',
    height: '14%',
    alignItems: 'center'
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    useUpload(formData, 'EquipmentAllRequest').then('upload successfully')
    console.log(startDate.$d)
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
  const validateStartDate = () => {
    return startDate !== null; // Implement your validation logic here
  };
  const validateEndDate = () => {
    return endDate !== null;
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box sx={{ ...style, gap: '4em' }}>
          <TextField
            value={firstname}
            onChange={(e) => {
              const inputValue = e.target.value;
              if (/^[a-zA-Z ]*$/.test(inputValue) || inputValue === '') {
                setFirstName(inputValue);
              }
            }}
            label="First Name"
          />
          <TextField
            value={lastname}
            onChange={(e) => {
              const inputValue = e.target.value;
              if (/^[a-zA-Z ]*$/.test(inputValue) || inputValue === '') {
                setLastName(inputValue);
              }
            }}
            label="Last Name"

          />

        </Box>
        <Box sx={{ ...style, gap: '4em' }}>
          <TextField
            value={phoneNumber}
            placeholder="09..."
            onChange={(e) => {
              const inputValue = e.target.value;
              if (/^0\d{0,10}$/.test(inputValue)) {
                setPhoneNumber(inputValue);
              }
            }}
            label="Phone Number" />
          <Box>

            <TextField
              variant="outlined"
              label="Email address"
              value={email}
              onChange={(e) => {
                const enteredEmail = e.target.value;
                setEmail(enteredEmail);
                const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
                setIsValidEmail(emailRegex.test(enteredEmail));
              }}
              required
              fullWidth
            />
            {!isValidEmail && <p style={{ color: 'red', }}><small>Please enter a valid email address</small></p>}


          </Box>
        </Box>
        <Box sx={{ ...style, gap: '4em' }}>
          <Box sx={{ width: '30em' }}>
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
        </Box>
        <Box sx={{ ...style, gap: '4em' }}>
          <Box sx={{ width: '13em', }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Start Date"
                value={startDate}
                onChange={(newStartDate) => setStartDate(newStartDate)}
                error={!validateStartDate()}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    error={!validateStartDate()}
                    helperText={!validateStartDate() ? 'Please select a start date' : ''}
                  />
                )}
              />
            </LocalizationProvider>
          </Box>
          <Box sx={{ width: '13em', }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={endDate}
                onChange={(newEndDate) => setEndDate(newEndDate)}
                label="End Date"
                error={!validateEndDate()}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    error={!validateEndDate()}
                    helperText={!validateEndDate() ? 'Please select an end date' : ''}
                  />
                )}
              />
            </LocalizationProvider>
          </Box>
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
        <Box sx={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', marginTop: '0.3em',
          fontSize: '1.1rem', color: 'red', textDecoration: 'underline',
          cursor: 'pointer'
        }} >
          <span onClick={handleShowInformation}>Review summary of informaton provided</span>
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
      {showInformation && (
        <Dialog open={showInformation} onClose={handleCloseInformation} maxWidth="md" fillWidth>
          <DialogContent>
            <ShowInformation
              firstname={firstname}
              lastname={lastname}
              phone={phoneNumber}
              email={email}
              message={messege}
              equipment={type} />
          </DialogContent>
        </Dialog>
      )

      }
      {showAgreement && (
        <Dialog open={showAgreement} onClose={handleCloseAgreement} maxWidth="md" fullWidth>
          <DialogContent>
            <Agreement />
          </DialogContent>
        </Dialog>)}
    </>
  )
}
