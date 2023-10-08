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
        status:'request',
        selectedCertificates: [...selectedCertificates] // spread the array elements
    });
    useEffect(() => {
        setDetails((prevDetails) => ({
            ...prevDetails,
            selectedCertificates: selectedCertificates,
        }));
    }, [selectedCertificates]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        //useUpload here
        await useUpload(details, 'CertificateRequest')
        setSelectedCertificates([])
        setDetails({
            fullname: '',
            email: '',
            phoneNumber: '',
            selectedCertificates: []
        })
        handleClose()
    }
    const handleBoxSelect = (name, mop, reference) => {
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
                handleSubmit
            }}>
                <Dialog open={open} onClose={handleClose}  fullWidth>
                    <DialogTitle style={{ textAlign: 'center', borderBottom: '2px dashed grey' }}>Available Certificates</DialogTitle>
                    <DialogContent style={dialogContentStyle} className='certificate-dialog-content'>
                        {proceed ? <CertForm /> : <CertSelect />}
                    </DialogContent>
                    <DialogActions>
                        {proceed ? <Button onClick={() => setProceed(false)}>Back</Button> : <Button onClick={handleClose}>Close</Button>}
                        {!proceed && <Button onClick={() => setProceed(true)}>Next</Button>}
                    </DialogActions>
                </Dialog>
            </MyCertContext.Provider>
        </>
    )
}
