import React, { useState } from 'react';
import { Container, Box, TextField, Button } from '@mui/material';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import RedToast from '../RedToast'

export default function CreateAdmin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [isMatch, setIsMatch] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('')
    const auth = getAuth();

    const onCreateAdmin = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        // Check if passwords match
        if (password !== confirmPassword) {
            // Handle password mismatch error here
            console.error('Passwords do not match');
            setIsMatch(true)
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
            setErrorMessage(errorMessage);
        }
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }

    return (
        <>
            <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '1em' }}>
                <h3>Create New Administrator and Login</h3>
                <form onSubmit={onCreateAdmin} style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>

                    <Box sx={{ display: 'flex' }}>
                        <Box>
                            <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
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
                    <Button variant='contained' style={{color:'#FFFFFF', backgroundColor:'rgb(59, 89, 152)'}} type='submit'>Submit</Button>
                </form>
            </Container>
            <RedToast open={isMatch} content={"There was a problem with your credentials. Please try again."} onClose={() => setIsMatch(false)} />
        </>
    )
}
