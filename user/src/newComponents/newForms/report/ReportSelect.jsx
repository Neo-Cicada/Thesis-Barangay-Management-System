import React, { useState, useContext } from 'react'
import { MyReportContext } from './ReportDialog'
import { TextField } from '@mui/material';
const Box = ({ name, isSelected, onSelect }) => {
  const boxStyle = {
    height: '5em',
    textAlign: 'center',
    borderRadius: '1em',
    width: '7em',
    cursor: 'pointer',
    backgroundColor: isSelected ? '#8B9DC3' : '#DFE3EE',
  };

  return (
    <div
      style={boxStyle}
      onClick={() => onSelect(name)}
    >
      <p style={{ fontSize: '1em' }}>{name}</p>
    </div>
  );
}

export default function ReportSelect() {
  const { selectedReport, setSelectReportDalog, handleBoxSelect } = useContext(MyReportContext);
  const violation = ["Violence", "Vandalism", "Infidelity", "Physical Abuse", "Verbal Abuse",
    "Scam", "Money Related", "Land Grabbing", "Drug Related", "Others"]
  const violationBoxes = violation.map((violationName) => (
    <Box
      name={violationName}
      isSelected={selectedReport.some((report) => report.name === violationName)}
      onSelect={handleBoxSelect}
      key={violationName}
    />
  ));
  const handleReport = (reportName, badGuy) => {
    const updatedSelectedReport = selectedReport.map((item) => {
      if (item.name === reportName) {
        return { ...item, person: badGuy };
      }
      return item;
    });
    setSelectReportDalog(updatedSelectedReport);
  };
  const handleFileReport = (reportName, file) => {
    const updatedSelectedReport = selectedReport.map((item) => {
      if (item.name === reportName) {
        return { ...item, file: file };
      }
      return item;
    });
    setSelectReportDalog(updatedSelectedReport);
  };
  console.log(selectedReport)
  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Common Issues</h2>
      <div className='items-certificates-dialog'>
        {violationBoxes}


      </div>
      <div className='selected-certificates-dialog'>
        {selectedReport.map((report, index) => (
          <div style={{ textAlign: 'center', borderBottom: '1px solid black' }} key={index}>
            <p>{report.name}</p>
            <div style={{
              display: 'flex', alignItems: 'center', flexDirection: 'column',
              gap: '1em'
            }}>
              <div>Who's the person you're reporting?
              </div>
              <TextField
                size='small'
                value={report.person}
                onChange={(e) => handleReport(report.name, e.target.value)}
                type="text"
                sx={{ width: "15em" }}

                label="Enter name"
                id={`report-input-${index}`}
                aria-label="who"
                placeholder="Enter name"

              />
              <TextField
                type='file'
                size='small'
                sx={{ width: "15em" }}
                label="Person Identification"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => handleFileReport(report.name, e.target.files[0])}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
