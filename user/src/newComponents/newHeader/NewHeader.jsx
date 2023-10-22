import React from 'react'
import './newHeader.css'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Menu, MenuItem, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { HashLink as Link } from 'react-router-hash-link'
export default function NewHeader() {
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  const onClickMenu = () => {
    setIsMenuClicked(!isMenuClicked)
  }
  return (
    <>

      <header style={{ position: 'sticky', top: '0', zIndex: '5' }}>
        <div className='header-div'>
          <div className='navigation-logo' style={{
            cursor: 'pointer',
            fontFamily: 'Arial, sans-serif',
            fontSize: '3.3rem',
            fontWeight: 'bolder',
            letterSpacing: '-0.05rem',
            color: '#3B5998',
            textShadow: '0px 1px 1px rgba(0.5,0.5,0.5,0.5)',  // Optional text shadow
          }}>
            e<span style={{ color: '#3B5998', fontWeight:'750' }}>Barangay</span>
          </div>          {/* for mobile */}
          <div className='burger-icon' onClick={onClickMenu}>
            {isMenuClicked ? <CloseIcon fontSize='large' /> : <MenuIcon fontSize='large' />}
          </div>
          {/* for desktop */}
          <div className='desktop-navigation'>

            <ul>
              <Button
                sx={{
                  color: 'black',
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  '&:hover': {
                    borderBottom: '3px dashed black',
                    color: 'white'
                  }
                }}
                component={Link}
                className='nav-menu'
                to="#home"
                smooth>Home</Button>
              <Button
                sx={{
                  color: 'black',
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  '&:hover': {
                    color: 'white',
                    borderBottom: '3px dashed black',
                  }
                }}
                component={Link}
                className='nav-menu'
                to="#announcement"
                smooth>Announcement</Button>
              <Button
                sx={{
                  color: 'black',
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  '&:hover': {
                    color: 'white',
                    borderBottom: '3px dashed black',
                  }
                }}
                component={Link} className='nav-menu' to="#services" smooth>Services</Button>
              <Button
                sx={{
                  color: 'black',
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  '&:hover': {
                    color: 'white',
                    borderBottom: '3px dashed black',
                  }
                }}
                component={Link} className='nav-menu' to="#about" smooth>About</Button>
            </ul>

          </div>
        </div>
      </header>
      {isMenuClicked
        &&
        <div className='popUp-navigation' style={{position: 'fixed', top: '0', zIndex: '2' }}>
          <ul>
            <Button
              sx={{
                color: 'black',
                fontSize: '1.2rem',
                fontWeight: '1em',
                '&:hover': {
                  color: 'white',
                }
              }}
              className='nav-menu' component={Link} to="#home">Home</Button>
            <Button
              sx={{
                color: 'black',
                fontSize: '1.2rem',
                fontWeight: '1em',
                '&:hover': {
                  color: 'white',
                }
              }}
              className='nav-menu' component={Link} to="#announcement">Announcement</Button>
            <Button
              sx={{
                color: 'black',
                fontSize: '1.2rem',
                fontWeight: '1em',
                '&:hover': {
                  color: 'white',
                }
              }}
              className='nav-menu' component={Link} to="#services">Services</Button>
            <Button
              sx={{
                color: 'black',
                fontSize: '1.2rem',
                fontWeight: '1em',
                '&:hover': {
                  color: 'white',
                }
              }}
              className='nav-menu' component={Link} to="#about">About</Button>
          </ul>
        </div>}

    </>
  );
}