import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material'
import { useState } from 'react'
import useUploadDirectly from '../../hooks/useUploadDirectly';
export default function EquipmentAdd({ handleDialogClose, isDialogOpen, setIsDialogOpen }) {
  const [item, setItem] = useState({
    equipment: '',
    quantity: ''
  })

  const handleClickOk = async (e) => {
    console.log(item)

    await useUploadDirectly('Equipments', item).then(() => {
      setItem({
        equipment: '',
        quantity: ''
      })
      setIsDialogOpen(false)
    })

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
              value={item.equipment}
              label="Name"
              onChange={(e) => setItem({ ...item, equipment: (e.target.value) })}
            />
            <TextField
              value={item.quantity}
              label="quantity"
              onChange={(e) => setItem({ ...item, quantity: (e.target.value) })}
            />
          </div>

        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={handleClickOk}>OK</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
