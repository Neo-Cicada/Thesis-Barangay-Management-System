import React from 'react'
import useRead from '../../hooks/useRead'
import { useState } from 'react'
import useTransfer from '../../hooks/useTransfer'
import ScrollableContainer from '../ScrollableContainer'
import OngoingBox from '../OngoingBox'
export default function EquipmentOngoing() {
  const [data, setData] = useState([])
  const [id, setId] = useState()
  const [specificData, setSpecificData] = useState([])
  const handleTransfer = async (e) =>{
    e.stopPropagation();
    await useTransfer('EquipmentCompletedStatus', 'EquipmentOngoingStatus', id, specificData )
    console.log('transfer success')
  }
  useRead('EquipmentOngoingStatus', setData)

  const items = data.map((item) =>
    <li key={item.id}
        onFocus={(e => setId(item.id, setSpecificData(item)))}
        style={{ width: '70%', height: "auto" }}>
          <OngoingBox onTransfer={handleTransfer}/>
    </li> )

  return (
    <>
      <ScrollableContainer>
        {items}
      </ScrollableContainer>
    </>
  )
}
