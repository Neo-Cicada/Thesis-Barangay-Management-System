import React from 'react'
import { Container, Box, Button } from '@mui/material'
export default function Enrollment() {
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
          <Box sx={{width: '70%', border: '1px solid red'}}> {/*box for request */}

          </Box>
          <Box sx={{width: '30%', border: '1px solid red', display:'flex', justifyContent:'center', gap:'1em'}}>
            <Box>Enrolled</Box>
            <Box>Rejected</Box>
          </Box>
        </Box>
      </Container>
    </>
  )
}
