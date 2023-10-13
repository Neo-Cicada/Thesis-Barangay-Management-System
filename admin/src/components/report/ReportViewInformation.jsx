import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Box, Typography } from '@mui/material'
import SmsIcon from '@mui/icons-material/Sms';
import EmailIcon from '@mui/icons-material/Email';
export default function ReportViewInformation({ item, open, onClose, onConfirm, title, message }) {
    const [sms, setSms] = useState(false)
    const [messageInput, setMessageInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [email, setEmail] = useState(false)
    const handleSendMessage = () => {
        if (messageInput.trim() !== '') {
            const newMessage = {
                text: messageInput,
                type: 'outgoing', // You can use 'incoming' for received messages
            };
            setMessages([...messages, newMessage]);
            setMessageInput('');
        }
    };
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
    const items = item.selectedReport.map(item => <Box
        key={item.id}
        style={styleP}> <p style={{ width: '50%', textAlign: 'center' }}>Violation {item.name}</p>
        <hr />
        <p style={{ width: '50%', textAlign: 'center' }}>Who: {item.person}</p>
    </Box>)
    const boxStyle = {
        width: 'auto',
        display: 'flex',
        justifyContent: 'center', gap: '1em',
    }
    const nameStyle = {
        display: 'flex',
        justifyContent: 'start',
    }

    return (
        <>
            <Dialog open={open} onClose={onClose} fullWidth key={item.id}>
                <DialogTitle sx={{ textAlign: 'center' }}>
                    {item.fullname} Request Information
                </DialogTitle>
                <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: '1em', alignItems: 'center', }}>
                    <Box sx={boxStyle}>
                        <p style={nameStyle}>Fullname — {item.fullname} </p>
                    </Box>
                    <Box sx={boxStyle}>
                        <p style={nameStyle}>Email — {item.email}</p></Box>
                    <Box sx={boxStyle}>
                        <p style={nameStyle}>Phone Number — {item.phoneNumber}</p> </Box>

                    <Box sx={boxStyle}>
                        <p style={nameStyle}>Summon the person — {item.summon === true ? 'Yes' : 'No'} </p>

                    </Box>

                    <Box sx={{ width: '100%' }}>
                        {item.summon &&
                            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '3em' }}>
                                <Box
                                    onClick={() => setSms(true)}
                                    sx={smsStyle}>Message<SmsIcon /></Box>
                                <Box
                                    onClick={() => setEmail(true)}
                                    sx={smsStyle}><EmailIcon />Email</Box>
                            </Box>}
                        <Box
                            sx={{ textAlign: 'center' }}>Nirereklamo</Box>
                        <Box style={{ width: '100%' }} key={item.id}>
                            {items}
                        </Box>
                    </Box>
                </DialogContent>
            </Dialog>

            <Dialog open={sms} onClose={() => setSms(false)}>
                <DialogTitle sx={{ textAlign: 'center' }}>Send Message</DialogTitle>
                <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: '1em', alignItems: 'center', }}>

                    <Typography variant="subtitle1">To: {item.phoneNumber}</Typography>

                    <TextField
                        label="Type your message"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}

                    />
                    <Button variant="contained" onClick={handleSendMessage}>Send</Button>
                </DialogContent>
            </Dialog>
            <Dialog open={email} onClose={() => setEmail(false)}>
                <DialogTitle sx={{ textAlign: 'center' }}>Send Email</DialogTitle>
                <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: '1em', alignItems: 'center', }}>

                    <Typography variant="subtitle1">To: {item.email}</Typography>

                    <TextField
                        label="Type your email"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}

                    />
                    <Button variant="contained" onClick={handleSendMessage}>Send</Button>
                </DialogContent>
            </Dialog>
        </>
    )
}
