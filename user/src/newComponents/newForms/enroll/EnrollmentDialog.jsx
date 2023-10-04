import React, { createContext, useContext, useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogActions, Button } from '@mui/material';
import EnrollmentForm from './EnrollmentForm';
import EnrollForm from './EnrollForm';
export default function EnrollmentDialog({ open, handleClose }) {
  return (
    <>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle sx={{ textAlign: 'center', borderBottom:'3px dashed grey' }}>Daycare Enrollment Form</DialogTitle>
        <DialogContent fullWidth sx={{borderBottom:'3px dashed grey'}}>
          <EnrollForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
