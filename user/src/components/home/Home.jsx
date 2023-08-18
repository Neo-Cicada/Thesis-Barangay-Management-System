import React from 'react'
import PostBox from './PostBox'
import { Container } from '@mui/material'
import { useState, useEffect } from 'react';
import { storage } from '../../firebase'
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
export default function Home() {
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, "images/");

  useEffect(() => {
    listAll(imageListRef).then((response) => {
        const urlPromises = response.items.map((item) => {
            return getDownloadURL(item);
        });
        Promise.all(urlPromises).then((urls) => {
            setImageList(urls);
        });
    });
}, []);

  const imageMap = imageList.map((item)=><PostBox/>);
  return (
    <>
      <Container className="custom-scrollbar" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
                overflow: 'auto',
                paddingTop: '1em',
                gap: '1em',
                scrollbarWidth: 'thin',
                scrollbarColor: '#333 #f1f1f1'
            }}>
              {imageMap}

            </Container>
    </>
  )
}
