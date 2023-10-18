import React, { createContext, useContext, useState, } from 'react';
import Box from '../medicines/Box'
import { View, Picker, TextInput, Text } from 'react-native';
import useRead from '../../../hooks/useRead'
import { myDocumentContext } from './Document';
export default function DocumentSelect() {
  const [data, setData] = useState([]);
  useRead('Certificates', setData)
  const { selectedCertificates, handleBoxSelect, setSelectedCertificates } = useContext(myDocumentContext);


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
