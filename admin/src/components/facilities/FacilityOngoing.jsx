import React from 'react'
import { useState } from 'react'
import ScrollableContainer from '../ScrollableContainer'
import useRead from '../../hooks/useRead'
import useTransfer from '../../hooks/useTransfer'
import OngoingBox from '../OngoingBox'
export default function FacilityOngoing() {
  const [data, setData] = useState([]);
  const [id, setId] = useState();
  const [specificData, setSpecificData] = useState();
  useRead('FacilityOngoingStatus', setData);

  const handleTransfer = async(e) =>{
    e.stopPropagation();
    await useTransfer('FacilityCompletedStatus', 'FacilityOngoingStatus',id, specificData)
  }

  const items = data.map(item => <li key={item.id}
    onFocus={(e => setId(item.id, setSpecificData(item)))}
    style={{ width: '70%', height: "auto" }}> <OngoingBox data={item} onTransfer={handleTransfer}/> </li>)


  return (
    <>
      <ScrollableContainer>
        {items}
      </ScrollableContainer>
    </>
  )
}
