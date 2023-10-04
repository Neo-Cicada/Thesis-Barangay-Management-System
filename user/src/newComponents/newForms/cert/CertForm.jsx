import React, { useState, useContext } from 'react';
import { TextField, Box, FormControlLabel, Checkbox, Dialog, Button, DialogContent } from '@mui/material';
import Agreement from '../../../components/dialogs/Agreement';
import { MyCertContext } from './CertificateDialog';
import CertSummary from './CertSummary';
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

export default function CertForm() {
  const { details, setDetails } = useContext(MyCertContext)
  const [showAgreement, setShowAgreement] = useState(false);
  const [showSummary, setShowSummary] = useState(false)
  const handleOpenAgreement = () => {
    setShowAgreement(true);
  };

  const handleCloseAgreement = () => {
    setShowAgreement(false);
  };
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
          <CertSummary />
          <Button onClick={onClose}>Close</Button>
        </div>
      </Dialog>
    );
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
          label="Fullname"
          onChange={(e) => setDetails({ ...details, fullname: e.target.value })}
          value={details.fullname}
        />
        <TextField
          label="Phone number"
          onChange={(e) => setDetails({ ...details, phoneNumber: e.target.value })}
          value={details.phoneNumber}
        />
        <TextField
          label="Email"
          value={details.email}
          onChange={(e) => setDetails({ ...details, email: e.target.value })}

        // Add your state and onChange logic here
        />
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '0.3em',
          fontSize: '1.1rem',
          color: 'red',
          textDecoration: 'underline',
          cursor: 'pointer'
        }}>
          <span onClick={() => setShowSummary(true)}>Review summary of informaton provided</span>        </Box>
        <FormControlLabel
          required
          control={<Checkbox />}
          label={
            <span style={{ cursor: 'pointer' }}>
              Agree to the <u onClick={handleOpenAgreement}>terms and conditions</u>
            </span>
          }
        />
      </div>
      <TermsAndCondition open={showAgreement} onClose={handleCloseAgreement} />
      <Summary open={showSummary} onClose={()=>setShowSummary(false)}/>
    </>
  )
}