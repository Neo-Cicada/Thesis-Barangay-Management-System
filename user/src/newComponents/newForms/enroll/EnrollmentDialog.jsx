import React, { createContext, useContext, useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogActions, Button } from '@mui/material';
import EnrollmentForm from '../../../formComponents/EnrollmentForm';
export default function EnrollmentDialog({ open, handleClose }) {
  return (
    <>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle sx={{textAlign:'center'}}>Available Certificates</DialogTitle>
        <DialogContent fullWidth>
          <EnrollmentForm/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
