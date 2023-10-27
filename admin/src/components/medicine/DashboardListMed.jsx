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
import useUpdateItem from '../../hooks/useUpdateItem';

export default function DashboardList({
  first,
  second,
  third,
  fourth,
  seventh,
  item,
  status,
  path }) {
  const [showInformation, setShowInformation] = useState(false)
  const [isOpenProceed, setIsOpenProceed] = useState(false)
  const [isGreenOpen, setIsGreenOpen] = useState(false)
  const [isRedOpen, setIsRedOpen] = useState(false)
  console.log(item)
  const onAccept = async (e) => {
    e.stopPropagation();
    setIsGreenOpen(true)
    await useStatusUpdate(path, item.id, 'ongoing').then(async () => {
      const success = await sendEmailFunction(item.email,
        'Medicine Request Status',
        'Your request has been accepted; please proceed to the barangay hall to claim your medicines.');
      const smsSuccess = await sendSmsFunction(item.phoneNumber, "'Your request has been accepted; please proceed to the barangay hall to claim your medicines.'")
      if (success || smsSuccess) {
        console.log('Email sent successfully')
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
        const success = await sendEmailFunction(item.email,
          'Medicine Request Status',
          'You have claimed your requested medicines. Please provide a feedback by emailing us at amamperez@858gmail.com');
        const smsSuccess = await sendSmsFunction(item.phoneNumber,
          'You have claimed your requested medicines. Please provide a feedback by emailing us at amamperez@858gmail.com')
        if (success || smsSuccess) {
          console.log("Email sent")
          const selectedEquipments = item.selectedMedicines; // Access the snapshot data

          if (selectedEquipments) {
            const updatePromises = [];

            // Loop through the keys of selectedEquipments
            Object.keys(selectedEquipments).forEach((key) => {
              const equipment = selectedEquipments[key];
              const count = equipment.count;
              const itemId = equipment.itemId; // Assuming key is the itemId
              updatePromises.push(useUpdateItem("Medicines", itemId, count));
              console.log("Item Updated");
            });

            // Wait for all update promises to complete
            await Promise.all(updatePromises);

            console.log("Items Updated");
          } else {
            console.log("No selectedEquipments found.");
          }
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
        const success = await sendEmailFunction(item.email,
          'Medicine Request Status',
          'Your request has been declined. If you have question email us at amamperez858@gmail.com');
        const smsSuccess = await sendSmsFunction(
          item.phoneNumber,
          'Your request has been declined. If you have question email us at amamperez858@gmail.com')
        if (success || smsSuccess) {
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
        <td>{second}</td>
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
