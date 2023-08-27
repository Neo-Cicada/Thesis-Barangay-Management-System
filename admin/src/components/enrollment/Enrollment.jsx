import React from 'react'
import { Container, Box, Button } from '@mui/material'
import EnrollmentRequest from './EnrollmentRequest'
import {useState} from 'react'
import Enrolled from './Enrolled'
import EnrollmentRejected from './EnrollmentRejected'
export default function Enrollment() {
  const [status, setStatus] = useState(true)
  return (
    <>
      <Container sx={{
          border: '1px solid red',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column'
          }}>

        <Box sx={{border:'1px solid black', height:'90%', display: 'flex'}}>
          <Box sx={{width: '70%', border: '1px solid red'}}>
            <EnrollmentRequest/>
          </Box>
          <Box sx={{width: '30%', border: '1px solid red', display:'flex', flexDirection: 'column'}}>
            <Box sx={{display: 'flex', justifyContent:'center', alignItems:'center', gap:'1em', width: '100%', height: '10%'}}>
              <Button onClick={()=>setStatus(true)}>Enrolled</Button>
              <Button onClick={()=>setStatus(false)}>Rejected</Button>
            </Box>
            <Box sx={{border:'1px solid green', height: '90%'}}>
              {status ? <Enrolled/> : <EnrollmentRejected/>}
            </Box>

          </Box>
        </Box>
      </Container>
    </>
  )
}
