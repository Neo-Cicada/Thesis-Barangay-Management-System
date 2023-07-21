import React from 'react'
import {Button, Divider, TextField} from '@mui/material'

const boxStyle={
  border: '1px solid white',
  height: '80%',
  width: '50%',
  borderRadius: '0.5em',
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
}

export default function AnnouncementManagement() {
  return (
    <>
        <div style={boxStyle}>
          <div style={{width: '100%', height: '10%'}}>Create Post</div>
          <TextField
          label="Create Post"
          multiline
          rows={10}
          sx={{ width: '100%' }}
          defaultValue="Default Value"
        />
          <Divider/>
          <Button sx={{width:'100%'}}>Post</Button>
        </div>
    </>
  )
}
