import React, { useContext, useState } from 'react';
import { MyEquipmentContext } from './EquipmentDialog'; // Update with the correct import path
import SelectedEquipment from './SelectedEquipment';
import useRead from '../../../hooks/useRead'
export function Box({ name, isSelected, onSelect, quantity, itemId }) {
  const boxStyle = {
    height: '5.5em',
    textAlign: 'center',
    borderRadius: '1em',
    width: '7em',
    cursor: 'pointer',
    backgroundColor: isSelected ? '#8B9DC3' : '#DFE3EE',
  };

  return (
    <div
      style={boxStyle}
      onClick={() => onSelect(name, "", itemId, quantity)}
    >
      <p style={{ fontSize: '1em' }}>{name}</p>
      <p style={{ fontSize: '1em' }}> {quantity}</p>
    </div>
  );
}

export default function EquipmentSelect() {
  const { selectedEquipment, handleBoxSelect } = useContext(MyEquipmentContext);
  const [data, setData] = useState([])

  useRead('Equipments', setData)

  const items = data.map(item => <Box
    name={item.equipment}
    itemId={item.id}
    isSelected={selectedEquipment.some((equipment) => equipment.name === String(item.equipment))}
    onSelect={handleBoxSelect}
    quantity={item.quantity}
  />)
  return (
    <>
      <div className='items-equipment-dialog'>
        {items}
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
