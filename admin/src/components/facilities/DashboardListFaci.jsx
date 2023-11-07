import React, { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DashboardConfirmation from '../DashboardConfirmation';
import useStatusUpdate from '../../hooks/useStatusUpdate'
import GreenToast from '../GreenToast';
import RedToast from '../RedToast'
import VisibilityIcon from '@mui/icons-material/Visibility';
import FacilityViewInformation from './FacilityViewInformation';
import sendEmailFunction from '../../functions/sendEmailFunction'
import useUpdateTimeSlot from '../../hooks/useUpdateTimeSlot';
export default function DashboardListFaci({
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
                const success = await sendEmailFunction(item.email,
                    'Facility Request Status',
                    'Your request has been accepted. Please be mindful of your selected time slot.');
                if (success) {
                    const selectedFacility = item.selectedFacility;
                    console.log('Email sent successfully');
                    if (selectedFacility) {
                        const updatePromises = []
                        Object.keys(selectedFacility).forEach((key) => {  //facility.slot;
                            const facility = selectedFacility[key];
                            const slot = facility.itemIndex;
                            const itemId = facility.itemId; // Assuming key is the itemId
                            updatePromises.push(useUpdateTimeSlot(itemId, slot));
                            console.log("Item Updated");
                        });

                        // Wait for all update promises to complete
                        await Promise.all(updatePromises);

                        console.log("Items Updated");
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
        e.stopPropagation();
        setIsGreenOpen(true)

        await useStatusUpdate(path, item.id, 'accepted')
            .then(async () => {
                const success = await sendEmailFunction(
                    item.email,
                    'Facility Request Status',
                    'Your request has been successfully completed. We value your feedback and invite you to share your thoughts with us. Please feel free to send your feedback to amamperez858@gmail.com. We greatly appreciate your input');
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
                const success = await sendEmailFunction(item.email,
                    'Facility Request Status',
                    'We regret to inform you that your request has been declined. If you have any questions or need further clarification, please do not hesitate to reach out to us via email at amamperez858@gmail.com.');
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

    const isTimestampExpired = (fourth) => {
        const currentDate = new Date();
        const inputDate = new Date(fourth);
        inputDate.setDate(inputDate.getDate() + 1);
        return currentDate > inputDate;
    };
    const currentDate = new Date();
    const inputDate = new Date(fourth);

    console.log('current', currentDate, "input", inputDate)
    return (
        <>
            <tr >
                <td style={{ textTransform: 'capitalize' }}>{first}</td>
                <td>{second}</td>
                <td style={{ textTransform: 'capitalize' }}>{third}</td>

                {status === "ongoing" ? <td style={{
                    textTransform: 'capitalize',
                    color: isTimestampExpired(fourth) ? 'red' : 'green',
                }}>{fourth}</td>
                    : <td style={{
                        textTransform: 'capitalize',
                    }}>{fourth}</td>
                }
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
                    <td><VisibilityIcon
                        color="info"
                        sx={{ cursor: 'pointer' }} onClick={() => setShowInformation(true)} /></td>
                }
            </tr>

            <GreenToast delay={isGreenOpen} onClose={() => setIsGreenOpen(false)} />
            <RedToast open={isRedOpen} onClose={() => setIsRedOpen(false)} />
            <FacilityViewInformation open={showInformation}
                item={item}
                onClose={() => setShowInformation(false)} />
        </>
    );
}
