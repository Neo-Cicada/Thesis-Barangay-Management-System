import React from 'react'
import { Box, Button, Container, TextField } from '@mui/material'
import AdminProfile from './AdminProfile'
export default function Profile() {
  return (
    <>
      <Container sx={{ display: 'flex', paddingTop: '1em', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
        <Box sx={{ height: '10%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Account Setting
        </Box>
        <Container sx={{
          border: '1px solid red', height: '90%',
          display: 'flex', flexDirection: 'column', alignItems: 'center'
        }}>
          <Box sx={{
            display: 'flex',
            gap: '1em',
            border: '1px solid red',
            width: '100%',
            height: '5%',
            alignItems: 'center'
          }}>
            <Box>
              Profile
            </Box>
            <Box>
              Other Admins
            </Box>
          </Box>
          <Box sx={{
            width: '100%', border: '1px solid red', height: '95%',
            display: 'flex', flexDirection: 'column', alignItems: 'center'
          }}>
            <AdminProfile/>
          </Box>
        </Container>
      </Container>
    </>
  )
}
