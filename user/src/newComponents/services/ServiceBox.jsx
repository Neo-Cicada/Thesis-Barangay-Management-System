import React from 'react'
import './services.css'

export default function ServiceBox({title, image}) {
  return (
    <>
      <div className='service-box' >
        <img src={image} width={'100%'} height={'80%'}/>
        <p className='service-box-title'>{title}</p>

      </div>
    </>
  )
}
