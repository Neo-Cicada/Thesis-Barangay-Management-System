import React from 'react'
import './newHeader.css'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Menu, MenuItem } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
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
              <li className='nav-menu'>Home</li>
              <li className='nav-menu'>Announcement</li>
              <li className='nav-menu'>Request</li>
              <li className='nav-menu'>About</li>
            </ul>

          </div>
        </div>
      </header>
      {isMenuClicked
        &&
        <div className='popUp-navigation'>
          <ul>
            <li className='nav-menu'>Home</li>
            <li className='nav-menu'>Announcement</li>
            <li className='nav-menu'>Reservation and Request</li>
            <li className='nav-menu'>About</li>
          </ul>
        </div>}

    </>
  );
}