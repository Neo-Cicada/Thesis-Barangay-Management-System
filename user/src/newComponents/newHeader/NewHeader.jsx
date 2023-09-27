import React from 'react'
import './newHeader.css'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Menu, MenuItem } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {HashLink as Link} from 'react-router-hash-link'
export default function NewHeader() {
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  const onClickMenu = () => {
    setIsMenuClicked(!isMenuClicked)
  }
  return (
    <>
      <header>
        <div className='header-div'>
          <div className='navigation-logo'>EBarangay</div>
          {/* for mobile */}
          <div className='burger-icon' onClick={onClickMenu}>
            {isMenuClicked ? <CloseIcon fontSize='large' /> : <MenuIcon fontSize='large' />}
          </div>
          {/* for desktop */}
          <div className='desktop-navigation'>

            <ul>
              <Link className='nav-menu' to="#home" smooth>Home</Link>
              <Link className='nav-menu' to="#announcement" smooth>Announcement</Link>
              <Link className='nav-menu' to="#services" smooth>Services</Link>
              <Link className='nav-menu' to="#about" smooth>About</Link>
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