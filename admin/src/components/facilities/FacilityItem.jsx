import React, { useState } from 'react';
import { Container, FormControl, MenuItem, InputLabel, Select, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import useDelete from '../../hooks/useDelete';
import useUpdate from '../../hooks/useUpdate';
import ConfirmationDialog from '../ConfirmationDialog';
import RedToast from '../RedToast';
export default function FacilityItem({ data, name }) {
  const [quantityValue, setQuantityValue] = React.useState(false);
  const [newValue, setNewValue] = React.useState(data.quantity);
  const [confirm, setConfirm] = useState(false)
  const [editedSlots, setEditedSlots] = React.useState([...data.slots]);
  const [openToast, setOpenToast] = useState(false)
  const handleDelete = async (e) => {
    console.log('clicked');
    e.preventDefault();
    try {
      await useDelete('Facility', data.id);

    } catch (error) {
      console.error('Deletion error:', error);
    }
  }

  const handleEdit = async (e) => {
    e.preventDefault();
    setQuantityValue(!quantityValue);
    if (quantityValue === true) {
      // Save the edited slots here (you can use useUpdate function)
      // For example, useUpdate('Facility', data.id, { slots: editedSlots });
      await useUpdate('Facility', data.id, { slots: editedSlots })
    }
  }

  const handleSlotChange = (index, field, value) => {
    const updatedSlots = [...editedSlots];
    updatedSlots[index][field] = value;
    setEditedSlots(updatedSlots);
  }
  function formatTimeToAmPm(militaryTime) {
    const timeParts = militaryTime.split(':');
    let hours = parseInt(timeParts[0]);
    const minutes = timeParts[1];
    const amPm = hours >= 12 ? 'PM' : 'AM';

    if (hours > 12) {
      hours -= 12;
    } else if (hours === 0) {
      hours = 12;
    }

    return `${hours}:${minutes} ${amPm}`;
  }
  const options = data.slots.map(item =>
    <MenuItem key={item.id}>{formatTimeToAmPm(item.startTime)} - {formatTimeToAmPm(item.endTime)}
    </MenuItem>)
  const slotsDisplay = editedSlots.map((slot, index) => (
    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1em', marginTop: '1em' }}>
      <TextField
        label="Start Time"
        value={slot.startTime}
        onChange={(e) => handleSlotChange(index, 'startTime', e.target.value)}
        variant="outlined"
        size="small"
      />
      <TextField
        label="End Time"
        value={slot.endTime}
        onChange={(e) => handleSlotChange(index, 'endTime', e.target.value)}
        variant="outlined"
        size="small"
      />
      <DeleteIcon color='error' onClick={() => handleDeleteSlot(index)} style={{ cursor: 'pointer' }} />
    </div>
  ));

  const handleDeleteSlot = async (index) => {
    const updatedSlots = [...editedSlots];
    updatedSlots.splice(index, 1);
    setEditedSlots(updatedSlots);
    await useUpdate('Facility', data.id, { slots: updatedSlots })
  }

  return (
    <>
      <div style={{ height: '2em', width: '100%', borderBottom: '1px solid black', display: 'flex', justifyContent: 'space-between' }}>
        <div style={{
          width: '20em',
          height: '95%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ fontSize: '1.2rem' }}>{name}</div>

          <FormControl sx={{ minWidth: '8em', marginBottom: '1em' }} size='small' >
            <InputLabel htmlFor="slots-select" sx={{ marginTop: '5px' }}>Slots</InputLabel>
            <Select
              variant='standard'
              label="Slots"
            >
              {quantityValue ? slotsDisplay : options}

            </Select>
          </FormControl>

        </div>

        <div style={{ height: '2em', display: 'flex', gap: '1em' }}>
          <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={handleEdit}>
            <EditIcon color='info' />{quantityValue === false ? 'Edit' : 'Save'}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            onClick={() => setConfirm(true)}
          ><DeleteIcon color='error' />Delete</div>
        </div>
      </div>
      <ConfirmationDialog
        open={confirm}
        onClose={() => setConfirm(false)}
        onConfirm={handleDelete}
        title={"Are you sure you want to delete this item?"}
        message={"Deleted items will be permanently removed and cannot be recovered."}
      />
      <RedToast open={openToast} onClose={() => setOpenToast(false)} content='Successfully Deleted!' type="success" />
    </>
  )
}
