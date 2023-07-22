import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import HeroSection from '../../structure/HeroSection'
import FormManagement from '../../form-components/FormManagement'
import { Divider } from '@mui/material'
const Navigation = () =>{
  return(
    <nav className='nav-certificate'>
      <Link className='nav-list' to='manage-medicine' >Manage Medicine</Link>
      <Link className='nav-list' to='request-list-medicine'>Request List</Link>
      <Link className='nav-list' to='medicine-status'>Status</Link>
    </nav>
    )
}



export default function Medicine() {
  return (
    <>
    <Navigation/>
    <HeroSection>
      <Outlet/>
    </HeroSection>
    </>
  )
}
