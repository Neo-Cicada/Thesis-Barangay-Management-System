import React, { createContext, useContext, useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogActions, Button } from '@mui/material';
import './certificate.css'
export default function CertificateDialog({ open, handleClose }) {
    return (
        <>
            <Dialog open={open} onClose={handleClose} fullWidth>
                <DialogTitle>Available Certificates</DialogTitle>
                <DialogContent>Hello world</DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                    <Button>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
