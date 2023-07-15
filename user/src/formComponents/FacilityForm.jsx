import React from 'react'
import {
    TextField, Box, Grid, FormControl, Select, MenuItem, InputLabel, TextareaAutosize,
    FormControlLabel, Checkbox, FormGroup, Button,
} from '@mui/material'

const FacilityForm = () => {
    const style = {
        display: 'flex',
        justifyContent: 'center',
        height: '14%',
        alignItems: 'center'
    }
    return (
        <>
            <form onSubmit=''>
                <Box sx={{ ...style, gap: '4em' }}>
                    <TextField variant='outlined' label="Firstname" />
                    <TextField variant="outlined" label="Lastname" />

                </Box>
                <Box sx={{ ...style, gap: '4em' }}>
                    <TextField label="Email" />
                    <TextField label="Phone number" />

                </Box>
                <Box sx={{ ...style }}>
                    <FormControl fullWidth>
                        <InputLabel>Available Facility</InputLabel>
                        <Select
                            label="Available Facility"
                        >
                            <MenuItem>Test</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ ...style, gap: '1em' }}>
                    <FormControl sx={{ width: '50%' }}>
                        <InputLabel>Available Date</InputLabel>
                        <Select
                            label="Available Date"
                        >
                            <MenuItem>Test</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ width: '50%' }}>
                        <InputLabel>Available Time</InputLabel>

                        <Select
                            label="Available Time"
                        >
                            <MenuItem>Test</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ ...style, gap: '4em' }} >
                    <TextareaAutosize

                        style={{ resize: 'none', height: '100%', width: '100%', fontSize: '1.2rem', paddingLeft: '.8em' }} // Disable resizing
                        placeholder="Messege"
                        aria-label="fixed size textarea"
                    />
                </Box>
                <Box sx={{ ...style}}>

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