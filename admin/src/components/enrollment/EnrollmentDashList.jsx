import React, { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DashboardConfirmation from '../DashboardConfirmation';
import useStatusUpdate from '../../hooks/useStatusUpdate'
import ConfirmationDialog from '../ConfirmationDialog';
import GreenToast from '../GreenToast';
import RedToast from '../RedToast'
import VisibilityIcon from '@mui/icons-material/Visibility';
import EquipmentViewInformation from '../equipment/EquipmentViewInformation';
import DashboardHeader from '../DashboardHeader';
import EnrollmentViewInformation from './EnrollmentViewInformation';
export default function EnrollmentDashList({
  first,
  second,
  third,
  fourth,
  seventh, item, status, path }) {
  const [showInformation, setShowInformation] = useState(false)
  const [isOpenProceed, setIsOpenProceed] = useState(false)
  const [isGreenOpen, setIsGreenOpen] = useState(false)
  const [isRedOpen, setIsRedOpen] = useState(false)

  const onAccept = async (e) => {
    e.stopPropagation();
    setIsGreenOpen(true)
    await useStatusUpdate(path, item.id, 'ongoing')
    setIsOpenProceed(false);
  }

  const onConfirm = async (e) => {
    e.stopPropagation();
    setIsGreenOpen(true)
    await useStatusUpdate(path, item.id, 'accepted')
    setIsOpenProceed(false);
  }

  const onDecline = async (e) => {
    e.stopPropagation();
    setIsRedOpen(true)
    await useStatusUpdate(path, item.id, 'rejected')
    setIsOpenProceed(false);

  }
  return (
    <>


      <tr >
        <td style={{ textTransform: 'capitalize' }}>{first}</td>
        <td >{second}</td>
        <td style={{ textTransform: 'capitalize' }}>{third}</td>
        <td style={{ textTransform: 'capitalize' }}>{fourth}</td>
        <td style={{ textTransform: 'capitalize' }}>{seventh}</td>
        {status === "ongoing" || status === "request" ?
          <td >
            <VisibilityIcon
              color="info"
              sx={{ cursor: 'pointer' }}
              onClick={() => setShowInformation(true)} />

            <MoreHorizIcon
              color="warning"
              sx={{ cursor: 'pointer' }}
              onClick={() => setIsOpenProceed(true)} />
            <DashboardConfirmation
              open={isOpenProceed}
              onClose={() => setIsOpenProceed(false)}
              accept={onAccept}
              confirm={onConfirm}
              reject={onDecline}
              status={status} />

          </td> :
          <td><VisibilityIcon color="info" sx={{ cursor: 'pointer' }} onClick={() => setShowInformation(true)} /></td>
        }
      </tr>

      <GreenToast delay={isGreenOpen} onClose={() => setIsGreenOpen(false)} />
      <RedToast open={isRedOpen} onClose={() => setIsRedOpen(false)} />
      <EnrollmentViewInformation
        open={showInformation}
        item={item}
        onClose={() => setShowInformation(false)}
      />

    </>
  );
}
