import React from 'react'
import { Box, TextField, Button } from '@mui/material'
export default function AdminProfile() {
    return (
        <>
            <Box sx={{ display: 'flex', gap: '1em' }}>
                <Box>
                    Name:
                </Box>
                <Box>
                    <TextField />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: '1em' }}>
                <Box>
                    Email
                </Box>
                <Box>
                    <TextField />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: '1em' }}>
                <Box>
                    Phone
                </Box>
                <Box>
                    <TextField />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: '1em' }}>
                <Box>
                    Password
                </Box>
                <Box>
                    <TextField />
                </Box>
                <Box>
                    <TextField />
                </Box>
            </Box>
            <Button>Save</Button>
        </>
    )
}
