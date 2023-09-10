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

    const items = data.map((item)=> <DashboardItem path={'Equipments'} data={item} name={item.equipment}/>)
    const handleDialogClose = () => {
        setIsDialogOpen(!isDialogOpen);
    };
    return (
        <>
            <Container
                sx={{
                    height: '100%',
                }}
            >
                <Container
                    style={{
                        borderBottom: '1px solid black',
                        height: '10%',
                        display:'flex',
                        justifyContent:'space-between'
                    }}
                >
                    <div style={{width:'28em', display:'flex',
                     justifyContent:'space-between', alignItems:'center', paddingLeft:'0.6em'}}>
                        <div style={{fontSize:'1.2rem'}}>Name</div>
                        <div style={{fontSize:'1.2rem'}}>Quantity</div>
                        <div></div>

                    </div>
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
                <ScrollableContainer>
                    {items}
                </ScrollableContainer>
            </Container>


            <EquipmentAdd
                handleDialogClose={handleDialogClose}
                isDialogOpen={isDialogOpen}
                setIsDialogOpen={setIsDialogOpen}
            />
        </>
    )
}
