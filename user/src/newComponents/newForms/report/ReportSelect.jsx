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

  const handleReport = (reportName, badGuy) => {
    const updatedSelectedReport = selectedReport.map((item) => {
      if (item.name === reportName) {
        return { ...item, person: badGuy };
      }
      return item;
    });
    setSelectReportDalog(updatedSelectedReport);
  };
  return (
    <>
      <div className='items-certificates-dialog'>
        <Box name="Drunk"
          isSelected={selectedReport.some((report) => report.name === "Drunk")}
          onSelect={handleBoxSelect} />
        <Box name="Vandalism"
          isSelected={selectedReport.some((report) => report.name === "Vandalism")}
          onSelect={handleBoxSelect} />


      </div>
      <div className='selected-certificates-dialog'>
        {selectedReport.map((report, index) => (
          <div style={{ textAlign: 'center', border: '1px solid black' }} key={index}>
            <p>{report.name}</p>
            <div style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
              <div>Who's the person you're reporting?
              </div>
              <TextField
                size='small'
                value={report.person}
                onChange={(e) => handleReport(report.name, e.target.value)}
                type="text"
                label="Enter person name"
                id={`report-input-${index}`}
                aria-label="who"
                placeholder="Enter person's name"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
