import React from 'react'
import { Select, MenuItem, FormControl, InputLabel, Menu, Container, Box } from '@mui/material'
import { Link, Outlet } from 'react-router-dom'
export default function Forms() {
  return (
    <>
      <div style={{
        border: '1px solid red',
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}>

          {/* <FormControl sx={{
            width: '100%',
            maxWidth: '75%',
            marginTop: '1em',
            }}>
            <InputLabel>Select Form</InputLabel>
            <Select
              label="Select Form"
            >
              <MenuItem value="certificate"><Link to='certificate-request-form'>Certificate</Link></MenuItem>
              <MenuItem value="enrollment"><Link to="enrollment-request-form">Enrollment</Link></MenuItem>
              <MenuItem value="equipment"><Link to="equipment-request-form">Equipment</Link></MenuItem>
              <MenuItem value="facility"><Link to="facility-request-form">Facility</Link></MenuItem>
              <MenuItem value="medicine"><Link to="medicine-request-form">Medicine</Link></MenuItem>

            </Select>
          </FormControl>
            */}
            <Link to="enrollment-request-form">enrollment</Link>

        <Container spacing={2} sx={
          { paddingTop: '1em',
            border: '1px solid green',
            height: '90%', display:'flex',
            justifyContent: 'center',
            backgroundColor: 'rgb(255,255,255)'
          }
          }>
            <Outlet/>
        </Container>

      </div>

    </>
  )
}
