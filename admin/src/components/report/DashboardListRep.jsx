import React, { useState, useEffect } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DashboardConfirmation from '../DashboardConfirmation';
import useStatusUpdate from '../../hooks/useStatusUpdate'
import ConfirmationDialog from '../ConfirmationDialog';
import GreenToast from '../GreenToast';
import RedToast from '../RedToast'
import VisibilityIcon from '@mui/icons-material/Visibility';
import ReportViewInformation from './ReportViewInformation';
export default function DashboardListRep({
  first,
  second,
  third,
  fourth = "01/01/01",
  seventh, item, status, path }) {
  const [showInformation, setShowInformation] = useState(false)
  const [isOpenProceed, setIsOpenProceed] = useState(false)
  const [isGreenOpen, setIsGreenOpen] = useState(false)
  const [isRedOpen, setIsRedOpen] = useState(false)


  const onAccept = async (e) => {
    try {
      setIsGreenOpen(true)
      await useStatusUpdate(path, item.id, 'ongoing');
    } catch (error) {
      console.error('An error occurred:', error);
    }  // setIsOpenProceed(false);
  }

  const onConfirm = async (e) => {
    try {
      setIsGreenOpen(true)
      await useStatusUpdate(path, item.id, 'accepted');
    } catch (error) {
      console.error('An error occurred:', error);
    }
    setIsOpenProceed(false)
  }

  const onDecline = async (e) => {
    e.stopPropagation();
    setIsRedOpen(true)
    await useStatusUpdate(path, item.id, 'rejected');
    setIsOpenProceed(false)
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
          <td><VisibilityIcon
            color="info" sx={{ cursor: 'pointer' }}
            onClick={() => setShowInformation(true)}
          /></td>
        }
      </tr >


      <GreenToast delay={isGreenOpen} onClose={() => setIsGreenOpen(false)} />
      <RedToast open={isRedOpen} onClose={() => setIsRedOpen(false)} />

      <ReportViewInformation
        open={showInformation}
        item={item}
        onClose={() => setShowInformation(false)}
      />

    </>
  );
}
