import React, { createContext, useContext, useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogActions, Button } from '@mui/material';
import ReportSelect from './ReportSelect';

export const MyReportContext = createContext();
export default function ReportDialog({ open, handleClose }) {
  const [selectedReport, setSelectReportDalog] = useState([]);

  
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
      <MyReportContext.Provider value={{selectedReport, setSelectReportDalog, handleBoxSelect}}>
        <Dialog open={open} onClose={handleClose} fullWidth>
          <DialogTitle sx={{textAlign:'center'}}>Report Someone</DialogTitle>
          <DialogContent style={{height:'100vh'}}>
            <ReportSelect/>

          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
            <Button>Submit</Button>
          </DialogActions>
        </Dialog>
      </MyReportContext.Provider>
    </>
  )
}
