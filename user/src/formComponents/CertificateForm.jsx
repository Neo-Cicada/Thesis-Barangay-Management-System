import React from 'react'
import {
  TextField, Box, Grid, FormControl, Select, MenuItem, InputLabel, TextareaAutosize,
  FormControlLabel, Checkbox, FormGroup, Button, Alert, Dialog, DialogContent
} from '@mui/material'
import { useState } from 'react'
import useUpload from '../hooks/useUpload';
import useRead from '../hooks/useRead'
import Agreement from '../components/dialogs/Agreement';
import ShowInformation from '../components/dialogs/ShowInformation';
//TODO: Add a confirmation dialog to each forms
export default function CertificateForm() {
  const [firstName, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [certificate, setCertificate] = useState('');
  const [messege, setMessege] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(true)
  const [showAgreement, setShowAgreement] = useState(false)
  const [showInformation, setShowInformation] = useState(false)
  const handleAgreement = (e) => {
    e.preventDefault();
    setShowAgreement(!showAgreement)
  }
  const handleShowInformation = (e) => {
    e.preventDefault();
    setShowInformation(!showInformation)
  }
  const handleCloseAgreement = (e) => {
    e.preventDefault();
    setShowAgreement(false)
  }
  const handleCloseInformation = (e) => {
    e.preventDefault();
    setShowInformation(false)
  }
  const [data, setData] = useState([])
  useRead('Certificates', setData)


  const items = data.map((item) => {
    return (
      <MenuItem key={item.id} value={item.type} id={item.id}>
        {item.type}
      </MenuItem>
    )
  })


  const style = {
    display: 'flex',
    justifyContent: 'center',
    height: '15%',
    alignItems: 'center'
  }
  const formData = {
    firstname: firstName,
    lastname: lastname,
    phoneNumber: phoneNumber,
    email: email,
    certificate: certificate,
    messege: messege,
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    useUpload(formData, 'CertificateRequest').then(
      console.log('upload successfully')
    )
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

        <Box sx={{ ...style, gap: '4em' }}>
          <Box sx={{ width: "13em" }}>
            <TextField
              variant="outlined"
              label="Firstname"
              value={firstName}
              onChange={(e) => {
                const inputValue = e.target.value;
                if (/^[A-Za-z]*$/.test(inputValue) || inputValue === '') {
                  setFirstName(inputValue);
                }
              }}
              fullWidth
              error={!/^[A-Za-z]*$/.test(firstName)}
              helperText={/^[A-Za-z]*$/.test(firstName) ? '' : 'Please enter a valid firstname'}
              required
            />

          </Box>

          <Box sx={{ width: "13em" }}>
            <TextField
              variant="outlined"
              label="Lastname"
              value={lastname}
              onChange={(e) => {
                const inputValue = e.target.value;
                if (/^[A-Za-z]*$/.test(inputValue) || inputValue === '') {
                  setLastName(inputValue);
                }
              }}
              fullWidth
              error={!/^[A-Za-z]*$/.test(lastname)}
              helperText={/^[A-Za-z]*$/.test(lastname) ? '' : 'Please enter a valid lastname'}
              required
            />
          </Box>
        </Box>
        <Box sx={{ ...style, gap: '4em' }}>
          <Box sx={{ width: '13em' }}>
            <TextField
              variant="outlined"
              label="Phone Number"
              value={phoneNumber}
              onChange={(e) => {
                const inputValue = e.target.value;
                if (/^\d{0,10}$/.test(inputValue)) {
                  setPhoneNumber(inputValue);
                }
              }}
              fullWidth
            />

          </Box>
          <Box sx={{ width: "13em" }}>
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
            {!isValidEmail && <p style={{ color: 'red',  }}><small>Please enter a valid email address</small></p>}

          </Box>
        </Box>
        <Box sx={{ ...style, gap: '4em' }}>
          <Box sx={{ width: '30em' }}>
            <FormControl fullWidth>
              <InputLabel >Select Certificate</InputLabel>
              <Select label="Select Certificate"
                value={certificate}
                onChange={(e) => setCertificate(e.target.value)
                }
                fullWidth
              >
                {items}
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box sx={style}>

          <TextareaAutosize
            value={messege}
            style={{ resize: 'none', height: '100%', width: '100%', fontSize: '1.2rem', paddingLeft: '.8em' }} // Disable resizing
            placeholder="Messege"
            aria-label="fixed size textarea"
            onChange={(e) => setMessege(e.target.value)}
          />
        </Box>
        <Box sx={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', marginTop: '1em',
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
              firstname={firstName} lastname={lastname}
              phone={phoneNumber} certificates={certificate} email={email} message={messege} />
          </DialogContent>
        </Dialog>
      )

      }

      {showAgreement && (
        <Dialog open={showAgreement} onClose={handleCloseAgreement} maxWidth="md" fullWidth>
          <DialogContent>
            <Agreement />
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}
