import React from 'react'
import {
    TextField, Box, Grid, FormControl, Select, MenuItem, InputLabel, TextareaAutosize,
    FormControlLabel, Checkbox, FormGroup, Button,
} from '@mui/material'
import { useState } from 'react'
const FacilityForm = () => {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [facility, setFacility] = useState('');
    const [data, setDate] = useState('');
    const [time, setTime] = useState('');
    const [messege, setMessege] = useState('');

    const style = {
        display: 'flex',
        justifyContent: 'center',
        height: '14%',
        alignItems: 'center'
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(firstname, lastname, email,phoneNumber,facility,data,time,messege)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Box sx={{ ...style, gap: '4em' }}>
                    <TextField
                        label="Firstname"
                        value={firstname}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <TextField
                        label="Lastname"
                        value={lastname}
                        onChange={(e) =>setLastName(e.target.value)}

                    />

                </Box>
                <Box sx={{ ...style, gap: '4em' }}>
                    <TextField
                        value={email}
                        label="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <TextField
                        value={phoneNumber}
                        label="Phone number"
                        onChange={(e)=> setPhoneNumber(e.target.value)}
                         />

                </Box>
                <Box sx={{ ...style }}>
                    <FormControl fullWidth>
                        <InputLabel>Available Facility</InputLabel>
                        <Select
                            value={facility}
                            label="Available Facility"
                            onChange={(e)=> setFacility(e.target.value)}
                        >
                            <MenuItem value="facility">Test</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ ...style, gap: '1em' }}>
                    <FormControl sx={{ width: '50%' }}>
                        <InputLabel>Available Date</InputLabel>
                        <Select
                            label="Available Date"
                            onChange={(e)=>setDate(e.target.value)}
                        >
                            <MenuItem value="date">Test</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ width: '50%' }}>
                        <InputLabel>Available Time</InputLabel>

                        <Select
                            value={time}
                            label="Available Time"
                            onChange={(e)=>setTime(e.target.value)}
                        >
                            <MenuItem value='time'>Test</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ ...style, gap: '4em' }} >
                    <TextareaAutosize
                        value={messege}
                        onChange={(e)=> setMessege(e.target.value)}
                        style={{ resize: 'none', height: '100%', width: '100%', fontSize: '1.2rem', paddingLeft: '.8em' }} // Disable resizing
                        placeholder="Messege"
                        aria-label="fixed size textarea"
                    />
                </Box>
                <Box sx={{ ...style }}>

                    <FormControlLabel required control={<Checkbox />} label="Agree" />

                </Box>
                <Box sx={{ ...style }}>
                    <Button type='submit' variant="contained">Submit</Button>
                </Box>
            </form>
        </>
    )
}

export default FacilityForm