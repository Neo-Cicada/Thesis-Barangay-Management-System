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
  const { selectedFacility, setselectedFacility, handleBoxSelect, } = useContext(MyFacilityContext)
  const handleOptionSelect = (facilityName, selectedSlot) => {
    const updatedSelectedFacility = selectedFacility.map((item) => {
      if (item.name === facilityName) {
        return { ...item, slot: selectedSlot };
      }
      return item;
    });
    setselectedFacility(updatedSelectedFacility);
  };

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
          <div style={{ textAlign: 'center', display: 'flex', borderBottom: '1px solid black', alignItems: 'center', gap: '1em', justifyContent: 'center' }} key={index}>
            <div >{facility.name}</div>
            <select
              value={facility.slot || ''} // Use the facility's slot value
              onChange={(e) => handleOptionSelect(facility.name, e.target.value)}
            >
              <option value="" disabled>
                Select Time Slot
              </option>
              {/* Populate these options with your time slot data */}
              <option value="Slot 1">Slot 1 - 1pm to 5pm</option>
              <option value="Slot 2">Slot 2 - 2pm to 6pm</option>
              {/* Add more time slot options as needed */}
            </select>
          </div>
        ))}
      </div>
    </>
  )
}
