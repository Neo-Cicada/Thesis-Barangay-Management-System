import React from 'react'
import FormManagement from '../form-components/FormManagement'
import { Divider, TextField, Button, Select, MenuItem } from '@mui/material'

const Container = ({children}) =>{
  const style = {
    width: '100%',
    height: '95%',
    // border: '1px solid black',
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

const divStyle ={
  // border: '1px solid red',
  height: '33%',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center'
}
const itemStyle={
  // border: '1px solid red',
  width: '25%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}
export default function MedicineManagement() {
  return (
    <>
     <Container>
        <div style={divStyle}>

          <div className='item-label' style={itemStyle}>
            Add Medicine
          </div>
          <div style={itemStyle}>
            <TextField
            label="Add Medicine"
          />
          </div>

          <div style={itemStyle}>
            <TextField
            label="Quantity"
          />
          </div>

          <div  style={itemStyle}>
            <Button variant="contained">Okay</Button>
          </div>

        </div>
        <Divider/>
        <div style={divStyle}>
        <div className='item-label' style={itemStyle}>
            Remove Medicine
          </div>
          <div style={itemStyle}>
            <TextField
            label="Remove Medicine"
          />
          </div>

          <div style={itemStyle}>
            <TextField
            label="Quantity"
          />
          </div>

          <div  style={itemStyle}>
            <Button variant="contained">Okay</Button>
          </div>

        </div>
        <Divider/>

        <div style={divStyle}>
        <div className='item-label' style={itemStyle}>
            Update Medicine
          </div>
          <div style={itemStyle}>
            <TextField
            label="Update Medicine"
          />
          </div>

          <div style={itemStyle}>
            <TextField
            label="Quantity"
          />
          </div>

          <div  style={itemStyle}>
            <Button variant="contained">Okay</Button>
          </div>

        </div>
     </Container>
    </>
  )
}
