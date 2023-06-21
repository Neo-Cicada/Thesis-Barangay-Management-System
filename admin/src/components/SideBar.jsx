import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/sidebar.css'
export default function SideBar() {
  return (
    <>
      <div className='nav-container'>
        <ul>
          <li><Link to='/'>Equipment Management</Link></li>
          <li><Link to='certificate'>Certification Management</Link></li>
          <li><Link to='announcement'>Announcement</Link></li>
          <li><Link to='enrollment'>Enrollment Management</Link></li>
          <li><Link to='facilities'>Facilities Management</Link></li>
          <li><Link to='medicine'>Medicine Management</Link></li>
        </ul>
      </div>
    </>
  )
}
