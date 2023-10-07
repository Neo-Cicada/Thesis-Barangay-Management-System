import React from 'react'
import { Container, Box } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import EquipmentAdd from './EquipmentAdd';
import useRead from '../../hooks/useRead';
import DashboardItem from '../DashboardItem';
import ScrollableContainer from '../ScrollableContainer';
export default function EquipmentCrud() {
    const [data, setData] = useState([])
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    useRead('Equipments', setData)

    const items = data.map((item) => <DashboardItem path={'Equipments'} data={item} name={item.equipment} />)
    const handleDialogClose = () => {
        setIsDialogOpen(!isDialogOpen);
    };
    return (
        <>
            <div
                style={{
                    height: '100%',
                }}
            >
                <Container
                    sx={{ display: 'flex',justifyContent: 'end' }}
                >
                    <div
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                        onClick={() => setIsDialogOpen(true)}>
                        <AddIcon /> <span>Add Inventory</span>
                    </div>
                </Container>
                <ScrollableContainer>
                    <Container style={{ display: 'flex', width: '100%', borderBottom:'1px solid black' }}>
                        <div style={{
                            width: '15em',
                            height: '95%%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'

                        }}>
                            <div style={{ fontSize: '1.2rem' }}>Name</div>
                            <div style={{ fontSize: '1.2rem' }}>Quantity</div>
                        </div>


                        <div></div>

                    </Container>
                    {items}
                </ScrollableContainer>
            </div>


            <EquipmentAdd
                handleDialogClose={handleDialogClose}
                isDialogOpen={isDialogOpen}
                setIsDialogOpen={setIsDialogOpen}
            />
        </>
    )
}
