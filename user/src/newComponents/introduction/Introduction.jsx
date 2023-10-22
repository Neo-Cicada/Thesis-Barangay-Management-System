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

        </div>

        <div className='introduction-circle'  >
          <p className='intro-description' style={{ fontSize: '1.6rem' }}><span style={{
            fontWeight: 'bold',
            color: 'white',
            fontSize: '1.5rem',
          }}>
            <b>WELCOME <br /> TO <br />eBARANGAY</b>
          </span>
            <br />
          </p>
        </div>

      </div>


    </>
  )
}
