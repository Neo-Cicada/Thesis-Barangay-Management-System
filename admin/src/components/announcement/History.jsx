import React from 'react'
import useDelete from '../../hooks/useDelete'
import DeleteIcon from '@mui/icons-material/Delete';
export default function History({ item, key }) {

  const handleDelete = async () => {
    await useDelete('images', item.id)
    console.log(item.id)
  }

  return (
    <>
      <div className='history' key={key}
        style={{ display: 'flex',
         alignItems: 'center', justifyContent: 'space-around', height: '100%', }}>
        <div style={{width:'40%'}}>{item.title}</div>
        <div  style={{width:'40%'}}>{item.date}</div>
        <div  onClick={handleDelete} style={{ cursor: 'pointer',width:'20%' }}><DeleteIcon /></div>
      </div>
    </>
  )
}
