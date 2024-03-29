import React from 'react'
import { Container } from '@mui/material'
const ScrollableContainer = ({ children}) => {
    return (
        <>
            <Container style={{
                // border:'1px solid red',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxHeight: '23em',
                height: '100%',
                overflow: 'auto',
                paddingTop: '1em',
                gap: '1em'
            }}>
                {children}
            </Container>
        </>
    )
}

export default ScrollableContainer;