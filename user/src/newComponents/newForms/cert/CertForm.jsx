import React, { useState, useContext, useEffect } from 'react';
import {
  TextField, Box, FormControlLabel, Checkbox, Dialog, Button, DialogContent,
  FormControl, InputLabel, Select, MenuItem, RadioGroup, FormLabel, Radio
} from '@mui/material';
import Agreement from '../../../components/dialogs/Agreement';
import { MyCertContext } from './CertificateDialog';
import CertSummary from './CertSummary';
import useUpload from '../../../hooks/useUpload';
import SnackBar from '../../SnackBar'
function TermsAndCondition({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      {/* Innerx Dialog content */}
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
  const { details, setDetails, setSelectedCertificates } = useContext(MyCertContext)
  const [showAgreement, setShowAgreement,] = useState(false);
  const [showSummary, setShowSummary] = useState(false)
  const [agreement, setAgreement] = useState(false)
  const [openSnack, setOpenSnack] = useState(false)
  const totalQuantity = details.selectedCertificates.reduce((total, item) => total + parseInt(item.quantity, 10), 0);

  useEffect(() => {
    if (totalQuantity && details.mod === "Delivery") {
      setDetails({ ...details, total: (parseInt(totalQuantity, 10) + 50).toString() });
    } else {
      setDetails({ ...details, total: totalQuantity })
    }
  }, [details.mod])
  console.log(details)
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
  const handleSubmit = async (e) => {
    e.preventDefault()
    //useUpload here
    await useUpload(details, 'CertificateRequest')
    setSelectedCertificates([])
    setDetails({
      fullname: '',
      email: '',
      phoneNumber: '',
      address: "",
      reference: "",
      selectedCertificates: []
    })
    setOpenSnack(true)
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: '400px', margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1em',
          marginTop: '1em',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <FormControl>
            <FormLabel sx={{ textAlign: 'center' }}>Mode of collection</FormLabel>
            <RadioGroup
              defaultValue={"Pickup"}
              value={details.mod}
              onChange={(e) => setDetails({ ...details, mod: e.target.value })}
              row>
              <FormControlLabel value="Delivery" control={<Radio />} label="Delivery" />
              <FormControlLabel value="Pickup" control={<Radio />} label="Pickup" />
            </RadioGroup>
          </FormControl>
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
            helperText={/^09/.test(details.phoneNumber) && details.phoneNumber !== '' ?
              "Required" : "Phone number must start with '09'"}
          />
          <TextField
            helperText="Optional"
            fullWidth
            variant="outlined"
            label="Email address"
            value={details.email}
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
          />
          {details.mod === "Delivery" &&

            <TextField
              fullWidth
              helperText="Required"
              label="Delivery Address"
              onChange={(e) => setDetails({ ...details, address: e.target.value })}
            />}
          <FormControl>
            <FormLabel sx={{ textAlign: 'center' }}>Mode of Payment</FormLabel>
            <RadioGroup
              defaultValue={"Cash"}
              value={details.mop}
              onChange={(e) => setDetails({ ...details, mop: e.target.value })}
              row>
              <FormControlLabel value="Cash" control={<Radio />} label="Cash" />
              <FormControlLabel value="Gcash" control={<Radio />} label="Gcash" />
            </RadioGroup>
          </FormControl>
          <h3>
            Total: {details.mod === "Delivery" ? totalQuantity + 50 + "pesos delivery fee included" :
              totalQuantity + "pesos"}
          </h3>
          {details.mop === "Gcash" &&
            <TextField
              fullWidth
              onChange={(e) => setDetails({ ...details, reference: e.target.value })}
              label="Gcash Reference" />

          }
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
            control={<Checkbox checked={!agreement} />}
            onClick={() => setAgreement(!agreement)}
            label={
              <span style={{ cursor: 'pointer' }}>
                Agree to the <u onClick={handleOpenAgreement}>terms and conditions</u>
              </span>
            }
          />
        </div>
        <Button
          style={{ backgroundColor: '#3B5998', color: 'white', fontWeight: 'bold' }}
          fullWidth
          variant="contained"
          disabled={agreement}
          type={'submit'}
        >
          {agreement ? 'Disabled' : 'Submit'}</Button>
      </form>
      <SnackBar open={openSnack} handleCLose={() => setOpenSnack(false)} />
      <TermsAndCondition open={showAgreement} onClose={handleCloseAgreement} />
      <Summary open={showSummary} onClose={() => setShowSummary(false)} />
    </>
  )
}
