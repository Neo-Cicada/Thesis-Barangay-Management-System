import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Box } from '@mui/material';
const UploadResolution = ({ open, handleClose }) => {
    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle sx={{ textAlign: 'center' }}>Upload Resolution</DialogTitle>
                <DialogContent>
                    <Box sx={{ marginTop: '1em', display: 'flex', gap: '1em' }}>
                        <TextField label="Complainants Name" />
                        <TextField label="Defendants Name" />
                    </Box>
                    <TextField
                        sx={{ marginTop: '1em', marginBottom: '1em', }}
                        fullWidth
                        rows={5}
                        type='file'
                        label="Upload Resolution"
                        InputLabelProps={{ shrink: true }}
                    />
                    <Button fullWidth
                        style={{
                            backgroundColor: 'rgb(59, 89, 152)',
                            color: '#FFFFFF',
                            fontWeight: 'bold'
                        }}
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
        </>
    )


}

export default UploadResolution;