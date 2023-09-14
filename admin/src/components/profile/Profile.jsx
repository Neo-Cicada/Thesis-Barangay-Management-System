import React from 'react'
import { Box, Button, Container, TextField } from '@mui/material'
import { useState } from 'react'
import DashboardBox from '../DashboardBox';
export default function Profile() {
  const [profile, setProfile] = useState("profile");
  return (
    <>
      <Container sx={{height:'100%', width:'100%', border:'1px solid red'}}>
      <Box sx={{border:'1px solid red', height:'20%', display:'flex', justifyContent:'space-around'}}>
        <Box>Manage Profile</Box>
        <DashboardBox name={'Current Admin'}/>
        <DashboardBox name={'numbers of admin'}/>
        
      </Box>

      <Box sx={{height:'80%', border:'1px solid hotpink'}}>
        qweqw
      </Box>
      </Container>
    </>
  )
}
