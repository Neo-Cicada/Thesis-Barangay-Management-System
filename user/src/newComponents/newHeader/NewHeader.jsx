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
      <header>
        <div className='header-div'>
          <div className='navigation-logo' style={{
            fontFamily: 'Arial, sans-serif',
            fontSize: '3.2rem',
            fontWeight: 'bold',
            letterSpacing: '-0.05rem',
            color: '#1877F2',  // Facebook's blue color
            textShadow: '0px 1px 1px rgba(0,0,0,0.2)',  // Optional text shadow
          }}>
            E<span style={{ color: '#3B5998' }}>Barangay</span>
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
                  fontWeight: '1em',
                  '&:hover': {
                    border: '1px dashed black',
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
                  fontWeight: '1em',
                  '&:hover': {
                    color: 'white',
                    border: '1px dashed black'
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
                  fontWeight: '1em',
                  '&:hover': {
                    color: 'white',
                    border: '1px dashed black'
                  }
                }}
                component={Link} className='nav-menu' to="#services" smooth>Services</Button>
              <Button
                sx={{
                  color: 'black',
                  fontSize: '1.2rem',
                  fontWeight: '1em',
                  '&:hover': {
                    color: 'white',
                    border: '1px dashed black'
                  }
                }}
                component={Link} className='nav-menu' to="#about" smooth>About</Button>
            </ul>

          </div>
        </div>
      </header>
      {isMenuClicked
        &&
        <div className='popUp-navigation'>
          <ul>
            <li className='nav-menu' to="/">Home</li>
            <li className='nav-menu' to="announcement">Announcement</li>
            <li className='nav-menu' to="services">Services</li>
            <li className='nav-menu' to="about">About</li>
          </ul>
        </div>}

    </>
  );
}