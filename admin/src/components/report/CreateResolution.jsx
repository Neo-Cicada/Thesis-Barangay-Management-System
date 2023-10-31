import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Box } from '@mui/material'
export default function CreateResolution({ open, handleClose }) {
    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle sx={{ textAlign: 'center' }}>
                    Create Resolution
                </DialogTitle>
                <DialogContent>
                    <Box sx={{ marginTop: '1em', display: 'flex', gap: '1em' }}>
                        <TextField label="Complainants Name" />
                        <TextField label="Defendants Name" />
                    </Box>
                    <TextField
                        fullWidth
                        sx={{ marginTop: '1em' }}
                        label="Content"
                        placeholder="Content"
                        rows={10}
                        multiline

                    />
                    <Button variant='contained' fullWidth
                        style={{
                            marginTop: '1em',
                            backgroundColor: 'rgb(59, 89, 152)',
                            color: '#FFFFFF',
                            fontWeight: 'bold'
                        }}
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
