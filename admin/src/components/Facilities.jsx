import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import HeroSection from '../structure/HeroSection'
const Navigation = () => {
  return(
    <nav className='nav-certificate'>
      <Link className='nav-list' to='facility-management'>Manage Facilities</Link>
      <Link className='nav-list' to='facility-request-list' >Request List</Link>
      <Link className='nav-list' to='facility-status' >Status</Link>
    </nav>
    )
}




export default function Facilities() {
  return (
    <>
    <Navigation/>
    <HeroSection>
      <Outlet/>
    </HeroSection>
    </>
  )
}
