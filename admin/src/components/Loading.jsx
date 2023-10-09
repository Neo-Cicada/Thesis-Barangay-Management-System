import React from 'react'
import { Container, Skeleton } from '@mui/material'
export default function Loading() {
  return (
    <>
      <Container style={{ width: '100%', }}>
            <Skeleton sx={{ width: '100%', bgcolor: '#8B9DC3', }} />
            <Skeleton sx={{ width: '100%', bgcolor: '#8B9DC3', }} animation="wave" />
            <Skeleton sx={{ width: '100%', bgcolor: '#8B9DC3', }} animation={false} />
            <Skeleton sx={{ width: '100%', bgcolor: '#8B9DC3', }} />
            <Skeleton sx={{ width: '100%', bgcolor: '#8B9DC3', }} animation="wave" />
            <Skeleton sx={{ width: '100%', bgcolor: '#8B9DC3', }} animation={false} />
            <Skeleton sx={{ width: '100%', bgcolor: '#8B9DC3', }} />
            <Skeleton sx={{ width: '100%', bgcolor: '#8B9DC3', }} animation="wave" />
            <Skeleton sx={{ width: '100%', bgcolor: '#8B9DC3', }} animation={false} />
            <Skeleton sx={{ width: '100%', bgcolor: '#8B9DC3', }} animation={false} />
          </Container>
    </>
  )
}
