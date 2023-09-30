import React, { useState, useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { MyContext } from './MedicineDialogForm';
export default function SelectedMedicine({medicine, key,}) {
    const {selectedMedicines, setSelectedMedicines} = useContext(MyContext)
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
        <div className='selected-medicine' key={key} style={{borderBottom:'1px solid black',
         display:'flex', justifyContent:'center', alignItems:'center'}}>
            <IconButton onClick={handleDecrement} aria-label="Decrement">
                <RemoveIcon />
            </IconButton>
            <span><b>{medicine.name}</b>: Amount <b>{medicine.count}</b></span>
            <IconButton onClick={handleIncrement} aria-label="Increment">
                <AddIcon />
            </IconButton>
        </div>
    );
}
