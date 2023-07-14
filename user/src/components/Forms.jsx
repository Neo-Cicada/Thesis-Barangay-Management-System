import React from 'react'
import { Select, MenuItem, FormControl, InputLabel, Menu } from '@mui/material'
import {Link} from 'react-router-dom'
export default function Forms() {
  return (
    <>
      <div style={{ border: '1px solid red', height: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}>

        <FormControl sx={{ width: '100%', maxWidth: '75%', marginTop: '1em'}}>
          <InputLabel>Select Form</InputLabel>
          <Select
            label="Select Form"
          >
            <MenuItem>Test</MenuItem>
          </Select>
        </FormControl>

        <div>
          
        </div>
      </div>

    </>
  )
}
