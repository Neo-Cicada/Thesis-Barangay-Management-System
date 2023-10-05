import React, { useState } from 'react';
import { Dialog, DialogContent, DialogActions, Button, CircularProgress } from '@mui/material';
import './announcement.css';

export default function AnnouncementDialog({ image, description, date, title}) {
    return (
        <>
            <div className='announcement-dialog' >
                <div className='announcement-image-popup' >
                    <img src={image} width="100%" height="100%"/>
                </div>
                <div className='announcement-description-popup'>
                    <p style={{textAlign:'center', fontSize:'1.4rem', fontWeight:'bold'}}>{title}</p>
                    <p style={{textAlign:'center', fontSize:'1.2rem', borderBottom:'2px dashed grey'}}>{date}</p>
                    <p style={{textAlign:'center'}}>
                   {description}
                    </p>
                </div>
            </div>
        </>
    );
}
