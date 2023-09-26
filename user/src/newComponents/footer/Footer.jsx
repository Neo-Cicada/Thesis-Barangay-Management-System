import React from 'react'
import './footer.css'
import LOGO from '../../assets/eBarangay.png'
export default function Footer() {
  return (
    <>
      <div className='footer'>
        <div className='foot site-map'>
          <p>SITEMAP</p>
          <ul>
            <li>Home</li>
            <li>Announcement</li>
            <li>Services</li>
            <li>About</li>
            <li>Guide</li>
          </ul>
        </div>
        <div className='foot copyright'>
          <p>&copy; 2023 EBarangay.</p>
          <p>All Rights Reserved.</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
        <div className='foot loc'>
          <p>BARANGAY HALL ADDRESS</p>
          <p>Amamperez Zone 3 <br />Villasis, Pangasinan <br />Philippines</p>
        </div>
        <div className='foot emergency'>
          <p>PHONE NUMBERS</p>
          <p>
            Villasis Police Station(075) 6327566 <br />
            Villasis Fire Department632-2105 <br />
            Municipal Health Officer632-2099 <br />
            Mayor's Office632-2152 / 2041206</p>
        </div>
      </div>
    </>
  )
}
