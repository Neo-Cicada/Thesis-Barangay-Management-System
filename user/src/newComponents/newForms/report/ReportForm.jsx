import React, { useState, useEffect } from 'react';
import { TextField, Radio, RadioGroup, FormControlLabel, FormControl, Button, Checkbox, Dialog, Box } from '@mui/material';
import SummarayReport from './SummarayReport';
import Agreement from '../../../components/dialogs/Agreement';
import { MyReportContext } from './ReportDialog';
import { useContext } from 'react';
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
        <SummarayReport />
        <Button onClick={onClose}>Close</Button>
      </div>
    </Dialog>
  );
};
export default function ReportForm() {
  const { details, setDetails } = useContext(MyReportContext)
  const [reportType, setReportType] = useState('anonymous');
  const [showSummary, setShowSummary] = useState(false);
  const [showCondition, setShowCondition] = useState(false);

  useEffect(() => {
    if (reportType === 'anonymous') {
      // Clear the values when reportType is 'anonymous'
      setDetails({
        ...details,
        fullname: 'anonymous',
        phoneNumber: 'anonymous',
        email: 'anonymous',
        summon: false,
      })
    } else {
      setDetails({
        ...details,
        fullname: '',
        phoneNumber: '',
        email: '',
        summon: false,
      })
    }
  }, [reportType])
  const handleRadioChange = (event) => {
    setReportType(event.target.value);

  };



  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, you can access formData here
    console.log('Form Data:', details);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <FormControl component="fieldset" fullWidth>
          <RadioGroup row aria-label="reportType" name="reportType" value={reportType} onChange={handleRadioChange}>
            <FormControlLabel value="anonymous" control={<Radio />} label="Anonymous Report" />
            <FormControlLabel value="personal" control={<Radio />} label="Personal Information" />
          </RadioGroup>
        </FormControl>

        <TextField
          label="Fullname"
          name="Fullname"
          value={details.fullname}
          onChange={(e) => setDetails({ ...details, fullname: e.target.value })}
          fullWidth
          required
          margin="normal"
          disabled={reportType === 'anonymous'}
        />
        <TextField
          label="Number"
          name="number"
          value={details.phoneNumber}
          onChange={(e) => setDetails({ ...details, phoneNumber: e.target.value })}
          fullWidth
          required
          margin="normal"
          disabled={reportType === 'anonymous'}
        />

        <TextField
          label="Email"
          name="email"
          value={details.email}
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          fullWidth
          required
          margin="normal"
          disabled={reportType === 'anonymous'}
        />
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>

          <FormControlLabel
            control={
              <Checkbox
                name="summon"
                checked={details.summon}
                onChange={(e) => setDetails({ ...details, summon: e.target.checked })}
                color="primary"
                disabled={reportType === 'anonymous'}
              />
            }
            label="Summon the person being reported"
          />
        </Box>
        <Box sx={{

          display: 'flex', alignItems: 'center',
          justifyContent: 'center', marginTop: '0.3em',
          fontSize: '1.1rem', color: 'red', textDecoration: 'underline',
          cursor: 'pointer'
        }} >
          <span onClick={() => setShowSummary(true)}>Review summary of informaton provided</span>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <FormControlLabel
            required
            control={<Checkbox />}
            label={
              <span style={{ cursor: 'pointer' }} onClick={() => setShowCondition(true)}>
                Agree to the <u >terms and conditions</u>
              </span>
            }
          />
        </Box>

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
      {showCondition && <TermsAndCondition open={showCondition} onClose={() => setShowCondition(false)} />}
      {showSummary && <Summary open={showSummary} onClose={() => setShowSummary(false)} />}
    </div>
  );
}
