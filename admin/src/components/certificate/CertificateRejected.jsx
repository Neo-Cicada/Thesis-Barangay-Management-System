import React from 'react'
import ScrollableContainer from '../ScrollableContainer'
import useRead from '../../hooks/useRead'
import { useState } from 'react'
import RejectedBox from '../RejectedBox'
export default function CertificateRejected() {
  const [data, setData] = useState([])
  const [id, setId] = useState()
  const [specificData, setSpecificData] = useState()

  useRead('CertificateRejectedStatus', setData);

  const items= data.map(item => <li key={item.id}
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