import React, { useState } from 'react'
import './styles/announcementHistory.css'
import History from './History'
import useRead from '../../hooks/useRead'
import useDelete from '../../hooks/useDelete'
export default function AnnouncementHistory() {
  const [data, setData] = useState([]);
  useRead('images', setData)



  const items = data.map(item => <div><History item={item} key={item.id} /></div>)
  return (
    <>
      <div className='history-box'>
        {items}


      </div>
    </>
  )
}
