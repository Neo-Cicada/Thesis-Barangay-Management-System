import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, Snackbar, TextField, Alert, Box, Typography } from '@mui/material'
import SmsIcon from '@mui/icons-material/Sms';
import EmailIcon from '@mui/icons-material/Email';
import SendSms from '../SendSms';
import SendEmail from '../SendEmail';
import RedToast from '../RedToast';
export default function FacilityViewInformation({ item, open, onClose, onConfirm, title, message }) {
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
        transition: 'color 0.3s',
        '&:hover': {
            color: '#3B5998',
        },
    };
    const styleP = {
        borderBottom: '1px solid grey',
        display: 'flex',
        gap: '2em',

    }
    const boxStyle = {
        width: '100%',
        display: 'flex',
        justifyContent: 'start',
        gap: '1em',
        textTransform: 'capitalize',
    }
    const nameStyle = {
        display: 'flex',
        justifyContent: 'start',
        fontWeight: 500,
        fontSize: 18
    }
    const valueStyle = {
        width: '60%',
        display: 'flex',
        justifyContent: 'start',
    }
    const items = item.selectedFacility.map(item => <Box
        key={item.id}
        style={styleP}> <p style={{ width: '50%', textAlign: 'center' }}>Name: {item.name}</p>
        <hr />
        <p style={{ width: '50%', textAlign: 'center' }}>Time Slot: {item.slot}</p>
    </Box>)
    return (
        <>
            <Dialog open={open} onClose={onClose} fullWidth key={item.id}>
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
                        {/* <p style={nameStyle}>Date — {item.timestamp.toDate().toLocaleString()} </p> */}

                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: '3em' }}>
                        <Box
                            onClick={() => setSms(true)}
                            sx={smsStyle}>Message<SmsIcon /></Box>
                        <Box
                            onClick={() => setEmail(true)}
                            sx={smsStyle}><EmailIcon />Email</Box>
                    </Box>

                    <Box sx={{ width: '100%' }}>

                        <Box sx={{ textAlign: 'center' }}>Selected Items</Box>
                        <Box style={{ width: '100%' }} key={item.id}>
                            {items}
                        </Box>
                    </Box>
                </DialogContent>
            </Dialog>
            <Dialog open={sms} onClose={() => setSms(false)}>
                <DialogTitle sx={{
                    textAlign: 'center',
                    color: '#3B5998',
                    fontSize: '2rem',
                    fontWeight: 500
                }}>Send Message</DialogTitle>
                <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: '1em', alignItems: 'center', }}>

                    <Typography variant="subtitle1" sx={{ fontSize: '1.5rem' }} >To: {item.phoneNumber}</Typography>

                    <SendSms
                        setFail={setSmsFail}
                        number={item.phoneNumber}
                        setSms={setSms}
                        setOpenSnack={setOpenSnack} />

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
            <Snackbar
                open={openSnack}
                autoHideDuration={3000}
                onClose={() => setOpenSnack(false)}
            >
                <Alert onClose={() => setOpenSnack(false)} severity="success" sx={{ width: '100%' }}>
                    Message sent successfuly!
                </Alert>
            </Snackbar>
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
