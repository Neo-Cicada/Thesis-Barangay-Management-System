import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material'

export default function ConfirmationDialog({ open, onClose, onConfirm, title, message }) {
  return (
    <>
      <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{message}</DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant='contained' color="warning">
          Cancel
        </Button>
        <Button onClick={onConfirm}  variant='contained' color='success'>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
    </>
  )
}
