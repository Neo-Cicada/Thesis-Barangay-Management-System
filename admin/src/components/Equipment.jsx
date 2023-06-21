import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Facilites from './Facilities'
export default function Equipment() {
  return (
    <>
      <div className='equipment-container'>
        <Routes>
          <Route path='/' element={<Facilites/>}/>
        </Routes>
      </div>
    </>
  )
}
