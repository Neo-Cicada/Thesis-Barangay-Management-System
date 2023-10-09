import React, { useState } from 'react'
import { Container } from '@mui/material'
import ChecklistIcon from '@mui/icons-material/Checklist'
import DashboardBox from '../DashboardBox'
import DashboardNavigation from '../DashboardNavigation'
import EquipmentAllRequest from '../equipment/EquipmentAllRequest'
import useRead from '../../hooks/useRead'
export default function Report() {
  return (
      <div className='equipment-container'>
        <Container style={{
          height: '30%', display: 'flex',
          flexDirection: 'column', gap: '1em',
        }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h3>Manage Report</h3>
          </div>
          <div style={{ display: 'flex', gap: '1em' }}>
            <DashboardBox
              name="Total"
              // numbers={items.length}
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
            <DashboardBox
              name="Medicine"
              numbers={'888'}
              logo={<ChecklistIcon />} />
          </div>

        </Container>

    </div>
  )
}
