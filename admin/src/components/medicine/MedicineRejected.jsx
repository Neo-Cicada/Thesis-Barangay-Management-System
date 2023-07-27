import React from 'react'
import useRead from '../../hooks/useRead'
import { useState } from 'react'
import RejectedBox from '../RejectedBox'
import ScrollableContainer from '../ScrollableContainer'
export default function MedicineRejected() {
  const[data, setData] = useState([])
  const [id, setId] = useState()
  const [specificData, setSpecificData] = useState()


  
  useRead('MedicineRejectedStatus', setData)
  const items = data.map( item => <li key={item.id}
    onFocus={(e => setId(item.id, setSpecificData(item)))}
    style={{ width: '70%', height: "auto" }}>
      <RejectedBox data={item}/>
    </li>)
  return (
    <>
      <ScrollableContainer>
        {items}
      </ScrollableContainer>
    </>
  )
}
