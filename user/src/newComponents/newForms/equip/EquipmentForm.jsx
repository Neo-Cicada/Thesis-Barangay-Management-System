import React, { createContext, useContext, useState } from 'react';
import { TextField, Box, FormControlLabel, Checkbox, Dialog, Button } from '@mui/material'
import { MyEquipmentContext } from './EquipmentDialog';
import Agreement from '../../../components/dialogs/Agreement'
import EquipmentSummary from './EquipmentSummary'
function TermsAndCondition({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      {/* Inner Dialog content */}
      <div>
        <Agreement />
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </div>
    </Dialog>
  );
}
const Summary = ({ open, onClose }) => {
  const dialogStyle = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth >
      <div style={dialogStyle}>
        <EquipmentSummary />
        <Button onClick={onClose}>Close</Button>
      </div>
    </Dialog>
  );
};
export default function EquipmentDialogForm() {
  const [showAgreement, setShowAgreement] = useState(false);
  const { selectedEquipment, details, setDetails } = useContext(MyEquipmentContext);
  const [openInnerDialog, setOpenInnerDialog] = useState(false);
  const [showSummary, setShowSummary] = useState(false)
  const handleOpenInnerDialog = () => {
    setOpenInnerDialog(true);
  };

  const handleCloseInnerDialog = () => {
    setOpenInnerDialog(false);
  };

  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '3em',
        marginTop: '1em',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <TextField
          value={details.fullname}
          label="Fullname"
          onChange={(e) => setDetails({ ...details, fullname: e.target.value })} />
        <TextField
          label="Phone Number"
          placeholder="09..."
          value={details.phoneNumber}
          onChange={(e) => setDetails({ ...details, phoneNumber: e.target.value })}
        />
        <TextField
          variant="outlined"
          label="Email address"
          value={details.email}
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
        />
        <Box sx={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', marginTop: '0.3em',
          fontSize: '1.1rem', color: 'red', textDecoration: 'underline',
          cursor: 'pointer'
        }} >
          <span onClick={() => setShowSummary(true)}>Review summary of informaton provided</span>
        </Box>
        <FormControlLabel
          required
          control={<Checkbox />}
          label={
            <span style={{ cursor: 'pointer' }}>
              Agree to the <u onClick={handleOpenInnerDialog}>terms and conditions</u>
            </span>
          }
        />
      </div>
      <TermsAndCondition open={openInnerDialog} onClose={handleCloseInnerDialog} />
      <Summary open={showSummary} onClose={() => setShowSummary(!showSummary)} />
    </>
  )
}
