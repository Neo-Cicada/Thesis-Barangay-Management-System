import React from 'react'
import './about.css'
export default function AboutEB({title, description, image}) {
  return (
    <>
      <div className='aboutEB'>
        <p className='EB-title'>
          {title}
        </p>
        <p className='EB-description'>
           {description}
        </p>
      </div>
    </>
  )
}
