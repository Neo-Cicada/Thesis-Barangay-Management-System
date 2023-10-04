import React, { createContext, useContext, useState } from 'react';
import { MyCertContext } from './CertificateDialog';
const Box = ({ name, isSelected, onSelect }) => {
    const boxStyle = {
        height: '5em',
        textAlign: 'center',
        borderRadius: '1em',
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
    // Replace MyContext with the appropriate context for certificates
    const { selectedCertificates, handleBoxSelect } = useContext(MyCertContext);

    return (
        <>
            <div className='items-certificates-dialog'>
                <Box
                    name="Certificate 1"
                    isSelected={selectedCertificates.some((certificate) => certificate.name === "Certificate 1")}
                    onSelect={handleBoxSelect}
                />
                <Box
                    name="Certificate 2"
                    isSelected={selectedCertificates.some((certificate) => certificate.name === "Certificate 2")}
                    onSelect={handleBoxSelect}
                />
                <Box
                    name="Certificate 3"
                    isSelected={selectedCertificates.some((certificate) => certificate.name === "Certificate 3")}
                    onSelect={handleBoxSelect}
                />
                <Box
                    name="Certificate 4"
                    isSelected={selectedCertificates.some((certificate) => certificate.name === "Certificate 4")}
                    onSelect={handleBoxSelect}
                /> <Box
                    name="Certificate 5"
                    isSelected={selectedCertificates.some((certificate) => certificate.name === "Certificate 5")}
                    onSelect={handleBoxSelect}
                />
                {/* Add more boxes with different names */}
            </div>
            <p style={{ textAlign: 'center' }}>Selected Certificates:</p>
            <div className='selected-certificates-dialog'>
                {selectedCertificates.map((certificate, index) => (
                    <div
                        style={{
                            textAlign: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '1em',
                            borderBottom:'1px solid grey'
                        }}
                        key={index}
                    >
                        <div>{certificate.name}</div>

                        <label htmlFor={`paymentMethod-${index}`}>Mod of payment:</label>
                        <select id={`paymentMethod-${index}`}>
                            <option>GCASH</option>
                            <option>Cash</option>
                        </select>
                    </div>
                ))}

            </div>
        </>
    )
}
