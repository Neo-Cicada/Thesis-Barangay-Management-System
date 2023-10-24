import React, { useState, useEffect } from 'react'
import useDelete from '../../hooks/useDelete'
import DeleteIcon from '@mui/icons-material/Delete';
import ConfirmationDialog from '../ConfirmationDialog';
import RedToast from '../RedToast';
export default function History({ item, key }) {
  const [confirmation, setConfirmation] = useState(false)
  const [toast, setToast] = useState(false)
  const handleDelete = async () => {
    await useDelete('images', item.id).then(()=>setToast(true))
    console.log(item.id)
  }

  return (
    <>
      <div className='history' key={key}
        style={{
          display: 'flex',
          alignItems: 'center', justifyContent: 'space-around', height: '100%',
        }}>
        <div style={{ width: '40%', textAlign: 'center' }}>
          {item.title}
        </div>
        <div style={{ width: '40%', textAlign: 'center' }}>{item.date}</div>
        <div onClick={() => setConfirmation(true)} style={{ cursor: 'pointer', width: '20%' }}>
          <DeleteIcon color='error' /></div>
      </div>
      <RedToast  open={toast} onClose={()=>setToast(false)} content = "Item successfully deleted!" type = "success"/>
      <ConfirmationDialog open={confirmation} onClose={() => setConfirmation(false)}
        onConfirm={handleDelete} title="Do you want to delete this post?"
        message="Deleted post will never be recovered" />
    </>
  )
}
