import React, { useState, useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { MyContext } from './MedicineDialogForm';
import { TextField } from '@mui/material';
export default function SelectedMedicine({ medicine, key, }) {
  const { selectedMedicines, setSelectedMedicines } = useContext(MyContext)
  const handleEdit = (e) => {
    const updatedSelectedMedicines = selectedMedicines.map((item) => {
      if (item.name === medicine.name) {
        return { ...item, count: e.target.value };
      }
      return item;
    });
    setSelectedMedicines(updatedSelectedMedicines);
  };

  const handleIncrement = () => {

    const updatedSelectedMedicines = selectedMedicines.map((item) => {
      if (item.name === medicine.name) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setSelectedMedicines(updatedSelectedMedicines);
  };

  const handleDecrement = () => {
    const updatedSelectedMedicines = selectedMedicines.map((item) => {
      if (item.name === medicine.name && item.count > 1) {
        return { ...item, count: item.count - 1 };
      }
      return item;
    });
    setSelectedMedicines(updatedSelectedMedicines);
  };

  return (
    <div className='selected-medicine' key={key} style={{
      borderBottom: '1px solid black', display: 'flex',
      justifyContent: 'center', alignItems: 'center',
    }}>
      <IconButton onClick={handleDecrement} aria-label="Decrement">
        <RemoveIcon />
      </IconButton>
      <span style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', width: '12em',
      }}><b>{medicine.name}</b>
        <TextField
          style={{ width: '6em' }}
          size='small'
          type="number"
          value={medicine.count}
          onChange={(e) => {
            const newCount = parseInt(e.target.value, 10); // Parse the input as an integer
            if (!isNaN(newCount)) { // Check if it's a valid number
              const updatedSelectedMedicines = selectedMedicines.map((item) => {
                if (item.name === medicine.name) {
                  return { ...item, count: newCount };
                }
                return item;
              });
              setSelectedMedicines(updatedSelectedMedicines);
            }
          }}
        />
      </span>
      <IconButton onClick={handleIncrement} aria-label="Increment">
        <AddIcon />
      </IconButton>
    </div>

  );
}
