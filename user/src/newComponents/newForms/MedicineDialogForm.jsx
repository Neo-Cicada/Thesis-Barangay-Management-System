import React, { createContext, useContext, useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogActions, Button } from '@mui/material';
import './medicineDialog.css';
import SelectedMedicine from './SelectedMedicine';
import MedicineSelect from './MedicineSelect';
import MedForm from './MedForm';
export const MyContext = createContext();

export default function MedicineDialogForm({ open, handleClose }) {
    const [proceed, setProceed] = useState(false)
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
        <MyContext.Provider value={{selectedMedicines}}>
            <Dialog open={open} onClose={handleClose} fullWidth>
                <DialogTitle style={{ textAlign: 'center' }}>{proceed ? 'Medicine Form' : 'List of Medicines'}</DialogTitle>
                <DialogContent style={dialogContentStyle} className='medicine-dialog-content'>
                    {proceed ? <MedForm /> : <MedicineSelect
                        handleBoxSelect={handleBoxSelect}
                    />}
                </DialogContent>
                <DialogActions>
                    {proceed ? <Button onClick={() => setProceed(!proceed)}>Back</Button> : <Button onClick={handleClose}>Close</Button>}
                    {proceed ? <Button onClick={() => console.log(selectedMedicines)}>Submit</Button> : <Button onClick={() => setProceed(!proceed)}>Next</Button>}
                </DialogActions>
            </Dialog>
        </MyContext.Provider>
    );
}
