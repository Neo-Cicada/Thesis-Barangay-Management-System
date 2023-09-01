import React from 'react'
import { Box, TextField, Button } from '@mui/material'
export default function AdminProfile() {
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid red', width: '30%' }}>
                <Box sx={{ width: '30%' }}>
                    Name:
                </Box>
                <Box sx={{ witdh: '70%' }}>
                    <TextField variant="standard" value="name" />
                </Box>
                <Box>
                    Edit
                </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid red', width: '30%' }}>
                <Box sx={{ width: '30%' }}>
                    Email
                </Box>
                <Box>
                    <TextField variant="standard" value={"@gmail.com"} />
                </Box>
                <Box>
                    Edit
                </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid red', width: '30%' }}>
                <Box sx={{ width: '30%' }}>
                    Phone
                </Box>
                <Box>
                    <TextField variant="standard" />
                </Box>
                <Box>
                    Edit
                </Box>
            </Box>
            <Box sx={{ display: 'flex', width: '30%', border: '1px solid red' }}>
                <Box sx={{ width: '30%' }}>
                    Password
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box>
                        <TextField variant="standard" />
                    </Box>
                    <Box>
                        <TextField variant="standard" />
                    </Box>

                </Box>
                <Box>
                    Edit
                </Box>
            </Box>

            <Button>Save</Button>
        </>
    )
}
