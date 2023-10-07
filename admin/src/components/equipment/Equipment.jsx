import React from 'react'
import '../../styles/equipment.css'
import { Container, Box } from '@mui/material'
import ChecklistIcon from '@mui/icons-material/Checklist';
import DashboardBox from '../DashboardBox'
import DashboardNavigation from '../DashboardNavigation'
import DashboardList from '../DashboardList'
import useRead from '../../hooks/useRead'
import { useState } from 'react';
import EquipmentAllRequest from './EquipmentAllRequest';
import EquipManage from './EquipManage'
import EquipmentCrud from './EquipmentCrud';
import DashboardHeader from '../DashboardHeader';
export default function Equipment() {
  const [data, setData] = useState([])
  const [status, setStatus] = useState("default")
  useRead('EquipmentRequest', setData)

  const allItems = data.filter(item => item.status === "request").map(item => <DashboardList
    key={item.id}
    item={item}
    first={item.fullname}
    second={item.email}
    third={item.phoneNumber}
    fourth={"09/08/23"}
    fifth={'888'}
    sixth={'idont know'}
    seventh={item.status}
    path={'EquipmentAllRequest'}
    status={"request"}
  />
  )
  const ongoingItems = data.filter(item => item.status === "ongoing").map(item => <DashboardList
    itemId={item.id}
    key={item.id}
    first={item.firstname + " " + item.lastname}
    second={item.email}
    third={item.phoneNumber}
    fourth={"09/08/23"}
    fifth={'888'}
    sixth={item.type}
    seventh={item.status}
    status={'ongoing'}
    path={'EquipmentAllRequest'}
  />)
  const acceptedItems = data.filter(item => item.status === "accepted").map(item => <DashboardList
    key={item.id}
    first={item.firstname + " " + item.lastname}
    second={item.email}
    third={item.phoneNumber}
    fourth={"09/08/23"}
    fifth={'888'}
    sixth={item.type}
    seventh={item.status}
  />)

  const rejectedItems = data.filter(item => item.status === "rejected").map(item => <DashboardList
    key={item.id}
    first={item.firstname + " " + item.lastname}
    second={item.email}
    third={item.phoneNumber}
    fourth={"09/08/23"}
    fifth={'888'}
    sixth={item.type}
    seventh={item.status}
  />)
  return (
    <>
      <div className='equipment-container'>

        <Container style={{ height: '30%', display: 'flex', flexDirection: 'column', gap: '1em' }}>
          <div className='manageEquipment-title'>
            <h3>Manage Equipment</h3>
          </div>
          <Box className="equipmentDashboardBoxes" sx={{ display: 'flex', gap: '1em' }}>
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
          </Box>

        </Container>

        <DashboardNavigation setStatus={setStatus} status={status} />
        <div sx={{ border: '1px solid red', height: '70%' }}>  
        {status === "default" && <EquipmentAllRequest items={allItems}/>}
        {status === "second" && ongoingItems}
        {status === "third" && acceptedItems}
        {status === "fourth" && rejectedItems}
        {status === "fifth" && <EquipmentCrud/>}
        </div>
      </div>
    </>
  )
}
