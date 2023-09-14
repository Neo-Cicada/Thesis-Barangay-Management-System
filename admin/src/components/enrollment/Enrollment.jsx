import React from 'react'
import { Container, Box, Button } from '@mui/material'
import { useState } from 'react'
import ChecklistIcon from '@mui/icons-material/Checklist'
import DashboardBox from '../DashboardBox'
import DashboardNavigation from '../DashboardNavigation'
export default function Enrollment() {
  const [status, setStatus] = useState('default')
  return (
    <>
      <Container style={{
        height: '30%', display: 'flex',
        flexDirection: 'column', gap: '1em',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h3>Manage Enrollments</h3>
        </div>
        <div style={{ display: 'flex', gap: '1em' }}>
        <DashboardBox
            name="Total Request"
            numbers={'1'}
            logo={<ChecklistIcon />} />
          <DashboardBox
            name="Ongoing"
            numbers={'2'}
            logo={<ChecklistIcon />} />
          <DashboardBox
            name="Completed"
            numbers={'3'}
            logo={<ChecklistIcon />} />
          <DashboardBox
            name="Rejected"
            numbers={'4'}
            logo={<ChecklistIcon />} />
          <DashboardBox
            name="Enrolled"
            numbers={'888'}
            logo={<ChecklistIcon />} />
        </div>
      </Container>
      <DashboardNavigation setStatus={setStatus} status={status} />
    </>
  )
}
