import React, { useState, useEffect } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Box } from '@mui/material';
import { storage, db } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import useUpload from '../../hooks/useUpload';
import ConfirmationDialog from '../ConfirmationDialog'
const UploadResolution = ({ open, handleClose }) => {
    const [file, setFile] = useState()
    const [details, setDetails] = useState({
        complainants: "",
        defendants: "",
        content: "",
        imagePath: ""
    })
    const [confirm, setConfirm] = useState(false)
    useEffect(() => {
        if (details.imagePath) {
            console.log(details)
            useUpload("Resolutions", details)
            setDetails({
                complainants: "",
                defendants: "",
                content: "",
                imagePath: ""
            })
            setFile(null)
        }
    }, [details])

    const handleFileUpload = async (file) => {

        const storageRef = ref(storage, `resolution/${file.name}`);
        try {
            const snapshot = await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(snapshot.ref);
            setDetails({ ...details, imagePath: downloadURL });
            return downloadURL;
        } catch (error) {
            console.error(`Error uploading:`, error);
            return null;
        }

    };
    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle sx={{ textAlign: 'center' }}>Upload Resolution</DialogTitle>
                <DialogContent>
                    <Box sx={{ marginTop: '1em', display: 'flex', gap: '1em' }}>
                        <TextField
                            value={details.complainants}
                            label="Complainants Name"
                            onChange={(e) => setDetails({ ...details, complainants: e.target.value })}
                        />
                        <TextField
                            value={details.defendants}
                            onChange={(e) => setDetails({ ...details, defendants: e.target.value })}
                            label="Defendants Name" />
                    </Box>
                    <TextField
                        sx={{ marginTop: '1em', marginBottom: '1em', }}
                        fullWidth
                        rows={5}
                        type='file'
                        label="Upload Resolution"
                        InputLabelProps={{ shrink: true }}
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <Button fullWidth
                        style={{
                            backgroundColor: 'rgb(59, 89, 152)',
                            color: '#FFFFFF',
                            fontWeight: 'bold'
                        }}
                        onClick={() => setConfirm(true)}
                        variant='contained'>Submit</Button>
                </DialogContent>
                <DialogActions>
                    <Button
                        style={{
                            backgroundColor: 'rgb(59, 89, 152)',
                            color: '#FFFFFF',
                            fontWeight: 'bold'
                        }}

                        onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
            <ConfirmationDialog
                open={confirm}
                onClose={() => setConfirm(false)}
                title="Upload Resolution"
                message="Dp you want to upload your existing resolution?"
                onConfirm={async() => {await handleFileUpload(file), setConfirm(false) }}
            />
        </>
    )


}

export default UploadResolution;