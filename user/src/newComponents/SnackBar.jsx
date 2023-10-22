import React from 'react'
import { Snackbar, Alert } from '@mui/material'
export default function SnackBar({ open, handleClose }) {
    return (
        <>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Your request has been successfully sent!
                </Alert>
            </Snackbar>
        </>
    )
}
