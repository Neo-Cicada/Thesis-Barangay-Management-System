import React from 'react'
import { Button, TextField, Divider, MenuItem } from '@mui/material';
import { useState, useEffect } from 'react';
import { collection, doc, setDoc, addDoc, QuerySnapshot, getDocs, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from '../firebase'
import FormManagement from '../form-components/FormManagement';
import useUpload from '../crud/useUpload';
import useRead from '../crud/useRead';
export default function CertificateManagement() {
  const [formName, setFormName] = useState('');
  const [formNumber, setFormNumber] = useState('')
  const [idValue, setIdValue] = useState('')
  const [data, setData] = useState([])
  const onAdd = async(e) =>{
    e.preventDefault();
    await useUpload(formName, formNumber, 'Certificates').then(
      setFormName(''),
      setFormNumber('')
    )
  }
  useRead('Certificates', setData)
  // console.log(data)
  // console.log(data.map((item)=>item.id))

  const items = data.map((item) => <MenuItem key={item.id} value={item.id}>{item.type}</MenuItem>)
  return (
    <>
    <div className='equipManage-container'>
        <FormManagement
          formTitle='Add Certificate'
          onSubmit={onAdd}
          onTextChange={setFormName}
          onQuantityChange={setFormNumber}
          name={formName}
          number={formNumber}
          />
        <Divider />
        <FormManagement formTitle='Remove Certificate'
          data={items}
        />
        <Divider />
        <FormManagement formTitle='Update Certificate'
          data={items}
        />
      </div>
    </>
  )
}
