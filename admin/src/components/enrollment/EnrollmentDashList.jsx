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
import sendEmailFunction from '../../functions/sendEmailFunction';
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
    await useStatusUpdate(path, item.id, 'ongoing').then(async () => {
      const success = await sendEmailFunction(
        item.email,
        'Enrollment Request Status',
        'Your enrollment request is currently being processed, and we will contact you for further instructions.');
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
    await useStatusUpdate(path, item.id, 'accepted').then(async () => {
      const success = await sendEmailFunction(
        item.email,
        'Enrollment Request Status',
        'We have accepted your enrollment request. We will contact you with further instructions');
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
    setIsOpenProceed(false);
  }

  const onDecline = async (e) => {
    e.stopPropagation();
    setIsRedOpen(true)
    await useStatusUpdate(path, item.id, 'rejected').then(async () => {
      const success = await sendEmailFunction(
         item.email,
        'Enrollment Request Status',
        'We regret to inform you that your enrollment request has been declined. If you have any questions or wish to inquire further, please feel free to reach out to us at amamperez858@gmail.com.');
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
