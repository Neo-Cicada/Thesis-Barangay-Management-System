import React from 'react'
import { Box, TextField, Typography, Button, Container } from '@mui/material'
export default function EnrollmentForm() {

  return (
    <>
      <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxHeight: '35em',
        height: '100%',
        overflow: 'auto', // Adding scrollable overflow
        paddingTop: '1em',
        gap: '1em',
        border: '1px solid red',
        padding: '1em',

      }}
    >
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 'none',
          width: '100%',
          alignItems:'center'
        }}
      >
        <Typography variant="h6" gutterBottom>
          Child Information
        </Typography>
        <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
          <TextField label="Lastname" />
          <TextField label="Firstname" />
        </Box>
        <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
          <TextField label="Middlename" />
          <TextField
            type="date"
            label="Date of Birth"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
        <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
          <TextField
            type="file"
            label="Upload Birth Certificate"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              accept: '.pdf,.doc,.docx,image/*',
            }}
          />
          <TextField
            type="file"
            label="Upload Medical Certificate"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              accept: '.pdf,.doc,.docx,image/*',
            }}
          />
        </Box>

        <Typography variant="h6" gutterBottom>
          Parents and Guardian Information
        </Typography>

        {/* Father Information */}
        <Typography variant="subtitle1">Father Information</Typography>
        <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
          <TextField label="Father's Lastname" />
          <TextField label="Father's Firstname" />
        </Box>
        <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
          <TextField label="Occupation" />
          <TextField label="Phone number" />
        </Box>
        <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
          <TextField label="Email" />
          <TextField label="Marriage Certificate" />
        </Box>

        {/* Mother Information */}
        <Typography variant="subtitle1">Mother Information</Typography>
        <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
          <TextField label="Mother's Lastname" />
          <TextField label="Mother's Firstname" />
        </Box>
        <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
          <TextField label="Occupation" />
          <TextField label="Phone number" />
        </Box>
        <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
          <TextField label="Email" />
          <TextField label="Marriage Certificate" />
        </Box>

        {/* Guardian Information */}
        <Typography variant="subtitle1">Guardian Information</Typography>
        <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
          <TextField label="Guardian's Lastname" />
          <TextField label="Guardian's Firstname" />
        </Box>
        <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
          <TextField label="Phone number" />
          <TextField label="Email" />
        </Box>

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
    </>
  )
}
