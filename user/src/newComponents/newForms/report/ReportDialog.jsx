import React, { createContext, useContext, useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogActions, Button } from '@mui/material';
import ReportSelect from './ReportSelect';
import ReportForm from './ReportForm';
export const MyReportContext = createContext();
export default function ReportDialog({ open, handleClose }) {
  const [selectedReport, setSelectReportDalog] = useState([]);
  const [proceed, setProceed] = useState(false);


  const handleBoxSelect = (name) => {
    const index = selectedReport.findIndex((report) => report.name === name);

    if (index !== -1) {
      const updatedSelected = selectedReport.filter((report) => report.name !== name);
      setSelectReportDalog(updatedSelected);
    } else {
      setSelectReportDalog([...selectedReport, { name: name }]);
    }
  };

  return (
    <>
      <MyReportContext.Provider value={{ selectedReport, setSelectReportDalog, handleBoxSelect }}>
        <Dialog open={open} onClose={handleClose} fullWidth>
          <DialogTitle sx={{ textAlign: 'center' }}>{proceed ? 'Report Form':  'Report Someone'}</DialogTitle>
          <DialogContent style={{ height: '100vh' }}>
            {proceed ? <ReportForm /> : <ReportSelect />}

          </DialogContent>
          <DialogActions>

            {proceed ? <Button
              onClick={() => setProceed(false)}
            >Back</Button> : <Button
              variant="contained"
              onClick={handleClose}>
              Close
            </Button>}

            {proceed ?
              <Button>
                Submit
              </Button> :
              <Button
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
