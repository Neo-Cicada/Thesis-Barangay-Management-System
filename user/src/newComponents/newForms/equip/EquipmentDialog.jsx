import React, { createContext, useContext, useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogActions, Button } from '@mui/material';
export default function EquipmentDialog({ open, handleClose }) {
  return (
    <>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Available Equipment</DialogTitle>
        <DialogContent>Hello world</DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}