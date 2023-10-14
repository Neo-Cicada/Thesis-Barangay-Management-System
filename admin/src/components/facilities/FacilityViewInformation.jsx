import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, Snackbar, TextField, Alert, Box, Typography } from '@mui/material'
import SmsIcon from '@mui/icons-material/Sms';
import EmailIcon from '@mui/icons-material/Email';
import SendSms from '../SendSms';
import SendEmail from '../SendEmail';
export default function FacilityViewInformation({ item, open, onClose, onConfirm, title, message }) {
  const [sms, setSms] = useState(false)
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [email, setEmail] = useState(false)
  const [openSnack, setOpenSnack] = useState(false)
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
const boxStyle = {
  width: '100%', display: 'flex', justifyContent: 'center', gap: '1em'
}
const nameStyle = {
  width: '40%',
  display: 'flex',
  justifyContent: 'end',
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
  <p style={{ width: '50%', textAlign: 'center' }}>Time: {item.slot}</p>
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
                        <p style={nameStyle}>Fullname: </p>
                        <p style={valueStyle}>{item.fullname}</p>  </Box>
                    <Box sx={boxStyle}>
                        <p style={nameStyle}>Email: </p><p style={valueStyle}>{item.email}</p></Box>
                    <Box sx={boxStyle}>
                        <p style={nameStyle}>Phone Number:</p>
                        <p style={valueStyle}>{item.phoneNumber} </p></Box>
                    <Box sx={boxStyle}>
                        <p style={nameStyle}>Date: </p> <p style={valueStyle}></p></Box>
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

                    <SendSms number={item.phoneNumber} setSms={setSms} setOpenSnack={setOpenSnack} />


                </DialogContent>
            </Dialog>
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

                    <SendEmail to={item.email} />
                </DialogContent>
            </Dialog>
    </>
  )
}
