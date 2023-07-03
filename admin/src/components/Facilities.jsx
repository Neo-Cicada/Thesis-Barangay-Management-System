import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return(
    <nav className='nav-certificate'>
      <Link className='nav-list' >Manage Certificate</Link>
      <Link className='nav-list' >Request List</Link>
      <Link className='nav-list' >Status</Link>
    </nav>
    )
}

const HeroSection = () => {

}



export default function Facilities() {
  return (
    <>
    <Navigation/>
    </>
  )
}
