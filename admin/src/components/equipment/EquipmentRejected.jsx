import React from 'react'
import RejectedBox from '../RejectedBox'
import ScrollableContainer from '../ScrollableContainer'
import useRead from '../../hooks/useRead'
import { useState } from 'react'
export default function EquipmentRejected() {
  const [data, setData] = useState([])

  useRead('EquipmentRejectedStatus', setData)
  const items = data.map(item =>  <li key={item.id}
    style={{ width: '70%', height: "auto" }}><RejectedBox data={item}/> </li>)
  return (
    <>
      <ScrollableContainer>
        {items}
      </ScrollableContainer>
    </>
  )
}
