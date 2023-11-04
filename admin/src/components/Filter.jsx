import React, { useState, useEffect } from 'react'
import { Container, Skeleton, TextField, MenuItem, Select, FormControl, InputLabel, Box, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
export default function Filter({ setSearchQuery }) {
    return (
        <>
            <Container sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5em' }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}> <TextField
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder='Search'
                        size='small'
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon fontSize="medium" />
                                </InputAdornment>
                            ),
                        }}
                    /> </Box>
            </Container>
        </>
    )
}
