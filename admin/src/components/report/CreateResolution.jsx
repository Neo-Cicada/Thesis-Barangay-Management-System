import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Box } from '@mui/material'
import useUpload from '../../hooks/useUpload'
import ConfirmDialog from '../ConfirmationDialog'
export default function CreateResolution({ open, handleClose }) {
    const [details, setDetails] = useState({
        complainants: "",
        defendants: "",
        content: "",
        imagePath: ""
    })
    const [confirm, setConfirm] = useState(false)
    const handleUpload = async (e) => {
        e.preventDefault();
        await useUpload("Resolutions", details)
        setDetails({
            complainants: "",
            defendants: "",
            content: "",
            imagePath: ""
        })
        setConfirm(false)
    }
    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle sx={{ textAlign: 'center' }}>
                    Create Resolution
                </DialogTitle>
                <DialogContent>
                    <Box sx={{ marginTop: '1em', display: 'flex', gap: '1em' }}>
                        <TextField
                            label="Complainants Name"
                            value={details.complainants}
                            onChange={(e) => setDetails({ ...details, complainants: e.target.value })}
                        />
                        <TextField
                            label="Defendants Name"
                            value={details.defendants}
                            onChange={(e) => setDetails({ ...details, defendants: e.target.value })}
                        />
                    </Box>
                    <TextField
                        fullWidth
                        value={details.content}
                        sx={{ marginTop: '1em' }}
                        label="Content"
                        placeholder="Content"
                        rows={10}
                        multiline
                        onChange={(e) => setDetails({ ...details, content: e.target.value })}

                    />
                    <Button variant='contained' fullWidth
                        style={{
                            marginTop: '1em',
                            backgroundColor: 'rgb(59, 89, 152)',
                            color: '#FFFFFF',
                            fontWeight: 'bold'
                        }}
                        onClick={() => setConfirm(true)}
                    >Submit</Button>
                </DialogContent>
                <DialogActions>
                    <Button variant='contained'
                        style={{
                            backgroundColor: 'rgb(59, 89, 152)',
                            color: '#FFFFFF',
                            fontWeight: 'bold'
                        }}
                        onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
            <ConfirmDialog
                open={confirm}
                onClose={() => setConfirm(false)}
                title="Upload Created Resolution"
                message="Do you want to upload the created resolution?"
                onConfirm={handleUpload}
            />
        </>
    )
}
