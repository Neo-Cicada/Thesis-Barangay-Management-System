import React, { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DashboardConfirmation from './DashboardConfirmation';
import useStatusUpdate from '../hooks/useStatusUpdate'
import ConfirmationDialog from './ConfirmationDialog';
import GreenToast from './GreenToast';
import RedToast from './RedToast'
import VisibilityIcon from '@mui/icons-material/Visibility';
import EquipmentViewInformation from './equipment/EquipmentViewInformation';
import DashboardHeader from './DashboardHeader';
export default function DashboardList({ first="Offline", second="Offline", third="Offline", fourth="Offline", fifth="Offline",
  sixth ="Offline", seventh ="Offline", item, status, path }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [openToast, setOpenToast] = useState(false);
  const [openRedToast, setRedToast] = useState(false);
  const [confirmation, setConfirmation] = useState(false)
  const [information, setInformation] = useState(false)
  const openInformation = () => {
    setInformation(true)
  }
  const handleCloseInformation = () => {
    setInformation(false)
  }
  const handleOpenConfirmation = () => {
    setConfirmation(true)
  }
  const handleCloseConfirmation = () => {
    setConfirmation(false)

  }
  const handleOpenRedToast = () => {
    setRedToast(true)
  }
  const handleCloseRedToast = () => {
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
    // await useStatusUpdate(path, item.id, 'ongoing')
  }
  const onDecline = async (e) => {
    e.stopPropagation();
    handleOpen()
    togglePopup()
    // await useStatusUpdate(path, item.id, 'rejected')
   
  }
  return (
    <>


      <tr >
        <td >{first}</td>
        <td>{second}</td>
        <td>{third}</td>
        <td>{fourth}</td>
        <td>{seventh}</td>
        <EquipmentViewInformation open={information} onClose={handleCloseInformation} item={item}/>
        {status === "ongoing" || status === "request" ?
          <td >
            <VisibilityIcon sx={{cursor:'pointer'}} onClick={openInformation} />
            
            <MoreHorizIcon sx={{cursor:'pointer'}} onClick={togglePopup} />
            {isPopupOpen && <DashboardConfirmation accept={onAccept} reject={onDecline}
              status={status} open={handleOpenConfirmation} onClose={handleCloseConfirmation} />}

          </td> :
          <td><VisibilityIcon /></td>
        }
      </tr>
      <ConfirmationDialog
        showToast={setOpenToast}
        open={open}
        onClose={handleClose}
        onConfirm={handleConfirm}
        title="Confirmation"
        message="Are you sure you want to proceed?"
      />
      <GreenToast open={openToast} onClose={handleCloseToast} />
      <RedToast open={openRedToast} onClose={handleCloseRedToast} />

    </>
  );
}
