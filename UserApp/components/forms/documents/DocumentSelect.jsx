import React, { createContext, useContext, useState, } from 'react';
import Box from '../medicines/Box'
import { View, TextInput, Text, FlatList } from 'react-native';

import useRead from '../../../hooks/useRead'
import { myDocumentContext } from './Document';
export default function DocumentSelect() {
  const [data, setData] = useState([]);
  useRead('Certificates', setData)
  const { selectedCertificates, handleBoxSelect, setSelectedCertificates } = useContext(myDocumentContext);


  const items = data.map((item) => ({
    key: item.id.toString(),
    name: item.type,
    quantity: item.quantity,
    isSelected: selectedCertificates.some((certificate) => certificate.name === String(item.type)),
  }));
  const renderItem = ({ item }) => (
    <Box
      key={item.key}
      name={item.name}
      quantity={item.quantity}
      isSelected={item.isSelected}
      onSelect={handleBoxSelect}
    />
  );
  return (
    <>
      <View style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <FlatList
          numColumns={2}
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}

        />
      </View>
    </>
  )
}
