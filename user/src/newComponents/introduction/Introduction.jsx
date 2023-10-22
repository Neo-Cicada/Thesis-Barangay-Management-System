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
          <p className='intro-description' style={{
            fontWeight: 'bold',
            color: 'white',
            fontSize: '1.5rem',
            textAlign:'center',
          }}>
            WELCOME


          </p>
        </div>

      </div >


    </>
  )
}
