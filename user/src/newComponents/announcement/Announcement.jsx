import React, { useState } from 'react'
import { Button, Container } from '@mui/material'
import './announcement.css'
import AnnouncementBox from './AnnouncementBox'
import useRead from '../../hooks/useRead'
export default function Announcement() {
  const [data, setData] = useState([])
  const [isExpand, setIsExpand] = useState(false)
  useRead('images', setData)
  console.log(data)
  const items = data.map(item => <AnnouncementBox image={item.imageUrl} title={item.title} date={item.date} description={item.description} />)
  const scrollable = {
    overflow: 'auto'
  }
  const style = isExpand ? scrollable : {};
  return (
    <>
      <div className='announcement' id='announcement'>
        <Container >
          <p className='announcement-title' >Announcements</p>
        </Container>

        <div className='announcement-body' style={style}>
          {items}


        </div>
        <div className='announcement-btn'>
          <Button
            variant='contained'
            onClick={() => setIsExpand(!isExpand)}>{isExpand ? 'See less' : 'See more'}</Button>
        </div>
      </div>
    </>
  )
}
