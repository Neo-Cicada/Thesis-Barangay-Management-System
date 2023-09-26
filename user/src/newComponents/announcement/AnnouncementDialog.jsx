import React, { useState } from 'react';
import { Dialog, DialogContent, DialogActions, Button, CircularProgress } from '@mui/material';
import './announcement.css';

export default function AnnouncementDialog({ image, description, time}) {
    return (
        <>
            <div className='announcement-dialog'>
                <div className='announcement-image-popup'>
                    <img src={image} width="100%" height="100%"/>
                </div>
                <div className='announcement-description-popup'>
                    <p>{description} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore corrupti laudantium, facere quam sit praesentium provident ea ipsum fugit architecto quia iure officiis quas incidunt suscipit reprehenderit, rem molestiae deleniti, atque impedit soluta minima recusandae saepe cumque. Laborum temporibus perspiciatis facilis eligendi odio ullam eius incidunt et eaque, voluptates excepturi, ipsam, ratione nulla illo! Enim ea eius saepe corrupti autem numquam. Odit sapiente qui, harum hic voluptate mollitia blanditiis, culpa ullam odio, et quia incidunt rerum eius. Placeat non illum iste eligendi exercitationem, dolor voluptatem temporibus aliquid rem odio a error eaque! Laboriosam labore eum ullam nihil? Iure, repudiandae quo.</p>
                </div>
            </div>
        </>
    );
}
