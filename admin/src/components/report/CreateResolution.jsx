import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Box } from '@mui/material'
import useUpload from '../../hooks/useUpload'

export default function CreateResolution({ open, handleClose }) {
    const [details, setDetails] = useState({
        complainants: "",
        defendants: "",
        content: "",
        imagePath: ""
    })

    const handleUpload = async (e) => {
        e.preventDefault();
        await useUpload("Resolutions", details)
        setDetails({
            complainants: "",
            defendants: "",
            content: "",
            imagePath: ""
        })
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
                        onClick={handleUpload}
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
        </>
    )
}
