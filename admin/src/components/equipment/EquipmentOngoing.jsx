import React from 'react'
import useRead from '../../hooks/useRead'
import { useState } from 'react'

import ScrollableContainer from '../ScrollableContainer'
import OngoingBox from '../OngoingBox'
export default function EquipmentOngoing() {
  const [data, setData] = useState([])

  useRead('EquipmentOngoingStatus', setData)

  const items = data.map((item) => <OngoingBox />)

  return (
    <>
      <ScrollableContainer>
        {items}
      </ScrollableContainer>
    </>
  )
}
