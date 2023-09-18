import React from 'react'
import { Button } from '@mui/material'
export default function DashboardConfirmation({ accept, reject, status }) {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          background: 'white',
          border: '1px solid black',
          marginLeft: '1em',
          zIndex: '1',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {status === "ongoing" ? <Button onClick={accept}>Confirm</Button> : <Button onClick={accept}>Accept</Button>}

        <Button onClick={reject}>Reject</Button>

      </div>
    </>
  )
}
