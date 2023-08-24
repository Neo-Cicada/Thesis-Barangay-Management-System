import React from 'react'
import { Box, TextField, Typography, Button, Container } from '@mui/material'
import { getStorage, ref } from "firebase/storage";
import { useState } from 'react';


export default function EnrollmentForm() {
  const [childInfo, setChildInfo] = useState({
    childFirstName: "",
    childLastName: "",
    childMiddleName: "",
    childBirthDate: ""
  })
  const [fatherInfo, setFatherInfo] = useState({
    fatherFirstName: "",
    fatherLastName: "",
    fatherOccupation: "",
    fatherPhoneNumber: "",
    fatherEmail: ""
  })
  const [motherInfo, setMotherInfo] = useState({
     motherFirstName: "",
     motherLastName: "",
     motherOccupation: "",
     motherPhoneNumber: "",
     motherEmail: ""
  })
  const [guardinInfo, setGuardianInfo] = useState({
    guardianFirstName: "",
    guardianLastName: "",
    guardianPhoneNumber: "",
    guardianEmail: ""

  })
  console.log(childInfo, fatherInfo, motherInfo, guardinInfo)
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

            <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em', }}>
              <TextField
               label="Lastname"
               fullWidth
               onChange={(e)=>setChildInfo({...childInfo, childLastName: e.target.value})}
               />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em', }}>
              <TextField
                label="Firstname"
                fullWidth
                onChange={(e)=>setChildInfo({...childInfo, childFirstName: e.target.value})}
                />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em', }}>
              <TextField
                label="Middlename"
                fullWidth
                onChange={(e)=>setChildInfo({...childInfo, childMiddleName: e.target.value})}
                />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em', }}>
              <TextField
                type="date"
                label="Date of Birth"
                onChange={(e)=>setChildInfo({...childInfo, childBirthDate: e.target.value})}
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
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em', }}>
              <TextField
                label="Father's Lastname"
                fullWidth
                onChange={(e)=>setFatherInfo({...fatherInfo, fatherLastName: e.target.value})}
              />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em', }}>
              <TextField
                label="Father's Firstname"
                fullWidth
                onChange={(e)=>setFatherInfo({...fatherInfo, fatherFirstName: e.target.value})}
                />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em', }}>
              <TextField
                label="Occupation"
                fullWidth
                onChange={(e)=>setFatherInfo({...fatherInfo, fatherOccupation: e.target.value})}
              />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em', }}>
              <TextField
                label="Phone number"
                fullWidth
                onChange={(e)=>setFatherInfo({...fatherInfo, fatherPhoneNumber: e.target.value})}
                /></Box>
          </Box>
          <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em', }}>
              <TextField
                label="Email"
                fullWidth
                onChange={(e)=>setFatherInfo({...fatherInfo, fatherEmail: e.target.value})}
              />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em', }}>
              <TextField label="Marriage Certificate" fullWidth /></Box>
          </Box>

          {/* Mother Information */}
          <Typography variant="subtitle1">Mother Information</Typography>
          <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em', }}>
              <TextField
                label="Mother's Lastname"
                fullWidth
                onChange={(e)=>setMotherInfo({...motherInfo, motherLastName: e.target.value})}
                /></Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em', }}>
              <TextField
                label="Mother's Firstname"
                fullWidth
                onChange={(e)=>setMotherInfo({...motherInfo, motherFirstName})}
                /></Box>
          </Box>
          <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em', }}>
              <TextField
                label="Occupation"
                fullWidth
                onChange={setMotherInfo({...motherInfo, motherOccupation: e.target.value})}
                />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em', }}>
              <TextField
                label="Phone number"
                fullWidth
                onChange={(e)=>setMotherInfo({...motherInfo, motherPhoneNumber: e.target.value})}
              />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em', }}>
              <TextField
                label="Email"
                fullWidth
                onChange={(e)=>setMotherInfo({...motherInfo, motherEmail: e.target.value})}
                />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em', }}>
              <TextField
                label="Marriage Certificate"
                fullWidth
                /></Box>
          </Box>

          {/* Guardian Information */}
          <Typography variant="subtitle1">Guardian Information</Typography>
          <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em', }}>
              <TextField
                label="Guardian's Lastname"
                fullWidth
                onChange={(e)=>setGuardianInfo({...guardinInfo, guardianLastName: e.target.value})}
                />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em', }}>
              <TextField
                label="Guardian's Firstname"
                fullWidth
                onChange={(e)=>setGuardianInfo({...guardinInfo, guardianLastName: e.target.value})}
                />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em', }}>
              <TextField
                label="Phone number"
                fullWidth
                onChange={(e)=>setGuardianInfo({...guardinInfo, guardianPhoneNumber: e.target.value})}

                />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em', }}>
              <TextField
                label="Email"
                fullWidth
                onChange={(e)=>setGuardianInfo({...guardinInfo, guardianEmail: e.target.value})}
                />
            </Box>
          </Box>

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Container>
    </>
  )
}
