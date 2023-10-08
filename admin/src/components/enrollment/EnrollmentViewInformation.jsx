import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Box } from '@mui/material'

export default function EnrollmentViewInformation({ item, open, onClose, onConfirm, title, message }) {

    const boxStyle = {
        fontWeight: 'bold',
        fontSize: '1.1rem'
    }
    return (
        <>
            <Dialog open={open} onClose={onClose} fullWidth key={item.id}>
                <DialogTitle sx={{ textAlign: 'center' }}>
                    {item.childInfo.childFirstName} Enrollment Information
                </DialogTitle>
                <DialogContent fullWidth style={{ border: '1px solid red', display: 'flex', flexDirection: 'column', gap: '1em', alignItems: 'center' }}>
                    <div style={{ width:'100%', textAlign: 'center', borderBottom:'2px dashed grey'}}>
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

                    <div style={{ width:'100%', textAlign: 'center', borderBottom:'2px dashed grey'}}>
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

                    <div style={{ width:'100%', textAlign: 'center', borderBottom:'2px dashed grey'}}>
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

                    <div style={{ width:'100%', textAlign: 'center', borderBottom:'2px dashed grey'}}>
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
                </DialogContent>
            </Dialog>
        </>
    )
}
