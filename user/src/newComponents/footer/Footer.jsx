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
          <p>EBarangay</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus asperiores qui aperiam esse reiciendis labore omnis a libero laboriosam ipsa.</p>
        </div>
      </div>
    </>
  )
}
