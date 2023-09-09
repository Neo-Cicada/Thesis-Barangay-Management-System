import React from 'react'
import { Container } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import EquipmentAdd from './EquipmentAdd';
import useUploadDirectly from '../../hooks/useUploadDirectly'
export default function EquipmentCrud() {

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleDialogClose = () => {
        setIsDialogOpen(!isDialogOpen);
    };
    return (
        <>
            <Container
                sx={{
                    border: '1px solid red',
                    height: '100%',
                }}
            >
                <Container
                    style={{
                        borderBottom: '1px solid black',
                        height: '10%',
                        display:'flex',
                        justifyContent:'end'
                    }}
                >
                    <div
                        onClick={() => setIsDialogOpen(true)}
                        style={{height:'100%',
                        cursor: 'pointer', width:'10em',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        textAlign:'center'}}
                    > <AddIcon /> Add Inventory</div>
                </Container>
                <Container sx={{ height: '90%' }}>

                </Container>
            </Container>


            <EquipmentAdd
                handleDialogClose={handleDialogClose}
                isDialogOpen={isDialogOpen}
                setIsDialogOpen={setIsDialogOpen}
            />
        </>
    )
}
