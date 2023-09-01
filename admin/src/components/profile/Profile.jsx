import React from 'react'
import { Box, Button, Container, TextField } from '@mui/material'
import AdminProfile from './AdminProfile'
import { useState } from 'react'
import OtherAdmin from './OtherAdmin';
export default function Profile() {
  const [profile, setProfile] = useState("profile");
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
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <Box sx={{ display: 'flex', gap: '1em' }}>
              <Box>
                <Button onClick={() => setProfile("profile")}>Profile</Button>
              </Box>
              <Box>
                <Button onClick={() => setProfile("Admin")}>Other Admins</Button>
              </Box>
            </Box>
            <Box>
              Logout
            </Box>
          </Box>
          <Box sx={{
            width: '100%', border: '1px solid red', height: '95%',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            gap: '3em'
          }}>
            {profile === "profile" ? <AdminProfile /> : <OtherAdmin />}
          </Box>
        </Container>
      </Container>
    </>
  )
}
