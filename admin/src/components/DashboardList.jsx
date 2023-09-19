import React, { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DashboardConfirmation from './DashboardConfirmation';
import useStatusUpdate from '../hooks/useStatusUpdate'
import ConfirmationDialog from './ConfirmationDialog';
import GreenToast from './GreenToast';
import RedToast from './RedToast'
import VisibilityIcon from '@mui/icons-material/Visibility';
import EquipmentViewInformation from './equipment/EquipmentViewInformation';
export default function DashboardList({ first, second, third, fourth, fifth,
  sixth, seventh, itemId, status, path }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [openToast, setOpenToast] = useState(false);
  const [openRedToast, setRedToast] = useState(false);
  const [confirmation, setConfirmation] = useState(false)
  const [information, setInformation] = useState(false)
  const openInformation = () =>{
    setInformation(true)
  }
  const handleCloseInformation = () =>{
    setInformation(false)
  }
  const handleOpenConfirmation = () =>{
    setConfirmation(true)
  }
  const handleCloseConfirmation = () =>{
    setConfirmation(false)

  }
  const handleOpenRedToast = () =>{
    setRedToast(true)
  }
  const handleCloseRedToast = () =>{
    setRedToast(false)
  }
  const handleOpenToast = () => {
    setOpenToast(true);
  };

  const handleCloseToast = () => {
    setOpenToast(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    handleOpenRedToast()
  };

  const handleConfirm = () => {
    // Handle the confirmation logic here
    // For example, you can perform a delete operation or any other action
    // and then close the dialog

    setOpen(false);
    handleOpenToast();
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const onAccept = async (e) => {
    e.stopPropagation();
    console.log(path)
    handleOpen()
    togglePopup()
    // await useStatusUpdate(path, itemId, 'ongoing')
  }
  const onDecline = async (e) => {
    e.stopPropagation();
    handleOpen()
    togglePopup()
     // await useStatusUpdate(path, itemId, 'rejected')
    console.log(itemId)
  }
  return (
    <>
      <div
        style={{
          borderBottom: '1px solid black',
          height: '2em',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ width: '20%', textAlign: 'center', }}>{first}</div>
        <div style={{ width: '25%', textAlign: 'center' }}>{second}</div>
        <div style={{ width: '8%', textAlign: 'center' }}>{third}</div>
        <div style={{ width: '12.5%', textAlign: 'center' }}>{fourth}</div>
        <div style={{ width: '5%', textAlign: 'center' }}>{fifth}</div>
        <div style={{ width: '10%', textAlign: 'center' }}>{sixth}</div>
        <div style={{ width: '10%', textAlign: 'center' }}>{seventh}</div>
        <GreenToast open={openToast} onClose={handleCloseToast} />
        <RedToast open={openRedToast} onClose={handleCloseRedToast}/>
        <EquipmentViewInformation open={information} onClose={handleCloseInformation}/>
        {status === "ongoing" || status ==="request" ?
          <div style={{ width: '5%', cursor: 'pointer', display: 'flex' }} >
            <VisibilityIcon onClick={openInformation}/>
            <MoreHorizIcon onClick={togglePopup}/>
            {isPopupOpen && <DashboardConfirmation accept={onAccept} reject={onDecline}
             status={status} open={handleOpenConfirmation} onClose={handleCloseConfirmation} />}

          </div> :
          <div style={{ width: '5%', cursor: 'pointer', display: 'flex' }}><VisibilityIcon/></div>
        }
        <ConfirmationDialog
          showToast={setOpenToast}
          open={open}
          onClose={handleClose}
          onConfirm={handleConfirm}
          title="Confirmation"
          message="Are you sure you want to proceed?"
        />

      </div>
    </>
  );
}
