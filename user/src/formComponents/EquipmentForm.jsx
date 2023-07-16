import React from 'react'
import { TextField, Box, Grid, FormControl, Select, MenuItem, InputLabel, TextareaAutosize,
  FormControlLabel, Checkbox, FormGroup, Button, } from '@mui/material'
import { useState } from 'react'
  export default function EquipmentForm() {
  const style ={
    display: 'flex',
    justifyContent: 'center',
    height: '14%',
    alignItems: 'center'
  }
  return (
    <>
      <form onSubmit=''>
        <Box sx={{...style, gap: '4em'}}>
          <TextField variant="outlined" label="Firstname" />
          <TextField variant="outlined" label="Lastname" />

        </Box>
        <Box sx={{...style, gap: '4em'}}>
          <TextField variant="outlined" label="Phone Number" />
          <TextField variant="outlined" label="Email address" />
        </Box>
        <Box sx={{...style, gap: '4em'}}>
          <TextField variant="outlined" label="Start Date" />
          <TextField variant="outlined" label="End Date" />
        </Box>
        <Box sx={{...style, gap: '4em'}}>
          <FormControl fullWidth>
            <InputLabel >Select Available Equipment</InputLabel>
            <Select label="Select Available Equipment">
              <MenuItem>Test</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={style}>
          <TextareaAutosize

            style={{ resize: 'none', height: '100%', width: '100%', fontSize: '1.2rem', paddingLeft: '.8em'}} // Disable resizing
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
