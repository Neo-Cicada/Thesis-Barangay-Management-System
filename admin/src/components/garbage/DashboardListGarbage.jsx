import React, { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DashboardConfirmation from '../DashboardConfirmation';
import useStatusUpdate from '../../hooks/useStatusUpdate'
import GreenToast from '../GreenToast';
import RedToast from '../RedToast'
import VisibilityIcon from '@mui/icons-material/Visibility';
import sendEmailFunction from '../../functions/sendEmailFunction';
import sendSmsFunction from '../../functions/sendSmsFunction';
import useUpdateTimeSlot from '../../hooks/useUpdateTimeSlot';
import GarbageViewInformation from './GarbageViewInformation'
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
    const onAccept = async (e) => {
        e.stopPropagation();
        setIsGreenOpen(true);

        try {
            await useStatusUpdate(path, item.id, 'ongoing');

            const success = await sendEmailFunction(item.email, 'Garbage Collection Status', 'You are now subscribed to our barangay garbage collection');
            const smsSuccess = await sendSmsFunction(item.phoneNumber, 'You are now subscribed to our barangay garbage collection');

            if (success || smsSuccess) {
                console.log('Email sent successfully');
            } else {
                console.error('Email sending failed');
            }

            setIsOpenProceed(false);
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };



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
            <tr>
                <td style={{ textTransform: 'capitalize', }}>{first}</td>
                <td>{second}</td>
                <td style={{ textTransform: 'capitalize' }}>{third}</td>
                <td style={{ textTransform: 'capitalize' }}>{fourth}</td>
                <td style={{ textTransform: 'capitalize' }}>{status}</td>
                {status === "ongoing" || status === "request" ?
                    <td>
                        <VisibilityIcon
                            color="info"
                            sx={{ cursor: 'pointer' }}
                            onClick={() => setShowInformation(true)} />

                        {status === "request" && (
                            <>
                                <MoreHorizIcon
                                    color="warning"
                                    sx={{ cursor: 'pointer' }}
                                    onClick={() => setIsOpenProceed(true)} />

                                <DashboardConfirmation
                                    accept={onAccept}
                                    reject={onDecline}
                                    open={isOpenProceed}
                                    onClose={() => setIsOpenProceed(false)}
                                />
                            </>
                        )}
                    </td> :
                    <td>
                        <VisibilityIcon
                            color='info'
                            sx={{ cursor: 'pointer' }}
                            onClick={() => setShowInformation(true)} />
                    </td>
                }

            </tr>
            <GreenToast delay={isGreenOpen} onClose={() => setIsGreenOpen(false)} />
            <RedToast open={isRedOpen} onClose={() => setIsRedOpen(false)} />
            <GarbageViewInformation
                open={showInformation}
                item={item}
                onClose={() => setShowInformation(false)}
            />
        </>
    )
}
