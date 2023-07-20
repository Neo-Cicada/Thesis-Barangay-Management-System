import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@mui/material'
import '../styles/sidebar.css'
export default function SideBar() {
  const loc = useLocation();
  const path = loc.pathname;

  const equipmentPath = path === '/' ||
                        '/request' ||
                        '/status/ongoing' ||
                        '/status/completed' ||
                        '/status/rejected'
  const certificatePath = path === '/certificate/manage-certificate' || '/certificate/request-list-certificate' || '/certificate-status'
  const announcementPath = path === '/announcement/announcement-management' || '/announcement/announcement-history'
  const enrollmentPath = path === '/enrollment'
  const facilityPath = path === "/facilities/facility-management" || '/facilities/facility-request-list' || '/facilities/facility-status'
  const medicinePath = path === "/medicine/manage-medicine" || '/medicine/request-list-medicine'

  const activeLink = {
    color: 'black',
    borderBottom: '3px solid blue',
    width: '100%'


  }
  const normalLink = {
    color: 'black',
    width: '100%'
  }

  return (
    <>
      <div className='nav-container'>
        <ul>
          <li>
            <Button
              to='/'
              component={Link}
              sx={path === '/' ? activeLink : normalLink}
              >
                Equipment
            </Button>
          </li>
          <li><Button to='certificate'
            component={Link}
            sx={path === "/certificate/manage-certificate" ? activeLink : normalLink}>
            Certification</Button></li>
          <li>
            <Button
              to='announcement'
              component={Link}
              sx={path === "/announcement/announcement-management" ? activeLink : normalLink}>
              Announcement
            </Button>
          </li>
          <li>
            <Button to='enrollment'
              component={Link}
              sx={path === "/enrollment" ? activeLink : normalLink}
            >
              Enrollment
            </Button>
          </li>
          <li>
            <Button to='facilities'
              component={Link}
              sx={path === "/facilities/facility-management" ? activeLink : normalLink}
            >
              Facilities
            </Button>
          </li>
          <li>
            <Button to='medicine'
              component={Link}
              sx={path === "/medicine/manage-medicine" ? activeLink : normalLink}
              >
              Medicine
            </Button>
          </li>
        </ul>
      </div>
    </>
  )
}
