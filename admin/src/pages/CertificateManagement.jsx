import React from 'react'
import { Button, TextField, Divider } from '@mui/material';
import { useState, useEffect } from 'react';
import { collection, doc, setDoc, addDoc, QuerySnapshot, getDocs, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from '../firebase'
import FormManagement from '../form-components/FormManagement';
import useUpload from '../hooks/useUpload';
export default function CertificateManagement() {
  const [formName, setFormName] = useState('');
  const [formNumber, setFormNumber] = useState('')
  const [idValue, setIdValue] = useState('')
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
        <FormManagement formTitle='Remove Certificate' />
        <Divider />
        <FormManagement formTitle='Update Certificate'/>
      </div>
    </>
  )
}
