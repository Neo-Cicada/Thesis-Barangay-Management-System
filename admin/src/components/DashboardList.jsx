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
export default function DashboardList({
  first ,
  second,
  third ,
  fourth ,
  seventh, item, status, path }) {
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
    setConfirmation(false)
  }

  const onConfirm = async (e) => {
    e.stopPropagation();
    console.log(path)
    handleOpen()
    togglePopup()
    // await useStatusUpdate(path, item.id, 'accepted')
    setConfirmation(false)
  }

  const onDecline = async (e) => {
    e.stopPropagation();
    handleOpen()
    togglePopup()
    // await useStatusUpdate(path, item.id, 'rejected')
    setConfirmation(false)

  }
  return (
    <>


      <tr >
        <td >{first}</td>
        <td>{second}</td>
        <td>{third}</td>
        <td>{fourth}</td>
        <td>{seventh}</td>
        {status === "ongoing" || status === "request" ?
          <td >
            <VisibilityIcon color="info" sx={{ cursor: 'pointer' }} onClick={openInformation} />

            <MoreHorizIcon color="warning" sx={{ cursor: 'pointer' }} onClick={() => setConfirmation(true)} />
            <DashboardConfirmation accept={onAccept} confirm={onConfirm} reject={onDecline}
              status={status} open={confirmation} onClose={handleCloseConfirmation} />

          </td> :
          <td><VisibilityIcon sx={{ cursor: 'pointer' }} onClick={openInformation} /></td>
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
      <EquipmentViewInformation open={information} onClose={handleCloseInformation} item={item} />

    </>
  );
}
