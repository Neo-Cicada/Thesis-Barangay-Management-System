import React from 'react'
import useRead from '../../hooks/useRead'
import {useState} from 'react'
import RequestBox from '../RequestBox'
import { Container } from '@mui/material'
export default function EquipmentOngoing() {
  const [data, setData] = useState([])

  useRead('EquipmentOngoingStatus', setData)

  const items = data.map((item)=><li key={item.id}>
  {item.id}

  </li>)
  return (
    <>
      <Container>
        {items}
      </Container>
    </>
  )
}
