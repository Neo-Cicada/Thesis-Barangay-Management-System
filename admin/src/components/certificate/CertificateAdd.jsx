import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material'
import { useState } from 'react'
import useUploadDirectly from '../../hooks/useUploadDirectly';

export default function CertificateAdd({ handleDialogClose, isDialogOpen, setIsDialogOpen, setOpenToast }) {
  const [item, setItem] = useState({
    type: '',
    quantity: ''
  })
  /*REMOVED THE ASYNC, But I'm not sure cuz
                                          im doing this without internet maybe the hook
                                           is not executing
                                          */
  const handleClickOk = async (e) => {
    await useUploadDirectly('Certificates', item)
    setItem({
      type: '',
      quantity: ''
    })
    setOpenToast(true)
    setIsDialogOpen(!isDialogOpen)
    // console.log(item)
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
              label="Document Name"
              onChange={(e) => setItem({ ...item, type: (e.target.value) })}
            />
            <TextField
              value={item.quantity}
              label="Price"
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
            disabled={!item.quantity || !item.type}
            color='success' variant='contained' onClick={handleClickOk}>OK</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
