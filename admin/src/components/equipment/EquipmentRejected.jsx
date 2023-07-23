import React from 'react'
import RejectedBox from '../RejectedBox'
import ScrollableContainer from '../ScrollableContainer'
import useRead from '../../hooks/useRead'
import { useState } from 'react'
export default function EquipmentRejected() {
  const [data, setData] = useState([])

  useRead('EquipmentRejectedStatus', setData)
  const items = data.map(item => <RejectedBox/>)
  return (
    <>
      <ScrollableContainer>
        {items}
      </ScrollableContainer>
    </>
  )
}
