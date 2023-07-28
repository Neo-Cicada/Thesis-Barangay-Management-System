import React from 'react'
import ScrollableContainer from '../ScrollableContainer'
import { useState } from 'react'
import useRead from '../../hooks/useRead'
import useTransfer from '../../hooks/useTransfer'
import OngoingBox from '../OngoingBox'

export default function MedicineOngoing() {
  const[data, setData] = useState([])
  const [id, setId] = useState()
  const [specificData, setSpecificData] = useState()

  useRead('MedicineOngoingStatus', setData)

  const handleTransfer = async (e) =>{
    e.stopPropagation();
    await useTransfer('MedicineCompletedStatus', 'MedicineOngoingStatus', id, specificData);
  }


  const items = data.map( item => <li key={item.id}
    onFocus={(e => setId(item.id, setSpecificData(item)))}
    style={{ width: '70%', height: "auto" }}>
      <OngoingBox data={item} onTransfer={handleTransfer}/>
    </li>)
  return (
    <>
      <ScrollableContainer>
        {items}
      </ScrollableContainer>
    </>
  )
}
