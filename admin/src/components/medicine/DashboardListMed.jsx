import React, { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DashboardConfirmation from '../DashboardConfirmation';
import useStatusUpdate from '../../hooks/useStatusUpdate'
import ConfirmationDialog from '../ConfirmationDialog';
import GreenToast from '../GreenToast';
import RedToast from '../RedToast'
import VisibilityIcon from '@mui/icons-material/Visibility';
import MedicineViewInformation from './MedicineViewInformation'
import sendSmsFunction from '../../functions/sendSmsFunction';
import sendEmailFunction from '../../functions/sendEmailFunction';
export default function DashboardList({
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
      .then(async () => {
        const success = await sendEmailFunction(item.email, 'subject', 'html');
        if (success) {
          console.log('Email sent successfully');
        } else {
          console.error('Email sending failed');
        }
      }).then(
        async () => {
          setIsOpenProceed(false)
        }
      )
      .catch((error) => {
        console.error('Error updating status:', error);
      })


  }

  const onConfirm = async (e) => {
    e.stopPropagation();
    setIsGreenOpen(true)

    await useStatusUpdate(path, item.id, 'accepted')
      .then(async () => {
        const success = await sendEmailFunction(item.email, 'subject', 'html');
        if (success) {
          console.log('Email sent successfully');
        } else {
          console.error('Email sending failed');
        }
      }).then(
        async () => {
          setIsOpenProceed(false)
        }
      )
      .catch((error) => {
        console.error('Error updating status:', error);
      })


  }

  const onDecline = async (e) => {
    e.stopPropagation();
    setIsRedOpen(true)
    await useStatusUpdate(path, item.id, 'rejected')
      .then(async () => {
        const success = await sendEmailFunction(item.email, 'subject', 'html');
        if (success) {
          console.log('Email sent successfully');
        } else {
          console.error('Email sending failed');
        }
      }).then(
        async () => {
          setIsOpenProceed(false)
        }
      )
      .catch((error) => {
        console.error('Error updating status:', error);
      })

  }
  return (
    <>


      <tr >
        <td style={{ textTransform: 'capitalize' }}>{first}</td>
        <td style={{ textTransform: 'capitalize' }}>{second}</td>
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
            <DashboardConfirmation open={isOpenProceed}
              onClose={() => setIsOpenProceed(false)}
              accept={onAccept}
              confirm={onConfirm}
              reject={onDecline}
              status={status} />

          </td> :
          <td><VisibilityIcon sx={{ cursor: 'pointer' }} onClick={() => setShowInformation(true)} /></td>
        }
      </tr>

      <GreenToast delay={isGreenOpen} onClose={() => setIsGreenOpen(false)} />
      <RedToast open={isRedOpen} onClose={() => setIsRedOpen(false)} />
      <MedicineViewInformation
        open={showInformation}
        item={item}
        onClose={() => setShowInformation(false)} />

    </>
  );
}
