import React from 'react'
import { Button, Divider, TextField, InputLabel, Input } from '@mui/material'
import './styles/announcement.css'
import { useState } from 'react'
import { storage } from '../../firebase'
import { ref, uploadBytes, listAll, getDownloadURL, updateMetadata } from 'firebase/storage'

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
  const [message, setMessage] = useState("");
  const imageListRef = ref(storage, 'announcement/');
  const newMetadata = {
    customMetadata: {
      "announcement": { message }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("tap");
    console.log(message)
    if (imageUpload == null) return;

    try {
      const imageRef = ref(storage, `announcement/${imageUpload.name}`);

      // Uploading image bytes
      const snapshot = await uploadBytes(imageRef, imageUpload);

      // Getting download URL and updating metadata
      const url = await getDownloadURL(snapshot.ref);
      if (!imageList.includes(url)) {
        setImageList((prev) => [...prev, url]);
      }

      // Updating metadata
      const newMetadata = {
        customMetadata: {
          // Add your custom metadata fields here
          announcement: message,
          timestamp: new Date().toISOString(),
        },
      };
      await updateMetadata(imageRef, newMetadata);

      console.log("Upload successful");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  return (
    <>

      <div style={boxStyle}>
        <form onSubmit={handleSubmit}>
          <div style={{ width: '100%', height: '10%' }}>Create Post</div>
          <textarea
            style={{ width: '100%', maxWidth: '100%', minWidth: '100%', height: '30%' }}
            placeholder='Enter Announcement'
            onChange={(e) => setMessage(e.target.value)}
          />
          <TextField type='file' onChange={(e) => setImageUpload(e.target.files[0])} fullWidth />
          <Divider />
          <Button sx={{ width: '100%' }} type='submit'>Post</Button>
        </form>
      </div>

    </>
  )
};




