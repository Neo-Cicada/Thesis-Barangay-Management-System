import React from 'react'
import {
    TextField, Box, Grid, FormControl, Select, MenuItem, InputLabel, TextareaAutosize,
    FormControlLabel, Checkbox, FormGroup, Button, Dialog, DialogContent
} from '@mui/material'
import { useState } from 'react'
import useUpload from '../hooks/useUpload'
import Agreement from '../components/dialogs/Agreement'
import ShowInformation from '../components/dialogs/ShowInformation'
const FacilityForm = () => {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [facility, setFacility] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [messege, setMessege] = useState('');

    const [showInformation, setShowInformation] = useState(false)
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
    const formData = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phoneNumber: phoneNumber,
        facility: facility,
        date: date,
        time: time,
        message: messege,
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        useUpload(formData, 'FacilityAllRequest').then(() => console.log('successfully uploaded!!'))
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhoneNumber('')
        setFacility('')
        setDate('')
        setTime('')
        setMessege('')
    }
    const style = {
        display: 'flex',
        justifyContent: 'center',
        height: '14%',
        alignItems: 'center'
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Box sx={{ ...style, gap: '4em' }}>
                    <TextField
                        label="Firstname"
                        value={firstname}
                        onChange={(e) => {
                            const inputValue = e.target.value;
                            if (/^[a-zA-Z ]*$/.test(inputValue) || inputValue === '') {
                                setFirstName(inputValue);
                            }
                        }}
                    />
                    <TextField
                        label="Lastname"
                        value={lastname}
                        onChange={(e) => {
                            const inputValue = e.target.value;
                            if (/^[A-Za-z]*$/.test(inputValue) || inputValue === '') {
                                setLastName(inputValue);
                            }
                        }}
                    />

                </Box>
                <Box sx={{ ...style, gap: '4em' }}>
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

                    <TextField
                        value={phoneNumber}
                        label="Phone number"
                        placeholder="09..."
                        onChange={(e) => {
                            const inputValue = e.target.value;
                            if (/^0\d{0,10}$/.test(inputValue)) {
                                setPhoneNumber(inputValue);
                            }
                        }}
                    />


                </Box>
                <Box sx={{ ...style }}>
                    <FormControl fullWidth>
                        <InputLabel>Available Facility</InputLabel>
                        <Select
                            value={facility}
                            label="Available Facility"
                            onChange={(e) => setFacility(e.target.value)}
                        >
                            <MenuItem value="facility">Test</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ ...style, gap: '1em' }}>
                    <FormControl sx={{ width: '50%' }}>
                        <InputLabel>Available Date</InputLabel>
                        <Select
                            value={date}
                            label="Available Date"
                            onChange={(e) => setDate(e.target.value)}
                        >
                            <MenuItem value="date">Test</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ width: '50%' }}>
                        <InputLabel>Available Time</InputLabel>

                        <Select
                            value={time}
                            label="Available Time"
                            onChange={(e) => setTime(e.target.value)}
                        >
                            <MenuItem value='time'>Test</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ ...style, gap: '4em' }} >
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
                <Box sx={{ ...style }}>

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
                <Box sx={{ ...style }}>
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
                            facility={facility}
                            medicine
                            equipment />
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

export default FacilityForm