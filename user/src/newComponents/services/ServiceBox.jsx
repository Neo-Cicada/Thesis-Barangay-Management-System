import React from 'react'
import './services.css'

export default function ServiceBox({title, image}) {
  return (
    <>
      <div className='service-box' >
        <img className='service-image' src={image} width={'100%'} height={'75%'}/>
        <p className='service-box-title' style={{height:'25%'}}>{title}</p>

      </div>
    </>
  )
}
