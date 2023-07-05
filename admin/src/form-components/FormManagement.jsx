import React from 'react'
import { Button, TextField, Divider, FormControl, Select, MenuItem, InputLabel} from '@mui/material';


const formStyle = {
  marginTop: '1em',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  gap: '1em',
}
const childStyle = {
  width: '25%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const InputField = ({ title, name, onTextChange, data, getId, idValue }) => {

  if (title == 'Add Certificate') {
    return (
      <TextField
            type='text'
            label="Certificate name"
            required
            value={name}
            onChange={(e) => {
              onTextChange(e.target.value)
            }}/>
    )
  }
  else if (title == 'Remove Certificate') {
    return (
      <FormControl sx={{width: '80%'}}>
        <InputLabel>Select Certificate</InputLabel>
        <Select
          label='Select Certificate'
          value={idValue}
          onChange={(e)=>{
            getId(e.target.value)
          }}
        >
          {data}
        </Select>
      </FormControl>
    )
  }
  else if (title == 'Update Certificate') {
    return (
      <FormControl sx={{width: '80%'}}>
        <InputLabel>Select Certificatesss</InputLabel>
        <Select
          label='Select Certificate'
          value={idValue}
          onChange={(e)=>{
            getId(e.target.value)
          }}
        >
          {data}
        </Select>
      </FormControl>
    )
  }
}

export default function FormManagement({ formTitle, onSubmit, onTextChange, onQuantityChange, name, number, data, getId, idValue}) {

  return (
    <>
      <form onSubmit={onSubmit} style={formStyle}>
        <div style={childStyle}>{formTitle}</div>
        <div style={childStyle}>

          <InputField
            title={formTitle}
            onTextChange={onTextChange}
            name={name}
            data={data}
            getId={getId}
            idValue={idValue}
          />
        </div>
        <div style={childStyle}>
          <TextField
            type='number'
            label="Quantity"
            value={number}
            onChange={(e) => {
              onQuantityChange(e.target.value)
            }}
          />
        </div>
        <div style={childStyle}>
          <Button variant='contained' type='submit'>DONE</Button>

        </div>
      </form>

    </>
  )
}
