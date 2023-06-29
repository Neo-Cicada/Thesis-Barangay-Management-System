import React from 'react'
import { Button, TextField, Divider } from '@mui/material';
import { useState, useEffect } from 'react';
import { collection, doc, setDoc, addDoc, QuerySnapshot, getDocs, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from '../firebase'

export const Container = ({ children }) => {
  return (
    <div className='equipManage-container'>
      {children}
    </div>
  )
}

const Form = ({formTitle, onSubmit, onTextChange, onQuantityChange, name,number}) => {


  const formStyle = {
    marginTop: '1em',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: '1em'
  }
  const childStyle = {
    width: '25%',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
  }

  return (
    <>
    <form onSubmit={onSubmit} style={formStyle}>
        <div style={childStyle}>{formTitle}</div>
        <div style={childStyle}>
          <TextField
            type='text'
            label="Certificate name"
            required
            value={name}
            onChange={(e)=>{
              onTextChange(e.target.value)
            }}
          />
        </div>
        <div style={childStyle}>
          <TextField
            type='number'
            required
            label="Quantity"
            value={number}
            onChange={(e)=>{
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

export default function CertificateManagement() {
  const [formName, setFormName] = useState('');
  const [formNumber, setFormNumber] = useState('')
  const onAdd = async(e) =>{
    e.preventDefault();
    try{
      await addDoc(collection(db, 'Certificates'),{
        type: formName,
        quantity: formNumber
      }).then(
        setFormName(''),
        setFormNumber('')
      )
      console.log("Certificate Uploaded!")
    }catch(error){
      console.log(error)
    }
  }
  return (
    <>
      <Container>
        <Form
          formTitle='Add Certificate'
          onSubmit={onAdd}
          onTextChange={setFormName}
          onQuantityChange={setFormNumber}
          name={formName}
          number={formNumber}
          />
        <Divider />
        <Form formTitle='Remove Certificate' />
        <Divider />
        <Form formTitle='Update Certificate'/>
      </Container>
    </>
  )
}
