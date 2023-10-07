import React from 'react'
import DashboardHeader from '../DashboardHeader'
import ScrollableContainer from '../ScrollableContainer'
export default function EquipmentAllRequest({ items }) {
  return (
    <>
    <ScrollableContainer >
      <table style={{ tableLayout: 'auto', width: '100%', textAlign: 'center'}}>
        <DashboardHeader />

        <tbody>
          {items}
          {items}
          {items}
          {items}
          {items}
          {items}
          {items}
         
          
        </tbody>


      </table>
      </ScrollableContainer>
    </>
  )
}
