import React from 'react'
import { Box, Button, Container, TextField } from '@mui/material'
import { useState } from 'react'
import DashboardBox from '../DashboardBox';
import ChecklistIcon from '@mui/icons-material/Checklist';
import DashboardNavigation from '../DashboardNavigation';
export default function Profile() {
  const [profile, setProfile] = useState("profile");
  return (
    <>
      <div style={{ height: '100%', width: '100%', border: '1px solid red' }}>
        <Container style={{ height: '30%', display: 'flex', flexDirection: 'column', gap: '1em' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h3>Manage Profile</h3>
          </div>
          <Box sx={{ display: 'flex', gap: '1em' }}>
            <DashboardBox
              name="Current Admin"

              logo={<ChecklistIcon />} />
            <DashboardBox
              name="Numbers of admins"
              logo={<ChecklistIcon />} />
            
          </Box>
        </Container>
        <DashboardNavigation  />

      </div>
    </>
  )
}
