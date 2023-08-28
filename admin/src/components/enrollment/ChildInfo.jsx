import React from 'react'
import { Container, Box } from '@mui/material'
export default function ChildInfo({data}) {
  return (
    <>
      <Container sx={{border: '1px solid green', height: '100%', paddingTop:'1em'}}>
        <Box onClick={()=>console.log(data)}>
          Firstname: {data.childFirstName}
        </Box>
        <Box>
          Lastname: {data.childLastName}
        </Box>
        <Box>
          Middle name: {data.childMiddleName}
        </Box>
        <Box>
          Birth Date: {data.childBirthDate}
        </Box>
        <Box>
          click here to view birth certificate
        </Box>
        <Box>
          click here to view health certificate
        </Box>
      </Container>
    </>
  )
}
