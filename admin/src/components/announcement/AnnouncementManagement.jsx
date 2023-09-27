import React, { useState } from 'react';
import { Button, Divider, TextField, Typography, InputAdornment } from '@mui/material';
import { storage, db } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import './styles/announcement.css'
import useUpload from '../../hooks/useUpload';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import AddLinkIcon from '@mui/icons-material/AddLink';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import StrikethroughSIcon from '@mui/icons-material/StrikethroughS';
import SuperscriptIcon from '@mui/icons-material/Superscript';
import KeyboardCapslockIcon from '@mui/icons-material/KeyboardCapslock';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import AnnouncementNav from './AnnouncementNav';
import AnnouncementTitle from './AnnouncementTitle';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import AddLink from '@mui/icons-material/AddLink';

const boxStyle = {
  border: '1px solid white',
  height: '80%',
  width: '80%',
  borderRadius: '0.5em',
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
};

export default function AnnouncementManagement() {
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const wordCount = title.length;
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
      <AnnouncementNav/>
      <AnnouncementTitle title={title} setTitle={setTitle}/>
      <div className='announcement-body'>
        <div className='announcement-body-head'>
          <ul className='announcement-list'>
            <li className='anncon'><FormatBoldIcon/></li>
            <li className='anncon'><FormatItalicIcon/></li>
            <li className='anncon'><AddLink/></li>
            <li className='anncon'><StrikethroughSIcon/></li>
            <li className='anncon'><KeyboardCapslockIcon/></li>
            <li className='anncon'><SuperscriptIcon/></li>
            <li className='anncon'><FormatListBulletedIcon/></li>
            <li className='anncon'><FormatListNumberedIcon/></li>
            <li className='anncon'><FormatQuoteIcon/></li>
            <li className='anncon'><InsertPhotoIcon/></li>
          </ul>
        </div>
        <div className='announcement-text'>
         textfield
        </div>
      </div>
      <div className='ann-btn'>
        <button>Post</button>
      </div>
    </div>
  );
}
