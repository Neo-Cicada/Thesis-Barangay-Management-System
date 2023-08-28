import React from 'react'
import { Container, Box } from '@mui/material'

export default function FatherInfo({data}) {
  return (
    <>
       <Container sx={{border: '1px solid green', height: '100%', paddingTop:'1em'}}>
        <Box onClick={()=>console.log(data)}>
          Firstname: {data.fatherFirstName}
        </Box>
        <Box>
          Lastname: {data.fatherLastName}
        </Box>
        <Box>
          Occupation: {data.fatherOccupation}
        </Box>
        <Box>
          Email: {data.fatherEmail}
        </Box>
        <Box>
          Phone Number: {data.fatherPhoneNumber}
        </Box>
        <Box>
          view marriage certificate here
        </Box>
      </Container>
    </>
  )
}
