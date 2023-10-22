import React from 'react'
import './footer.css'
import LOGO from '../../assets/eBarangay.png'
import { HashLink as Link } from 'react-router-hash-link'
import { Button } from '@mui/material'
export default function Footer() {
  return (
    <>
      <div className='footer'>
        <div className='foot site-map'>
          <p>SITEMAP</p>
          <ul>
            < Button
              sx={{
                color: 'black',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                '&:hover': {
                  color: 'white'
                }
              }}
              component={Link}
              className='nav-menu'
              to="#home"
              smooth>Home</Button>
            < Button
              sx={{
                color: 'black',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                '&:hover': {
                  color: 'white'
                }
              }}
              component={Link}
              className='nav-menu'
              to="#announcement"
              smooth>Announcement</Button>< Button
                sx={{
                  color: 'black',
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                  '&:hover': {
                    color: 'white'
                  }
                }}
                component={Link}
                className='nav-menu'
                to="#services"
                smooth>Services</Button>< Button
                  sx={{
                    color: 'black',
                    fontSize: '0.9rem',
                    fontWeight: 'bold',
                    '&:hover': {
                      color: 'white'
                    }
                  }}
                  component={Link}
                  className='nav-menu'
                  to="#about"
                  smooth>About</Button>
          </ul>
        </div>
        <div className='foot copyright'>
          <p>&copy; 2023 EBarangay.</p>
          <p>All Rights Reserved.</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
        <div className='foot loc'>
          <p style={{ textAlign: 'center' }}>BARANGAY HALL ADDRESS</p>
          <p style={{ textAlign: 'center' }}>Amamperez Zone 3 <br />Villasis, Pangasinan <br />Philippines</p>
        </div>
        <div className='foot emergency'>
          <p>PHONE NUMBERS</p>

          <p>Villasis Police Station(075) 6327566</p>
          <p> Villasis Fire Department632-2105</p>
          <p>Municipal Health Officer632-2099</p>
          <p>Mayor's Office632-2152 / 2041206</p>
        </div>
      </div>
    </>
  )
}
