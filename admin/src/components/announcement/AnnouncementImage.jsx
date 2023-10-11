import React, { useState } from 'react';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import { Button } from '@mui/material';
export default function AnnouncementImage({ setFile }) {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setSelectedImage(event.target.result);
                setFile(file)
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <>
            <div className='announcement-body-head'
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >

                {selectedImage ? <img src={selectedImage} alt='Selected' height={'100%'} width="50%" /> :
                    <label style={{
                        height: '100%', width: '100%',
                        cursor: 'pointer',
                        border: '2px dashed #3B5998',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        Upload Image
                        <InsertPhotoIcon fontSize='large' />
                        <input
                            type='file'
                            accept='image/*'
                            style={{ display: 'none' }}
                            onChange={handleImageChange}
                        />
                    </label>}


            </div>
            {selectedImage && <div style={{ display: 'flex', justifyContent: 'end', }}>
                <Button
                    sx={{backgroundColor:'#3B5998'}}
                     variant="contained"
                onClick={() => {
                    setSelectedImage(null);
                    setFile(null);
                }}>Delete</Button>
            </div>}


        </>
    )
}
