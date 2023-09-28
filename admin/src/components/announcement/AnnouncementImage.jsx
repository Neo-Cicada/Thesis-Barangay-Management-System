import React, { useState } from 'react';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import { Button } from '@mui/material';
export default function AnnouncementImage() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setSelectedImage(event.target.result);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <>
            <div className='announcement-body-head' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >

                {selectedImage ? <img src={selectedImage} alt='Selected' height={'100%'} /> : <label style={{ height: '5em' }}>
                    <InsertPhotoIcon />
                    <input
                        type='file'
                        accept='image/*'
                        style={{ display: 'none' }}
                        onChange={handleImageChange}
                    />
                </label>}


            </div>
            <Button>Delete</Button>

        </>
    )
}
