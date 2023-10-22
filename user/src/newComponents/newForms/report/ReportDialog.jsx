import React, { createContext, useContext, useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogActions, Button } from '@mui/material';
import ReportSelect from './ReportSelect';
import ReportForm from './ReportForm';
import useUpload from '../../../hooks/useUpload'
export const MyReportContext = createContext();
export default function ReportDialog({ open, handleClose }) {
  const [selectedReport, setSelectReportDalog] = useState([]);
  const [proceed, setProceed] = useState(false);
  const [details, setDetails] = useState({
    fullname: '',
    email: '',
    phoneNumber: '',
    status: 'request',
    selectedReport: [...selectedReport], // spread the array elements
    summon: false
  });
  useEffect(() => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      status: 'request',
      selectedReport: selectedReport,
    }));
  }, [selectedReport]);
  const handleBoxSelect = (name, badGuy) => {
    const index = selectedReport.findIndex((report) => report.name === name);

    if (index !== -1) {
      // Item is already selected, so remove it
      const updatedSelected = selectedReport.filter((report) => report.name !== name);
      setSelectReportDalog(updatedSelected);
    } else {
      // Add a new report with the person's name when it's selected
      setSelectReportDalog([...selectedReport, { name: name, person: badGuy }]);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(details)
    await useUpload(details, 'ReportRequest')
    setSelectReportDalog([])
    setDetails({
      fullname: '',
      email: '',
      phoneNumber: '',
      selectedReport: [],
      summon: false,
      status: 'request'
    });

    handleClose()

  }
  return (
    <>
      <MyReportContext.Provider value={{ handleSubmit, selectedReport, setSelectReportDalog, handleBoxSelect, details, setDetails }}>
        <Dialog open={open} onClose={handleClose} fullWidth>
          <DialogTitle sx={{ textAlign: 'center', borderBottom: '2px dashed grey' }}>{proceed ? 'Report Form' : 'Report Someone'}</DialogTitle>
          <DialogContent style={{ height: '100vh', borderBottom: '2px dashed grey' }}>
            {proceed ? <ReportForm /> : <ReportSelect />}

          </DialogContent>
          <DialogActions>

            {proceed ? <Button
              style={{ backgroundColor: '#3B5998', color: 'white', fontWeight: 'bold' }}

              variant="contained"

              onClick={() => setProceed(false)}
            >Back</Button> : <Button
              style={{ backgroundColor: '#3B5998', color: 'white', fontWeight: 'bold' }}

              variant="contained"
              onClick={handleClose}>
              Close
            </Button>}

            {!proceed &&
              <Button
                style={{ backgroundColor: '#3B5998', color: 'white', fontWeight: 'bold' }}

                variant="contained"
                onClick={() => setProceed(true)}
              >Next</Button>
            }

          </DialogActions>
        </Dialog>
      </MyReportContext.Provider>
    </>
  )
}
