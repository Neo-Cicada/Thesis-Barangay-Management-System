import React from 'react'
import { Link } from 'react-router-dom'


const Navigation = () =>{
  return(
    <nav className='nav-certificate'>
      <Link className='nav-list' >Manage Medicine</Link>
      <Link className='nav-list' >Request List</Link>
      <Link className='nav-list' >Status</Link>
    </nav>
    )
}
const HeroSection = ({children}) => {
  return(
    <div className="certificate-hero">
       {children}
  </div>
  )
}


export default function Medicine() {
  return (
    <>
    <Navigation/>
    
    </>
  )
}
