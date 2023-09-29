import React from 'react'
import './introduction.css'
export default function Introduction() {
  return (
    <>
      <div className='introduction' id='home'>
        <div className='intro-discription-box'>
          <p className='intro-title'>
            BARANGAY AMAMPEREZ
          </p>
          <p className='intro-location'>Villasis Pangasinan</p>
          <p className='intro-description'><span style={{color:'#3B5998', fontSize:'2rem'}}><b>Welcome to EBarangay</b></span> <br/>
            EBarangay is the ultimate solution for streamlined and efficient barangay management. Say goodbye to paperwork and long queues.
            With EBarangay, you can access a wide range of online services and stay informed with ease.
          </p>
        </div>

        <div className='introduction-circle'  >
          ABOUT
        </div>

      </div>


    </>
  )
}
