import React from 'react'
import './announcement.css'
import AnnouncementBox from './AnnouncementBox'
export default function Announcement() {
  return (
    <>
      <div className='announcement'>
        <p className='announcement-title'>Announcements</p>
        <div className='announcement-body'>
            <AnnouncementBox/>
            <AnnouncementBox/>
            <AnnouncementBox/>
        </div>
        <div className='announcement-btn'>
            <button>See more</button>
        </div>
      </div>
    </>
  )
}
