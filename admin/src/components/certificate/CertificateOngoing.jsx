import React from 'react'
import ScrollableContainer from '../ScrollableContainer'
import OngoingBox from '../OngoingBox'
import useRead from '../../hooks/useRead'
import { useState } from 'react'
import useTransfer from '../../hooks/useTransfer'
export default function CertificateOngoing() {
  const [data, setData] = useState([])
  const [id, setId] = useState()
  const [specificData, setSpecificData] = useState()

  useRead('CertificateOngoingStatus', setData)
  const handleAccept = async (e) => {
    e.stopPropagation();
    await useTransfer('CertificateCompletedStatus',
      'CertificateOngoingStatus', id, specificData) //To From id data
  }


  const items = data.map(item => <li key={item.id}
    onFocus={(e => setId(item.id, setSpecificData(item)))}
    style={{ width: '70%', height: "auto" }}> <OngoingBox data={item} onTransfer={handleAccept} /> </li>)
  return (
    <>
      <ScrollableContainer>
        {items}
      </ScrollableContainer>
    </>
  )
}
