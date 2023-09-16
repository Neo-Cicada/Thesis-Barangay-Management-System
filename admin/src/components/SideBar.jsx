import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@mui/material'
import '../styles/sidebar.css'
import { useState } from 'react'

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import HouseIcon from '@mui/icons-material/House';

import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';

import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import CampaignIcon from '@mui/icons-material/Campaign';

import ReceiptIcon from '@mui/icons-material/Receipt';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';

import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import HandymanIcon from '@mui/icons-material/Handyman';
import Logo from '../assets/2.png'
export default function SideBar({handleSignout}) {
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
    fontWeight: 'bolder',
    fontSize: '1.1rem',
    color:'#3b5998'


  }

  return (
    <>
      <div className='nav-container'>
        <div style={{  height: '10%', borderBotton: '2px solid black', display:'flex', justifyContent:'center' }}>
          <img src={Logo} height={'100%'} />
        </div>
        <ul>
          <li>
            <Button
              to='/'
              component={Link}
              sx={status === "equipment" ? activeStyle : normalStyle}
              onClick={() => setStatus("equipment")}
            >
              <div className='sidebar-logo'>
                {
                  status === "equipment" ? <HandymanIcon fontSize="large" /> : <HandymanOutlinedIcon fontSize="large" />
                }
              </div>
              <div className='sidebar-btn-name'>Equipment</div>
            </Button>
          </li>
          <li><Button
            to='certificate'
            component={Link}
            sx={status === "certificate" ? activeStyle : normalStyle}
            onClick={() => setStatus("certificate")}
          >
            <div className='sidebar-logo'>
              {
                status === "certificate" ? <ReceiptIcon fontSize="large" /> : <ReceiptOutlinedIcon fontSize="large" />
              }
            </div>
            <div className='sidebar-btn-name'>Certification</div>
          </Button></li>
          <li>
            <Button

              to='announcement'
              component={Link}
              sx={status === "announcement" ? activeStyle : normalStyle}
              onClick={() => setStatus("announcement")}
            >
              <div className='sidebar-logo'>
                {
                  status === "announcement" ? <CampaignIcon fontSize="large" /> : <CampaignOutlinedIcon fontSize="large" />
                }
              </div>
              <div className='sidebar-btn-name'>Announcement</div>
            </Button>
          </li>
          <li>
            <Button to='enrollment'
              component={Link}
              sx={status === "enrollment" ? activeStyle : normalStyle}
              onClick={() => setStatus("enrollment")}
            >
              <div className='sidebar-logo'>{
                status === "enrollment" ?
                  <LocalLibraryIcon fontSize="large" /> :
                  <LocalLibraryOutlinedIcon fontSize="large" />}</div>
              <div className='sidebar-btn-name'>Enrollment</div>
            </Button>
          </li>
          <li>
            <Button to='facilities'
              component={Link}
              sx={status === "facilities" ? activeStyle : normalStyle}
              onClick={() => setStatus("facilities")}
            >
              <div className='sidebar-logo'>{status === "facilities" ? 
              <HouseIcon fontSize="large" /> :
               <HouseOutlinedIcon fontSize="large" />}</div>
              <div className='sidebar-btn-name'>Facilities</div>
            </Button>
          </li>
          <li>
            <Button to='medicine'
              component={Link}
              sx={status === "medicine" ? activeStyle : normalStyle}
              onClick={() => setStatus("medicine")}
            >
              <div className='sidebar-logo'>{status === "medicine" ?
              <LocalHospitalIcon fontSize="large" /> : <LocalHospitalOutlinedIcon fontSize="large"/>}</div>
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
                  : <AccountCircleOutlinedIcon fontSize="large" />}
              </div>
              <div className='sidebar-btn-name'>Profile</div>
            </Button>
          </li>
          <li style={{height: '7em',
             display:'flex',
             justifyContent:'end',
             alignItems:'end'}}>
            <div
              onClick={handleSignout}
            style={{
               cursor:'pointer',
               border:'1px solid black',
               width:'6em',
               color:'#3b5998',
               borderRadius:'0.8rem',
               textAlign:'center', }}>Signout</div>
          </li>
        </ul>
      </div>
    </>
  )
}
