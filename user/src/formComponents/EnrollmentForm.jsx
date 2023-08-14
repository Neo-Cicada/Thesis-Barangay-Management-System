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
          padding: '1em',

        }}
      >
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 'none',
            width: '100%',
            alignItems: 'center'
          }}
        >
          <Typography variant="h6" gutterBottom>
            Child Information
          </Typography>
          <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>

            <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em',  }}>
              <TextField label="Lastname" fullWidth />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em', }}>
              <TextField label="Firstname" fullWidth /></Box>
          </Box>
          <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em',  }}>
              <TextField label="Middlename" fullWidth />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em', }}>
              <TextField
                type="date"
                label="Date of Birth"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em', }}>
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
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em', }}>
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
          </Box>

          <Typography variant="h6" gutterBottom>
            Parents and Guardian Information
          </Typography>

          {/* Father Information */}
          <Typography variant="subtitle1">Father Information</Typography>
          <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em',  }}>
              <TextField label="Father's Lastname" fullWidth/></Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em',  }}>
              <TextField label="Father's Firstname" fullWidth/></Box>
          </Box>
          <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em',  }}>
              <TextField label="Occupation" fullWidth/>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em',  }}>
              <TextField label="Phone number" fullWidth/></Box>
          </Box>
          <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em',  }}>
              <TextField label="Email" fullWidth /></Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em',  }}>
              <TextField label="Marriage Certificate" fullWidth/></Box>
          </Box>

          {/* Mother Information */}
          <Typography variant="subtitle1">Mother Information</Typography>
          <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em',  }}>
              <TextField label="Mother's Lastname" fullWidth /></Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em',  }}>
              <TextField label="Mother's Firstname" fullWidth/></Box>
          </Box>
          <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em',  }}>
              <TextField label="Occupation" fullWidth/>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em',  }}>
              <TextField label="Phone number" fullWidth />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em',  }}>
              <TextField label="Email" fullWidth /></Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em',  }}>
              <TextField label="Marriage Certificate" fullWidth/></Box>
          </Box>

          {/* Guardian Information */}
          <Typography variant="subtitle1">Guardian Information</Typography>
          <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em',  }}>
              <TextField label="Guardian's Lastname" fullWidth/></Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em',  }}>
              <TextField label="Guardian's Firstname" fullWidth/></Box>
          </Box>
          <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em', }}>
              <TextField label="Phone number" fullWidth/></Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em',  }}>
              <TextField label="Email" fullWidth/></Box>
          </Box>

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Container>
    </>
  )
}
