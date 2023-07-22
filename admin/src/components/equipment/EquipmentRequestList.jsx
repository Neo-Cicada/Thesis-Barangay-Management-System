import { Box, Container, Button, Paper } from '@mui/material'
import React, { useState } from 'react'
import useRead from '../../hooks/useRead'
import RequestBox from '../RequestBox'

export default function EquipmentRequestList() {
  const [data, setData] = useState([])
  const [isShow, setIsShow] = useState(false)

  useRead('EquipmentRequest', setData)

  const mapedBox = data.map(item => <RequestBox data={item}/>)
  return (
    <>
      <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxHeight: '25em',
        height: '100%',
        overflow: 'auto'
      }}>
        
        {mapedBox}



      </Container>
    </>
  )
}
