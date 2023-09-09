import React from 'react'
import { Container } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import useDelete from '../hooks/useDelete'
import useUpdate from '../hooks/useUpdate'
export default function DashboardItem({ data }) {
  const [quantityValue, setQuantityValue] = React.useState(false)
  const [newValue, setNewValue] = React.useState('')
  const handleDelete = async (e) => {
    console.log('clicked')
    e.preventDefault();
    await useDelete('Equipments', data.id)
  }
  const handleEdit = async (e)=>{
    e.preventDefault();
    setQuantityValue(!quantityValue)
   {quantityValue === true && useUpdate('Equipments', data.id, newValue)}

  }
  return (
    <>
      <Container sx={{ height: '2em', width: '100%', borderBottom: '1px solid black', display: 'flex', justifyContent: 'space-between' }}>
        <div style={{
          width: '15em',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ fontSize: '1.2rem' }}>{data.equipment}</div>
         {quantityValue === false ? <div style={{ fontSize: '1.2rem' }}>{data.quantity}</div>
          :  <input
            value={newValue}
            type="number"
            onChange={(e)=>setNewValue(e.target.value)}
        />
        }
        </div>

        <div style={{ height: '2em', display: 'flex', gap: '1em' }}>

          <div style={{ display: 'flex', alignItems: 'center', cursor:'pointer' }} onClick={handleEdit}>
            <EditIcon />{quantityValue === false ?  'Edit' : 'Save'}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', cursor:'pointer' }
          }
            onClick={handleDelete}
          ><DeleteIcon />Delete</div>
        </div>
      </Container>
    </>
  )
}
