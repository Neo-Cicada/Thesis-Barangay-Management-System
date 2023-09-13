import React from 'react'

import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material'

import { useState } from 'react'
import useUploadDirectly from '../../hooks/useUploadDirectly';
export default function FacilityAdd({ handleDialogClose, isDialogOpen, setIsDialogOpen }) {
  const [item, setItem] = useState({
    type: '',
    startTime: '',
    endTime: ''
  })
  const handleClickOk = async (e) => {
    console.log(item)

    await useUploadDirectly('Facility', item).then(() => setIsDialogOpen(false))
    console.log(item)
  }
  return (
    <>
      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogTitle sx={{ textAlign: 'center' }}> Add Item</DialogTitle>
        <DialogContent
        >
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingTop: '1em',
            gap: '1em'
          }}>
            <TextField
              value={item.type}
              label="Name"
              onChange={(e) => setItem({ ...item, type: (e.target.value) })}
            />
            <TextField
              value={item.startTime}
              label="Start Time"
              type="time" // Change the type to "time-range" for selecting a time range
              onChange={(e) => setItem({ ...item, startTime: e.target.value })}
              style={{ width: '100%' }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              value={item.endTime}
              label="End Time"
              type="time"
              onChange={(e) => setItem({ ...item, endTime: e.target.value })}
              style={{ width: '100%' }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickOk}>OK</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
