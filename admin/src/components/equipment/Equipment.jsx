import React from 'react'
import '../../styles/equipment.css'
import { Container } from '@mui/material'
import ChecklistIcon from '@mui/icons-material/Checklist';
import DashboardBox from '../DashboardBox'
import DashboardNavigation from '../DashboardNavigation'
import DashboardList from '../DashboardList'
import useRead from '../../hooks/useRead'
import { useState } from 'react';
import EquipmentAllRequest from './EquipmentAllRequest';
import EquipManage from './EquipManage'
import EquipmentCrud from './EquipmentCrud';
export default function Equipment() {
  const [data, setData] = useState([])
  const [status, setStatus] = useState("default")
  useRead('EquipmentAllRequest', setData)

  const allItems = data.map(item => <DashboardList
    key={item.id}
    item={item.data}
    first={item.data.firstname + " " + item.data.lastname}
    second={item.data.email}
    third={item.data.phoneNumber}
    fourth={"09/08/23"}
    fifth={'888'}
    sixth={item.data.type}
    seventh={item.data.status}
    status={item.data.status === 'ongoing' ? 'ongoing' : undefined}
  />
  )
  const ongoingItems = data.filter(item => item.data.status === "ongoing").map(item => <DashboardList
    itemId={item.id}
    key={item.id}
    first={item.data.firstname + " " + item.data.lastname}
    second={item.data.email}
    third={item.data.phoneNumber}
    fourth={"09/08/23"}
    fifth={'888'}

    sixth={item.data.type}
    seventh={item.data.status}
    status={'ongoing'}
  />)
  const acceptedItems = data.filter(item => item.data.status === "accepted").map(item => <DashboardList
    key={item.id}
    first={item.data.firstname + " " + item.data.lastname}
    second={item.data.email}
    third={item.data.phoneNumber}
    fourth={"09/08/23"}
    fifth={'888'}
    sixth={item.data.type}
    seventh={item.data.status}
  />)

  const rejectedItems = data.filter(item => item.data.status === "rejected").map(item => <DashboardList
    key={item.id}
    first={item.data.firstname + " " + item.data.lastname}
    second={item.data.email}
    third={item.data.phoneNumber}
    fourth={"09/08/23"}
    fifth={'888'}
    sixth={item.data.type}
    seventh={item.data.status}
  />)
  return (
    <>
      <div className='equipment-container'>

        <Container style={{ height: '30%', display: 'flex', flexDirection: 'column', gap: '1em' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h3>Manage Equipment</h3>
          </div>
          <div style={{ display: 'flex', gap: '1em' }}>
            <DashboardBox
              name="Total"
              numbers={allItems.length}
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
              name="Items"
              numbers={'11'}
              logo={<ChecklistIcon />} />
          </div>

          <DashboardNavigation setStatus={setStatus} status={status} />
        </Container>
        <div className="equipment-hero">
          {status === "default" && <EquipmentAllRequest items={allItems} />}
          {status === "second" && <EquipmentAllRequest items={ongoingItems} />}
          {status === "third" && <EquipmentAllRequest items={acceptedItems} />}
          {status === "fourth" && <EquipmentAllRequest items={rejectedItems} />}
          {status === "fifth" && <EquipmentCrud/>}

        </div>
      </div>
    </>
  )
}
