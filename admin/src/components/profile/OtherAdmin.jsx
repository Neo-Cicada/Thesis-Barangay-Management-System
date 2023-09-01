import React from 'react'
import { Container, Box } from '@mui/material'
import AdminLists from './AdminLists'
import CreateAdmin from './CreateAdmin'
export default function OtherAdmin() {
  return (
    <>
      <Container sx={{height: '100%', width:'100%', border:'1px solid red', display:'flex'}}>
        <Container className='admin-list' sx={{border:'1px solid black'}}>
            <AdminLists/>
        </Container>
        <Container className='add-admin' sx={{border:'1px solid black'}}>
            <CreateAdmin/>
        </Container>
      </Container>
    </>
  )
}
