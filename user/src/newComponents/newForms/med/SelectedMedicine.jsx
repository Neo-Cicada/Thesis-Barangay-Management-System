import React, { useState, useContext, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { MyContext } from './MedicineDialogForm';
import { TextField } from '@mui/material';
export default function SelectedMedicine({ medicine, key, }) {
  const { selectedMedicines, setSelectedMedicines, setCounterCondition } = useContext(MyContext)
  const [counter, setCounter] = useState(1)
  const [maxCount, setMaxCount] = useState();
  const allItemsValid = selectedMedicines.every(item => parseInt(item.maxCount) > parseInt(item.count));

  useEffect(() => {
    if (!allItemsValid) {
      setCounterCondition(true)
    } else {
      setCounterCondition(false)
    }
  }, [counter])
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
        setCounter(counter + 1)

        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setSelectedMedicines(updatedSelectedMedicines);
  };

  const handleDecrement = () => {
    const updatedSelectedMedicines = selectedMedicines.map((item) => {
      if (item.name === medicine.name && item.count > 1) {
        setCounter(counter - 1)

        return { ...item, count: item.count - 1 };
      }
      return item;
    });
    setSelectedMedicines(updatedSelectedMedicines);
  };

  return (
    <div className='selected-medicine' key={key} style={{
      borderBottom: '1px solid black', display: 'flex',
      justifyContent: 'center', alignItems: 'center', marginTop: '1em'
    }}>
      <IconButton onClick={handleDecrement} aria-label="Decrement">
        <RemoveIcon />
      </IconButton>
      <span style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', width: '20em',
      }}><b>{medicine.name}</b>
        <TextField
          style={{ width: '12em' }}
          size='small'
          type="number"
          label={counter > maxCount ? `Max quantity is ${maxCount}` : 'Medicine Quantity'}
          error={counter > maxCount}
          value={medicine.count}
          onChange={(e) => {
            const newCount = parseInt(e.target.value, 10); // Parse the input as an integer
            if (!isNaN(newCount)) { // Check if it's a valid number
              const updatedSelectedMedicines = selectedMedicines.map((item) => {
                if (item.name === medicine.name) {
                  setCounter(newCount)
                  setMaxCount(item.maxCount)
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
