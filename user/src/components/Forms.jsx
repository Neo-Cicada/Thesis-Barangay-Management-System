import React from 'react'
import { Container } from '@mui/material'
import { Link, Outlet } from 'react-router-dom'
import FormMenu from './FormMenu'

export default function Forms() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div style={{
        border: '1px solid red',
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}>

    <div style={{ height: '10%', display: 'flex', justifyContent:'center', alignItems: 'center'}}>
        <FormMenu/>
    </div>

        <Container spacing={2} sx={
          {
            paddingTop: '1em',
            border: '1px solid green',
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
