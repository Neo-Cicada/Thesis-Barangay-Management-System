import React, { createContext, useContext, useState } from 'react';
import Box from '../medicines/Box'
import useRead from '../../../hooks/useRead'
import { myDocumentContext } from './Document';
export default function DocumentSelect() {
    const [data, setData] = useState([]);
    useRead('Certificates', setData)
    const { selectedCertificates, handleBoxSelect, setSelectedCertificates } = useContext(myDocumentContext);
    const handleMopSelect = (certName, mop) => {
        const updateSelectedCertificates = selectedCertificates.map((item) => {
            if (item.name === certName) {
                return { ...item, mop: mop, reference: mop === 'GCASH' ? item.reference : '' };            }
            else {
                return item
            }
        });
        setSelectedCertificates(updateSelectedCertificates)
    }
    const handleReference = (certName, reference) => {
        const updateSelectedCertificates = selectedCertificates.map((item) => {
            if (item.name === certName) {
                return { ...item, reference: reference }
            }
            else {
                return item
            }
        });
        setSelectedCertificates(updateSelectedCertificates)

    }
    const items = data.map(item => <Box key={item.id}
        name={item.type}
        isSelected={selectedCertificates.some((certificate) => certificate.name === String(item.type))}
        onSelect={handleBoxSelect}
    />)
  return (
    <>
      {items}
    </>
  )
}
