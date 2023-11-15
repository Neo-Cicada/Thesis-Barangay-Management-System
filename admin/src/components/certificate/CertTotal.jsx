import React, { useState, useEffect } from 'react'
import useRead from '../../hooks/useRead'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Select, InputLabel, MenuItem } from '@mui/material';
export default function DashboardBox({ name, numbers, logo }) {
    const [reData, setReData] = useState([])
    const [showSelect, setShowSelect] = useState(false);
    const [total, setTotal] = useState(null)
    const [nameTotal, setNameTotals] = useState([])
    const [selectedMonth, setSelectedMonth] = useState(null)
    useRead('CertificateRequest', setReData)
    const acceptedData = reData.filter(item => item.status === "accepted");
    // ... (existing code)

    // ... (existing code)

    // ... (existing code)

    useEffect(() => {
        let totalQuantityAll = 0; // Initialize the total quantity for all items
        const nameTotals = {}; // Initialize an object to store name totals

        const filteredData = acceptedData.filter(item => {
            const timestamp = item.timestamp; // Assuming you have a timestamp property in your data
            const date = timestamp.toDate(); // Convert Firebase timestamp to JavaScript Date object
            const month = date.getMonth() + 1; // Adjust to match your selectedMonth range

            // Check if the month matches the selectedMonth or if selectedMonth is null
            return selectedMonth === null || month === selectedMonth;
        });

        filteredData.forEach(acceptedItem => {
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

    }, [reData, selectedMonth]);

    // ... (existing code)


    // ... (existing code)


    // ... (existing code)


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
                    <FormControl fullWidth sx={{ marginTop: '1em', marginBottom: '1em' }}>
                        <InputLabel>Filter By Month</InputLabel>
                        <Select
                            fillWidth
                            size='small'
                            value={selectedMonth}
                            label="Filter By Month"
                            onChange={(e) => setSelectedMonth(e.target.value)}
                        >
                            <MenuItem value={null}>None</MenuItem>
                            <MenuItem value={0}>January</MenuItem>
                            <MenuItem value={1}>Febuary</MenuItem>
                            <MenuItem value={2}>March</MenuItem>
                            <MenuItem value={3}>April</MenuItem>
                            <MenuItem value={4}>May</MenuItem>
                            <MenuItem value={5}>June</MenuItem>
                            <MenuItem value={6}>July</MenuItem>
                            <MenuItem value={7}>August</MenuItem>
                            <MenuItem value={8}>September</MenuItem>
                            <MenuItem value={9}>October</MenuItem>
                            <MenuItem value={10}>November</MenuItem>
                            <MenuItem value={11}>December</MenuItem>


                        </Select>
                    </FormControl>
                    {Object.keys(nameTotal).map((name, index) => (
                        <div key={index} style={{
                            display: 'flex', gap: '1em',
                            justifyContent: 'center', alignItems: 'center',
                            border: '1px solid black',
                        }}>
                            <p style={{ width: '50%', display: 'flex', alignItems: 'center' }}>{name}</p>
                            <p style={{ textAlign: 'center', width: '30%' }}> <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{nameTotal[name]}</span> Pesos</p>
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
