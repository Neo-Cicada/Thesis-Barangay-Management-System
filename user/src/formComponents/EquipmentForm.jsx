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

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
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
        onChange={(e) => setFirstName(e.target.value)}
        label="First Name"
        error={firstname === ''}
        helperText={firstname === '' ? 'First name is required' : ''}
      />
      <TextField
        value={lastname}
        onChange={(e) => setLastName(e.target.value)}
        label="Last Name"
        error={lastname === ''}
        helperText={lastname === '' ? 'Last name is required' : ''}
      />

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
                onChange={(e) => setStartDate(e.target.value)}
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
                onChange={(e) => setEndDate(e.target.value)}
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
