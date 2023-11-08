import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material'
export default function GarbagePayment({ open, onClose }) {
  return (
    <>
      <Dialog fullWidth open={open} onClose={onClose}>
        <DialogTitle sx={{textAlign:'center'}}> PAYMENT HISTORY</DialogTitle>
        <DialogContent fullWidth>
         
          <Button>Cancel Subscription</Button>
        </DialogContent>
        <DialogActions >
          ...
        </DialogActions>
      </Dialog>
    </>
  )
}
