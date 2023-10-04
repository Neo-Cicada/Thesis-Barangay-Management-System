import React, { createContext, useContext, useState } from 'react';
import { TextField, Box, FormControlLabel, FormControl, Checkbox, Dialog, Button, InputLabel } from '@mui/material'
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
  const { selectedEquipment, details, setDetails, agreement, setAgreement, handleSubmit } = useContext(MyEquipmentContext);
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
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1em',
        marginTop: '1em',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <TextField
          required

          fullWidth
          value={details.fullname}
          label="Fullname"
          onChange={(e) => setDetails({ ...details, fullname: e.target.value })} />
        <TextField
          required

          fullWidth
          label="Phone Number"
          placeholder="09..."
          value={details.phoneNumber}
          onChange={(e) => setDetails({ ...details, phoneNumber: e.target.value })}
        />
        <TextField
          required

          fullWidth
          variant="outlined"
          label="Email address"
          value={details.email}
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
        />
        <FormControl fullWidth >
          {/* <InputLabel htmlFor="returnDate">Return Date</InputLabel> */}
          <TextField
            required
            label="Return Date"
            id="returnDate"
            variant="outlined"
            type="date"
            value={details.returnDate}
            onChange={(e) => setDetails({ ...details, returnDate: e.target.value })}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControl>
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
          control={<Checkbox checked={!agreement} />}
          onClick={() => setAgreement(!agreement)}
          label={
            <span style={{ cursor: 'pointer' }}>
              Agree to the <u onClick={handleOpenInnerDialog}>terms and conditions</u>
            </span>
          }
        />
        <Button
          onClick={handleSubmit}
          disabled={agreement}
        >{agreement ? 'Disabled' : 'Submit'}</Button>
      </div>
      </div>
      <TermsAndCondition open={openInnerDialog} onClose={handleCloseInnerDialog} />
      <Summary open={showSummary} onClose={() => setShowSummary(!showSummary)} />
    </>
  )
}
