import React from 'react'
import './styles/postBox.css'
import { getStorage, ref, getMetadata } from "firebase/storage";
import { useState, useEffect } from 'react';
const PostBox = ({ image, filename }) => {
    const [metaData, setMetaData] = useState();
    const storage = getStorage();
    const forestRef = ref(storage, filename);
    const metaDataJson = JSON.stringify(metaData);
    const [title, setTitle] = useState()

    const handleImageClick = async () => {
        const metaDataObject = JSON.parse(metaDataJson); // This line is not needed since metaDataJson is already a JSON object
        const announcement = metaDataObject.customMetadata.announcement;
        setTitle(announcement)
    };


    useEffect(() => {
        // Fetch metadata
        getMetadata(forestRef)
          .then((metadata) => {
            setMetaData(metadata);
          })
          .catch((error) => {
            console.error('Error getting metadata:', error);
          });
      }, [filename]);
    return (
        <>
            <div className='postBoxContainer'>
                <div className='captionPostBox' style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
                    <p>{title}</p>
                </div>
                <div className='imagePostBox'>
                    <img src={image} width="100%" height="100%" onDurationChange={handleImageClick} />
                </div>
            </div>
        </>
    )
}
export default PostBox;