import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, Snackbar, TextField, Alert, Box, Typography } from '@mui/material'
import SmsIcon from '@mui/icons-material/Sms';
import EmailIcon from '@mui/icons-material/Email';
import SendSms from '../SendSms';
import SendEmail from '../SendEmail';
import RedToast from '../RedToast';
export default function EnrollmentViewInformation({ item, open, onClose, onConfirm, title, message }) {
    const [sms, setSms] = useState(false)
    const [messageInput, setMessageInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [email, setEmail] = useState(false)
    const [openSnack, setOpenSnack] = useState(false);
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
    const nameStyle = {
        display: 'flex',
        justifyContent: 'start',
        fontWeight: 500,
        fontSize: 18
    }
    const boxStyle = {
        width: '100%',
        display: 'flex',
        justifyContent: 'start',
        gap: '1em',
        textTransform: 'capitalize',
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
                        <div style={boxStyle}>
                            <span style={nameStyle}>Firstname:</span> {item.childInfo.childFirstName}
                        </div>
                        <div style={boxStyle}>
                            <span style={nameStyle}>Middlename:</span> {item.childInfo.childMiddleName}
                        </div>
                        <div style={boxStyle}>
                            <span style={nameStyle}>Lastname:</span> {item.childInfo.childLastName}
                        </div>
                        <div style={boxStyle}>
                            <span style={nameStyle}>Birthdate:</span> {item.childInfo.childBirthDate}
                        </div>
                        <div style={boxStyle}>
                            <span style={nameStyle}>Birth Certificate:</span>
                            <a href={item.birthCertificatePath} target="_blank" style={{ textDecoration: 'none', fontSize: '1rem' }}>View Birth Certificate</a>
                        </div>
                        <div style={boxStyle}>
                            <span style={nameStyle}>Medical Certificate:</span>
                            <a href={item.medicalCertificatePath} target="_blank" style={{ textDecoration: 'none', fontSize: '1rem' }}>View Medical Certificate</a>
                        </div>
                    </div>

                    <div style={{ width: '100%', textAlign: 'center', borderBottom: '2px dashed grey' }}>
                        <h2 style={{ fontSize: '1.5rem' }}>Father Information</h2>
                        <div style={boxStyle}>
                            <span style={nameStyle}>Firstname:</span> {item.fatherInfo.fatherFirstName}
                        </div>
                        <div style={boxStyle}>
                            <span style={nameStyle}>Lastname:</span> {item.fatherInfo.fatherLastName}
                        </div>
                        <div style={boxStyle}>
                            <span style={nameStyle}>Occupation:</span> {item.fatherInfo.fatherOccupation}
                        </div>
                        <div style={boxStyle}>
                            <span style={nameStyle}>Email:</span>
                            <span style={{ textTransform: 'lowercase', }}>
                                {item.fatherInfo.fatherEmail}
                            </span>
                        </div>
                        <div style={boxStyle}>
                            <span style={nameStyle}>Phone Number:</span> {item.fatherInfo.fatherPhoneNumber}
                        </div>
                        <div style={boxStyle}>
                            <span style={nameStyle}>Marriage Certificate:</span>
                            <a href={item.marriageCertificatePath} target="_blank" style={{ textDecoration: 'none', fontSize: '1rem' }}>View Marriage Certificate</a>
                        </div>
                    </div>

                    <div style={{ width: '100%', textAlign: 'center', borderBottom: '2px dashed grey' }}>
                        <h2 style={{ fontSize: '1.5rem' }}>Mother Information</h2>
                        <div style={boxStyle}>
                            <span style={nameStyle}>Firstname:</span> {item.motherInfo.motherFirstName}
                        </div>
                        <div style={boxStyle}>
                            <span style={nameStyle}>Lastname:</span> {item.motherInfo.motherLastName}
                        </div>
                        <div style={boxStyle}>
                            <span style={nameStyle}>Occupation:</span> {item.motherInfo.motherOccupation}
                        </div>
                        <div style={boxStyle}>
                            <span style={nameStyle}>Email:</span>
                            <span style={{ textTransform: 'lowercase', }}>
                                {item.motherInfo.motherEmail}
                            </span>
                        </div>
                        <div style={boxStyle}>
                            <span style={nameStyle}>Phone Number:</span> {item.motherInfo.motherPhoneNumber}
                        </div>
                    </div>

                    <div style={{ width: '100%', textAlign: 'center', borderBottom: '2px dashed grey' }}>
                        <h2 style={{ fontSize: '1.5rem' }}>Guardian Information / Incase of Emergency Contact</h2>
                        <div style={boxStyle}>
                            <span style={nameStyle}>Firstname:</span> {item.guardianInfo.guardianFirstName}
                        </div>
                        <div style={boxStyle}>
                            <span style={nameStyle}>Lastname:</span> {item.guardianInfo.guardianLastName}
                        </div>
                        <div style={boxStyle}>
                            <span style={nameStyle}>Email:</span>
                            <span style={{ textTransform: 'lowercase', }}>
                                {item.guardianInfo.guardianEmail}
                            </span>
                        </div>
                        <div style={boxStyle}>
                            <span style={nameStyle}>Phone Number:</span> {item.guardianInfo.guardianPhoneNumber}
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

                    <SendSms setFail={setSmsFail}
                        number={item.guardianInfo.phoneNumber} setSms={setSms} setOpenSnack={setOpenSnack} />

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
                        sx={{ fontSize: '1.5rem' }} >To: {item.guardianInfo.guardianEmail}</Typography>

                    <SendEmail
                        to={item.guardianInfo.guardianEmail}
                        setEmailFail={setEmailFail}
                        setEmailSuccess={setEmailSuccess} />
                </DialogContent>
            </Dialog>
        </>
    )
}
