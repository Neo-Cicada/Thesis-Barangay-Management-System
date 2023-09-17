import React, { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DashboardConfirmation from './DashboardConfirmation';
import useStatusUpdate from '../hooks/useStatusUpdate'
import ConfirmationDialog from './ConfirmationDialog';
import GreenToast from './GreenToast';
export default function DashboardList({ first, second, third, fourth, fifth,
  sixth, seventh, itemId, status, path }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [openToast, setOpenToast] = useState(false);
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
  };

  const handleConfirm = () => {
    // Handle the confirmation logic here
    // For example, you can perform a delete operation or any other action
    // and then close the dialog

    handleClose();
    handleOpenToast();
  };
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const onAccept = async (e) => {
    e.stopPropagation();
    console.log(path)
    handleOpen()
    // handleOpenToast()
    // await useStatusUpdate(path, itemId, 'accepted')
  }
  const onDecline = async (e) => {
    e.stopPropagation();
    await useStatusUpdate(path, itemId, 'rejected')
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
        {status === "ongoing" ?
          <div style={{ width: '5%', cursor: 'pointer', display: 'flex' }} onClick={togglePopup}>
            <MoreHorizIcon />
            {isPopupOpen && <DashboardConfirmation accept={onAccept} reject={onDecline} />}

          </div> :
          <div style={{ width: '5%', cursor: 'pointer', display: 'flex' }}></div>
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
