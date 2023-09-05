import React, { useState } from 'react';
import { Container, Box, TextField, Button } from '@mui/material';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function CreateAdmin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const auth = getAuth();

    const onCreateAdmin = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        // Check if passwords match
        if (password !== confirmPassword) {
            // Handle password mismatch error here
            console.error('Passwords do not match');
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            // Handle user creation success
            console.log(user);
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            // Handle error
            console.error(errorCode, errorMessage);
        }
    }

    return (
        <>
            <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '1em' }}>
                <h3>Create New Administrator</h3>
                <form onSubmit={onCreateAdmin} style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
                    <Box sx={{ display: 'flex' }}>
                        <Box>
                            <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} />
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Box>
                            <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Box>
                            <TextField label="Number" value={number} onChange={(e) => setNumber(e.target.value)} />
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Box>
                            <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Box>
                            <TextField label="Confirm Password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </Box>
                    </Box>
                    <Button type='submit'>Submit</Button>
                </form>
            </Container>
        </>
    )
}
