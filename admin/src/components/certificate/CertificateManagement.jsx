import React from 'react'
import { Button, TextField, Divider, MenuItem } from '@mui/material';
import { useState, useEffect } from 'react';
import { collection, doc, setDoc, addDoc, QuerySnapshot, getDocs, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from '../../firebase'
import FormManagement from '../../form-components/FormManagement';
import useUpload from '../../hooks/useUpload';
import useRead from '../../hooks/useRead';
import useDelete from '../../hooks/useDelete';
import useUpdate from '../../hooks/useUpdate';
export default function CertificateManagement() {
  const [formName, setFormName] = useState('');
  const [formNumber, setFormNumber] = useState('')
  const [idValue, setIdValue] = useState()
  const [data, setData] = useState([])

  useRead('Certificates', setData) // read all the data in Certificates

  const onAdd = async(e) =>{
    e.preventDefault();
    await useUpload(formName, formNumber, 'Certificates').then(
      setFormName(''),
      setFormNumber('')
    )
  }

  const onDelete = async (e) => {
    e.preventDefault();
    await useDelete('Certificates', idValue)

  };

  const onUpdate = async (e) => {
    e.preventDefault();
    useUpdate('Certificates', idValue)

}


  console.log(idValue)
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
          getId={setIdValue}
          idValue= {idValue}
          onSubmit={onDelete}
        />
        <Divider />
        <FormManagement formTitle='Update Certificate'
          data={items}
          idValue= {idValue}
          getId={setIdValue}
          onSubmit={onUpdate}
        />
      </div>
    </>
  )
}
