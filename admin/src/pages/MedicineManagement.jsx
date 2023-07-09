import React from 'react'
import FormManagement from '../form-components/FormManagement'
import { Divider, TextField, Button, Select, MenuItem } from '@mui/material'

const Container = ({children}) =>{
  const style = {
    width: '100%',
    height: '100%',
    border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    gap: '2em'
  }
  return(
    <div style={style}>
      {children}
    </div>
  )
}

export default function MedicineManagement() {
  return (
    <>
     <Container>
        <FormManagement formTitle='Add Certificates'/>
     </Container>
    </>
  )
}
