import React from 'react'
import { Container } from '@mui/material'
import '../../styles/certificate.css'
import DashboardBox from '../DashboardBox'
import ChecklistIcon from '@mui/icons-material/Checklist'
import DashboardNavigation from '../DashboardNavigation'
import { useState } from 'react'
import EquipmentAllRequest from '../equipment/EquipmentAllRequest'
import useRead from '../../hooks/useRead'
import DashboardList from '../DashboardList'
import CertificateCrud from './CertificateCrud'
export default function Certificate() {
  const [status, setStatus] = useState('default')
  const [data, setData] = useState([])

  useRead('CertificateAllRequest', setData)
  const items = data.map(item => <DashboardList
    key={item.id}
    first={item.firstname + " " + item.lastname}
    second={item.email}
    third={item.phoneNumber}
    fourth={"09/08/23"}
    fifth={'888'}
    sixth={item.certificate}
    seventh={item.status}
    status={item.status}
    itemId={item.id}

    path={'CertificateAllRequest'}

  />)
  const acceptedItems = data.filter(item => item.status === "accepted")
    .map(item => <DashboardList
      key={item.id}
      first={item.firstname + " " + item.lastname}
      second={item.email}
      third={item.phoneNumber}
      fourth={"09/08/23"}
      fifth={'888'}
      sixth={item.certificate}
      seventh={item.status}
      status={item.status}
      itemId={item.id}
      path={'CertificateAllRequest'}

    />)

  const ongoingItems = data.filter(item => item.status === "ongoing")
    .map(item => <DashboardList
      key={item.id}
      first={item.firstname + " " + item.lastname}
      second={item.email}
      third={item.phoneNumber}
      fourth={"09/08/23"}
      fifth={'888'}
      sixth={item.certificate}
      seventh={item.status}
      status={item.status}
      itemId={item.id}
      path='CertificateAllRequest'

    />)

  const rejectedItems = data.filter(item => item.status === "rejected")
    .map(item => <DashboardList
      key={item.id}
      first={item.firstname + " " + item.lastname}
      second={item.email}
      third={item.phoneNumber}
      fourth={"09/08/23"}
      fifth={'888'}
      sixth={item.certificate}
      seventh={item.status}
      status={item.status} />)

  return (
    <>
      <div className="certificate-container">
        <Container style={{ height: '30%', display: 'flex', flexDirection: 'column', gap: '1em', }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h3>Manage Certificate</h3>
          </div>
          <div style={{ display: 'flex', gap: '1em' }}>
            <DashboardBox
              name="Total"
              numbers={items.length}
              logo={<ChecklistIcon />} />
            <DashboardBox
              name="Ongoing"
              numbers={ongoingItems.length}
              logo={<ChecklistIcon />} />
            <DashboardBox
              name="Completed"
              numbers={acceptedItems.length}
              logo={<ChecklistIcon />} />
            <DashboardBox
              name="Rejected"
              numbers={rejectedItems.length}
              logo={<ChecklistIcon />} />
            <DashboardBox
              name="Certificates"
              numbers={'11'}
              logo={<ChecklistIcon />} />
          </div>
        </Container>
        <DashboardNavigation setStatus={setStatus} status={status} />
        <div className="certificate-hero" style={{border:'none'}}>
          {status === "default" && <EquipmentAllRequest items={items} />}
          {status === "second" && <EquipmentAllRequest items={ongoingItems} />}
          {status === "third" && <EquipmentAllRequest items={acceptedItems} />}
          {status === "fourth" && <EquipmentAllRequest items={rejectedItems} />}
          {status === "fifth" && <CertificateCrud/>}
        </div>

      </div>
    </>
  )
}
