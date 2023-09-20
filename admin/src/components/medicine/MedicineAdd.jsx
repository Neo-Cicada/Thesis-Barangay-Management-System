import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material'
import { useState } from 'react'
import useUploadDirectly from '../../hooks/useUploadDirectly';
export default function MedicineAdd({ handleDialogClose, isDialogOpen, setIsDialogOpen }) {
    const [item, setItem] = useState({
        type: '',
        quantity: ''
      })
      const handleClickOk = async (e)=>{
        console.log(item)

        await useUploadDirectly('Medicines', item).then(()=> setIsDialogOpen(false))
        console.log(item)
        setIsDialogOpen(false)
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
              onChange={(e)=> setItem({...item, type:(e.target.value)})}
              />
            <TextField
              value={item.quantity}
              label="quantity"
              onChange={(e)=> setItem({...item, quantity:(e.target.value)})}
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
