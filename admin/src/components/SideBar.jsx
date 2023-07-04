import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/sidebar.css'
export default function SideBar() {
  return (
    <>
      <div className='nav-container'>
        <ul>
          <li><Link to='/'>Equipment</Link></li>
          <li><Link to='certificate'>Certification</Link></li>
          <li><Link to='announcement'>Announcement</Link></li>
          <li><Link to='enrollment'>Enrollment</Link></li>
          <li><Link to='facilities'>Facilities</Link></li>
          <li><Link to='medicine'>Medicine</Link></li>
        </ul>
      </div>
    </>
  )
}
