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
  return (
    <>
      <Dialog open={open} onClose={onClose} fullWidth key={item.id}>
        <h1>hello</h1>
      </Dialog>
    </>
  )
}
