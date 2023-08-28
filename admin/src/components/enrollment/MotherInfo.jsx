import React from 'react'
import { Container, Box } from '@mui/material'
export default function MotherInfo({data}) {
  return (
    <>
      <Container sx={{border: '1px solid green', height: '100%', paddingTop:'1em'}}>
        <Box onClick={()=>console.log(data)}>
          Firstname: {data.motherFirstName}
        </Box>
        <Box>
          Lastname: {data.motherLastName}
        </Box>
        <Box>
          Occupation: {data.motherOccupation}
        </Box>
        <Box>
          Email: {data.motherEmail}
        </Box>
        <Box>
          Phone Number: {data.motherPhoneNumber}
        </Box>
        <Box>
          view marriage certificate here
        </Box>
      </Container>
    </>
  )
}
