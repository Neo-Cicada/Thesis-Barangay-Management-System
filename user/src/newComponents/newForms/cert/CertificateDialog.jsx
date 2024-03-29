import React, { createContext, useContext, useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogActions, Button } from '@mui/material';
import CertSelect from './CertSelect';
import './certificate.css'
import CertForm from './CertForm';
import useUpload from '../../../hooks/useUpload';
export const MyCertContext = createContext();

export default function CertificateDialog({ open, handleClose }) {
    const [selectedCertificates, setSelectedCertificates] = useState([]);
    const [proceed, setProceed] = useState(false);
    const [details, setDetails] = useState({
        fullname: '',
        email: '',
        phoneNumber: '',
        mod: 'Pickup',
        address: "",
        mop: "Cash",
        status: 'request',
        selectedCertificates: [...selectedCertificates] // spread the array elements
    });
    useEffect(() => {
        setDetails((prevDetails) => ({
            ...prevDetails,
            selectedCertificates: selectedCertificates,
        }));
    }, [selectedCertificates]);

    const handleBoxSelect = (name, mop, reference, quantity) => {
        const index = selectedCertificates.findIndex((certificate) => certificate.name === name);

        if (index !== -1) {
            // If already selected, remove the item from selectedCertificates
            const updatedSelected = selectedCertificates.filter((certificate) => certificate.name !== name);
            setSelectedCertificates(updatedSelected);
        } else {
            // If not selected, select it
            setSelectedCertificates([...selectedCertificates, {
                name: name,
                mop: mop,
                quantity: quantity,
                reference: reference
            }]);
        }
    };
    const dialogContentStyle = {
        height: '100vh',
        borderBottom: '2px dashed grey'
    };
    return (
        <>
            <MyCertContext.Provider value={{
                selectedCertificates,
                setSelectedCertificates,
                handleBoxSelect,
                details, setDetails,
            }}>
                <Dialog open={open} onClose={handleClose} fullWidth>
                    <DialogTitle style={{ textAlign: 'center', borderBottom: '2px dashed grey' }}>Available Documents</DialogTitle>
                    <DialogContent style={dialogContentStyle} className='certificate-dialog-content'>
                        {proceed ? <CertForm /> : <CertSelect />}
                    </DialogContent>
                    <DialogActions>
                        {proceed ?
                            <Button
                                style={{ backgroundColor: '#3B5998', color: 'white', fontWeight: 'bold' }}
                                onClick={() => setProceed(false)}>Back</Button
                            > : <Button
                                style={{ backgroundColor: '#3B5998', color: 'white', fontWeight: 'bold' }}
                                onClick={handleClose}>Close</Button>}
                        {!proceed &&
                            <Button style={{ backgroundColor: '#3B5998', color: 'white', fontWeight: 'bold' }}
                                onClick={() => setProceed(true)}>Next</Button>}
                    </DialogActions>
                </Dialog>
            </MyCertContext.Provider>
        </>
    )
}
