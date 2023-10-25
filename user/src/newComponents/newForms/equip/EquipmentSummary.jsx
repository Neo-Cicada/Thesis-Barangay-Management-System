import React, { useContext } from 'react'
import { MyEquipmentContext } from './EquipmentDialog'
export default function EquipmentSummary() {
  const { details } = useContext(MyEquipmentContext);

  return (
    <>
      <div style={{ width: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div>
          <h2 style={{ textAlign: 'center' }}>
            Personal Information</h2>
          <div>
            <p>Fullname: {details.fullname}</p>
            <p>Phone Number: {details.phoneNumber}</p>
            <p>Email: {details.email}</p>
            <p>Return Date: {details.returnDate}</p>
          </div>
        </div>
        <div>
          <h2 style={{ textAlign: 'center' }}>
            Selected Items</h2>
          <div>
            {details.selectedEquipment.map(item => <p>Name: {item.name}| Quantity: {item.count}</p>)}
          </div>
        </div>

      </div>
    </>
  )
}
