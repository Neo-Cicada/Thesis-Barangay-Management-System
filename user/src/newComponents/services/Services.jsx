import React from 'react'
import './services.css'
import ServiceBox from './ServiceBox'
export default function Services() {
  return (
    <>
      <div className='services'>
        <p className='services-title'>Services</p>
        <div className='service-body'>
            <ServiceBox/>
            <ServiceBox/><ServiceBox/><ServiceBox/><ServiceBox/>
            <ServiceBox/>
        </div>
      </div>
    </>
  )
}
