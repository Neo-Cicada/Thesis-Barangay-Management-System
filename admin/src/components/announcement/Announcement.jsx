import React, { useState } from 'react'
import { Button } from '@mui/material'
import { Link, Outlet, } from 'react-router-dom'
//TODO: figure out how to handle images in firebase

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '10%',
  gap: '20%',
  borderBottom: '1px solid gray',

}

const heroStyle = {
  height: '90%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const activeStyle = {
  backgroundColor: '#3B5998',
  color: 'white',
  fontSize: '1.3rem',

}
const normalStyle = {
  border: "2px dashed #3B5998",
  fontSize: '1.3rem',
}
export default function Announcement() {
  const [active, setActive] = useState(true)
  return (
    <>
      <div className='equipment-container'>

        <nav style={navStyle}>
          <Button
            onClick={() => setActive(true)}
            sx={active ? activeStyle : normalStyle}
            component={Link} to='announcement-management'>Announcement</Button>
          <Button
            onClick={() => setActive(false)}
            sx={active ? normalStyle : activeStyle}
            component={Link} to="announcement-history">History</Button>
        </nav>
        <div className='hero-section' style={heroStyle}>
          <Outlet />
        </div>
      </div>
    </>
  )
}
