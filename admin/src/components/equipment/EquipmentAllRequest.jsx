import React from 'react'
import DashboardHeader from '../DashboardHeader'
import ScrollableContainer from '../ScrollableContainer'
export default function EquipmentAllRequest({ items }) {
  return (
    <>
      <ScrollableContainer sx={{ overflowX: 'scroll' }} >
        <table style={{ tableLayout: 'auto', width: '100%', textAlign: 'center', overflowX: 'scroll' }}>
          <DashboardHeader />
          <tbody>
            {items}
          </tbody>


        </table>
      </ScrollableContainer>
    </>
  )
}
