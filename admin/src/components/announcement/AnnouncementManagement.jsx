import React, { useState } from 'react';
import { Button, Divider, TextField } from '@mui/material';
import { storage, db } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import useUpload from '../../hooks/useUpload';
const boxStyle = {
  border: '1px solid white',
  height: '80%',
  width: '50%',
  borderRadius: '0.5em',
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
};

export default function AnnouncementManagement() {
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleImageUpload = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handlePost = async (e) => {
    e.preventDefault();

    // Step 1: Upload the image to Firebase Storage
    if (file) {
      const imageRef = ref(storage, `images/${file.name}`);

      try {
        const snapshot = await uploadBytes(imageRef, file);
        const downloadURL = await getDownloadURL(snapshot.ref);
        setImageUrl(downloadURL);

        // Step 2: Save image URL and description to Firestore
        addImageAndDescription(downloadURL, message);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    } else {
      // If there's no image selected, just save the description to Firestore
      addImageAndDescription('', message);
    }

    // Clear the input fields after posting
    setMessage('');
    setFile(null);
  };

  function addImageAndDescription(imageUrl, description) {
    useUpload('images', { imageUrl: imageUrl, description: description });
  }

  return (
    <div style={boxStyle}>
      <form onSubmit={handlePost}>
        <div style={{ width: '100%', height: '10%' }}>Create Post</div>
        <textarea
          style={{ width: '100%', maxWidth: '100%', minWidth: '100%', height: '30%' }}
          placeholder='Enter Announcement'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input
          type='file'
          accept='image/*'
          onChange={handleImageUpload}
        />
        <Divider />
        <Button sx={{ width: '100%' }} type='submit'>
          Post
        </Button>
      </form>
    </div>
  );
}
