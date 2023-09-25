import React from 'react'
import './announcement.css'
import {Button} from '@mui/material'
export default function AnnouncementBox({image, description, date}) {
  return (
    <>
      <div className='announcementBox'>
        <div className='announcement-image'>
          <img src={image} height='100%' width={'100%'}/>
        </div>
        <div className='announcement-text' >{description}</div>
        <div className='announcement-footer' >
          <div className='date'>08/27/2023</div>
          <Button className='btn'>View</Button>
        </div>
      </div>
    </>
  )
}
