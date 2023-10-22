import React, { useContext, useState } from 'react'
import { TextField, FormControl, Box, FormControlLabel, Checkbox, Dialog, Button } from '@mui/material'
import { MyFacilityContext } from './FacilityDialog';
import Agreement from '../../../components/dialogs/Agreement';
import FacilitySummary from './FacilitySummary'
import useUpload from '../../../hooks/useUpload';
import SnackBar from '../../SnackBar'
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
        <Button
          style={{ backgroundColor: '#3B5998', color: 'white', fontWeight: 'bold' }}

          onClick={onClose}>Close</Button>
      </div>
    </Dialog>
  );
};
export default function FacilityForm() {
  const [showAgreement, setShowAgreement] = useState(false);
  const { selectedFacility, details, setDetails, setselectedFacility } = useContext(MyFacilityContext)
  const [openInnerDialog, setOpenInnerDialog] = useState(false);
  const [showSummary, setShowSummary] = useState(false)
  const [agreement, setAgreement] = useState(false)
  const [openSnack, setOpenSnack] = useState(false)
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
    setOpenSnack(true)
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
            required
            fullWidth
            value={details.fullname}
            label="Fullname"
            error={!isNaN(details.fullname) && details.fullname !== ''}
            helperText={"Required"}
            onChange={(e) => setDetails({ ...details, fullname: e.target.value })} />
          <TextField
            required
            fullWidth
            label="Phone Number"
            placeholder="09..."
            value={details.phoneNumber}
            onChange={(e) => {
              const onlyNums = e.target.value.replace(/[^0-9]/g, '');
              if (onlyNums.length <= 11) {
                const number = onlyNums;
                setDetails({ ...details, phoneNumber: number });
              }
            }}
            error={!/^09/.test(details.phoneNumber) && details.phoneNumber !== ''}
            helperText={/^09/.test(details.phoneNumber) && details.fullname !== '' ? "Required" : "Phone number must start with '09'"}
          />
          <TextField
            helperText="Optional"
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
            style={{ backgroundColor: '#3B5998', color: 'white', fontWeight: 'bold' }}
            fullWidth
            variant="contained"
            disabled={agreement}
            type={'submit'}
          >
            {agreement ? 'Disabled' : 'Submit'}</Button>
        </form>
      </div>
      <SnackBar open={openSnack} handleClose={() => setOpenSnack(false)} />
      <TermsAndCondition open={openInnerDialog} onClose={handleCloseInnerDialog} />
      <Summary open={showSummary} onClose={() => setShowSummary(!showSummary)} />
    </>
  )
}
