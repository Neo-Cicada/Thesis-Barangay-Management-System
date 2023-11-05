import React, { useState, useEffect } from 'react'
import useRead from '../../hooks/useRead'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
export default function DashboardBox({ name, numbers, logo }) {
    const [reData, setReData] = useState([])
    const [showSelect, setShowSelect] = useState(false);
    const [total, setTotal] = useState(null)
    const [nameTotal, setNameTotals] = useState([])
    useRead('CertificateRequest', setReData)
    const acceptedData = reData.filter(item => item.status === "accepted");
    useEffect(() => {
        let totalQuantityAll = 0; // Initialize the total quantity for all items
        const nameTotals = {}; // Initialize an object to store name totals

        acceptedData.forEach(acceptedItem => {
            acceptedItem.selectedCertificates.forEach(report => {
                const name = report.name;
                const quantity = parseInt(report.quantity);

                totalQuantityAll += quantity; // Add to the total for all items

                if (nameTotals[name] === undefined) {
                    nameTotals[name] = quantity; // Initialize the total for this name
                } else {
                    nameTotals[name] += quantity; // Add to the existing total for this name
                }
            });
        });

        // Now, nameTotals object will contain the total quantity for each name
        // totalQuantityAll will contain the total quantity for all items

        // You can choose to store or use these values as needed

        // If you want to set them in state, you can do so using setState:
        setTotal(totalQuantityAll); // Set total of all quantities in state
        setNameTotals(nameTotals); // Set name totals object in state

    }, [reData]);

    return (
        <>
            <div style={{
                border: '1px solid #3B5998',
                height: '6em',
                width: '12em',
                borderRadius: '1',
                cursor: 'pointer',
                boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
            }}
                onClick={() => setShowSelect(true)}
            >
                <div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '1em'
                    }}>
                        <p style={{
                            color: '#868686',
                            fontSize: '1rem',
                        }}>Total Collection</p>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '1.8em',
                            width: '3em'

                        }}
                        >
                            {logo}
                        </div>
                    </div>
                    <div>
                        <div style={{ paddingLeft: '1em', fontSize: '1.5rem', color: '#3b5998' }}>
                            {total} pesos
                        </div>
                    </div>
                </div>
            </div>
            <Dialog open={showSelect} onClose={() => setShowSelect(false)}>
                <DialogTitle sx={{ textAlign: 'center' }}>
                    <h2 style={{
                        textTransform: 'capitalize',
                        color: '#3B5998',
                        fontWeight: 500
                    }}>
                        Document Collections
                    </h2>
                </DialogTitle>
                <DialogContent fullWidth>
                    {Object.keys(nameTotal).map((name, index) => (
                        <div key={index} style={{
                            display: 'flex', gap: '1em',
                            justifyContent: 'center', alignItems: 'center'
                        }}>
                            <p>{name}</p>
                            <p>Total Collection: <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{nameTotal[name]}</span> Pesos</p>
                        </div>
                    ))}
                    
                </DialogContent>
                <DialogActions>
                    <Button style={{ backgroundColor: '#3B5998', color: 'white', fontWeight: 'bold' }} onClick={() => setShowSelect(false)}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
