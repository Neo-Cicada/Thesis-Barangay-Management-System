import React, { createContext, useContext, useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogActions, Button } from '@mui/material';
import FacilitySelect from './FacilitySelect'
import './facilityDialog.css'
import FacilityForm from './FacilityForm';

export const MyFacilityContext = createContext();

export default function FacilityDialog({ open, handleClose }) {
  const [selectedFacility, setselectedFacility] = useState([]);
  const [proceed, setProceed] = useState(false);

  const [details, setDetails] = useState({
    fullname: '',
    email: '',
    phoneNumber: '',
    status:'request',
    selectedFacility: [...selectedFacility] // spread the array elements
  });
  useEffect(() => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      selectedFacility: selectedFacility,
    }));
  }, [selectedFacility]);

  const handleBoxSelect = (name) => {
    const index = selectedFacility.findIndex((facility) => facility.name === name);

    if (index !== -1) {
      // If already selected, remove the item from selectedCertificates
      const updatedSelected = selectedFacility.filter((facility) => facility.name !== name);
      setselectedFacility(updatedSelected);
    } else {
      // If not selected, select it
      setselectedFacility([...selectedFacility, { name: name }]);
    }
  };
  return (
    <>
      <MyFacilityContext.Provider value={{ selectedFacility, setselectedFacility, handleBoxSelect, details, setDetails }}>
        <Dialog open={open} onClose={handleClose} fullWidth>
          <DialogTitle sx={{ textAlign: 'center', borderBottom: '2px dashed grey' }}>{proceed ? 'Facility Form' : 'Available Facility'}</DialogTitle>
          <DialogContent sx={{ borderBottom: '2px dashed grey' }} className="facility-dialog-content" style={{ height: '100vh' }}>
            {proceed ? <FacilityForm /> : <FacilitySelect />}
          </DialogContent>
          <DialogActions>
            {proceed ? <Button variant="contained"  onClick={() => setProceed(!proceed)}>Back</Button> : <Button variant="contained"  onClick={handleClose}>Close</Button>}
            {!proceed &&<Button variant="contained" onClick={() => setProceed(true)}>Next</Button>}
          </DialogActions>
        </Dialog>
      </MyFacilityContext.Provider>
    </>
  )
}
