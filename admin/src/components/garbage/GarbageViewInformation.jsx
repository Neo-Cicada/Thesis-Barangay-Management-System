import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, Box, Typography } from '@mui/material'
import SmsIcon from '@mui/icons-material/Sms';
import EmailIcon from '@mui/icons-material/Email';
import SendSms from '../SendSms';
import SendEmail from '../SendEmail';
import RedToast from '../RedToast';

export default function GarbageViewInformation({ item, open, onClose, onConfirm, title, message }) {
    const [sms, setSms] = useState(false)
    const [messageInput, setMessageInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [email, setEmail] = useState(false)
    const [openSnack, setOpenSnack] = useState(false)
    const [emailFail, setEmailFail] = useState(false)
    const [emailSuccess, setEmailSuccess] = useState(false)
    const [smsFail, setSmsFail] = useState(false)
    const smsStyle = {
        display: 'flex',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'color 0.3s', // Add a smooth transition for the color change
        '&:hover': {
            color: '#3B5998',
        },
    };

    const styleP = {
        borderBottom: '1px solid grey',
        display: 'flex',
        gap: '2em',

    }
    return (
        <>
            <Dialog>
                <DialogTitle sx={{ textAlign: 'center' }}>
                    <h2 style={{
                        textTransform: 'capitalize',
                        color: '#3B5998',
                        fontWeight: 500
                    }}>  {item.fullname} Request Information </h2>
                </DialogTitle>
                <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: '1em', alignItems: 'center' }}>
                    <Box sx={boxStyle}>
                        <p style={nameStyle}>Fullname — {item.fullname} </p>
                    </Box>
                    <Box sx={boxStyle}>
                        <p style={{ ...nameStyle }}>Email — <span style={{ textTransform: 'lowercase' }}> {item.email}</span></p>
                    </Box>
                    <Box sx={boxStyle}>
                        <p style={nameStyle}>Phone Number — {item.phoneNumber}</p>

                    </Box>
                    <Box sx={boxStyle}>
                        <p style={nameStyle}>Date — {item.timestamp.toDate().toLocaleString()} </p>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: '3em' }}>
                        <Box
                            onClick={() => setSms(true)}
                            sx={smsStyle}>Message<SmsIcon /></Box>
                        <Box
                            onClick={() => setEmail(true)}
                            sx={smsStyle}><EmailIcon />Email</Box>
                    </Box>
                </DialogContent>
            </Dialog>
            <RedToast
                open={smsFail}
                onClose={() => setSmsFail(false)}
                content='Message Not Sent,
          Oops!'/>
            <RedToast
                open={emailFail}
                onClose={() => setEmailFail(false)}
                content='Email Not Sent,
          Oops!'
            />
            <RedToast
                open={emailSuccess}
                onClose={() => setEmailSuccess(false)}
                content="Email Sent!"
                type="success"
            />
            <RedToast
                open={openSnack}
                onClose={() => setOpenSnack(false)}
                content="Message sent successfuly!"
                type="success"
            />
            <Dialog open={email} onClose={() => setEmail(false)}>
                <DialogTitle sx={{
                    textAlign: 'center',
                    color: '#3B5998',
                    fontSize: '2rem',
                    fontWeight: 500
                }}>Send Email</DialogTitle>
                <DialogContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1em',
                    alignItems: 'center',
                }}>

                    <Typography variant="subtitle1"
                        sx={{ fontSize: '1.5rem' }} >To: {item.email}</Typography>

                    <SendEmail to={item.email} setEmailFail={setEmailFail} setEmailSuccess={setEmailSuccess} />
                </DialogContent>
            </Dialog>
        </>
    )
}
