import React, { createContext, useContext, useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogActions, Button } from '@mui/material';
import EnrollmentForm from '../../../formComponents/EnrollmentForm';
export default function EnrollmentDialog({ open, handleClose }) {
  return (
    <>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Available Certificates</DialogTitle>
        <DialogContent>
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
