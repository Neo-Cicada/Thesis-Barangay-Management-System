import React, { useContext, useState } from 'react'
import { MyFacilityContext } from './FacilityDialog';

export function Box({ name, isSelected, onSelect }) {
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
export default function FacilitySelect() {
  const { selectedFacility, setselectedFacility, handleBoxSelect } = useContext(MyFacilityContext)


  return (
    <>
      <div className='items-dialog-content'>
        <Box
          name="Facility 1"
          isSelected={selectedFacility.some((facility) => facility.name === "Facility 1")}
          onSelect={handleBoxSelect}
        />
        <Box
          name="Facility 2"
          isSelected={selectedFacility.some((facility) => facility.name === "Facility 2")}
          onSelect={handleBoxSelect}
        />
      </div>
      <p style={{ textAlign: 'center' }}>Selected Facility</p>
      <div className='selected-certificates-dialog'>
      {selectedFacility.map((facility, index) => (
                    <div style={{textAlign:'center'}} key={index}>{facility.name} </div>
                ))}
      </div>
    </>
  )
}
