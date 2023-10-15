import { Dialog, DialogTitle, DialogContent, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import { getAuth, updatePassword, } from "firebase/auth";
const auth = getAuth();




export default function UpdateProfile({ open, onClose, user }) {
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const handleUpdate = async () => {
        if (newPassword !== confirmNewPassword) {
            console.log('Passwords do not match');
            return;
        }
        const idToken = await firebase.auth().user

        try {
            await updatePassword(idToken, newPassword);

            console.log('Password updated successfully!');
        } catch (error) {
            console.error('Error updating password:', error);
        }
    }


    return (
        <Dialog open={open} onClose={onClose} >
            <DialogTitle sx={{ textAlign: 'center' }} >Update Profile</DialogTitle>
            <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: '2em', }} >
                <TextField
                    onChange={(e) => setNewPassword(e.target.value)}
                    value={newPassword}
                    style={{ marginTop: '1em' }}
                    label="New Password" />
                <TextField
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    value={confirmNewPassword}
                    label="Confirm Password" />
                <Button
                    variant='contained' onClick={handleUpdate}>Update</Button>
            </DialogContent>
        </Dialog>
    )
}
