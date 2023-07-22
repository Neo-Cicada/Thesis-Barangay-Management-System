import { Box, Container, Button, Paper } from '@mui/material'
import React, { useState } from 'react'
import useRead from '../../hooks/useRead'
import RequestBox from '../RequestBox'

export default function EquipmentRequestList() {
  const [data, setData] = useState([])
  const [id, setId] = useState('')
  useRead('EquipmentRequest', setData)


  const handleAccept  = async  (e) =>{
    e.stopPropagation();
    console.log(id)
    console.log('Accepted!')
  }
  const handleReject = (e) =>{
    e.stopPropagation();
    console.log(id)
    console.log('Rejected')
  }
  const mapedBox = data.map(item =>
    <li key={item.id} onFocus={(e=>setId(item.id))}
    style={{ width: '70%', height: "auto", border: '1px solid red'}}>
     <RequestBox
      data={item}
      handleReject={handleReject}
      handleAccept={handleAccept}
      itemId={item.id}
      getId={setId}
      /> </li>) // map thru all the data then transform it as a component


  return (
    <>
      <Container style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxHeight: '25em',
        height: '100%',
        overflow: 'auto',
        border: '1px solid red',
        paddingTop: '1em',
        gap: '1em'
      }}>



          {mapedBox}



      </Container>
    </>
  )
}
