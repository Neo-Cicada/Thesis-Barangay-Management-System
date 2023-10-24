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
import sendEmailFunction from '../functions/sendEmailFunction'
import useUpdate from '../hooks/useUpdate';
import useUpdateItem from '../hooks/useUpdateItem';
import updateItems from './functions/updateItems';
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
    await useStatusUpdate(path, item.id, 'ongoing').then(async () => {
      const success = await sendEmailFunction(item.email, 'subject', 'html');
      if (success) {
        console.log('Email sent successfully');
        const selectedEquipments = item.selectedEquipment; // Access the snapshot data

        if (selectedEquipments) {
          const updatePromises = [];

          // Loop through the keys of selectedEquipments
          Object.keys(selectedEquipments).forEach((key) => {
            const equipment = selectedEquipments[key];
            const count = equipment.count;
            const itemId = equipment.itemId; // Assuming key is the itemId
            updatePromises.push(useUpdateItem("Equipments", itemId, count));
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

  const onConfirm = async (e) => {
    setIsGreenOpen(true)
    await useStatusUpdate(path, item.id, 'accepted').then(async () => {
      const success = await sendEmailFunction(item.email, 'subject', 'html');
      if (success) {
        console.log('Email sent successfully');
        updateItems("Equipments",item.selectedEquipment, useUpdateItem, "add")
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
    await useStatusUpdate(path, item.id, 'rejected').then(async () => {
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
            <DashboardConfirmation
              open={isOpenProceed}
              onClose={() => setIsOpenProceed(false)}
              accept={onAccept}
              confirm={onConfirm}
              reject={onDecline}
              status={status} />

          </td> :
          <td><VisibilityIcon
            color="info" sx={{ cursor: 'pointer' }}
            onClick={() => setShowInformation(true)}
          /></td>
        }
      </tr>

      <GreenToast delay={isGreenOpen} onClose={() => setIsGreenOpen(false)} />
      <RedToast open={isRedOpen} onClose={() => setIsRedOpen(false)} />

      <EquipmentViewInformation
        open={showInformation}
        item={item}
        onClose={() => setShowInformation(false)}
      />


    </>
  );
}
