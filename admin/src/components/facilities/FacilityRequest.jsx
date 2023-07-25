import { Box, Container, Button, Paper } from '@mui/material'
import React, { useState } from 'react'
import ScrollableContainer from '../ScrollableContainer'
import useRead from '../../hooks/useRead'
import RequestBox from '../RequestBox'
export default function FacilityRequest() {
  const [data, setData] = useState([])
  const [id, setId] = useState()
  const [specificData,setSpecificData] = useState()
  useRead('FacilityRequest', setData)

  const handleAccept = (e) =>{
    e.stopPropagation();
    console.log('Accept!')
  }
  const handleReject = (e) =>{
    e.stopPropagation();
    console.log('Rejected!')
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
