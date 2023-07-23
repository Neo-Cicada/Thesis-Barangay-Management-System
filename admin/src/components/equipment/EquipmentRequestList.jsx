import { Box, Container, Button, Paper } from '@mui/material'
import React, { useState } from 'react'
import useRead from '../../hooks/useRead'
import RequestBox from '../RequestBox'
import useTransfer from '../../hooks/useTransfer'
import ScrollableContainer from '../ScrollableContainer'
export default function EquipmentRequestList() {
  const [data, setData] = useState([])
  const [id, setId] = useState('')
  const [specificData, setSpecificData] = useState()
  useRead('EquipmentRequest', setData)


  const handleAccept = async (e) => {
    e.stopPropagation();
    await useTransfer('EquipmentOngoingStatus', 'EquipmentRequest', id, specificData);
    console.log(id)
    console.log('Accepted!');
  }
  const handleReject = async (e) => {
    e.stopPropagation();
    await useTransfer('EquipmentRejectedStatus', 'EquipmentRequest', id, specificData);

    console.log('Rejected');
  }

  const mapedBox = data.map(item =>
    <li key={item.id} onFocus={(e => setId(item.id, setSpecificData(item)))}
      style={{ width: '70%', height: "auto" }}>
      <RequestBox
        data={item}
        handleReject={handleReject}
        handleAccept={handleAccept}
        itemId={item.id}
        getId={setId}
      /> </li>) // map thru all the data then transform it as a component


  return (
    <>
      <ScrollableContainer>

        {mapedBox}

      </ScrollableContainer>    
      </>
  )
}
