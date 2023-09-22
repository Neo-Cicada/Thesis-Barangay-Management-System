import React from 'react'
import './announcement.css'
import {Button} from '@mui/material'
export default function AnnouncementBox() {
  return (
    <>
      <div className='announcementBox'>
        <div className='announcement-image'>
          image
        </div>
        <div className='announcement-text' >Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatem ratione officiis ex laboriosam cumque, adipisci sint. Aspernatur
          ea distinctio quisquam vero doloribus
          assumenda, nisi obcaecati repudiandae, dolore laudantium voluptates neque.</div>
        <div className='announcement-footer' >
          <div className='date'>08/27/2023</div>
          <Button className='btn'>View</Button>
        </div>
      </div>
    </>
  )
}
