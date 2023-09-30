import React, { createContext, useContext, useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogActions, Button } from '@mui/material';
import './medicineDialog.css';
import SelectedMedicine from './SelectedMedicine';
import MedicineSelect from './MedicineSelect';
import MedForm from './MedForm';
export const MyContext = createContext();

export default function MedicineDialogForm({ open, handleClose }) {
    const [selectedMedicines, setSelectedMedicines] = useState([]);
    const [details, setDetails] = useState({
      fullname: '',
      email: '',
      phoneNumber: ''
    })
    const [proceed, setProceed] = useState(false)
    const dialogContentStyle = {
        height: '100vh',
    };


    const handleBoxSelect = (name, count) => {
        const index = selectedMedicines.findIndex((item) => item.name === name);

        if (index !== -1) {
          // If already selected, check if count is greater than 1
          if (count > 1) {
            // If count is greater than 1, decrement the count
            const updatedSelected = [...selectedMedicines];
            updatedSelected[index].count -= 1;
            setSelectedMedicines(updatedSelected);
          } else {
            // If count is 1 or less, remove the item from selectedMedicines
            const updatedSelected = selectedMedicines.filter((item) => item.name !== name);
            setSelectedMedicines(updatedSelected);
          }
        } else {
          // If not selected, select it with a count of 1
          setSelectedMedicines([...selectedMedicines, { name: name, count: 1 }]);
        }
      };
    return (
        <MyContext.Provider value={{selectedMedicines, setSelectedMedicines , setDetails, details}}>
            <Dialog open={open} onClose={handleClose} fullWidth>
                <DialogTitle style={{ textAlign: 'center' }}>{proceed ? 'Medicine Form' : 'List of Medicines'}</DialogTitle>
                <DialogContent style={dialogContentStyle} className='medicine-dialog-content'>
                    {proceed ? <MedForm /> : <MedicineSelect
                        handleBoxSelect={handleBoxSelect}
                    />}
                </DialogContent>
                <DialogActions>
                    {proceed ? <Button onClick={() => setProceed(!proceed)}>Back</Button> : <Button onClick={handleClose}>Close</Button>}
                    {proceed ? <Button onClick={() => console.log(details)}>Submit</Button> : <Button onClick={() => setProceed(!proceed)}>Next</Button>}
                </DialogActions>
            </Dialog>
        </MyContext.Provider>
    );
}
