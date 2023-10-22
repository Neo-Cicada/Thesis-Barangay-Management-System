import React, { createContext, useContext, useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogActions, Button } from '@mui/material';
import EnrollmentForm from './EnrollmentForm';
import EnrollForm from './EnrollForm';
export default function EnrollmentDialog({ open, handleClose }) {
  const [formData, setFormData] = useState({

    childInfo: {
      childFirstName: "",
      childLastName: "",
      childMiddleName: "",
      childBirthDate: "",
      childGender: ""
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
    },


  });
  return (
    <>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle sx={{ textAlign: 'center', borderBottom: '3px dashed grey' }}>Daycare Enrollment Form</DialogTitle>
        <DialogContent fullWidth sx={{ borderBottom: '3px dashed grey' }}>
          <EnrollForm setFormData={setFormData} formData={formData}/>
        </DialogContent>
        <DialogActions>
          <Button style={{ backgroundColor: '#3B5998', color: 'white', fontWeight: 'bold' }} onClick={handleClose} variant='contained'>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
