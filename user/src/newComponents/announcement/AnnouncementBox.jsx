import React, { useState } from 'react'
import './announcement.css'
import {Button, Dialog, DialogActions, DialogContent} from '@mui/material'
import AnnouncementDialog from './AnnouncementDialog'

export default function AnnouncementBox({image, description, date, title}) {
  const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
  return (
    <><div className='announcementBox' onClick={()=> setOpen(true)}>
    <div className='announcement-image'>
      <img src={image} height='100%' width={'100%'} style={{borderRadius: '0.8em 0.8em 0 0'}}/>
    </div>
    <div className='announcement-text'>
     <b>{title}</b>  &nbsp; {date}
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
