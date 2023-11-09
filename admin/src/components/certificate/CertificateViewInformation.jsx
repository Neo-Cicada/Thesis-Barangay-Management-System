import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, Snackbar, TextField, Alert, Box, Typography } from '@mui/material'
import SmsIcon from '@mui/icons-material/Sms';
import EmailIcon from '@mui/icons-material/Email';
import SendSms from '../SendSms';
import SendEmail from '../SendEmail';
import RedToast from '../RedToast';
export default function CertificateViewInformation({ item, open, onClose, onConfirm, title, message }) {
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
    const items = item.selectedCertificates.map(item => <Box
        key={item.id}
        style={styleP}> <p style={{
            width: '50%', textAlign: 'center',
            display: 'flex', justifyContent: 'center',
            alignItems: 'center'
        }}>Name: {item.name}</p>
        <hr />
        <p style={{ width: '50%', textAlign: 'center' }}>Mode of Payment:
            {item.mop} {item.mop === "GCASH" && item.reference ? `Reference#${item.reference}` : ''}
        </p>
    </Box>)
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
    return (
        <>
            <Dialog open={open} onClose={onClose} fullWidth key={item.id}>
                <DialogTitle sx={{ textAlign: 'center' }}>
                    <h2 style={{
                        textTransform: 'capitalize',
                        color: '#3B5998',
                        fontWeight: 500
                    }}>
                        {item.fullname} Request Information
                    </h2>
                </DialogTitle>
                <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: '1em', alignItems: 'center' }}>
                    <Box sx={boxStyle}>
                        <p style={nameStyle}>Fullname — {item.fullname} </p>
                    </Box>
                    <Box sx={boxStyle}>
                        <p style={nameStyle}>Email —<span style={{ textTransform: 'lowercase', fontWeight: 500 }}>{item.email}</span></p></Box>
                    <Box sx={boxStyle}>
                        <p style={nameStyle}>Phone Number — {item.phoneNumber} </p>
                    </Box>
                    <Box sx={boxStyle}>
                        <p style={nameStyle}>Address — {item.address} </p>
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
                        <Box sx={{ textAlign: 'center' }}>Selected Documents</Box>
                        <Box style={{
                            width: '100%', display: 'flex',
                            flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            gap: '1em'
                        }} key={item.id}>

                            <p style={{ width: '15em', textAlign: 'center' }}>Order Type:  {item.mod}</p>
                            <p style={{ width: '15em', textAlign: 'center' }}>Mode of Payment: {item.mop}</p>
                            {item.mop === "Gcash" && <p style={{ width: '15em', textAlign: 'center' }}>Gcash Reference: {item.reference}</p>}

                            {item.selectedCertificates.map(item => <div style={{ display: 'flex', borderBottom: '1px solid black' }}>
                                <p style={{ width: '15em', textAlign: 'center' }}>Document name: {item.name}</p>
                                <p style={{ width: '15em', textAlign: 'center' }}>Document price: {item.quantity}</p>
                            </div>)
                            }
                            <p style={{ width: '15em', textAlign: 'center' }}>Total: {item.total}pesos</p>

                        </Box>
                    </Box>
                </DialogContent>
            </Dialog >
            <Dialog open={sms} onClose={() => setSms(false)}>
                <DialogTitle sx={{
                    textAlign: 'center',
                    color: '#3B5998',
                    fontSize: '2rem',
                    fontWeight: 500
                }}>Send Message</DialogTitle>
                <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: '1em', alignItems: 'center', }}>

                    <Typography variant="subtitle1" sx={{ fontSize: '1.5rem' }} >To: {item.phoneNumber}</Typography>

                    <SendSms setFail={setSmsFail}
                        number={item.phoneNumber} setSms={setSms} setOpenSnack={setOpenSnack} />

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
