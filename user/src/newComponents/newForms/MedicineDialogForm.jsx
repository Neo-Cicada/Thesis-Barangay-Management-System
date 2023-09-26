import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogActions, Button } from '@mui/material';
import './medicineDialog.css';
import SelectedMedicine from './SelectedMedicine';
const Box = ({ name, isSelected, onSelect }) => {
    const boxStyle = {
        // border: '1px solid red',
        height: '5em',
        textAlign:'center',
        borderRadius:'1em',
        width: '7em',
        cursor: 'pointer',
        backgroundColor: isSelected ? '#8B9DC3' : '#DFE3EE', // Add a background color when selected
    };

    return (
        <div
            style={boxStyle}
            onClick={() => onSelect(name)}
        >
            <p style={{ fontSize: '1em' }}>{name}</p>
        </div>
    );
};

export default function MedicineDialogForm({ open, handleClose }) {
    const dialogContentStyle = {
        height: '100vh',
    };

    const [selectedMedicines, setSelectedMedicines] = useState([]);

    const handleBoxSelect = (name) => {
        if (selectedMedicines.includes(name)) {
            // If already selected, deselect it
            setSelectedMedicines(selectedMedicines.filter(item => item !== name));
        } else {
            // If not selected, select it
            setSelectedMedicines([...selectedMedicines, name]);
        }
    };

    return (
        <Dialog open={open} onClose={handleClose} fullWidth>
            <DialogTitle style={{textAlign:'center'}}>List of Medicines</DialogTitle>
            <DialogContent style={dialogContentStyle} className='medicine-dialog-content'>
                <div className='items-medicine-dialog'>
                    <Box name="Paracetamol" isSelected={selectedMedicines.includes("Paracetamol")} onSelect={handleBoxSelect} />
                    <Box name="Medicine 2" isSelected={selectedMedicines.includes("Medicine 2")} onSelect={handleBoxSelect} />
                    <Box name="Medicine 3" isSelected={selectedMedicines.includes("Medicine 3")} onSelect={handleBoxSelect} />
                    <Box name="Medicine 4" isSelected={selectedMedicines.includes("Medicine 4")} onSelect={handleBoxSelect} />
                    <Box name="Medicine 5" isSelected={selectedMedicines.includes("Medicine 5")} onSelect={handleBoxSelect} />
                    <Box name="Medicine 6" isSelected={selectedMedicines.includes("Medicine 6")} onSelect={handleBoxSelect} /> 
                    <Box name="Medicine 7" isSelected={selectedMedicines.includes("Medicine 7")} onSelect={handleBoxSelect} />
                    {/* Add more boxes with different names */}
                </div>
                <p style={{textAlign:'center'}}>Selected Medicines:</p>
                <div className='selected-medicine-dialog'>

                        {selectedMedicines.map((medicine, index) => (
                            // <li key={index}>{medicine}</li>
                            <SelectedMedicine medicine={medicine} key={index}/>
                        ))}
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                <Button>Proceed</Button>
            </DialogActions>
        </Dialog>
    );
}
