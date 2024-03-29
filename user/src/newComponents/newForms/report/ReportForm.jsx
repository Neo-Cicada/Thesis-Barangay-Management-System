import React, { useState, useEffect } from 'react';
import { TextField, Radio, RadioGroup, FormControlLabel, FormControl, Button, Checkbox, Dialog, Box, Snackbar } from '@mui/material';
import SummarayReport from './SummarayReport';
import Agreement from '../../../components/dialogs/Agreement';
import { MyReportContext } from './ReportDialog';
import { useContext } from 'react';
import useUpload from '../../../hooks/useUpload'
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
        <SummarayReport />
        <Button
          style={{ backgroundColor: '#3B5998', color: 'white', fontWeight: 'bold' }}

          variant='contained' onClick={onClose}>Close</Button>
      </div>
    </Dialog>
  );
};
export default function ReportForm() {
  const { details, setDetails, setSelectReportDalog, selectedReport, handleFileUpload } = useContext(MyReportContext)
  const [reportType, setReportType] = useState('anonymous');
  const [showSummary, setShowSummary] = useState(false);
  const [showCondition, setShowCondition] = useState(false);
  const [agreement, setAgreement] = useState(false)
  const [openSnack, setOpenSnack] = useState(false)
  const [submit, setSubmit] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Step 1: Upload files for each report and get their URLs
      const updatedSelectedReport = await Promise.all(
        selectedReport.map(async (report) => {
          if (report.file) {
            const downloadURL = await handleFileUpload(report.file);
            if (downloadURL) {
              return { ...report, imagePath: downloadURL, file: '' };
            }
          }
          return report;
        })
      );

      // Step 2: Update selectedReport with the file paths
      setSelectReportDalog(updatedSelectedReport);
      setDetails({ ...details, selectedReport: updatedSelectedReport });
      setSubmit(true);
    } catch (error) {
      console.error('Error during file upload:', error);
    }
  };

  useEffect(() => {
    if (submit) {
      useUpload(details, 'ReportRequest');
      console.log(selectedReport)
      setSelectReportDalog([]);
      setDetails({
        fullname: '',
        email: '',
        phoneNumber: '',
        selectedReport: [],
        summon: false,
        status: 'request',
      });
      console.log('Updated selectedReport:', selectedReport);
      setSubmit(false)
      setOpenSnack(true)

    }
  }, [submit, selectedReport]);

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
          error={!isNaN(details.fullname) && details.fullname !== ''}
          helperText={"Required"}
          disabled={reportType === 'anonymous'}
        />
        <TextField
          label="Number"
          name="number"
          value={details.phoneNumber}
          onChange={(e) => {
            const onlyNums = e.target.value.replace(/[^0-9]/g, '');
            if (onlyNums.length <= 11) {
              const number = onlyNums;
              setDetails({ ...details, phoneNumber: number });
            }
          }}
          fullWidth
          required
          margin="normal"
          disabled={reportType === 'anonymous'}
          helperText="Required"
        />

        <TextField
          label="Email"
          name="email"
          value={details.email}
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          fullWidth
          margin="normal"
          disabled={reportType === 'anonymous'}
          helperText="Optional"
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
            control={<Checkbox checked={!agreement} />}
            onClick={() => setAgreement(!agreement)}
            label={
              <span style={{ cursor: 'pointer' }} onClick={() => setShowCondition(true)}>
                Agree to the <u >terms and conditions</u>
              </span>
            }
          />
        </Box>

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
      {showCondition && <TermsAndCondition open={showCondition} onClose={() => setShowCondition(false)} />}
      {showSummary && <Summary open={showSummary} onClose={() => setShowSummary(false)} />}
    </div>
  );
}
