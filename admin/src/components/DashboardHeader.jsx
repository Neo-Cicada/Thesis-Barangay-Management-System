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
            <div style={{ width: '18%',  textAlign:'center' }}>Name</div>
            <div style={{ width: '20%',  textAlign:'center' }}>Email</div>
            <div style={{ width: '10%',  textAlign:'center' }}>Phone</div>
            <div style={{ width: '12.5%',  textAlign:'center' }}>Date</div>
            <div style={{ width: '6%',  textAlign:'center' }}>Quantity</div>
            <div style={{ width: '12.5%',  textAlign:'center' }}>Item</div>
            <div style={{ width: '12.5%',  textAlign:'center' }}>Status</div>
            <div  style={{width:'5%' , textAlign:'center' }}></div>
          </Container>
    </>
  )
}
