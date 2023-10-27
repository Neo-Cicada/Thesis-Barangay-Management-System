import React, { useState, useContext, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { MyEquipmentContext } from './EquipmentDialog';
import { TextField } from '@mui/material';

export default function SelectedEquipment({ equipment, key, }) {
  const { selectedEquipment, setSelectedEquipment, setCounterCondition } = useContext(MyEquipmentContext)
  const [counter, setCounter] = useState(1)
  const [maxCount, setMaxCount] = useState();
  console.log(maxCount)

  useEffect(()=>{
    if(counter > maxCount){
      setCounterCondition(true)
    }else{
      setCounterCondition(false)
    }
  },[counter] )
  const handleIncrement = () => {

    const updatedSelectedEquipment = selectedEquipment.map((item) => {
      if (item.name === equipment.name) {
        setCounter(counter + 1)
        setMaxCount(item.maxCount)
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setSelectedEquipment(updatedSelectedEquipment);
  };

  const handleDecrement = () => {
    const updatedSelectedEquipment = selectedEquipment.map((item) => {
      if (item.name === equipment.name && item.count > 1) {
        setCounter(counter - 1)
        setMaxCount(item.maxCount)

        return { ...item, count: item.count - 1 };
      }
      return item;
    });
    setSelectedEquipment(updatedSelectedEquipment);
  };

  return (
    <div className='selected-medicine' key={key} style={{
      borderBottom: '1px solid black',
      display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop : '1em'
      
    }}>
      <IconButton onClick={handleDecrement} aria-label="Decrement">
        <RemoveIcon />
      </IconButton>
      <span style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', width: '20em',
      }}><b>{equipment.name}</b>
        <TextField
          style={{ width: '12em' }}
          size='small'
          error={counter > maxCount}
          type="number"
          label={counter > maxCount ? `Max quantity is ${maxCount}` : 'Item Quantity'}
          value={equipment.count}
          onChange={(e) => {
            const newCount = parseInt(e.target.value, 10); // Parse the input as an integer
            if (!isNaN(newCount)) { // Check if it's a valid number
              const updatedSelectedEquipment = selectedEquipment.map((item) => {
                if (item.name === equipment.name) {
                  setCounter(newCount)
                  setMaxCount(item.maxCount)
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
