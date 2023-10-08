import React, {useEffect} from 'react'
import { Container, Box, Skeleton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import EquipmentAdd from './EquipmentAdd';
import useRead from '../../hooks/useRead';
import DashboardItem from '../DashboardItem';
import ScrollableContainer from '../ScrollableContainer';
export default function EquipmentCrud() {
    const [data, setData] = useState([])
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useRead('Equipments', setData)
    useEffect(() => {
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 1500);
    
        return () => clearTimeout(timer);
      }, []);
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
                    sx={{ display: 'flex', justifyContent: 'end' }}
                >
                    <div
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor:'pointer' }}
                        onClick={() => setIsDialogOpen(true)}>
                        <AddIcon /> <span>Add Inventory</span>
                    </div>
                </Container>
                <ScrollableContainer>
                    <Container style={{ display: 'flex', width: '100%', borderBottom: '1px solid black' }}>
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
                 {isLoading ?(
                    <div style={{width:'100%'}}>
                        <Skeleton sx={{width: '100%', bgcolor: '#8B9DC3',}}/>
                        <Skeleton  sx={{width: '100%', bgcolor: '#8B9DC3',}} animation="wave" />
                        <Skeleton  sx={{width: '100%', bgcolor: '#8B9DC3',}} animation={false} />
                        <Skeleton sx={{width: '100%', bgcolor: '#8B9DC3',}}/>
                        <Skeleton  sx={{width: '100%', bgcolor: '#8B9DC3',}} animation="wave" />
                        <Skeleton  sx={{width: '100%', bgcolor: '#8B9DC3',}} animation={false} />
                        <Skeleton sx={{width: '100%', bgcolor: '#8B9DC3',}}/>
                        <Skeleton  sx={{width: '100%', bgcolor: '#8B9DC3',}} animation="wave" />
                        <Skeleton  sx={{width: '100%', bgcolor: '#8B9DC3',}} animation={false} />
                    </div>
                 ):(
                    <ScrollableContainer>
                        {items}
                    </ScrollableContainer>
                 ) }

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
