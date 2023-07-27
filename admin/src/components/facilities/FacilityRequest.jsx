import { Box, Container, Button, Paper } from '@mui/material'
import React, { useState } from 'react'
import ScrollableContainer from '../ScrollableContainer'
import useRead from '../../hooks/useRead'
import RequestBox from '../RequestBox'
import useTransfer from '../../hooks/useTransfer'
export default function FacilityRequest() {
  const [data, setData] = useState([])
  const [id, setId] = useState()
  const [specificData,setSpecificData] = useState()

  useRead('FacilityRequest', setData)

  const handleAccept = async (e) =>{
    e.stopPropagation();
    await useTransfer('FacilityOngoingStatus', 'FacilityRequest', id, specificData)
  }
  const handleReject = async (e) =>{
    e.stopPropagation();
    await useTransfer('FacilityRejectedStatus', 'FacilityRequest', id, specificData)
  }


  const items = data.map(item => <li key={item.id} onFocus={(e => setId(item.id, setSpecificData(item)))}
  style={{ width: '70%', height: "auto" }}> <RequestBox data={item}
      handleReject={handleReject} handleAccept={handleAccept}/> </li>)
  return (
    <>
      <ScrollableContainer>
        {items}
      </ScrollableContainer>
    </>
  )
}
