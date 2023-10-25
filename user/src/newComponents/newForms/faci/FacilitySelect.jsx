import React, { useContext, useState } from 'react'
import { MyFacilityContext } from './FacilityDialog';
import useRead from '../../../hooks/useRead'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
export function Box({ name, isSelected, onSelect, itemId, slots }) {
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
      onClick={() => onSelect(name, itemId, slots)}
    >
      <p style={{ fontSize: '1em' }}>{name}</p>
    </div>
  );
}
export default function FacilitySelect() {
  const { selectedFacility, setselectedFacility, handleBoxSelect, } = useContext(MyFacilityContext)
  const [data, setData] = useState([])
  useRead('Facility', setData)
  const handleOptionSelect = (facilityName, selectedSlot, selectedIndex) => {
    const updatedSelectedFacility = selectedFacility.map((item) => {
      if (item.name === facilityName) {
        return { ...item, slot: selectedSlot, itemIndex: selectedIndex };
      }
      return item;
    });
    setselectedFacility(updatedSelectedFacility);
  };
  const items = data.map(item => <Box
    itemId={item.id}
    slots={item.slots}
    name={item.type}
    isSelected={selectedFacility.some((facility) => facility.name === String(item.type))}
    onSelect={handleBoxSelect}
  />)
  function formatTimeToAmPm(militaryTime) {
    const timeParts = militaryTime.split(':');
    let hours = parseInt(timeParts[0]);
    const minutes = timeParts[1];
    const amPm = hours >= 12 ? 'PM' : 'AM';

    if (hours > 12) {
      hours -= 12;
    } else if (hours === 0) {
      hours = 12;
    }

    return `${hours}:${minutes} ${amPm}`;
  }
  const options = data.map((item) => (
    item.slots.map((slot, index) => (
      <MenuItem key={index} value={`${slot.startTime} - ${slot.endTime}`}>
        {`${formatTimeToAmPm(slot.startTime)} - ${formatTimeToAmPm(slot.endTime)}`}
      </MenuItem>
    ))
  ));
  return (
    <>
      <div className='items-dialog-content'>
        {items}
      </div>
      <p style={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>

        Selected Facility
        <span>Reservation for tomorrow</span>
      </p>
      <div className='selected-certificates-dialog' style={{
        height: '8em', display: 'flex',
        flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
      }}>
        {selectedFacility.map((facility, index) => (
          <div style={{
            textAlign: 'center', display: 'flex',
            width: '100%',
            borderBottom: '1px solid black', alignItems: 'center', gap: '2em', justifyContent: 'center',
          }} key={index}>
            <div style={{ width: '50%' }} >{facility.name}</div>
            <FormControl style={{ width: "50%" }}>
              <InputLabel>Available Time</InputLabel>
              <Select
                size='small'
                label={"Available Time"}
                value={facility.slot || ''}
                onChange={(e) => {
                  const selectedValue = e.target.value;
                  const selectedIndex = facility.slots.findIndex(slot => `${slot.startTime} - ${slot.endTime}` === selectedValue);
                  console.log(selectedIndex);
                  handleOptionSelect(facility.name, selectedValue, selectedIndex);
                }}
              >
                <MenuItem value="" disabled>
                  Select Time Slot
                </MenuItem>
                {facility.slots.map((slot, index) => (
                  <MenuItem key={index} value={`${slot.startTime} - ${slot.endTime}`}>
                    {`${formatTimeToAmPm(slot.startTime)} - ${formatTimeToAmPm(slot.endTime)}`}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

          </div>
        ))}
      </div>
    </>
  )
}
