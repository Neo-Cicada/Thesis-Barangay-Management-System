import React from 'react'
import '../../styles/equipment.css'
import { Container } from '@mui/material'
import ChecklistIcon from '@mui/icons-material/Checklist';

import DashboardBox from '../DashboardBox'
import DashboardNavigation from '../DashboardNavigation'
import ScrollableContainer from '../ScrollableContainer'
import DashboardList from '../DashboardList'
import DashboardHeader from '../DashboardHeader'
import useRead from '../../hooks/useRead'
import { useState } from 'react';
export default function Equipment() {
  const [data, setData] = useState([])
  useRead('EquipmentRequest', setData)
  
  const items = data.map(item =>
    <DashboardList

    />
  )
  return (
    <>
      <div className='equipment-container'>

        <Container style={{ height: '30%', display: 'flex', flexDirection: 'column', gap: '1em' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h3>Manage Equipment</h3>
          </div>
          <div style={{ display: 'flex', gap: '1em' }}>
            <DashboardBox name="Total" numbers={'11'} logo={<ChecklistIcon />} />
            <DashboardBox name="Ongoing" numbers={'11'} logo={<ChecklistIcon />} />
            <DashboardBox name="Completed" numbers={'11'} logo={<ChecklistIcon />} />
            <DashboardBox name="Rejected" numbers={'11'} logo={<ChecklistIcon />} />
            <DashboardBox name="Items" numbers={'11'} logo={<ChecklistIcon />} />


          </div>
          <DashboardNavigation />
        </Container>
        <div className="equipment-hero">
          <DashboardHeader />
          <ScrollableContainer>
            {items.length < 0 ? <h1>No item available</h1> : items}
          </ScrollableContainer>
        </div>
      </div>
    </>
  )
}
