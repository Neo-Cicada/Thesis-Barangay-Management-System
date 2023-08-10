import React from 'react'
import { Box } from '@mui/material'
export default function ShowInformation({ firstname, lastname, phone, email, certificates, message }) {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1em', alignContent: 'center' }}>
                <h1>Summary of Information Provided</h1>
                <Box sx={{ display: 'flex', gap: '1em' }}>
                    <Box>
                        Firstname:
                    </Box>
                    <Box>{firstname}</Box>
                </Box>
                <Box sx={{ display: 'flex', gap: '1em' }}>
                    <Box>Lastname:</Box> <Box> {lastname}</Box>
                </Box>
                <Box sx={{ display: 'flex', gap: '1em' }}>
                    <Box>Phone number:</Box> <Box>{phone}</Box>
                </Box>
                <Box sx={{ display: 'flex', gap: '1em' }}>
                    <Box>Email:</Box> <Box>{email}</Box>
                </Box>
                <Box sx={{ display: 'flex', gap: '1em' }}>
                    <Box>Certificates:</Box> <Box>{certificates}</Box>
                </Box>
                <Box sx={{ display: 'flex', gap: '1em' }}>
                    <Box>Message: </Box> <Box>{message}</Box>
                </Box>
            </div>
        </>
    )
}
