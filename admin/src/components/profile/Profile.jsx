import React from 'react'
import { Box, Button, Container, TextField } from '@mui/material'
import { useState } from 'react'
import DashboardBox from '../DashboardBox';
import ChecklistIcon from '@mui/icons-material/Checklist';
import DashboardNavigation from '../DashboardNavigation';
import ProfileNavigation from './ProfileNavigation';
import ProfileInformation from './ProfileInformation';

export default function Profile() {
  const [profile, setProfile] = useState("profile");
  const [status, setStatus] = useState("default")




  return (
    <>
      <div style={{ height: '100%', width: '100%', }}>
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
        <ProfileNavigation setStatus={setStatus} status={status} />
        <div style={{height:'65%', display:'flex', justifyContent:'center'}}>


          <ProfileInformation/>


        </div>
      </div>
    </>
  )
}
