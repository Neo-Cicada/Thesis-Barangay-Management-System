import React from 'react'
import { Button, TextField } from '@mui/material'
import { useState, useEffect } from 'react';
import { storage } from '../firebase'
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
export default function FileUpload() {
    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]);
    const imageListRef = ref(storage, "images/");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                if (!imageList.includes(url)) {
                    setImageList((prev) => [...prev, url]);
                }
            });
        });
    };

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

    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextField type='file' onChange={(e) => setImageUpload(e.target.files[0])} />
                <Button type='submit'>Submit</Button>
            </form>
            {imageList.map((url, index) => (
                <img key={index} src={url} width='250px' height='250px' alt={`Image ${index}`} />
            ))}
        </>
    );
}