import React from 'react'
import { Button } from '@mui/material'
export default function DashboardConfirmation({accept, reject}) {
  return (
    <>
      <div
          style={{
            position:'absolute',
            background: 'white',
            border: '1px solid black',
            padding: '2px',
            marginLeft:'1.5em',
            zIndex:'1',
            display:'flex',
            flexDirection:'column'
          }}
        >
          <Button onClick={accept}>Accept</Button>
          <Button onClick={reject}>Reject</Button>

        </div>
    </>
  )
}
