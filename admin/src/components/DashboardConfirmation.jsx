import React from 'react'
import { Button } from '@mui/material'
export default function DashboardConfirmation() {
  return (
    <>
      <div
          style={{
            position:'absolute',
            background: 'white',
            border: '1px solid black',
            padding: '5px',
            marginLeft:'2em',
            zIndex:'1',
            display:'flex',
            flexDirection:'column'
          }}
        >
          <Button>Accept</Button>
          <Button>Reject</Button>

        </div>
    </>
  )
}
