import React from 'react'
import { Container } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import EquipmentAdd from './EquipmentAdd';
export default function EquipmentCrud() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleDialogClose = () => {
        setIsDialogOpen(!isDialogOpen);
    };
    const handleButtonAction = ()=>{
        setIsDialogOpen(false);
    }
    return (
        <>
            <Container sx={{
                // border: '1px solid red',
                height: '10%',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center'
            }}><div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    cursor: 'pointer'
                }}
                onClick={()=> setIsDialogOpen(true)}
            > <AddIcon /> Add Inventory</div></Container>

            <EquipmentAdd
                handleDialogClose={handleDialogClose}
                isDialogOpen={isDialogOpen}
                handleButtonAction={handleButtonAction}
                />
        </>
    )
}
