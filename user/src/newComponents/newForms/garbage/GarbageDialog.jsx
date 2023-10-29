import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import React, { useContext, createContext, useState, useEffect } from 'react'
import GarbageForm from './GarbageForm'
export const myGarbageContext = createContext();
export default function GarbageDialog({ open, handleClose }) {
    const [details, setDetails] = useState({
        fullname: '',
        email: '',
        phoneNumber: '',
        address: '',
        mop:'Cash',
        status: 'request',


    })
    return (
        <>
            <myGarbageContext.Provider value={{details, setDetails}}>
                <Dialog open={open} onClose={handleClose} fullWidth>
                    <DialogTitle sx={{
                        textAlign: 'center',
                        borderBottom: '2px dashed grey'
                    }}>Garbage Collection Registration Form</DialogTitle>
                    <DialogContent>
                        <GarbageForm />
                    </DialogContent>
                    <DialogActions sx={{ borderTop: '2px dashed gray' }}>
                        <Button
                            style={{ backgroundColor: '#3B5998', color: 'white', fontWeight: 'bold' }}
                            onClick={handleClose}>Close</Button>
                    </DialogActions>
                </Dialog>
            </myGarbageContext.Provider>
        </>
    )
}
