import React, { useState, useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { MyEquipmentContext } from './EquipmentDialog';
import { TextField } from '@mui/material';

export default function SelectedEquipment({ equipment, key, }) {
  const { selectedEquipment, setSelectedEquipment } = useContext(MyEquipmentContext)
  const handleIncrement = () => {

    const updatedSelectedEquipment = selectedEquipment.map((item) => {
      if (item.name === equipment.name) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setSelectedEquipment(updatedSelectedEquipment);
  };

  const handleDecrement = () => {
    const updatedSelectedEquipment = selectedEquipment.map((item) => {
      if (item.name === equipment.name && item.count > 1) {
        return { ...item, count: item.count - 1 };
      }
      return item;
    });
    setSelectedEquipment(updatedSelectedEquipment);
  };

  return (
    <div className='selected-medicine' key={key} style={{
      borderBottom: '1px solid black',
      display: 'flex', justifyContent: 'center', alignItems: 'center'
    }}>
      <IconButton onClick={handleDecrement} aria-label="Decrement">
        <RemoveIcon />
      </IconButton>
      <span style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', width: '12em',
      }}><b>{equipment.name}</b>  <TextField
          style={{ width: '6em' }}
          size='small'
          type="number"
          value={equipment.count}
          onChange={(e) => {
            const newCount = parseInt(e.target.value, 10); // Parse the input as an integer
            if (!isNaN(newCount)) { // Check if it's a valid number
              const updatedSelectedEquipment = selectedEquipment.map((item) => {
                if (item.name === equipment.name) {
                  return { ...item, count: newCount };
                }
                return item;
              });
              setSelectedEquipment(updatedSelectedEquipment);
            }
          }}
        /></span>
      <IconButton onClick={handleIncrement} aria-label="Increment">
        <AddIcon />
      </IconButton>
    </div>
  );
}
