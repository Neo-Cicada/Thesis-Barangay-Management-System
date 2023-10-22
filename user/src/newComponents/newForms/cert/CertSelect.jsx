import React, { createContext, useContext, useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { MyCertContext } from './CertificateDialog';
import { TextField } from '@mui/material';
import useRead from '../../../hooks/useRead'
const Box = ({ name, isSelected, onSelect, quantity }) => {
    const boxStyle = {
        height: '6em',
        textAlign: 'center',
        borderRadius: '1em',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        width: '7em',
        cursor: 'pointer',
        backgroundColor: isSelected ? '#8B9DC3' : '#DFE3EE',
    };

    return (
        <div
            style={boxStyle}
            onClick={() => onSelect(name, '', '', quantity)}
        >
            <p style={{ fontSize: '1em' }}>{name}</p>
            <p style={{ fontSize: '1em' }}>{quantity}</p>

        </div>
    );
}

export default function CertSelect() {
    const [data, setData] = useState([]);
    useRead('Certificates', setData)
    const { selectedCertificates, handleBoxSelect, setSelectedCertificates } = useContext(MyCertContext);
    const handleMopSelect = (certName, mop) => {
        const updateSelectedCertificates = selectedCertificates.map((item) => {
            if (item.name === certName) {
                return { ...item, mop: mop, reference: mop === 'GCASH' ? item.reference : '' };
            }
            else {
                return item
            }
        });
        setSelectedCertificates(updateSelectedCertificates)
    }
    const handleReference = (certName, reference) => {
        const updateSelectedCertificates = selectedCertificates.map((item) => {
            if (item.name === certName) {
                return { ...item, reference: reference }
            }
            else {
                return item
            }
        });
        setSelectedCertificates(updateSelectedCertificates)

    }
    const items = data.map(item => <Box
        name={item.type}
        isSelected={selectedCertificates.some((certificate) => certificate.name === String(item.type))}
        onSelect={handleBoxSelect}
        quantity={item.quantity}

    />)
    return (
        <>
            <div className='items-certificates-dialog'>
                {items}
                {/* Add more boxes with different names */}
            </div>
            <p style={{ textAlign: 'center' }}>Selected Certificates:</p>
            <div className='selected-certificates-dialog'>
                {selectedCertificates.map((certificate, index) => (
                    <div
                        style={{
                            border:'1px solid gray',
                            display:'flex',
                            flexDirection:'column',
                            alignItems:'center', gap: '1em'

                        }}
                        key={index}
                    >
                        <div style={{fontSize: '1.1rem'}}>{certificate.name}</div>

                        <div style={{ width: '40%' }}>
                            <FormControl fullWidth size='small'>
                                <InputLabel id={`paymentMethod-label-${index}`}>Payment Method</InputLabel>
                                <Select
                                    value={certificate.mop}
                                    variant="standard"
                                    size="small"
                                    label="Payment Method"
                                    id={`paymentMethod-${index}`}
                                    onChange={(e) => handleMopSelect(certificate.name, e.target.value)}
                                >
                                    <MenuItem value={'CASH'}>Cash</MenuItem>
                                    <MenuItem value={'GCASH'}>GCASH</MenuItem>
                                </Select>
                            </FormControl>
                            {certificate.mop === "GCASH" && 
                            <div style={{textAlign:'center'}}>Please make a payment using Gcash to the account number 09084590726.</div>}

                        </div>

                        <div>Cost: {certificate.quantity}</div>

                        {certificate.mop === "GCASH" && (
                            <TextField
                                style={{ width: '40%' }}
                                value={certificate.reference}
                                onChange={(e) => handleReference(certificate.name, e.target.value)}
                                variant="standard"
                                size="small"
                                label="Reference"
                                width="small"
                            />
                        )}
                    </div>
                ))}


        </div >
        </>
    )
}
