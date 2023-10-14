import React from 'react'
import { Container } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import useDelete from '../hooks/useDelete'
import useUpdate from '../hooks/useUpdate'
import ConfirmationDialog from './ConfirmationDialog'
import GreenToast from './GreenToast'
import RedToast from './RedToast'
export default function DashboardItem({ data, path, name }) {
  const [quantityValue, setQuantityValue] = React.useState(false)
  const [newValue, setNewValue] = React.useState(data.quantity)
  const [onpenDialog, setOpenDialog] = React.useState(false)
  const [greenToast, setGreenToast] = React.useState(false)
  const [redToast, setRedToast] = React.useState(false)
  const handleDelete = async (e) => {
    console.log('clicked')
    e.preventDefault();
    setOpenDialog(true)
    // await useDelete(path, data.id)
  }
  const handleClose = () => {

    setOpenDialog(!onpenDialog)
    setRedToast(true)
  }
  const handleConfirm = async (e) => {
    useDelete(path, data.id)
    setOpenDialog(!onpenDialog)
    setGreenToast(true) // is a must maybe use Promise, i dont have internet so ill just comment it.
  }
  const handleEdit = async (e) => {
    e.preventDefault();
    setQuantityValue(!quantityValue)
    { quantityValue === true && useUpdate(path, data.id, newValue) }

  }
  return (
    <>

      <Container sx={{ height: '2.5em', width: '100%', borderBottom: '1px solid black', display: 'flex', justifyContent: 'space-between' }}>

        <div style={{
          // border:'1px solid red',
          width: '15em',
          height: '95%%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ fontSize: '1.2rem', textTransform: 'capitalize' }}>{name}</div>
          {quantityValue === false ? <div style={{ fontSize: '1.2rem', }}>{data.quantity}</div>
            : <input
              value={newValue}
              type="number"
              onChange={(e) => setNewValue(e.target.value)}
              style={{
                border: "none",
                fontSize: '1.2rem',
                textAlign: "center",
                borderBottom: "5px solid blue", // Add borderBottom for the underline effect
                width: "3em", // Adjust the width as needed
                // Other styles if needed
              }}
            />
          }
        </div>

        <div style={{ height: '2em', display: 'flex', gap: '1em' }}>

          <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={handleEdit}>
            <EditIcon color="info" />{quantityValue === false ? 'Edit' : 'Save'}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }
          }
            onClick={handleDelete}
          ><DeleteIcon color="error" />Delete</div>
        </div>
      </Container>
      <ConfirmationDialog
        title={'Confirmation'}
        message={'Do you want to procced?'}
        open={onpenDialog}
        onClose={handleClose}
        onConfirm={handleConfirm}
      />
      <GreenToast open={greenToast}
        onClose={() => setGreenToast(!greenToast)} />
      <RedToast open={redToast} onClose={() => setRedToast(!redToast)} />
    </>
  )
}
