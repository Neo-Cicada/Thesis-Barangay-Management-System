import React from 'react'
import { Button, Divider, TextField, Typography, InputAdornment } from '@mui/material';

export default function AnnouncementTitle({title, setTitle}) {
    const wordCount = title.length;
  return (
    <>
       <div className='announcement-title'>
      <TextField
        id="title"
        placeholder="Title"
        variant="outlined"
        fullWidth
        multiline
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {wordCount} / 300 words
            </InputAdornment>
          ),
        }}
        InputLabelProps={{
          shrink: false,
        }}
      />
  
    

      </div>
    </>
  )
}
