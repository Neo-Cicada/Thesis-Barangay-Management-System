import React from 'react'
import { Link } from 'react-router-dom'
import HeroSection from '../structure/HeroSection'
const Navigation = () => {
  return(
    <nav className='nav-certificate'>
      <Link className='nav-list' >Manage Certificate</Link>
      <Link className='nav-list' >Request List</Link>
      <Link className='nav-list' >Status</Link>
    </nav>
    )
}




export default function Facilities() {
  return (
    <>
    <Navigation/>
    <HeroSection>
      <h1>Hello world</h1>
    </HeroSection>
    </>
  )
}
