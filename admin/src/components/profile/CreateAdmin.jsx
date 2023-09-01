import React from 'react'
import { Container, Box, TextField, Button } from '@mui/material'
export default function CreateAdmin() {
    return (
        <>
            <Container sx={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'1em'}}>
                <h3>Create New Administrator</h3>
                <form action="" style={{display:'flex', flexDirection:'column', gap:'1em'}}>
                    <Box sx={{ display: 'flex' }}>
                        <Box>
                            <TextField label="Name"/>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Box>
                            <TextField label="Email"/>
                        </Box>
                    </Box><Box sx={{ display: 'flex' }}>
                        <Box>
                            <TextField label="Number"/>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Box>
                            <TextField label="Password"/>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Box>
                            <TextField label="Confirm Password"/>
                        </Box>
                    </Box>
                    <Button>Submit</Button>
                </form>
            </Container>
        </>
    )
}
