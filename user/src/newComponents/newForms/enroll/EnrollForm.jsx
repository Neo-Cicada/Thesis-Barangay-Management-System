import React, { useState } from 'react'
import { Box, TextField, Typography, Button, Container, Dialog, DialogContent, FormControlLabel, Checkbox } from '@mui/material'

export default function EnrollForm() {
    const [formData, setFormData] = useState({
        childInfo: {
            childFirstName: "",
            childLastName: "",
            childMiddleName: "",
            childBirthDate: ""
        },
        fatherInfo: {
            fatherFirstName: "",
            fatherLastName: "",
            fatherOccupation: "",
            fatherPhoneNumber: "",
            fatherEmail: ""
        },
        motherInfo: {
            motherFirstName: "",
            motherLastName: "",
            motherOccupation: "",
            motherPhoneNumber: "",
            motherEmail: ""
        },
        guardianInfo: {
            guardianFirstName: "",
            guardianLastName: "",
            guardianPhoneNumber: "",
            guardianEmail: ""
        }
    });
    return (
        <>
            <div style={{ maxWidth: '400px', margin: '0 auto' }}>
                <form style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1em',
                    marginTop: '1em',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Typography variant="h6" gutterBottom maxWidth sx={{
                        textAlign: 'center'
                    }}>
                        Child Information
                    </Typography>
                    <TextField
                        required

                        fullWidth
                        label="Lastname"
                        onChange={(e) => setFormData((prevData) => ({
                            ...prevData,
                            childInfo: {
                                ...prevData.childInfo,
                                childLastName: e.target.value
                            }
                        }))} />
                    <TextField
                        required

                        label="Firstname"
                        fullWidth
                        onChange={(e) => setFormData((prevData) => ({
                            ...prevData,
                            childInfo: {
                                ...prevData.childInfo,
                                childFirstName: e.target.value
                            }
                        }))}
                    />
                    <TextField
                        required

                        label="Middlename"
                        fullWidth
                        onChange={(e) => setFormData((prevData) => ({
                            ...prevData,
                            childInfo: {
                                ...prevData.childInfo,
                                childMiddleName: e.target.value
                            }
                        }))} />
                    <TextField
                        required

                        type="date"
                        label="Date of Birth"
                        onChange={(e) => setFormData((prevData) => ({
                            ...prevData,
                            childInfo: {
                                ...prevData.childInfo,
                                childBirthDate: e.target.value
                            }
                        }))} InputLabelProps={{
                            shrink: true,
                        }}
                        fullWidth
                    />
                    <TextField
                        required

                        fullWidth
                        type="file"
                        label="Upload Birth Certificate"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            accept: '.pdf,.doc,.docx,image/*',
                        }}
                    />
                    <TextField
                        fullWidth
                        required

                        type="file"
                        label="Upload Medical Certificate"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            accept: '.pdf,.doc,.docx,image/*',
                        }}
                    />
                    <Typography fullWidth
                        variant="h6" gutterBottom>
                        Parents and Guardian Information
                    </Typography>
                    <Typography variant="h6" gutterBottom maxWidth sx={{
                        textAlign: 'center'
                    }}>Father Information</Typography>
                    <TextField
                        required

                        label="Father's Lastname"
                        fullWidth
                        onChange={(e) => setFormData((prevData) => ({
                            ...prevData,
                            fatherInfo: {
                                ...prevData.fatherInfo,
                                fatherLastName: e.target.value
                            }
                        }))} />
                    <TextField
                        required

                        label="Father's Firstname"
                        fullWidth
                        onChange={(e) => setFormData((prevData) => ({
                            ...prevData,
                            fatherInfo: {
                                ...prevData.fatherInfo,
                                fatherFirstName: e.target.value
                            }
                        }))} />
                    <TextField
                        required

                        label="Occupation"
                        fullWidth
                        onChange={(e) => setFormData((prevData) => ({
                            ...prevData,
                            fatherInfo: {
                                ...prevData.fatherInfo,
                                fatherOccupation: e.target.value
                            }
                        }))} />
                    <TextField
                        required

                        label="Phone number"
                        fullWidth
                        onChange={(e) => setFormData((prevData) => ({
                            ...prevData,
                            fatherInfo: {
                                ...prevData.fatherInfo,
                                fatherPhoneNumber: e.target.value
                            }
                        }))} />
                    <TextField
                        required

                        label="Email"
                        fullWidth
                        onChange={(e) => setFormData((prevData) => ({
                            ...prevData,
                            fatherInfo: {
                                ...prevData.fatherInfo,
                                fatherEmail: e.target.value
                            }
                        }))} />
                    <TextField
                        required

                        fullWidth
                        type="file"
                        label="Marriage Certificate"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            accept: '.pdf,.doc,.docx,image/*',
                        }}
                    />
                    <Typography variant="h6" gutterBottom maxWidth sx={{
                        textAlign: 'center'
                    }}>Mother Information</Typography>
                    <TextField
                        required

                        label="Mother's Lastname"
                        fullWidth
                        onChange={(e) => setFormData((prevData) => ({
                            ...prevData,
                            motherInfo: {
                                ...prevData.motherInfo,
                                motherLastName: e.target.value
                            }
                        }))} />
                    <TextField
                        required

                        label="Mother's Firstname"
                        fullWidth
                        onChange={(e) => setFormData((prevData) => ({
                            ...prevData,
                            motherInfo: {
                                ...prevData.motherInfo,
                                motherFirstName: e.target.value
                            }
                        }))} />
                    <TextField
                        required

                        label="Occupation"
                        fullWidth
                        onChange={(e) => setFormData((prevData) => ({
                            ...prevData,
                            motherInfo: {
                                ...prevData.motherInfo,
                                motherOccupation: e.target.value
                            }
                        }))}
                    />
                    <TextField
                        required

                        label="Phone number"
                        fullWidth
                        onChange={(e) => setFormData((prevData) => ({
                            ...prevData,
                            motherInfo: {
                                ...prevData.motherInfo,
                                motherPhoneNumber: e.target.value
                            }
                        }))} />
                    <TextField
                        required

                        label="Email"
                        fullWidth
                        onChange={(e) => setFormData((prevData) => ({
                            ...prevData,
                            motherInfo: {
                                ...prevData.motherInfo,
                                motherEmail: e.target.value
                            }
                        }))}
                    />
                    <Typography variant="h6" gutterBottom maxWidth sx={{
                        textAlign: 'center'
                    }}>Guardian Information</Typography>
                    <TextField
                        required

                        label="Guardian's Lastname"
                        fullWidth
                        onChange={(e) => setFormData((prevData) => ({
                            ...prevData,
                            guardianInfo: {
                                ...prevData.guardianInfo,
                                guardianLastName: e.target.value
                            }
                        }))} />
                    <TextField
                        required

                        label="Guardian's Firstname"
                        fullWidth
                        onChange={(e) => setFormData((prevData) => ({
                            ...prevData,
                            guardianInfo: {
                                ...prevData.guardianInfo,
                                guardianFirstName: e.target.value
                            }
                        }))} />
                    <TextField
                        required

                        label="Phone number"
                        fullWidth
                        onChange={(e) => setFormData((prevData) => ({
                            ...prevData,
                            guardianInfo: {
                                ...prevData.guardianInfo,
                                guardianPhoneNumber: e.target.value
                            }
                        }))}
                    />
                    <TextField
                        required
                        label="Emails"
                        fullWidth
                        onChange={(e) => setFormData((prevData) => ({
                            ...prevData,
                            guardianInfo: {
                                ...prevData.guardianInfo,
                                guardianEmail: e.target.value
                            }
                        }))} />

                </form>
            </div>
        </>
    )
}
