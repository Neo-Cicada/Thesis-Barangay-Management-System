import React, { useContext } from 'react'
import { MyFacilityContext } from './FacilityDialog'
export default function FacilitySummary() {

  const { details, selectedFacility } = useContext(MyFacilityContext);
  return (
    <>
      <div style={{ width: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div>
          <h2 style={{ textAlign: 'center' }}>
            Personal Information</h2>
          <div>
            <p>Full Name: {details.fullname}</p>
            <p>Phone Number: {details.phoneNumber}</p>
            <p>Email: {details.email}</p>

          </div>
        </div>
        <div>
          <h2 style={{ textAlign: 'center' }}>
            Selected Items</h2>
          <div>
            {details.selectedFacility.map(item => <p>Name: {item.name} - Time Slots: {item.slot}</p>)}
          </div>
        </div>

      </div>
    </>
  )
}
