import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

export default function SelectedMedicine({medicine, key}) {
    const [count, setCount] = useState(1);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className='selected-medicine' key={key} style={{borderBottom:'1px solid black',
         display:'flex', justifyContent:'center', alignItems:'center'}}>
            <IconButton onClick={handleDecrement} aria-label="Decrement">
                <RemoveIcon />
            </IconButton>
            <span><b>{medicine}</b>: Amount <b>{count}</b></span>
            <IconButton onClick={handleIncrement} aria-label="Increment">
                <AddIcon />
            </IconButton>
        </div>
    );
}
