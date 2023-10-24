import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material'
import { useState } from 'react'
import useUploadDirectly from '../../hooks/useUploadDirectly';
import RedToast from '../RedToast';
export default function EquipmentAdd({ handleDialogClose, isDialogOpen, setIsDialogOpen, setOpenToast }) {
  const [item, setItem] = useState({
    equipment: '',
    quantity: ''
  })
  const handleClickOk = async (e) => {
    console.log(item)

    await useUploadDirectly('Equipments', item)
    setItem({
      equipment: '',
      quantity: ''
    })

    setOpenToast(true)
    setIsDialogOpen(false)
  }
  return (
    <>
      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogTitle sx={{ textAlign: 'center', fontWeight: 600, color: "rgb(59, 89, 152)" }}> Add Item</DialogTitle>
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
              label="Quantity"
              onChange={(e) => {
                const inputValue = e.target.value;
                if (!isNaN(inputValue)) {
                  setItem({ ...item, quantity: inputValue });
                }
              }}
            />
          </div>
        </DialogContent>
        <DialogActions >
          <Button
            variant='contained'
            color='success'
            onClick={handleClickOk}
            disabled={!item.quantity || !item.equipment}
          >
            OK
          </Button>        </DialogActions>

      </Dialog>
    </>
  )
}
