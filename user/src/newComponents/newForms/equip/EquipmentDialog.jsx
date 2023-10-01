import React, { createContext, useContext, useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogActions, Button } from '@mui/material';
import './equipmentDialog.css'
import EquipmentSelect from './EquipmentSelect'
import EquipmentForm from './EquipmentForm'
export const MyEquipmentContext = createContext();
export default function EquipmentDialog({ open, handleClose }) {
  const [selectedEquipment, setSelectedEquipment] = useState([])
  const [proceed, setProceed] = useState(false)
  const [details, setDetails] = useState({
    fullname: '',
    email: '',
    phoneNumber: '',
    selectedEquipment: [...selectedEquipment] // spread the array elements
  });
  useEffect(() => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      selectedEquipment: selectedEquipment,
    }));
  }, [selectedEquipment]);
  const handleBoxSelect = (name, count) => {
    const index = selectedEquipment.findIndex((item) => item.name === name);

    if (index !== -1) {
      // If already selected, check if count is greater than 1
      if (count > 1) {
        // If count is greater than 1, decrement the count
        const updatedSelected = [...selectedEquipment];
        updatedSelected[index].count -= 1;
        setSelectedEquipment(updatedSelected);
      } else {
        // If count is 1 or less, remove the item from selectedMedicines
        const updatedSelected = selectedEquipment.filter((item) => item.name !== name);
        setSelectedEquipment(updatedSelected);
      }
    } else {
      // If not selected, select it with a count of 1
      setSelectedEquipment([...selectedEquipment, { name: name, count: 1 }]);
    }
  };
  return (
    <>
      <MyEquipmentContext.Provider value={{ selectedEquipment, setSelectedEquipment, details, setDetails, handleBoxSelect }}>
        <Dialog open={open} onClose={handleClose} fullWidth>
          <DialogTitle style={{textAlign:'center'}}>Available Equipment</DialogTitle>
          <DialogContent style={{ height: '100vh' }}>
         {proceed ? <EquipmentForm/> :   <EquipmentSelect />}
          </DialogContent>
          <DialogActions>
                    {proceed ? <Button onClick={() => setProceed(!proceed)}>Back</Button> : <Button onClick={handleClose}>Close</Button>}
                    {proceed ? <Button >Submit</Button> : <Button onClick={() => setProceed(!proceed)}>Next</Button>}
                </DialogActions>
        </Dialog>
      </MyEquipmentContext.Provider>
    </>
  )
}
