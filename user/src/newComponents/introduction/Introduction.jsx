import React from 'react'
import './introduction.css'
export default function Introduction() {
  return (
    <>
      <div className='introduction' id='home'>
        <div className='intro-discription-box'>
          <p className='intro-title' >
            BARANGAY AMAMPEREZ
          </p>
          <p className='intro-location'>Villasis Pangasinan</p>
          <p className='intro-description' style={{ fontSize: '1.6rem' }}><span style={{
            fontWeight: '900',
            color: 'white',
            fontSize: '2rem',
            borderBottom: '8px solid #3B5998'
          }}>
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
