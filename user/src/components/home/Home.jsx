import React from 'react'
import PostBox from './PostBox'
import { Container } from '@mui/material'

export default function Home() {
  return (
    <>
      <Container className="custom-scrollbar" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
                overflow: 'auto',
                paddingTop: '1em',
                gap: '1em',
                scrollbarWidth: 'thin',
                scrollbarColor: '#333 #f1f1f1'
            }}>
              <PostBox/>
              <PostBox/>
              <PostBox/>
              <PostBox/>
              <PostBox/>
              <PostBox/>

            </Container>
    </>
  )
}
