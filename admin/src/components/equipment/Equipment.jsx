import React from 'react'
import { Link, Outlet} from 'react-router-dom'
import Facilites from '../facilities/Facilities'
import EquipManage from '../equipment/EquipManage'
import '../../styles/equipment.css'
import EquipmentRequestList from '../equipment/EquipmentRequestList'

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
