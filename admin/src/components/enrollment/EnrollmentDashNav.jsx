import { Container } from '@mui/material'
import React from 'react'
import { useState } from 'react'

export default function EnrollmentDashNav({ setStatus, status }) {
    const btnStyle = {
        border: '0',
        background: 'none',
        borderRadius: '0px',
        fontSize: '1.1rem',
        cursor: 'pointer',
        borderBottom: 'none'
    }
    const activeBtn = {
        border: '0',
        background: 'none',
        borderRadius: '0px',
        fontSize: '1.1rem',
        cursor: 'pointer',
        borderBottom: '5px solid #3b5998'
    }
    return (
        <>
            <Container sx={{ display:'flex', gap:'1em', overflow:'auto'}} >
                <button
                    style={status === 'default' ? activeBtn : btnStyle}
                    onClick={() => setStatus("default")}

                >
                    Request</button>
                <button
                    style={status === 'second' ? activeBtn : btnStyle}
                    onClick={() => setStatus("second")}>Ongoing</button>
                <button
                    style={status === 'third' ? activeBtn : btnStyle}
                    onClick={() => setStatus("third")}>Accepted</button>
                <button
                    style={status === 'fourth' ? activeBtn : btnStyle}
                    onClick={() => setStatus("fourth")}>Rejected</button>
                <button
                    style={status === 'fifth' ? activeBtn : btnStyle}
                    onClick={() => setStatus("fifth")}>Enrollment</button>
            </Container>
        </>
    )
}
