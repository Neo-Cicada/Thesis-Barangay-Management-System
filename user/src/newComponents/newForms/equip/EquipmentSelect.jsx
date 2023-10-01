import React, { useContext } from 'react';
import { MyEquipmentContext } from './EquipmentDialog'; // Update with the correct import path
import SelectedEquipment from './SelectedEquipment';

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

export default function EquipmentSelect() {
  const { selectedEquipment, handleBoxSelect } = useContext(MyEquipmentContext);

  return (
    <>
      <div className='items-equipment-dialog'>
        <Box
          name="Equipment 1"
          isSelected={selectedEquipment.some((equipment) => equipment.name === "Equipment 1")}
          onSelect={handleBoxSelect}
        />
        <Box
          name="Equipment 2"
          isSelected={selectedEquipment.some((equipment) => equipment.name === "Equipment 2")}
          onSelect={handleBoxSelect}
        />
        {/* Add more boxes with different equipment names */}
      </div>
      <p style={{ textAlign: 'center' }}>Selected Equipment:</p>
      <div className='selected-equipment-dialog'>
        {selectedEquipment.map((equipment, index) => (
          <SelectedEquipment
            equipment={equipment}
            key={index}
          />
        ))}
      </div>
    </>
  );
}
  