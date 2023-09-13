import React from 'react';
import { Container } from '@mui/material';

export default function DashboardHeader() {
  return (
    <>
      <Container sx={{
        maxWidth: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: "space-between",
      }}>
        <Container style={{ width: '18%', textAlign: 'center' }}>Name</Container>
        <Container style={{ width: '20%', textAlign: 'center' }}>Email</Container>
        <Container style={{ width: '10%', textAlign: 'center' }}>Phone</Container>
        <Container style={{ width: '12.5%', textAlign: 'center' }}>Date</Container>
        <Container style={{ width: '6%', textAlign: 'center' }}>Quantity</Container>
        <Container style={{ width: '12.5%', textAlign: 'center' }}>Item</Container>
        <Container style={{ width: '12.5%', textAlign: 'center' }}>Status</Container>
        <Container style={{ width: '5%', textAlign: 'center' }}></Container>
      </Container>
    </>
  );
}