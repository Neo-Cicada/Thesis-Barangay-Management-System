import React, { createContext, useContext, useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogActions, Button } from '@mui/material';
import './medicineDialog.css';
import SelectedMedicine from './SelectedMedicine';
import MedicineSelect from './MedicineSelect';
import MedForm from './MedForm';
import useUpload from '../../../hooks/useUpload'
export const MyContext = createContext();
export default function MedicineDialogForm({ open, handleClose }) {
  const [counterCondition, setCounterCondition] = useState()
  const [counter, setCounter] = useState(1)
  const [maxCount, setMaxCount] = useState();
  const [selectedMedicines, setSelectedMedicines] = useState([]);
  const [agreement, setAgreement] = useState(true)
  const [details, setDetails] = useState({
    status: 'request',
    fullname: '',
    email: '',
    phoneNumber: '',
    selectedMedicines: [...selectedMedicines] // spread the array elements
  });
  const [proceed, setProceed] = useState(false)
  const dialogContentStyle = {
    height: '100vh',
  };
  useEffect(() => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      selectedMedicines: selectedMedicines,
    }));
  }, [selectedMedicines]);
  const handleBoxSelect = (name, count, itemId, maxCount) => {
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
      setSelectedMedicines([...selectedMedicines, {
        name: name,
        count: 1,
        itemId: itemId,
        maxCount: maxCount
      }]);
    }
  };
  return (
    <MyContext.Provider value={{
      selectedMedicines, setSelectedMedicines,
      setDetails, details, setAgreement, agreement, setCounterCondition,
      counter, setCounter, maxCount, setMaxCount
    }}>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle style={{ textAlign: 'center', borderBottom: '2px dashed grey' }}>
          {proceed ? 'Medicine Form' : 'List of Medicines'}
        </DialogTitle>
        <DialogContent style={dialogContentStyle} className='medicine-dialog-content'>
          {proceed ? <MedForm /> : <MedicineSelect
            handleBoxSelect={handleBoxSelect}
          />}

        </DialogContent>
        <DialogActions sx={{ borderTop: '2px dashed grey' }}>
          {proceed ?
            <Button
              style={{ backgroundColor: '#3B5998' }}

              variant="contained"
              onClick={() => setProceed(!proceed)}>
              Back</Button>
            :
            <Button
              style={{ backgroundColor: '#3B5998' }}

              variant="contained"
              onClick={handleClose}>
              Close</Button>}
          {!proceed &&

            <Button disabled={counterCondition} style={{
              backgroundColor: counterCondition ? 'red' : '#3B5998',
              color: 'white', fontWeight: 'bold'
            }}
              variant="contained"
              onClick={() => setProceed(!proceed)}>{counterCondition ? 'Disabled' : "Next"}</Button>}
        </DialogActions>
      </Dialog>
    </MyContext.Provider>
  );
}
