import React, { createContext, useContext, useState, useEffect } from 'react';
import SelectedMedicine from './SelectedMedicine';
import { MyContext } from './MedicineDialogForm';
import useRead from '../../../hooks/useRead'
export function Box({ name, isSelected, onSelect, quantity, itemId }) {
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
      onClick={() => onSelect(name, "", itemId)}
    >
      <p style={{ fontSize: '1em' }}>{name}</p>
      <p>{quantity}</p>
    </div>
  );
}

export default function MedicineSelect({ handleBoxSelect }) {
  const { selectedMedicines } = useContext(MyContext);
  const [data, setData] = useState([])

  useRead('Medicines', setData)

  const items = data.map(item => <Box
    itemId={item.id}
    name={item.type}
    quantity={item.quantity}
    isSelected={selectedMedicines.some((medicine) => medicine.name == String(item.type))}
    onSelect={handleBoxSelect}
  />)
  return (
    <>
      <div className='items-medicine-dialog'>
        {items}

      </div>
      <p style={{ textAlign: 'center' }}>Selected Medicines:</p>
      <div className='selected-medicine-dialog'>
        {selectedMedicines.map((medicine, index) => (
          <SelectedMedicine
            medicine={medicine}
            key={index} />
        ))}
      </div>
    </>
  );
}
