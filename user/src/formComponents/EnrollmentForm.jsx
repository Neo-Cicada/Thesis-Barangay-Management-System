import React from 'react'
import { Box, TextField, Typography, Button, Container } from '@mui/material'
export default function EnrollmentForm() {

  return (
    <>
      <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxHeight: '35em',
        height: '100%',
        overflow: 'auto', // Adding scrollable overflow
        paddingTop: '1em',
        gap: '1em',
        border: '1px solid red'
      }}>
        <form style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 'none'
        }}>
          <Box>Child Information</Box>
          <Box>
            <TextField />
            <TextField />
          </Box>
          <Box>
            <TextField />
            <TextField />
          </Box>
          <Box>
            <TextField />
            <TextField />
          </Box>
          <Box>Parents and Guardian Information</Box>
          <Box>Father Information</Box>
          <Box>
            <TextField />
            <TextField />
          </Box>
          <Box>
            <TextField />
            <TextField />
          </Box>
          <Box>
            <TextField />
            <TextField />
          </Box>
          <Box>Mother Information</Box>
          <Box>
            <TextField />
            <TextField />
          </Box>
          <Box>
            <TextField />
            <TextField />
          </Box>
          <Box>
            <TextField />
            <TextField />
          </Box>
          <Box>Guardian Information</Box>
          <Box>
            <TextField />
            <TextField />
          </Box>
          <Box>
            <TextField />
            <TextField />
          </Box>
          <Box>
            <TextField />
            <TextField />
          </Box>
        </form>
      </Container>
    </>
  )
}
