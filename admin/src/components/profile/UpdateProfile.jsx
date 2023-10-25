import { Dialog, DialogTitle, DialogContent, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { getAuth, getIdToken, updatePassword } from "firebase/auth";
import RedToast from '../RedToast';
export default function UpdateProfile({ open, onClose, user }) {
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [successToast, setSuccessToast] = useState(false)
    const [errorToast, setErrorToast] = useState(false)
    const handleUpdate = async () => {
        if (newPassword !== confirmNewPassword) {
            console.log('Passwords do not match');
            setErrorToast(true)
            return;
        }

        const auth = getAuth();

        try {
            const idToken = await getIdToken(auth.currentUser);
            await updatePassword(auth.currentUser, newPassword);
            console.log('Password updated successfully!');
        } catch (error) {
            console.error('Error updating password:', error);
        }

        setSuccessToast(true)

        setNewPassword('')
        setConfirmNewPassword('')
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle sx={{ textAlign: 'center', color: 'rgb(59, 89, 152);', fontWeight: 'bold' }}>Update Profile</DialogTitle>
            <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: '2em' }}>
                <TextField
                    type='password'
                    onChange={(e) => setNewPassword(e.target.value)}
                    value={newPassword}
                    style={{ marginTop: '1em' }}
                    label="New Password"
                />
                <TextField
                    type="password"
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    value={confirmNewPassword}
                    label="Confirm Password"
                />
                <Button variant="contained"
                    style={{ backgroundColor: 'rgb(59, 89, 152)', fontWeight: 'bold' }}
                    onClick={handleUpdate}>
                    Update
                </Button>
            </DialogContent>
            <RedToast
                open={errorToast}
                content='Password do not match'
                onClose={() => setErrorToast(false)} />
            <RedToast
                open={successToast}
                content='Password updated successfully!'
                type='success'
                onClose={() => setSuccessToast(false)} />
        </Dialog>
    )
}
