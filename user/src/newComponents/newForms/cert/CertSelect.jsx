import React, { createContext, useContext, useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { MyCertContext } from './CertificateDialog';
import { TextField } from '@mui/material';
import useRead from '../../../hooks/useRead'
const Box = ({ name, isSelected, onSelect }) => {
    const boxStyle = {
        height: '5em',
        textAlign: 'center',
        borderRadius: '1em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '7em',
        cursor: 'pointer',
        backgroundColor: isSelected ? '#8B9DC3' : '#DFE3EE',
    };

    return (
        <div
            style={boxStyle}
            onClick={() => onSelect(name)}
        >
            <p style={{ fontSize: '1em' }}>{name}</p>
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
                return { ...item, mop: mop, reference: mop === 'GCASH' ? item.reference : '' };            }
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
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '1em',
                            borderBottom: '1px solid grey'
                        }}
                        key={index}
                    >
                        <div>{certificate.name}</div>


                        <div style={{ width: '60%' }}>
                            <FormControl fullWidth size='small'>
                                <InputLabel id="paymentMethod-label">Payment Method</InputLabel>
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
                        </div>
                        <div>Cost: {certificate.cost}</div>
                        {certificate.mop === "GCASH" && (
                            <TextField
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

            </div>
        </>
    )
}
