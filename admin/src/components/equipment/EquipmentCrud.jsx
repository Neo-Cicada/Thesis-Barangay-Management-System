import React, { useEffect } from 'react'
import { Container, Box, Skeleton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import EquipmentAdd from './EquipmentAdd';
import useRead from '../../hooks/useRead';
import DashboardItem from '../DashboardItem';
import ScrollableContainer from '../ScrollableContainer';
import RedToast from '../RedToast';
export default function EquipmentCrud() {
    const [data, setData] = useState([])
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [openToast, setOpenToast] = useState(false)
    useRead('Equipments', setData)
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);
    const items = data.map((item) =>
        <DashboardItem path={'Equipments'} data={item} name={item.equipment} itemId={item.id} />)
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
                    sx={{ display: 'flex', justifyContent: 'flex-end' }}
                >

                    <div
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}
                        onClick={() => setIsDialogOpen(true)}>
                        <AddIcon color='info' fontSize='large' /> <span style={{ fontWeight: 500 }}>Add Inventory</span>
                    </div>
                </Container>
                <ScrollableContainer>
                    {isLoading ? (
                        <div style={{ width: '100%' }}>
                            <Skeleton sx={{ width: '100%', bgcolor: '#8B9DC3', }} />
                            <Skeleton sx={{ width: '100%', bgcolor: '#8B9DC3', }} animation="wave" />
                            <Skeleton sx={{ width: '100%', bgcolor: '#8B9DC3', }} animation={false} />
                            <Skeleton sx={{ width: '100%', bgcolor: '#8B9DC3', }} />
                            <Skeleton sx={{ width: '100%', bgcolor: '#8B9DC3', }} animation="wave" />
                            <Skeleton sx={{ width: '100%', bgcolor: '#8B9DC3', }} animation={false} />
                            <Skeleton sx={{ width: '100%', bgcolor: '#8B9DC3', }} />
                            <Skeleton sx={{ width: '100%', bgcolor: '#8B9DC3', }} animation="wave" />
                            <Skeleton sx={{ width: '100%', bgcolor: '#8B9DC3', }} animation={false} />
                        </div>
                    ) : (
                        <ScrollableContainer>
                            <Container sx={{ height: '2em', width: '100%', borderBottom: '1px solid black', display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{
                                    // border:'1px solid red',
                                    width: '15em',
                                    height: '95%%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}>
                                    <div style={{
                                        fontSize: '1.4rem',
                                        textTransform: 'capitalize',
                                        fontWeight: 600
                                    }}>Name</div>
                                    <div style={{
                                        fontSize: '1.4rem', fontWeight: 600
                                    }}>Quantity</div>
                                </div>
                            </Container>
                            {items}
                        </ScrollableContainer>
                    )}

                </ScrollableContainer>
            </div>


            <EquipmentAdd
                handleDialogClose={handleDialogClose}
                isDialogOpen={isDialogOpen}
                setIsDialogOpen={setIsDialogOpen}
                setOpenToast={setOpenToast}
            />
            <RedToast
                type='success'
                open={openToast}
                onClose={() => setOpenToast(false)} content="Success!" />
        </>
    )
}
