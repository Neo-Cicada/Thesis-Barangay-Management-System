import { Box, Container, Button, Paper } from '@mui/material'
import React, { useState } from 'react'
import ScrollableContainer from '../ScrollableContainer'
import RequestBox from '../RequestBox'
import useRead from '../../hooks/useRead'
export default function MedicineRequestList() {
  const [data, setData] = useState([])
  const [id, setId] = useState()
  const [specificData,setSpecificData] = useState()
  useRead('MedicineRequest', setData)

  const handleAccept = (e) =>{
    e.stopPropagation();
    console.log('Accepted!')
  }

  const handleReject = (e) => {
    e.stopPropagation();
    console.log('Rejected')
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
