import React from 'react'
import FormManagement from '../form-components/FormManagement'
import { Divider, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material'
import { useState } from 'react'
import useUpload from '../hooks/useUpload'
import useRead from '../hooks/useRead'
import useUpdate from '../hooks/useUpdate'
import useDelete from '../hooks/useDelete'


const Container = ({ children }) => {
  const style = {
    width: '100%',
    height: '95%',
    // border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    gap: '2em'
  }
  return (
    <div style={style}>
      {children}
    </div>
  )
}

const divStyle = {
  // border: '1px solid red',
  height: '33%',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center'
}
const itemStyle = {
  // border: '1px solid red',
  width: '25%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}


export default function MedicineManagement() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');

  useRead('Medicines', setData);

  const Add = async (e) => {
    e.preventDefault()
    console.log(name, quantity)
    await useUpload(name, quantity, 'Medicines').then(
      setName(''),
      setQuantity('')
    )
  }

  const Delete = async (e) => {
    e.preventDefault();
    await useDelete('Medicines', value).then(
    setValue(''),
    console.log('success!')
    )
  }

  const Update = async (e) => {
    e.preventDefault();
    console.log(value)
    await useUpdate('Medicines', value).then(
      setValue(''),
      console.log('success')
    )
  }

  const items = data.map((item) => {
    return(
    <MenuItem key={item.id} value={item.id}>
      {item.type}
    </MenuItem>
    )
  })

  return (
    <>
      <Container>
        <form style={divStyle} onSubmit={Add}>

          <div className='item-label' style={itemStyle}>
            Add Medicine
          </div>
          <div style={itemStyle}>
            <TextField
              label="Add Medicine"
              value={name}
              onChange={
                (e) => {
                  setName(e.target.value)
                }
              }
            />
          </div>

          <div style={itemStyle}>
            <TextField
              value={quantity}
              label="Quantity"
              type="number"
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

          <div style={itemStyle}>
            <Button variant="contained" type='submit'>Okay</Button>
          </div>

        </form>
        <Divider />

        <form style={divStyle} onSubmit={Delete}>
          <div className='item-label' style={itemStyle}>
            Remove Medicine
          </div>
          <div style={itemStyle}>
            <FormControl sx={{ width: '100%', maxWidth: '75%' }}>
              <InputLabel >Select Medicine</InputLabel>
              <Select
                label='Select Medicine'
                value={value}
                onChange={(e)=> setValue(e.target.value)}
              >
                {items}
              </Select>
            </FormControl>
          </div>

          <div style={itemStyle}>

          </div>

          <div style={itemStyle}>
            <Button variant="contained" type='submit'>Okay</Button>
          </div>

        </form>
        <Divider />

        <form style={divStyle} onSubmit={Update}>
          <div className='item-label' style={itemStyle}>
            Update Medicine
          </div>
          <div style={itemStyle}>
            <FormControl sx={{ width: '100%', maxWidth: '75%' }}>
              <InputLabel >Select Medicine</InputLabel>
              <Select
                label='Select Medicine'
                value={value}
                onChange={(e)=> setValue(e.target.value)}
              >
                {items}
              </Select>
            </FormControl>
          </div>

          <div style={itemStyle}>
            <TextField
              label="Quantity"
            />
          </div>

          <div style={itemStyle}>
            <Button variant="contained" type="submit">Okay</Button>
          </div>

        </form>
      </Container>
    </>
  )
}
