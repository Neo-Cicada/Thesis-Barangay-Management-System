import React from 'react'
import { Link } from 'react-router-dom'


export default function NavBar() {
  return (
    <>
    <nav style={{display:'flex', gap: '1rem', margin: '1rem'}}>
      <Link to="/">Home</Link>
      <Link to="forms">Forms</Link>
      <Link to="report">Report</Link>
    </nav>
    </>
  )
}
