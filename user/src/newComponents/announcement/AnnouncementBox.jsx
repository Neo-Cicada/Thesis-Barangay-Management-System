import React, { useState } from 'react'
import './announcement.css'
import {Button, Dialog, DialogActions, DialogContent} from '@mui/material'
import AnnouncementDialog from './AnnouncementDialog'

export default function AnnouncementBox({image, description, date}) {
  const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
  return (
    <>
      <div className='announcementBox'>
        <div className='announcement-image'>
          <img src={image} height='100%' width={'100%'} style={{borderRadius: '0.8em 0.8em 0 0'}}/>
        </div>
        <div className='announcement-text' >{description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eligendi consequatur minima ipsum odio consectetur, ipsam cum debitis, aperiam alias dignissimos, quam consequuntur accusantium molestiae blanditiis quidem labore illo nam!</div>
        <div className='announcement-footer' >
          <div className='date'>08/27/2023</div>
          <Button className='btn' onClick={handleOpen}>View</Button>
        </div>
      </div>
     <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <AnnouncementDialog image={image} description={description}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
     </Dialog>
    </>
  )
}
