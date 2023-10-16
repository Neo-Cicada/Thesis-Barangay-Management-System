import React from 'react'
import './introduction.css'
export default function Introduction() {
  return (
    <>
      <div className='introduction' id='home'>
        <div className='intro-discription-box'>
          <p className='intro-title' style={{ fontSize: '3rem', fontWeight: 'bolder' }}>
            BARANGAY AMAMPEREZ
          </p>
          <p style={{ fontWeight: 'bolder', }} className='intro-location'>Villasis Pangasinan</p>
          <p className='intro-description' style={{ fontWeight: 'bolder', fontSize: '1.6rem' }}><span style={{ color: 'white', fontSize: '2rem', borderBottom: '8px solid #3B5998' }}>
            <b>Welcome to eBarangay</b>
          </span>
            <br />
          </p>
        </div>

        <div className='introduction-circle'  >
          ABOUT
        </div>

      </div>


    </>
  )
}
