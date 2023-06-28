import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../styles/certificate.css'

const Nav = () => {
  return(
  <nav className='nav-certificate'>
    <Link className='nav-list' to='manage-certificate'>Manage Certificate</Link>
    <Link className='nav-list' to='request-list-certificate'>Request List</Link>
    <Link className='nav-list' to='certificate-status'>Status</Link>
  </nav>
  )
}

const Hero = ({children}) => {
  return(
    <div className="certificate-hero">
       {children}
  </div>
  )
}

export default function Certificate() {
  return (
    <>
      <div className="certificate-container">
        <Nav/>

        <Hero>
          <Outlet/>
        </Hero>

      </div>
    </>
  )
}
