import React, { createContext, useContext, useState } from 'react';
import { TextField, Box, FormControlLabel, Checkbox, Dialog, Button } from '@mui/material'
import { MyContext } from './MedicineDialogForm'
import Agreement from '../../../components/dialogs/Agreement'
import MedSummary from './MedSummary';
function TermsAndCondition({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      {/* Inner Dialog content */}
      <div>
        <Agreement />
        <Button color="secondary" variant="filled" onClick={onClose} >
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
        <MedSummary />
        <Button onClick={onClose}>Close</Button>
      </div>
    </Dialog>
  );
};

export default function MedForm() {

  const [showAgreement, setShowAgreement] = useState(false);
  const { selectedMedicines, details, setDetails,
    setAgreement, agreement, handleSubmit } = useContext(MyContext);
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

      <form onSubmit={handleSubmit} style={{
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
          variant="contained"
          disabled={agreement}
          type={'submit'}
        >
          {agreement ? 'Disabled' : 'Submit'}</Button>
      </form>

      <TermsAndCondition open={openInnerDialog} onClose={handleCloseInnerDialog} />
      <Summary open={showSummary} onClose={() => setShowSummary(!showSummary)} />
    </>
  )
}
