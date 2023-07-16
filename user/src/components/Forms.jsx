import React from 'react'
import { Container } from '@mui/material'
import { Link, Outlet } from 'react-router-dom'
import FormMenu from './FormMenu'

export default function Forms() {

  return (
    <>
      <div style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}>

    <div style={{ height: '10%', display: 'flex', justifyContent:'center', alignItems: 'center', width: '100%', backgroundColor: 'rgb(255,255,255)' }}>
        <FormMenu/>
    </div>

        <Container spacing={2} sx={
          {
            paddingTop: '1em',
            height: '100%', display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'rgb(255,255,255)'
          }

        }>
          <Outlet/>
        </Container>

      </div>

    </>
  )
}
