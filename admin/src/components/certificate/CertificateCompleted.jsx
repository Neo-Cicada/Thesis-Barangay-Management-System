import React from 'react'
import ScrollableContainer from '../ScrollableContainer'
import CompletedBox from '../CompleteBox'
import useRead from '../../hooks/useRead'
import { useState } from 'react'
export default function CertificateCompleted() {
  const [data, setData] = useState([]);
  const [id, setId] = useState()
  const [specificData, setSpecificData] = useState()


  useRead('CertificateOngoingStatus', setData)

  const items = data.map(item => <li key={item.id}
    style={{ width: '70%', height: "auto" }}> <CompletedBox data={item}/> </li>)
  return (
    <>
      <ScrollableContainer>
        {items}
      </ScrollableContainer>
    </>
  )
}
