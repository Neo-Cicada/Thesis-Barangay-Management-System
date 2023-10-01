import React, { useState, useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { MyEquipmentContext } from './EquipmentDialog';
export default function SelectedEquipment({equipment, key,}) {
  const {selectedEquipment, setSelectedEquipment} = useContext(MyEquipmentContext)
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
    const updatedSelectedEquipment = setSelectedEquipment.map((item) => {
      if (item.name === equipment.name && item.count > 1) {
        return { ...item, count: item.count - 1 };
      }
      return item;
    });
    setSelectedEquipment(updatedSelectedEquipment);
  };

return (
    <div className='selected-medicine' key={key} style={{borderBottom:'1px solid black',
     display:'flex', justifyContent:'center', alignItems:'center'}}>
        <IconButton onClick={handleDecrement} aria-label="Decrement">
            <RemoveIcon />
        </IconButton>
        <span><b>{equipment.name}</b>: Amount <b>{equipment.count}</b></span>
        <IconButton onClick={handleIncrement} aria-label="Increment">
            <AddIcon />
        </IconButton>
    </div>
);
}
