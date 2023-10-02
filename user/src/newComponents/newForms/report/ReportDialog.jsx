import React, { createContext, useContext, useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogActions, Button } from '@mui/material';

const MyReportContext = createContext();
export default function ReportDialog({ open, handleClose }) {
  const [selectedReport, setSelectReportDalog] = useState();
  return (
    <>
      <MyReportContext.Provider value={{selectedReport, setSelectReportDalog}}>
        <Dialog open={open} onClose={handleClose} fullWidth>
          <DialogTitle>Report Someone</DialogTitle>
          <DialogContent style={{height:'100vh'}}>Hello world</DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
            <Button>Submit</Button>
          </DialogActions>
        </Dialog>
      </MyReportContext.Provider>
    </>
  )
}
