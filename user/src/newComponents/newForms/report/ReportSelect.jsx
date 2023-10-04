import React, { useState, useContext } from 'react'
import { MyReportContext } from './ReportDialog'
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
  const { selectedReport, setSelectReportDalog, handleBoxSelect } = useContext(MyReportContext)
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
          <div style={{ textAlign: 'center' }} key={index}>
            <p>{report.name}</p>
            <label htmlFor={`report-input-${index}`}>Who's the person you're reporting?</label>
            <input
              type="text"
              id={`report-input-${index}`}
              aria-label="who"
              placeholder="Enter person's name"
            />
          </div>
        ))}
      </div>
    </>
  )
}