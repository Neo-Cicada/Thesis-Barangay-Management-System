import React from 'react'
import {
  TextField, Box, Grid, FormControl, Select, MenuItem, InputLabel, TextareaAutosize,
  FormControlLabel, Checkbox, FormGroup, Button, Dialog, DialogContent
} from '@mui/material'
import { useState } from 'react'
import useUpload from '../hooks/useUpload'
import useRead from '../hooks/useRead'
import Agreement from '../components/dialogs/Agreement'
import ShowInformation from '../components/dialogs/ShowInformation'
export default function MedicineForm() {
  const [firstName, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [medicine, setMedicine] = useState('');
  const [messege, setMessege] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [quantity, setQuantity] = useState('')
  const [data, setData] = useState([])

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
  useRead('Medicines', setData);
  const items = data.map((item) => {
    return (
      <MenuItem key={item.id} value={item.type} id={item.id}>
        {item.type}
      </MenuItem>
    )
  })
  const formData = {
    firstName: firstName,
    lastname: lastname,
    phoneNumber: phoneNumber,
    email: email,
    medicine: medicine,
    message: messege,
    status: 'request',
    quantity: quantity
  }
  const style = {
    display: 'flex',
    justifyContent: 'center',
    height: '15%',
    alignItems: 'center'
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    useUpload(formData, 'MedicineAllRequest').then(console.log('Successfully uploaded'))
    setFirstName('')
    setLastName('')
    setPhoneNumber('')
    setEmail('')
    setMessege('')
    setMedicine('')
    setQuantity('')
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box sx={{ ...style, gap: '4em' }}>
          <TextField
            value={firstName}
            label="Firstname"
            onChange={(e) => {
              const inputValue = e.target.value;
              if (/^[a-zA-Z ]*$/.test(inputValue) || inputValue === '') {
                setFirstName(inputValue);
              }
            }}
          />
          <TextField
            value={lastname}
            label="Lastname"
            onChange={(e) => {
              const inputValue = e.target.value;
              if (/^[a-zA-Z ]*$/.test(inputValue) || inputValue === '') {
                setLastName(inputValue);
              }
            }}
          />

        </Box>
        <Box sx={{ ...style, gap: '4em' }}>
          <TextField
            value={phoneNumber}
            label="Phone Number"
            placeholder="09..."
            onChange={(e) => {
              const inputValue = e.target.value;
              if (/^0\d{0,10}$/.test(inputValue)) {
                setPhoneNumber(inputValue);
              }
            }}
          />
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
          <FormControl fullWidth>
            <InputLabel >Select Medicine</InputLabel>
            <Select
              value={medicine}
              label="Select Medicine"
              onChange={(e) => setMedicine(e.target.value)}
            >
              {items}
            </Select>
          </FormControl>
            <TextField
            fullWidth
            label="Quantity"
            type='number'
            value={quantity}
            onChange={(e)=>setQuantity(e.target.value)}
            // put max base on the item selected
            />
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
              <span onClick={handleAgreement}>
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
              firstname={firstName}
              lastname={lastname}
              phone={phoneNumber}
              email={email}
              message={messege}
              medicine={medicine}
            />
          </DialogContent>
        </Dialog>
      )

      }
      {showAgreement &&
        <Dialog open={showAgreement} onClose={handleCloseAgreement} maxWidth="md" fullWidth>
          <DialogContent>
            <Agreement />
          </DialogContent>
        </Dialog>}
    </>
  )
}
