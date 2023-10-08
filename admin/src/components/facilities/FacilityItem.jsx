import React from 'react'
import { Container, FormControl, MenuItem, InputLabel, Select } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import useDelete from '../../hooks/useDelete'
import useUpdate from '../../hooks/useUpdate'

export default function FacilityItem({ data, name }) {
  const [quantityValue, setQuantityValue] = React.useState(false)
  const [newValue, setNewValue] = React.useState(data.quantity)
  const handleDelete = async (e) => {
    console.log('clicked')
    e.preventDefault();
    await useDelete('Facility', data.id)
  }
  const handleEdit = async (e) => {
    e.preventDefault();
    setQuantityValue(!quantityValue)
    { quantityValue === true && useUpdate('Facility', data.id, newValue) }
  }
  const option = data.slots.map(item => <MenuItem key={item.id}>{item.startTime} - {item.endTime}</MenuItem>)
  return (
    <>
      <div style={{ height: '2em', width: '100%', borderBottom: '1px solid black', display: 'flex', justifyContent: 'space-between' }}>
        <div style={{
          width: '20em',
          height: '95%%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'

        }}>
          <div style={{ fontSize: '1.2rem' }}>{name}</div>
          {quantityValue === false &&
            <FormControl sx={{ minWidth: '8em', marginBottom: '1em' }} size='small' >
              <InputLabel  htmlFor="slots-select" sx={{ marginTop: '5px' }}>Slots</InputLabel>
              <Select
                variant='standard'
                label="Slots"
              >
                {option}
              </Select>
            </FormControl>
          }
        </div>

        <div style={{ height: '2em', display: 'flex', gap: '1em' }}>

          <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={handleEdit}>
            <EditIcon />{quantityValue === false ? 'Edit' : 'Save'}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }
          }
            onClick={handleDelete}
          ><DeleteIcon />Delete</div>
        </div>
      </div>
    </>
  )
}
