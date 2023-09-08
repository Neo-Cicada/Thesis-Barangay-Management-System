import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material'
import { useState } from 'react'
export default function EquipmentAdd({ handleDialogClose, isDialogOpen, handleButtonAction }) {

  return (
    <>
      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogTitle sx={{textAlign:'center'}}> Add Item</DialogTitle>
        <DialogContent
        >
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingTop: '1em',
            gap: '1em'
          }}>
            <TextField label="Name" />
            <TextField label="quantity" />
          </div>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleButtonAction}>OK</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
