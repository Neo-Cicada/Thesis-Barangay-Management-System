import React, { useState } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@mui/material'
import useUploadDirectly from '../../hooks/useUploadDirectly'
import RedToast from '../RedToast'

export default function FacilityAdd({ handleDialogClose, isDialogOpen, setIsDialogOpen }) {
  const [toast, setToast] = useState(false)
  const initialTime = {
    startTime: '',
    endTime: ''
  }

  const [item, setItem] = useState({
    type: '',
    slots: []
  })

  const handleAddSlot = () => {
    setItem((prevState) => ({
      ...prevState,
      slots: [...prevState.slots, { ...initialTime }]
    }))
  }

  const handleSlotChange = (e, index) => {
    const { name, value } = e.target;
    setItem((prevState) => {
      const updatedSlots = [...prevState.slots];
      updatedSlots[index][name] = value;
      return { ...prevState, slots: updatedSlots };
    });
  }

  const handleClickOk = async () => {
    console.log(item);
    setToast(true)
    if (item.type.trim() !== '' && item.slots.length > 0) {
      await useUploadDirectly('Facility', item).then(() => {
        setIsDialogOpen(false);
        setItem({
          type: '',
          slots: []
        });
      });
    }

  }

  return (
    <>
      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogTitle sx={{ textAlign: 'center' }}> Add Item</DialogTitle>
        <DialogContent>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              paddingTop: '1em',
              gap: '1em',
            }}
          >
            <TextField
              value={item.type}
              label="Name"
              onChange={(e) => setItem({ ...item, type: e.target.value })}
            />

            {item.slots.map((slot, index) => (
              <div key={index} style={{ display: 'flex', gap: '1em', borderBottom: '3px dashed grey' }}>
                <TextField
                  name="startTime"
                  value={slot.startTime}
                  label="Start Time"
                  type="time"
                  onChange={(e) => handleSlotChange(e, index)}
                  style={{ width: '100%' }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  name="endTime"
                  value={slot.endTime}
                  label="End Time"
                  type="time"
                  onChange={(e) => handleSlotChange(e, index)}
                  style={{ width: '100%' }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
            ))}

            <Button variant='contained' onClick={handleAddSlot}>Add Slot</Button>
          </div>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' color='success' onClick={handleClickOk}>OK</Button>
        </DialogActions>
      </Dialog>
      <RedToast open={toast} onClose={() => setToast(false)} content={"Item Added!"} type="success" />
    </>
  )
}
