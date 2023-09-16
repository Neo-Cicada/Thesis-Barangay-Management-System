import React from 'react'
import { Link, useLocation,  } from 'react-router-dom'
import { Button } from '@mui/material'

export default function NavBar() {
  const path = useLocation()
  const loc = location.pathname

  console.log(path.pathname)

  const activeLink = {
    color: 'black',
    fontWeight: 'bold',
    borderBottom: '3px solid blue'
  }

  const normalLink={
    color: 'black',
    fontWeight: 'bold'
  }
  const pathForm = loc === '/forms/certificate-request-form' ||
                   loc === '/forms/enrollment-request-form'||
                   loc === '/forms/facility-request-form' ||
                   loc === '/forms/medicine-request-form' ||
                   loc === '/forms/equipment-request-form'
  return (
    <>
    <nav style={{display:'flex', gap: '1rem', margin: '1rem'}}>
      <Button to="/" component={Link} sx={loc==="/" ? activeLink: normalLink}>Home</Button>
      <Button to="forms" component={Link} sx={pathForm ? activeLink: normalLink}>Forms</Button>
      {/* <Button to="report" component={Link } sx={loc==="/report" ? activeLink: normalLink}>Report</Button> */}
    </nav>
    </>
  )
}
