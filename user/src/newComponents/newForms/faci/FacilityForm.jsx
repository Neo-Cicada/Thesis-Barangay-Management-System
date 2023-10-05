import React, { useContext, useState } from 'react'
import { TextField, FormControl, Box, FormControlLabel, Checkbox, Dialog, Button } from '@mui/material'
import { MyFacilityContext } from './FacilityDialog';
import Agreement from '../../../components/dialogs/Agreement';
import FacilitySummary from './FacilitySummary'
import useUpload from '../../../hooks/useUpload';
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
        <FacilitySummary />
        <Button onClick={onClose}>Close</Button>
      </div>
    </Dialog>
  );
};
export default function FacilityForm() {
  const [showAgreement, setShowAgreement] = useState(false);
  const { selectedFacility, details, setDetails, setselectedFacility } = useContext(MyFacilityContext)
  const [openInnerDialog, setOpenInnerDialog] = useState(false);
  const [showSummary, setShowSummary] = useState(false)
  const handleOpenInnerDialog = () => {
    setOpenInnerDialog(true);
  };

  const handleCloseInnerDialog = () => {
    setOpenInnerDialog(false);
  };
  const handleUpload = async (e) => {
    e.preventDefault();
    await useUpload(details, 'FacilityRequest')
    console.log(details)
    setselectedFacility([])
    setDetails({
      fullname: '',
      email: '',
      phoneNumber: '',
      selectedFacility: []
    });

  }
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '1em' }}>
        <form
          onSubmit={handleUpload}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1em',
            marginTop: '1em',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <TextField
            fullWidth
            value={details.fullname}
            label="Fullname"
            onChange={(e) => setDetails({ ...details, fullname: e.target.value })}
          />
          <TextField
            fullWidth

            label="Phone Number"
            placeholder="09..."
            value={details.phoneNumber}
            onChange={(e) => setDetails({ ...details, phoneNumber: e.target.value })}
          />
          <TextField
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
            control={<Checkbox />}
            label={
              <span style={{ cursor: 'pointer' }}>
                Agree to the <u onClick={handleOpenInnerDialog}>terms and conditions</u>
              </span>
            }
          />
          <Button type="submit" fullWidth variant='contained'>Submit</Button>
        </form>
      </div>
      <TermsAndCondition open={openInnerDialog} onClose={handleCloseInnerDialog} />
      <Summary open={showSummary} onClose={() => setShowSummary(!showSummary)} />
    </>
  )
}
