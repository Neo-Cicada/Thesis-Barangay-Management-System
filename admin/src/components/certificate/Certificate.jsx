import React from 'react'
import { Container } from '@mui/material'
import '../../styles/certificate.css'
import DashboardBox from '../DashboardBox'
import ChecklistIcon from '@mui/icons-material/Checklist'
import DashboardNavigation from '../DashboardNavigation'
import { useState } from 'react'
import EquipmentAllRequest from '../equipment/EquipmentAllRequest'
export default function Certificate() {
  const [status, setStatus] = useState('default')
  return (
    <>
      <div className="certificate-container">
      <Container style={{ height: '30%', display: 'flex', flexDirection: 'column', gap: '1em' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h3>Manage Certificate</h3>
          </div>
          <div style={{ display: 'flex', gap: '1em' }}>
            <DashboardBox
              name="Total"
              numbers={'1'}
              logo={<ChecklistIcon />} />
            <DashboardBox
              name="Ongoing"
              numbers={'1'}
              logo={<ChecklistIcon />} />
            <DashboardBox
              name="Completed"
              numbers={'1'}
              logo={<ChecklistIcon />} />
            <DashboardBox
              name="Rejected"
              numbers={'1'}
              logo={<ChecklistIcon />} />
            <DashboardBox
              name="Certificates"
              numbers={'11'}
              logo={<ChecklistIcon />} />
          </div>
          <DashboardNavigation setStatus={setStatus} status={status} />
        </Container>
        <div className="certificate-hero">
          <EquipmentAllRequest/>
        </div>

      </div>
    </>
  )
}
