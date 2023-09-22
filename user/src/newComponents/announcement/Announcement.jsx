import React, { useState } from 'react'
import './announcement.css'
import AnnouncementBox from './AnnouncementBox'
export default function Announcement() {
  const [isExpand, setIsExpand] = useState(false)
  const scrollable = {
    overflow: 'auto'
  }
  const style = isExpand ? scrollable : {};
  return (
    <>
      <div className='announcement'>
        <p className='announcement-title'>Announcements</p>
        <div className='announcement-body' style={style}>
            <AnnouncementBox/>
            <AnnouncementBox/>
            <AnnouncementBox/>
            <AnnouncementBox/>
        </div>
        <div className='announcement-btn'>
            <button onClick={()=>setIsExpand(!isExpand)}>{isExpand ? 'See less': 'See more'}</button>
        </div>
      </div>
    </>
  )
}
