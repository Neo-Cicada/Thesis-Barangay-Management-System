import React from 'react'
import { Container } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import FacilityAdd from './FacilityAdd';
import { useState } from 'react';
import useRead from '../../hooks/useRead';
import FacilityItem from './FacilityItem';
import ScrollableContainer from '../ScrollableContainer';
export default function FacilityCrud() {
    const [data, setData] = useState([])
    useRead('Facility', setData)

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const handleDialogClose = () => {
        setIsDialogOpen(!isDialogOpen);
    };
    const items = data.map((item) => <FacilityItem data={item} name={item.type} />)



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
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
                    <div style={{
                        width: '28em', display: 'flex',
                        justifyContent: 'space-between', alignItems: 'center', paddingLeft: '0.6em'
                    }}>
                        <div style={{ fontSize: '1.2rem' }}>Name</div>
                        <div style={{ fontSize: '1.2rem' }}>Available Time</div>
                        <div></div>

                    </div>
                    <div
                        onClick={() => setIsDialogOpen(true)}
                        style={{
                            height: '100%',
                            cursor: 'pointer', width: '10em',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            fontWeight: 500
                        }}
                    > <AddIcon color='info' fontSize='medium' /> Add Facility</div>
                </Container>
                <ScrollableContainer>
                    {items}
                </ScrollableContainer>
            </Container>
            <FacilityAdd
                handleDialogClose={handleDialogClose}
                isDialogOpen={isDialogOpen}
                setIsDialogOpen={setIsDialogOpen}
            />
        </>
    )
}
