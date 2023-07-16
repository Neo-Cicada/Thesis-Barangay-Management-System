import React from 'react'
import { Box, TextField, Typography, Button } from '@mui/material'
export default function EnrollmentForm() {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    height: '13%',
    alignItems: 'center',
    maxWidth: '36em'
  }
  return (
    <>
      <form>
        <Typography sx={{ ...style }}>Enrollment</Typography>
        <Box sx={{ ...style, gap: '4em' }}>
          <TextField
            label="Firstname"
            sx={{width: '50%'}}
          />
          <TextField
           sx={{width: '50%'}}
            label="Lastname"
          />
        </Box>
        <Box sx={{ ...style, gap: '4em' }}>
          <TextField
            label="Age"
            sx={{width: '50%'}}
          />
          <TextField
            type='file'
            sx={{width: '50%'}}

          />
        </Box>
        <Box sx={{ ...style, gap: '4em' }}>
          <TextField
            type='file'
            sx={{width: '50%'}}
          />
          <TextField
            type='file'
            sx={{width: '50%'}}
          />
        </Box>
        <Box sx={{ ...style, gap: '4em' }}>
          <Typography>Guardian Information</Typography>
        </Box>
        <Box sx={{ ...style, gap: '4em' }}>
          <TextField label="Firstname"
           sx={{width: '50%'}} />
          <TextField label="Lastname"
           sx={{width: '50%'}} />
        </Box>
        <Box sx={{ ...style, gap: '4em' }}>
          <Button>Next</Button>
        </Box>
      </form>
    </>
  )
}
