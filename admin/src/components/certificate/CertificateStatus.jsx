import React from 'react'
import '../../styles/eqStatus.css'
import { Link, Outlet } from 'react-router-dom'
export default function CertificateStatus() {
  return (
    <>
      <>
      <div className='eqStatus'>
        <div>
          <Link to='ongoing'>Ongoing</Link>
        </div>
        <div>
          <Link to='completed'>Completed</Link>
        </div>
        <div>
          <Link to='rejected'>Rejected</Link>
        </div>
      </div>
      <div className='eqStatus-outlet'>
        <Outlet/>
      </div>
    </>
    </>
  )
}
