import React,{useContext, useState} from 'react'
import {myGarbageContext} from './GarbageDialog'
export default function GarbagSummary() {
  const {details} = useContext(myGarbageContext)
  return (
    <>
      <div style={{ width: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
        <h2 style={{ textAlign: 'center' }}>
          Personal Information</h2>
        <div>
          <p>Full Name: {details.fullname}</p>
          <p>Phone Number:{details.phoneNumber}</p>
          <p>Email:{details.email}</p>
          <p>Mode of Payment: {details.mop}</p>
          {details.address && <p>Address: {details.address}</p>}
        </div>
      </div>
    </>
  )
}
