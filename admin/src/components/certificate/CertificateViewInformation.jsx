import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Box } from '@mui/material'

export default function CertificateViewInformation({ item, open, onClose, onConfirm, title, message }) {
    const styleP = {
        borderBottom: '1px solid grey',
        display: 'flex',
        gap: '2em',

    }
    const items = item.selectedCertificates.map(item => <Box
        key={item.id}
        style={styleP}> <p style={{ width: '50%', textAlign: 'center' }}>Name: {item.name}</p>
        <hr />
        <p style={{ width: '50%', textAlign: 'center' }}>Quantity: {item.mop}</p>
    </Box>)
    const boxStyle ={
        width: '100%', display:'flex', justifyContent:'center', gap:'1em'
    }
    const nameStyle = {
        width:'40%',
        display:'flex',
        justifyContent:'end',
    }
    const valueStyle={
        width:'60%',
        display:'flex',
        justifyContent:'start',
    }
    return (
        <>
            <Dialog open={open} onClose={onClose} fullWidth key={item.id}>
                <DialogTitle sx={{ textAlign: 'center' }}>
                    {item.fullname} Request Information
                </DialogTitle>
                <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: '1em', alignItems: 'center' }}>
                    <Box sx={boxStyle}>
                        <p style={nameStyle}>Fullname: </p>
                        <p style={valueStyle}>{item.fullname}</p>  </Box>
                    <Box sx={boxStyle}> <p style={nameStyle}>Email: </p><p style={valueStyle}>{item.email}</p></Box>
                    <Box sx={boxStyle}><p style={nameStyle}>Phone Number:</p> <p style={valueStyle}>{item.phoneNumber} </p></Box>
                    <Box sx={boxStyle}><p style={nameStyle}>Date: </p> <p style={valueStyle}></p></Box>
                    <Box sx={boxStyle}><p style={nameStyle}>Return Date:</p> <p style={valueStyle}> {item.returnDate}</p></Box>
                    <Box sx={{width:'100%'}}>
                        <Box sx={{ textAlign: 'center' }}>Selected Items</Box>
                        <Box style={{ width: '100%' }} key={item.id}>
                            {items}
                        </Box>
                    </Box>
                </DialogContent>
            </Dialog>
        </>
    )
}
