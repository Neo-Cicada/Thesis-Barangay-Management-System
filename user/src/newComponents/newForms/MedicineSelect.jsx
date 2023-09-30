import React, { createContext, useContext, useState } from 'react';
import SelectedMedicine from './SelectedMedicine';
import { MyContext } from './MedicineDialogForm';

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

export default function MedicineSelect({ handleBoxSelect }) {
  const { selectedMedicines } = useContext(MyContext);

  return (
    <>
      <div className='items-medicine-dialog'>
        <Box
          name="Paracetamol"
          isSelected={selectedMedicines.some((medicine) => medicine.name === "Paracetamol")}
          onSelect={handleBoxSelect}
        />
        <Box name="Medicine 2"
          onSelect={handleBoxSelect}
          isSelected={selectedMedicines.some((medicine) => medicine.name === "Medicine 2")}
        />

        <Box name="Medicine 4" onSelect={handleBoxSelect} />
        <Box name="Medicine 5" onSelect={handleBoxSelect} />
        <Box name="Medicine 6" onSelect={handleBoxSelect} />
        <Box name="Medicine 7" onSelect={handleBoxSelect} />
        {/* Add more boxes with different names */}
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
