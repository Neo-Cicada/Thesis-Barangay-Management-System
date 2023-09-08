import React from 'react'
import DashboardHeader from '../DashboardHeader'
import ScrollableContainer from '../ScrollableContainer'
export default function EquipmentAllRequest({items}) {
  return (
    <>
      <DashboardHeader />
          <ScrollableContainer>
            {items}
          </ScrollableContainer>
    </>
  )
}
