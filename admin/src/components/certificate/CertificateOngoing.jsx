import React from 'react'
import ScrollableContainer from '../ScrollableContainer'
import OngoingBox from '../OngoingBox'
import useRead from '../../hooks/useRead'
import { useState } from 'react'
export default function CertificateOngoing() {
  const[data, setData] = useState([])
  const [id, setId] = useState()
  const [specificData, setSpecificData] = useState()

  useRead('CertificateOngoingStatus', setData)

  const items = data.map(item=> <li key={item.id}
    onFocus={(e => setId(item.id, setSpecificData(item)))}
    style={{ width: '70%', height: "auto" }}> <OngoingBox data={item}/> </li>)
  return (
    <>
     <ScrollableContainer>
        {items}
     </ScrollableContainer>
    </>
  )
}
