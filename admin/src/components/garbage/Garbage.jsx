import React from 'react'
import { Container, Box } from '@mui/material'
import DashboardBox from '../DashboardBox'
import ChecklistIcon from '@mui/icons-material/Checklist';

export default function Garbage() {
    return (
        <>
            <div className='equipment-container'>
                <Container style={{ height: '30%', display: 'flex', flexDirection: 'column', gap: '1em' }}>
                    <div className='manageEquipment-title'>
                        <h3 style={{ fontSize: '2rem', fontWeight: "bold", color: '#3B5998' }}>Manage Garbage Collection</h3>
                    </div>
                    <Box className="equipmentDashboardBoxes" sx={{ display: 'flex', justifyContent: 'space-around' }}>

                        <DashboardBox
                            name="Total"
                            // numbers={allItems.length}
                            logo={<ChecklistIcon />} />
                        <DashboardBox
                            name="Ongoing"
                            // numbers={ongoingItems.length}
                            logo={<ChecklistIcon />} />
                        <DashboardBox
                            name="Completed"
                            // numbers={acceptedItems.length}
                            logo={<ChecklistIcon />} />
                        <DashboardBox
                            name="Rejected"
                            // numbers={rejectedItems.length}
                            logo={<ChecklistIcon />} />
                    </Box>
                </Container>
            </div>
        </>
    )
}
