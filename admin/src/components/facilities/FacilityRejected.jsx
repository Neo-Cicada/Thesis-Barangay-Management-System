import React from 'react'
import { useState } from 'react'
import ScrollableContainer from '../ScrollableContainer'
import useRead from '../../hooks/useRead'
import useTransfer from '../../hooks/useTransfer'
import RejectedBox from '../RejectedBox'

export default function FacilityRejected() {
  const [data, setData] = useState([]);
  const [id, setId] = useState();
  const [specificData, setSpecificData] = useState();
  useRead('FacilityRejectedStatus', setData);


  const items = data.map(item => <li key={item.id}
    onFocus={(e => setId(item.id, setSpecificData(item)))}
    style={{ width: '70%', height: "auto" }}> <RejectedBox data={item} /> </li>)
  return (
    <>
      <ScrollableContainer>
        {items}
      </ScrollableContainer>
    </>
  )
}
