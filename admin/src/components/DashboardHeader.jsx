import React from 'react'
import { Container } from '@mui/material'
export default function DashboardHeader() {
  return (
    <>
       <Container sx={{
            height: '10%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: "space-between"
          }}>
            <div style={{ width: '12.5%',}}>Name</div>
            <div style={{ width: '12.5%',}}>Email</div>
            <div style={{ width: '12.5%',}}>Phone</div>
            <div style={{ width: '12.5%',}}>Date</div>
            <div style={{ width: '12.5%',}}>Quantity</div>
            <div style={{ width: '12.5%',}}>Item</div>
            <div style={{ width: '12.5%',}}>Status</div>
            <div  style={{width:'12.5%'}}></div>
          </Container>
    </>
  )
}
