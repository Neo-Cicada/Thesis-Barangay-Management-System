import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material'
import { useState } from 'react'
import useUploadDirectly from '../../hooks/useUploadDirectly';
export default function MedicineAdd({ handleDialogClose, isDialogOpen, setIsDialogOpen }) {
  const [item, setItem] = useState({
    type: '',
    quantity: ''
  })
  const handleClickOk = async (e) => {
    console.log(item)

    await useUploadDirectly('Medicines', item).then(() => setIsDialogOpen(false))
    console.log(item)
    setIsDialogOpen(false)
    setItem({
      type: '',
      quantity: ''
    })
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
              value={item.type}
              label="Name"
              onChange={(e) => setItem({ ...item, type: (e.target.value) })}
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
        <DialogActions>
          <Button
            variant='contained'
            color='success'
            onClick={handleClickOk}
            disabled={!item.type || !item.quantity}
          >
            OK
          </Button>        </DialogActions>
      </Dialog>

    </>
  )
}
