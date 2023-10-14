import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, Snackbar, TextField, Alert, Box, Typography } from '@mui/material'
import SmsIcon from '@mui/icons-material/Sms';
import EmailIcon from '@mui/icons-material/Email';
import SendSms from '../SendSms';
import SendEmail from '../SendEmail';
export default function EnrollmentViewInformation({ item, open, onClose, onConfirm, title, message }) {
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
    const boxStyle = {
        fontWeight: 'bold',
        fontSize: '1.1rem'
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
                        {item.childInfo.childFirstName} Enrollment Information
                    </h2>
                </DialogTitle>
                <DialogContent fullWidth style={{ display: 'flex', flexDirection: 'column', gap: '1em', alignItems: 'center' }}>
                    <div style={{ width: '100%', textAlign: 'center', borderBottom: '2px dashed grey' }}>
                        <h2 style={{ fontSize: '1.5rem' }}>Child Information</h2>
                        <div>
                            <span style={boxStyle}>Firstname:</span> {item.childInfo.childFirstName}
                        </div>
                        <div>
                            <span style={boxStyle}>Middlename:</span> {item.childInfo.childMiddleName}
                        </div>
                        <div>
                            <span style={boxStyle}>Lastname:</span> {item.childInfo.childLastName}
                        </div>
                        <div>
                            <span style={boxStyle}>Birthdate:</span> {item.childInfo.childBirthDate}
                        </div>
                        <div>
                            <span style={boxStyle}>Birth Certificate:</span>
                            <a href={item.birthCertificatePath} target="_blank" style={{ textDecoration: 'none', marginLeft: '0.5em', fontSize: '1rem' }}>View Birth Certificate</a>
                        </div>
                        <div>
                            <span style={boxStyle}>Medical Certificate:</span>
                            <a href={item.medicalCertificatePath} target="_blank" style={{ textDecoration: 'none', marginLeft: '0.5em', fontSize: '1rem' }}>View Medical Certificate</a>
                        </div>
                    </div>

                    <div style={{ width: '100%', textAlign: 'center', borderBottom: '2px dashed grey' }}>
                        <h2 style={{ fontSize: '1.5rem' }}>Father Information</h2>
                        <div>
                            <span style={boxStyle}>Firstname:</span> {item.fatherInfo.fatherFirstName}
                        </div>
                        <div>
                            <span style={boxStyle}>Lastname:</span> {item.fatherInfo.fatherLastName}
                        </div>
                        <div>
                            <span style={boxStyle}>Occupation:</span> {item.fatherInfo.fatherOccupation}
                        </div>
                        <div>
                            <span style={boxStyle}>Email:</span> {item.fatherInfo.fatherEmail}
                        </div>
                        <div>
                            <span style={boxStyle}>Phone Number:</span> {item.fatherInfo.fatherPhoneNumber}
                        </div>
                        <div>
                            <span style={boxStyle}>Marriage Certificate:</span>
                            <a href={item.marriageCertificatePath} target="_blank" style={{ textDecoration: 'none', marginLeft: '0.5em', fontSize: '1rem' }}>View Marriage Certificate</a>
                        </div>
                    </div>

                    <div style={{ width: '100%', textAlign: 'center', borderBottom: '2px dashed grey' }}>
                        <h2 style={{ fontSize: '1.5rem' }}>Mother Information</h2>
                        <div>
                            <span style={boxStyle}>Firstname:</span> {item.motherInfo.motherFirstName}
                        </div>
                        <div>
                            <span style={boxStyle}>Lastname:</span> {item.motherInfo.motherLastName}
                        </div>
                        <div>
                            <span style={boxStyle}>Occupation:</span> {item.motherInfo.motherOccupation}
                        </div>
                        <div>
                            <span style={boxStyle}>Email:</span> {item.motherInfo.motherEmail}
                        </div>
                        <div>
                            <span style={boxStyle}>Phone Number:</span> {item.motherInfo.motherPhoneNumber}
                        </div>
                    </div>

                    <div style={{ width: '100%', textAlign: 'center', borderBottom: '2px dashed grey' }}>
                        <h2 style={{ fontSize: '1.5rem' }}>Guardian Information</h2>
                        <div>
                            <span style={boxStyle}>Firstname:</span> {item.guardianInfo.guardianFirstName}
                        </div>
                        <div>
                            <span style={boxStyle}>Lastname:</span> {item.guardianInfo.guardianLastName}
                        </div>
                        <div>
                            <span style={boxStyle}>Email:</span> {item.guardianInfo.guardianEmail}
                        </div>
                        <div>
                            <span style={boxStyle}>Phone Number:</span> {item.guardianInfo.guardianPhoneNumber}
                        </div>
                    </div>
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
            <Dialog open={sms} onClose={() => setSms(false)}>
                <DialogTitle sx={{
                    textAlign: 'center',
                    color: '#3B5998',
                    fontSize: '2rem',
                    fontWeight: 500
                }}>Send Message</DialogTitle>
                <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: '1em', alignItems: 'center', }}>

                    <Typography variant="subtitle1" sx={{ fontSize: '1.5rem' }} >To: {item.guardianInfo.guardianPhoneNumber}</Typography>

                    <SendSms number={item.guardianInfo.guardianPhoneNumber} setSms={setSms} setOpenSnack={setOpenSnack} />


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
                        sx={{ fontSize: '1.5rem' }} >To: {item.guardianInfo.guardianEmail}</Typography>

                    <SendEmail to={item.guardianInfo.guardianEmail} />
                </DialogContent>
            </Dialog>
        </>
    )
}
