import React from 'react'
import { Box, TextField, Typography, Button, Container, Dialog, DialogContent, FormControlLabel, Checkbox } from '@mui/material'
import { getStorage, ref } from "firebase/storage";
import useUpload from '../../../hooks/useUpload';
import { useState } from 'react';
import Agreement from '../../../components/dialogs/Agreement'
import ShowInformation from '../../../components/dialogs/ShowInformation'

export default function EnrollmentForm() {
  const [showAgreement, setShowAgreement] = useState(false)
  const [showInformation, setShowInformation] = useState(false);

  const handleAgreement = (e) => {
    e.preventDefault();
    setShowAgreement(!showAgreement)
  }
  const handleCloseAgreement = (e) => {
    e.preventDefault();
    setShowAgreement(false)
  }
  const handleShowInformation = (e) => {
    e.preventDefault()
    setShowInformation(!showInformation)
  }
  const handleCloseInformation = (e) => {
    e.preventDefault()
    setShowInformation(false)
  }
  const [formData, setFormData] = useState({
    childInfo: {
      childFirstName: "",
      childLastName: "",
      childMiddleName: "",
      childBirthDate: ""
    },
    fatherInfo: {
      fatherFirstName: "",
      fatherLastName: "",
      fatherOccupation: "",
      fatherPhoneNumber: "",
      fatherEmail: ""
    },
    motherInfo: {
      motherFirstName: "",
      motherLastName: "",
      motherOccupation: "",
      motherPhoneNumber: "",
      motherEmail: ""
    },
    guardianInfo: {
      guardianFirstName: "",
      guardianLastName: "",
      guardianPhoneNumber: "",
      guardianEmail: ""
    }
  });
  const style = {
    display: 'flex',
    justifyContent: 'center',
    height: '15%',
    alignItems: 'center'
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    await useUpload(formData, "EnrollmentAllRequest").then(
      console.log("done!")
    )
    setFormData({
      childInfo: {
        childFirstName: "",
        childLastName: "",
        childMiddleName: "",
        childBirthDate: ""
      },
      fatherInfo: {
        fatherFirstName: "",
        fatherLastName: "",
        fatherOccupation: "",
        fatherPhoneNumber: "",
        fatherEmail: ""
      },
      motherInfo: {
        motherFirstName: "",
        motherLastName: "",
        motherOccupation: "",
        motherPhoneNumber: "",
        motherEmail: ""
      },
      guardianInfo: {
        guardianFirstName: "",
        guardianLastName: "",
        guardianPhoneNumber: "",
        guardianEmail: ""
      }
    })
  }
  return (
    <>
      <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1em',
      }}
    >
      <form
        onSubmit={handleSubmit}
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
              onChange={(e) => setFormData((prevData) => ({
                ...prevData,
                childInfo: {
                  ...prevData.childInfo,
                  childLastName: e.target.value
                }
              }))} />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em', }}>
            <TextField
              label="Firstname"
              fullWidth
              onChange={(e) => setFormData((prevData) => ({
                ...prevData,
                childInfo: {
                  ...prevData.childInfo,
                  childFirstName: e.target.value
                }
              }))}
            />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em', }}>
            <TextField
              label="Middlename"
              fullWidth
              onChange={(e) => setFormData((prevData) => ({
                ...prevData,
                childInfo: {
                  ...prevData.childInfo,
                  childMiddleName: e.target.value
                }
              }))} />
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em', }}>
            <TextField
              type="date"
              label="Date of Birth"
              onChange={(e) => setFormData((prevData) => ({
                ...prevData,
                childInfo: {
                  ...prevData.childInfo,
                  childBirthDate: e.target.value
                }
              }))} InputLabelProps={{
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
              onChange={(e) => setFormData((prevData) => ({
                ...prevData,
                fatherInfo: {
                  ...prevData.fatherInfo,
                  fatherLastName: e.target.value
                }
              }))} />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em', }}>
            <TextField
              label="Father's Firstname"
              fullWidth
              onChange={(e) => setFormData((prevData) => ({
                ...prevData,
                fatherInfo: {
                  ...prevData.fatherInfo,
                  fatherFirstName: e.target.value
                }
              }))} />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em', }}>
            <TextField
              label="Occupation"
              fullWidth
              onChange={(e) => setFormData((prevData) => ({
                ...prevData,
                fatherInfo: {
                  ...prevData.fatherInfo,
                  fatherOccupation: e.target.value
                }
              }))} />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em', }}>
            <TextField
              label="Phone number"
              fullWidth
              onChange={(e) => setFormData((prevData) => ({
                ...prevData,
                fatherInfo: {
                  ...prevData.fatherInfo,
                  fatherPhoneNumber: e.target.value
                }
              }))} />

          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em', }}>
            <TextField
              label="Email"
              fullWidth
              onChange={(e) => setFormData((prevData) => ({
                ...prevData,
                fatherInfo: {
                  ...prevData.fatherInfo,
                  fatherEmail: e.target.value
                }
              }))} />
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em', }}>
            <TextField
              type="file"
              label="Marriage Certificate"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                accept: '.pdf,.doc,.docx,image/*',
              }}
            />
          </Box>
        </Box>

        {/* Mother Information */}
        <Typography variant="subtitle1">Mother Information</Typography>
        <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em', }}>
            <TextField
              label="Mother's Lastname"
              fullWidth
              onChange={(e) => setFormData((prevData) => ({
                ...prevData,
                motherInfo: {
                  ...prevData.motherInfo,
                  motherLastName: e.target.value
                }
              }))} /></Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em', }}>
            <TextField
              label="Mother's Firstname"
              fullWidth
              onChange={(e) => setFormData((prevData) => ({
                ...prevData,
                motherInfo: {
                  ...prevData.motherInfo,
                  motherFirstName: e.target.value
                }
              }))} /></Box>
        </Box>
        <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em', }}>
            <TextField
              label="Occupation"
              fullWidth
              onChange={(e) => setFormData((prevData) => ({
                ...prevData,
                motherInfo: {
                  ...prevData.motherInfo,
                  motherOccupation: e.target.value
                }
              }))}
            />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em', }}>
            <TextField
              label="Phone number"
              fullWidth
              onChange={(e) => setFormData((prevData) => ({
                ...prevData,
                motherInfo: {
                  ...prevData.motherInfo,
                  motherPhoneNumber: e.target.value
                }
              }))} />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em', border:'1px solid red' } }>
          <Box sx={{ display: 'flex', justifyContent: 'center', }}>
            <TextField
            
              label="Email"
              fullWidth
              onChange={(e) => setFormData((prevData) => ({
                ...prevData,
                motherInfo: {
                  ...prevData.motherInfo,
                  motherEmail: e.target.value
                }
              }))}
            />
          </Box>
         
        </Box>

        {/* Guardian Information */}
        <Typography variant="subtitle1">Guardian Information</Typography>
        <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em', }}>
            <TextField
              label="Guardian's Lastname"
              fullWidth
              onChange={(e) => setFormData((prevData) => ({
                ...prevData,
                guardianInfo: {
                  ...prevData.guardianInfo,
                  guardianLastName: e.target.value
                }
              }))} />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em', }}>
            <TextField
              label="Guardian's Firstname"
              fullWidth
              onChange={(e) => setFormData((prevData) => ({
                ...prevData,
                guardianInfo: {
                  ...prevData.guardianInfo,
                  guardianFirstName: e.target.value
                }
              }))} />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em', }}>
            <TextField
              label="Phone number"
              fullWidth
              onChange={(e) => setFormData((prevData) => ({
                ...prevData,
                guardianInfo: {
                  ...prevData.guardianInfo,
                  guardianPhoneNumber: e.target.value
                }
              }))}
            />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '15em', }}>
            <TextField
              label="Emails"
              fullWidth
              onChange={(e) => setFormData((prevData) => ({
                ...prevData,
                guardianInfo: {
                  ...prevData.guardianInfo,
                  guardianEmail: e.target.value
                }
              }))} />
          </Box>
        </Box>
        <Box sx={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', marginTop: '0.3em',
          fontSize: '1.1rem', color: 'red', textDecoration: 'underline',
          cursor: 'pointer'
        }} >
          <span onClick={handleShowInformation}>Review summary of informaton provided</span>
        </Box>
        <Box sx={style}>

          <FormControlLabel
            required
            control={<Checkbox />}
            label={
              <span onClick={handleAgreement}>
                Agree to the <u>terms and conditions</u>
              </span>
            }
          />

        </Box>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
      </Container>
      {showInformation && (
        <Dialog open={showInformation} onClose={handleCloseInformation} maxWidth="md" fillWidth>
          <DialogContent>
            <ShowInformation
            />
          </DialogContent>
        </Dialog>
      )

      }
      {showAgreement &&
        <Dialog open={showAgreement} onClose={handleCloseAgreement} maxWidth="md" fullWidth>
          <DialogContent>
            <Agreement />
          </DialogContent>
        </Dialog>}

    </>
  )
}
