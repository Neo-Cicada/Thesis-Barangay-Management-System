import React from 'react'
import { Button, Divider, TextField, InputLabel, Input } from '@mui/material'
import './styles/announcement.css'
import { useState } from 'react'
import { storage } from '../../firebase'
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'

const boxStyle = {
  border: '1px solid white',
  height: '80%',
  width: '50%',
  borderRadius: '0.5em',
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
}

export default function AnnouncementManagement() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);

  const imageListRef = ref(storage, 'announcement/');

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("tap")
    console.log(imageUpload)
    if (imageUpload == null) return;

    const imageRef = ref(storage, `announcement/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        if (!imageList.includes(url)) {
          setImageList((prev) => [...prev, url]);
        }
      });
    });

  }

  return (
    <>

      <div style={boxStyle}>
        <form onSubmit={handleSubmit}>
          <div style={{ width: '100%', height: '10%' }}>Create Post</div>
          <textarea style={{ width: '100%', maxWidth: '100%', minWidth: '100%', height: '30%' }} placeholder='Enter Announcement' />
          <TextField type='file' onChange={(e) => setImageUpload(e.target.files[0])} fullWidth />
          <Divider />
          <Button sx={{ width: '100%' }} type='submit'>Post</Button>
        </form>
      </div>

    </>
  )
};




