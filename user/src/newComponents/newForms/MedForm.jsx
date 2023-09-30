import React, { createContext, useContext, useState } from 'react';
import { TextField, Box, FormControlLabel, Checkbox, Dialog, Button } from '@mui/material'
import { MyContext } from './MedicineDialogForm'
import Agreement from '../../components/dialogs/Agreement'
function InnerDialog({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      {/* Inner Dialog content */}
      <div>
        <Agreement/>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </div>
    </Dialog>
  );
}
export default function MedForm() {

  const [showAgreement, setShowAgreement] = useState(false);
  const { selectedMedicines, details, setDetails } = useContext(MyContext);
  const [openInnerDialog, setOpenInnerDialog] = useState(false);

  const handleOpenInnerDialog = () => {
    setOpenInnerDialog(true);
  };

  const handleCloseInnerDialog = () => {
    setOpenInnerDialog(false);
  };
  return (
    <>

      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '1em',
        marginTop: '1em'
      }}>
        <TextField label="Fullname" onChange={(e)=>setDetails({...details, fullname: e.target.value})}/>
        <TextField
          label="Phone Number"
          placeholder="09..."
          onChange={(e)=>setDetails({...details, phoneNumber: e.target.value})}
        />
        <TextField
          variant="outlined"
          label="Email address"
          onChange={(e)=> setDetails({...details, email:e.target.value})}
          />
        <Box sx={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', marginTop: '0.3em',
          fontSize: '1.1rem', color: 'red', textDecoration: 'underline',
          cursor: 'pointer'
        }} >
          <span>Review summary of informaton provided</span>
        </Box>
        <FormControlLabel
          required
          control={<Checkbox />}
          label={
            <span  style={{ cursor: 'pointer' }}>
              Agree to the <u onClick={handleOpenInnerDialog}>terms and conditions</u>
            </span>
          }
        />
      </div>
      <InnerDialog open={openInnerDialog} onClose={handleCloseInnerDialog} />
    </>
  )
}
