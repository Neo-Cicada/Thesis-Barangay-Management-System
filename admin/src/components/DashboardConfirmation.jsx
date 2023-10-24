import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material'
export default function DashboardConfirmation({ accept, reject, status, open, onClose, confirm }) {
  return (
    <>
      <Dialog open={open} onClose={onClose}>
      <DialogTitle>Accept Request or Reject Request</DialogTitle>
      <DialogContent>Choose on how you want to procced on this transaction</DialogContent>
        <DialogActions>
          {status === "ongoing" ?
          <Button variant='contained' color='success' onClick={confirm}>Confirm Request</Button> :
           <Button variant='contained' color='success' onClick={accept}>Accept Request</Button>}

          <Button variant='contained' color='warning' onClick={reject}>{status === "ongoing" ? "Cancel Request": "Decline Request"}</Button>
        </DialogActions>
      </Dialog>
      {/* <div
        style={{
          position: 'absolute',
          background: 'white',
          border: '1px solid black',
          marginLeft: '1em',
          zIndex: '1',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {status === "ongoing" ? <Button onClick={accept}>Confirm</Button> : <Button onClick={accept}>Accept</Button>}

        <Button onClick={reject}>Reject</Button>

      </div> */}
    </>
  )
}
