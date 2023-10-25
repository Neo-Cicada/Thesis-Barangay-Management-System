import React, { useEffect, useState } from 'react';
import {

    TextField,
    Typography,
    Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio

} from '@mui/material';
import { storage, db } from '../../../firebase';

import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import useUpload from '../../../hooks/useUpload';
import SnackBar from '../../SnackBar'
export default function EnrollForm({ formData, setFormData }) {
    const [openSnack, setOpenSnack] = useState(false)

    const [filePaths, setFilePaths] = useState({
        // Store file paths here
        birthCertificatePath: '',
        medicalCertificatePath: '',
        marriageCertificatePath: '',
    })
    const resetFormDataAndFilePaths = () => {
        setFilePaths({
            birthCertificatePath: '',
            medicalCertificatePath: '',
            marriageCertificatePath: '',
        });

        setFormData({
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
            },
        });
    };
    const [fileType, setFileType] = useState({

    })
    useEffect(() => {
        // Check if all filePaths values are not empty strings
        const areFilePathsFilled = Object.values(filePaths).every(path => path !== '');

        if (areFilePathsFilled) {
            console.log("All filePaths are filled:");
            console.log(formData);
            console.log(filePaths);
            useUpload({ ...formData, ...filePaths }, 'EnrollmentRequest')
            resetFormDataAndFilePaths();
            setOpenSnack(true)
        }
    }, [filePaths]);

    const handleFileUpload = async (fieldName, file) => {
        const storageRef = ref(storage, `enroll-form-files/${file.name}`);
        try {
            const snapshot = await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(snapshot.ref);
            console.log(`Download URL for ${fieldName}:`, downloadURL);

            setFilePaths((prevPaths) => ({
                ...prevPaths,
                [fieldName]: downloadURL,
            }));
        } catch (error) {
            console.error(`Error uploading ${fieldName}:`, error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Step 1: Upload files and get their URLs
            const { birthCertificate, medicalCertificate, marriageCertificate } = fileType;


            if (birthCertificate) {
                await handleFileUpload('birthCertificatePath', birthCertificate);
            }
            if (medicalCertificate) {
                await handleFileUpload('medicalCertificatePath', medicalCertificate);
            }
            if (marriageCertificate) {
                await (handleFileUpload('marriageCertificatePath', marriageCertificate));
            }


        } catch (error) {
            console.error('Error during file upload:', error);
        }
    };



    return (
        <>
            <div style={{ maxWidth: '400px', margin: '0 auto' }}>
                <form
                    onSubmit={handleSubmit}
                    style={{

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
                        error={!isNaN(formData.childInfo.childLastName) && formData.childInfo.childLastName !== ''}
                        helperText="Required"
                        required
                        value={formData.childInfo.childLastName}
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
                        value={formData.childInfo.childFirstName}
                        helperText="Required"
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
                        value={formData.childInfo.childMiddleName}
                        helperText="Required"
                        label="Middlename"
                        fullWidth
                        onChange={(e) => setFormData((prevData) => ({
                            ...prevData,
                            childInfo: {
                                ...prevData.childInfo,
                                childMiddleName: e.target.value
                            }
                        }))} />
                    <FormControl>
                        <FormLabel sx={{ textAlign: 'center' }}>Gender</FormLabel>
                        <RadioGroup

                            row
                            name="radio-buttons-group"
                            onChange={(e) => setFormData((prevData) => ({
                                ...prevData,
                                childInfo: {
                                    ...prevData.childInfo,
                                    childGender: e.target.value
                                }
                            }))}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <TextField
                        required
                        helperText="Required"
                        value={formData.childInfo.childBirthDate}
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
                        helperText="Required"
                        fullWidth
                        type="file"
                        label="Upload Birth Certificate"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            accept: '.pdf,.doc,.docx,image/*',
                        }}
                        onChange={(e) =>
                            setFileType((prevData) => ({
                                ...prevData,
                                birthCertificate: e.target.files[0],
                            }))
                        }
                    />
                    <TextField
                        required
                        helperText="Required"
                        fullWidth
                        type="file"
                        label="Upload Medical Certificate"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            accept: '.pdf,.doc,.docx,image/*',
                        }}
                        onChange={(e) =>
                            setFileType((prevData) => ({
                                ...prevData,
                                medicalCertificate: e.target.files[0],
                            }))
                        }
                    />
                    <Typography fullWidth
                        variant="h6" gutterBottom>
                        Parents and Guardian Information
                    </Typography>
                    <Typography variant="h6" gutterBottom maxWidth sx={{
                        textAlign: 'center'
                    }}>Father Information</Typography>
                    <TextField
                        helperText="Required"
                        required
                        value={formData.fatherInfo.fatherLastName}
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
                        helperText="Required"
                        required
                        value={formData.fatherInfo.fatherFirstName}

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
                        value={formData.fatherInfo.fatherOccupation}
                        helperText="Optional"
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
                        helperText="Required"
                        fatherPhoneNumber
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
                        value={formData.fatherInfo.fatherEmail}
                        label="Email"
                        helperText="Optional"
                        fullWidth
                        onChange={(e) => setFormData((prevData) => ({
                            ...prevData,
                            fatherInfo: {
                                ...prevData.fatherInfo,
                                fatherEmail: e.target.value
                            }
                        }))} />
                    <TextField
                        fullWidth
                        type="file"
                        helperText="Optional"
                        label="Upload Marriage Certificate"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            accept: '.pdf,.doc,.docx,image/*',
                        }}
                        onChange={(e) =>
                            setFileType((prevData) => ({
                                ...prevData,
                                marriageCertificate: e.target.files[0],
                            }))
                        }
                    />
                    <Typography variant="h6" gutterBottom maxWidth sx={{
                        textAlign: 'center'
                    }}>Mother Information</Typography>
                    <TextField
                        helperText="Required"
                        required
                        value={formData.motherInfo.motherLastName}
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
                        value={formData.motherInfo.motherFirstName}
                        helperText="Required"
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
                        value={formData.motherInfo.motherOccupation}
                        helperText="Required"
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
                        value={formData.motherInfo.motherPhoneNumber}
                        helperText="Required"
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
                        value={formData.motherInfo.motherEmail}
                        helperText="Optional"
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
                        value={formData.guardianInfo.guardianLastName}
                        helperText="Required"
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
                        value={formData.guardianInfo.guardianFirstName}
                        helperText="Required"
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
                        value={formData.guardianInfo.guardianPhoneNumber}
                        helperText="Required"
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
                        value={formData.guardianInfo.guardianEmail}
                        helperText="Optional"
                        label="Emails"
                        fullWidth
                        onChange={(e) => setFormData((prevData) => ({
                            ...prevData,
                            guardianInfo: {
                                ...prevData.guardianInfo,
                                guardianEmail: e.target.value
                            }
                        }))} />
                    <Button fullWidth type='submit'
                        style={{ backgroundColor: '#3B5998', color: 'white', fontWeight: 'bold' }}

                        variant='contained'>Submit</Button>
                </form>
                <SnackBar open={openSnack} handleClose={() => setOpenSnack(false)} />
            </div>
        </>
    )
}
