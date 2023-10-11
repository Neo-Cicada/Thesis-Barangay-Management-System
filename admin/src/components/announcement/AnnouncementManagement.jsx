import React, { useState } from 'react';
import { storage, db } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import './styles/announcement.css'
import useUpload from '../../hooks/useUpload';
import AnnouncementNav from './AnnouncementNav';
import AnnouncementTitle from './AnnouncementTitle';
import AnnouncementImage from './AnnouncementImage';

const boxStyle = {
  border: '4px solid #3B5998',
  height: '80%',
  width: '80%',
  borderRadius: '0.5em',
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
};

export default function AnnouncementManagement() {
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const wordCount = title.length;
  const currentDate = new Date();
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  // Get the month, day, and year components
  const month = monthNames[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  const formattedDate = `${month} ${day}, ${year}`;
  const content = {
    title: title,
    description: message,
    date: formattedDate
  }



  const handlePost = async (e) => {
    e.preventDefault();

    // Step 1: Upload the image to Firebase Storage
    if (file) {
      const imageRef = ref(storage, `images/${file.name}`);

      try {
        const snapshot = await uploadBytes(imageRef, file);
        const downloadURL = await getDownloadURL(snapshot.ref);
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
    useUpload('images', {...content, imageUrl: imageUrl });
    // console.log(file)
  }

  return (
    <div style={boxStyle}>
      <AnnouncementNav />
      <AnnouncementTitle title={title} setTitle={setTitle} />
      <div className='announcement-body'>
      
        <AnnouncementImage  setFile={setFile}/>
        <div className='announcement-text'>
          <textarea
            style={{border:'1px solid #3B5998'}}
            className="dynamic-textarea"
            placeholder='Text (optional)'
            value={message}
          onChange={(e)=>setMessage(e.target.value)}
          />
        </div>
      </div>
      <div className='ann-btn'>
        <button onClick={handlePost}>Post</button>
      </div>
    </div>
  );
}
