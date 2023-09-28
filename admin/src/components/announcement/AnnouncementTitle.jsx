import React from 'react'
import { Button, Divider, TextField, Typography, InputAdornment } from '@mui/material';

export default function AnnouncementTitle({title, setTitle}) {
    const wordCount = title.length;
    const handleChange = (e) => {
      if (e.target.value.length <= 80) {
        setTitle(e.target.value);
      }
    };
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
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {wordCount} / 80 characters
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
