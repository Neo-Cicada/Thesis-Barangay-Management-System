import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@mui/material'
import '../styles/sidebar.css'
import { useState } from 'react'

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function SideBar() {
  // const loc = useLocation();
  // const path = loc.pathname; scan current location
  const [status, setStatus] = useState('equipment')
  const normalStyle = {
    color: 'black',
    width: '100%',
    fontSize: '1rem',
    padingRight: '5px',
    gap: '1em',
    display: 'flex',
    justifyContent: 'flex-start'

  }

  const activeStyle = {
    ...normalStyle,
    fontWeight: 'bold',
    fontSize: '1.1rem',



  }

  return (
    <>
      <div className='nav-container'>
        <div style={{ border: '1px solid red', height: '10%', marginTop: '15%' }}>
          <h1 >Logo</h1>

        </div>
        <ul>
          <li>
            <Button
              to='/'
              component={Link}
              sx={status === "equipment" ? activeStyle : normalStyle}
              onClick={() => setStatus("equipment")}
            >
              <div className='sidebar-logo'>Logo</div>
              <div className='sidebar-btn-name'>Equipment</div>
            </Button>
          </li>
          <li><Button
            to='certificate'
            component={Link}
            sx={status === "certificate" ? activeStyle : normalStyle}
            onClick={() => setStatus("certificate")}
          >
            <div className='sidebar-logo'>Logo</div>
            <div className='sidebar-btn-name'>Certification</div>
          </Button></li>
          <li>
            <Button

              to='announcement'
              component={Link}
              sx={status === "announcement" ? activeStyle : normalStyle}
              onClick={() => setStatus("announcement")}
            >
              <div className='sidebar-logo'>Logo</div>
              <div className='sidebar-btn-name'>Announcement</div>
            </Button>
          </li>
          <li>
            <Button to='enrollment'
              component={Link}
              sx={status === "enrollment" ? activeStyle : normalStyle}
              onClick={() => setStatus("enrollment")}
            >
              <div className='sidebar-logo'>Logo</div>
              <div className='sidebar-btn-name'>Enrollment</div>
            </Button>
          </li>
          <li>
            <Button to='facilities'
              component={Link}
              sx={status === "facilities" ? activeStyle : normalStyle}
              onClick={() => setStatus("facilities")}
            >
              <div className='sidebar-logo'>Logo</div>
              <div className='sidebar-btn-name'>Facilities</div>
            </Button>
          </li>
          <li>
            <Button to='medicine'
              component={Link}
              sx={status === "medicine" ? activeStyle : normalStyle}
              onClick={() => setStatus("medicine")}
            >
              <div className='sidebar-logo'>Logo</div>
              <div className='sidebar-btn-name'>Medicine</div>
            </Button>
          </li>
          <li>
            <Button
              to="profile"
              component={Link}
              sx={status === "profile" ? activeStyle : normalStyle}
              onClick={() => setStatus("profile")}
            >
              <div className='sidebar-logo'>
                {status === "profile" ?
                    <AccountCircleIcon fontSize='large' />
                 : <AccountCircleOutlinedIcon fontSize="large" /> }
              </div>
              <div className='sidebar-btn-name'>Profile</div>
            </Button>
          </li>
        </ul>
      </div>
    </>
  )
}
