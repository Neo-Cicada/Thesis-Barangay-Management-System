import React from 'react'
import CompleteBox from '../CompleteBox'
import ScrollableContainer from '../ScrollableContainer'
import { useState } from 'react'
import useRead from '../../hooks/useRead'
export default function EquipmentCompleted() {
  const [data, setData] = useState([])

  useRead('EquipmentCompletedStatus', setData)


  const items = data ? data.map((item) => <li key={item.id} style={{ width: '70%', height: "auto" }}>
    <CompleteBox /></li>) : <h1>No data available</h1>;

  return (
    <>
      <ScrollableContainer>
        {items}
      </ScrollableContainer>
    </>
  )
}
