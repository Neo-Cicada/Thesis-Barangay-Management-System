import React from 'react'
import { Container, Box } from '@mui/material'
export default function GuardianInfo({data}) {
  return (
    <>
      <Container sx={{border: '1px solid green', height: '100%', paddingTop:'1em'}}>
        <Box onClick={()=>console.log(data)}>
          Firstname: {data.guardianFirstName}
        </Box>
        <Box>
          Lastname: {data.guardianLastName}
        </Box>
        <Box>
          Relationship with the kid: {data.fatherOccupation}
        </Box>
        <Box>
          Email: {data.guardianEmail}
        </Box>
        <Box>
          Phone Number: {data.guardianPhoneNumber}
        </Box>
        
      </Container>
    </>
  )
}
