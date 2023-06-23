import React from 'react'
import { Link, Route, Routes, useMatch, Outlet} from 'react-router-dom'
import Facilites from './Facilities'
import EquipManage from '../pages/EquipManage'
import '../styles/equipment.css'
import EquipmentRequestList from '../pages/EquipmentRequestList'

export default function Equipment() {
  return (
    <>
      <div className='equipment-container'>
        <nav className='nav-equipment'>
          <Link className='nav-list' to='/'>Manage Equipment</Link>
          <Link className='nav-list' to='request'>Request List</Link>
          <Link className='nav-list' to='status'>Status</Link>
        </nav>
        <div className="equipment-hero">
          <Outlet />
        </div>
      </div>
    </>
  )
}
