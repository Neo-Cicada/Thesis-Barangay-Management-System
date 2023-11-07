import React, { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DashboardConfirmation from '../DashboardConfirmation';
import useStatusUpdate from '../../hooks/useStatusUpdate'
import GreenToast from '../GreenToast';
import RedToast from '../RedToast'
import VisibilityIcon from '@mui/icons-material/Visibility';
import sendEmailFunction from '../../functions/sendEmailFunction'
import useUpdateTimeSlot from '../../hooks/useUpdateTimeSlot';

export default function DashboardListGarbage({
    first,
    second,
    third,
    fourth,
    seventh, item, status, path }) {

    const [showInformation, setShowInformation] = useState(false)
    const [isOpenProceed, setIsOpenProceed] = useState(false)
    const [isGreenOpen, setIsGreenOpen] = useState(false)
    const [isRedOpen, setIsRedOpen] = useState(false)
    return (
        <>
            <tr>
                <td style={{ textTransform: 'capitalize' }}>{first}</td>
                <td>{second}</td>
                <td style={{ textTransform: 'capitalize' }}>{third}</td>
                <td style={{ textTransform: 'capitalize' }}>{fourth}</td>
                <td style={{ textTransform: 'capitalize' }}>{status}</td>
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
                        />

                    </td> :
                    <td><VisibilityIcon sx={{ cursor: 'pointer' }}
                        onClick={() => setShowInformation(true)} /></td>
                }
            </tr>
        </>
    )
}
