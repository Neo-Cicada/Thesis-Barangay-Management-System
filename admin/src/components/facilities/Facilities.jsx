import React, { useState } from 'react'
import HeroSection from '../../structure/HeroSection'
import { Container } from '@mui/material'
import ChecklistIcon from '@mui/icons-material/Checklist'
import DashboardBox from '../DashboardBox'
import DashboardNavigation from '../DashboardNavigation'
import ScrollableContainer from '../ScrollableContainer'
import EquipmentAllRequest from '../equipment/EquipmentAllRequest'
import FacilityCrud from './FacilityCrud'

export default function Facilities() {
  const [status, setStatus] = useState('default')

  return (
    <>
      <Container style={{ height: '30%', display: 'flex', flexDirection: 'column', gap: '1em',}}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h3>Manage Facilities</h3>
        </div>
        <div style={{ display: 'flex', gap: '1em' }}>
          <DashboardBox
            name="Total"
            numbers={'888'}
            logo={<ChecklistIcon />} />
          <DashboardBox
            name="Ongoing"
            numbers={'888'}
            logo={<ChecklistIcon />} />
          <DashboardBox
            name="Completed"
            numbers={'888'}
            logo={<ChecklistIcon />} />
          <DashboardBox
            name="Rejected"
            numbers={'888'}
            logo={<ChecklistIcon />} />
          <DashboardBox
            name="Facilities"
            numbers={'888'}
            logo={<ChecklistIcon />} />
        </div>
        <DashboardNavigation setStatus={setStatus} status={status} />

      </Container>
      <div sx={{border:'1px solid red', height:'70%'}}>
        <FacilityCrud/>
      </div>
    </>
  )
}
