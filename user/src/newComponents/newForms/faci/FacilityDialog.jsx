import React, { createContext, useContext, useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogActions, Button } from '@mui/material';
import FacilitySelect from './FacilitySelect'
import './facilityDialog.css'
export const MyFacilityContext = createContext();
export default function FacilityDialog({ open, handleClose }) {
  const [selectedFacility, setselectedFacility] = useState([]);

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
      <MyFacilityContext.Provider value={{ selectedFacility, setselectedFacility, handleBoxSelect }}>
        <Dialog open={open} onClose={handleClose} fullWidth>
          <DialogTitle>Available Facility</DialogTitle>
          <DialogContent className="facility-dialog-content" style={{ height: '100vh' }}>
            <FacilitySelect />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
            <Button>Submit</Button>
          </DialogActions>
        </Dialog>
      </MyFacilityContext.Provider>
    </>
  )
}
