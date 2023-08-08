import React from 'react'
import { Link , Outlet} from 'react-router-dom'
//TODO: figure out how to handle images in firebase
const navStyle={
  border: '1px solid red',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '10%',
  gap: '20%'
}

const heroStyle ={
  height: '90%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

export default function Announcement() {
  return (
    <>
      <nav style={navStyle}>
        <Link to='announcement-management'>Announcement</Link>
        <Link to="announcement-history">History</Link>
      </nav>
      <div className='hero-section' style={heroStyle}>
        <Outlet/>
      </div>
    </>
  )
}
