import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button, makeStyles } from '@mui/material'
import '../styles/sidebar.css'
import { useState } from 'react'
import One from '../assets/oiweo.png'
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
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';

import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
export default function SideBar({ handleSignout }) {
  // const loc = useLocation();
  // const path = loc.pathname; scan current location

  const [status, setStatus] = useState('default')
  const normalStyle = {
    color: 'black',
    width: '100%',
    fontSize: '1rem',
    display: 'flex',
  }

  const activeStyle = {
    ...normalStyle,
    fontWeight: 'bolder',
    fontSize: '1.1rem',
    color: '#3B5998',
    background: 'linear-gradient(to bottom, #F7F7F7, #8B9DC3)',

  }

  return (
    <>
      <div className='nav-container' >
        <div style={{
          height: '9%',
          borderBottom: '2px solid black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <img src={One} height={'150%'} width={'1000%'} />
        </div>
        <ul className='sb-ul-list' >
          <li className='sb-list'>
            <Button
              to='/'
              component={Link}
              sx={status === "default" ? activeStyle : normalStyle}
              onClick={() => setStatus("default")}>
              <div className='sidebar-logo' style={{ width: '30%', display: 'flex', justifyContent: 'center' }}>
                <DashboardOutlinedIcon fontSize='large' />
              </div>
              <div className='sidebar-btn-name' style={{ width: '70%', }}>
                Dashboard
              </div>
            </Button>
          </li>
          <li className='sb-list'>
            <Button
              to='report'
              component={Link}
              sx={status === "report" ? activeStyle : normalStyle}
              onClick={() => setStatus("report")}>
              <div className='sidebar-logo' style={{ width: '30%', display: 'flex', justifyContent: 'center' }}>
                <ReportProblemOutlinedIcon fontSize='large' />
              </div>
              <div className='sidebar-btn-name' style={{ width: '70%', }}>
                Complaints
              </div>
            </Button>
          </li>
          <li className='sb-list'>
            <Button
              to='equipment'
              component={Link}
              sx={status === "equipment" ? activeStyle : normalStyle}
              onClick={() => setStatus("equipment")}
            >
              <div className='sidebar-logo' style={{ width: '30%', display: 'flex', justifyContent: 'center' }}>
                {
                  status === "equipment" ? <HandymanIcon fontSize="large" /> : <HandymanOutlinedIcon fontSize="large" />
                }
              </div>
              <div className='sidebar-btn-name' style={{ width: '70%', }}>Equipment</div>
            </Button>
          </li>
          <li className='sb-list'><Button
            to='certificate'
            component={Link}
            sx={status === "certificate" ? activeStyle : normalStyle}
            onClick={() => setStatus("certificate")}
          >
            <div className='sidebar-logo' style={{ width: '30%', display: 'flex', justifyContent: 'center' }}>
              {
                status === "certificate" ? <ReceiptIcon fontSize="large" /> : <ReceiptOutlinedIcon fontSize="large" />
              }
            </div>
            <div className='sidebar-btn-name' style={{ width: '70%' }}>Documents</div>
          </Button></li>
          <li className='sb-list'>
            <Button

              to='announcement'
              component={Link}
              sx={status === "announcement" ? activeStyle : normalStyle}
              onClick={() => setStatus("announcement")}
            >
              <div className='sidebar-logo' style={{ width: '30%', display: 'flex', justifyContent: 'center' }}>
                {
                  status === "announcement" ? <CampaignIcon fontSize="large" /> : <CampaignOutlinedIcon fontSize="large" />
                }
              </div>
              <div className='sidebar-btn-name' style={{ width: '70%', }}>Announcement</div>
            </Button>
          </li>
          <li className='sb-list'>
            <Button to='enrollment'
              component={Link}
              sx={status === "enrollment" ? activeStyle : normalStyle}
              onClick={() => setStatus("enrollment")}
            >
              <div className='sidebar-logo' style={{ width: '30%', display: 'flex', justifyContent: 'center' }}>{
                status === "enrollment" ?
                  <LocalLibraryIcon fontSize="large" /> :
                  <LocalLibraryOutlinedIcon fontSize="large" />}</div>
              <div className='sidebar-btn-name' style={{ width: '70%', }}>Enrollment</div>
            </Button>
          </li>
          <li className='sb-list'>
            <Button to='facilities'
              component={Link}
              sx={status === "facilities" ? activeStyle : normalStyle}
              onClick={() => setStatus("facilities")}
            >
              <div className='sidebar-logo' style={{ width: '30%', display: 'flex', justifyContent: 'center' }}>{status === "facilities" ?
                <HouseIcon fontSize="large" /> :
                <HouseOutlinedIcon fontSize="large" />}</div>
              <div className='sidebar-btn-name' style={{ width: '70%', }}>Facilities</div>
            </Button>
          </li>
          <li className='sb-list'>
            <Button to='medicine'
              component={Link}
              sx={status === "medicine" ? activeStyle : normalStyle}
              onClick={() => setStatus("medicine")}
            >
              <div className='sidebar-logo' style={{ width: '30%', display: 'flex', justifyContent: 'center' }}>{status === "medicine" ?
                <LocalHospitalIcon fontSize="large" /> : <LocalHospitalOutlinedIcon fontSize="large" />}</div>
              <div className='sidebar-btn-name' style={{ width: '70%', }}>Medicine</div>
            </Button>
          </li>
          <li className='sb-list'>
            <Button to='garbage'
              component={Link}
              sx={status === "garbage" ? activeStyle : normalStyle}
              onClick={() => setStatus("garbage")}
            >
              <div className='sidebar-logo'
                style={{ width: '30%', display: 'flex', justifyContent: 'center' }}>
                {status === "garbage" ?
                  <DeleteIcon fontSize="large" /> :
                  <DeleteOutlinedIcon fontSize="large" />}</div>
              <div className='sidebar-btn-name' style={{ width: '70%', }}>Garbage</div>
            </Button>
          </li>
          <li className='sb-list'>
            <Button
              to="profile"
              component={Link}
              sx={status === "profile" ? activeStyle : normalStyle}
              onClick={() => setStatus("profile")}
            >
              <div className='sidebar-logo' style={{ width: '30%', display: 'flex', justifyContent: 'center' }}>
                {status === "profile" ?
                  <AccountCircleIcon fontSize='large' />
                  : <AccountCircleOutlinedIcon fontSize="large" />}
              </div>
              <div className='sidebar-btn-name' style={{ width: '70%' }}>Profile</div>
            </Button>
          </li>
          <li
            className='sb-list'

          >
            <div
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black' }}
              className='logout-btn'
              onClick={handleSignout}
            ><ExitToAppOutlinedIcon /></div>
          </li>
        </ul>
      </div>
    </>
  )
}
