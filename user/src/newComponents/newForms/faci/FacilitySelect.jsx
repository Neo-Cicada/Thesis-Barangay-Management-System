import React, { useContext, useState } from 'react'
import { MyFacilityContext } from './FacilityDialog';
import useRead from '../../../hooks/useRead'
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
  const [data, setData] = useState([])
  useRead('Facility', setData)
  const handleOptionSelect = (facilityName, selectedSlot) => {
    const updatedSelectedFacility = selectedFacility.map((item) => {
      if (item.name === facilityName) {
        return { ...item, slot: selectedSlot };
      }
      return item;
    });
    setselectedFacility(updatedSelectedFacility);
  };
  const items = data.map(item => <Box
    name={item.type}
    isSelected={selectedFacility.some((facility) => facility.name === String(item.type))}
    onSelect={handleBoxSelect}
  />)
  const options = data.map((item) => (
    item.slots.map((slot, index) => (
      <option key={index} value={`${slot.startTime} - ${slot.endTime}`}>
        {`${slot.startTime} - ${slot.endTime}`}
      </option>
    ))
  ));
  return (
    <>
      <div className='items-dialog-content'>
        {items}
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
              {options}
              {/* Add more time slot options as needed */}
            </select>
          </div>
        ))}
      </div>
    </>
  )
}
