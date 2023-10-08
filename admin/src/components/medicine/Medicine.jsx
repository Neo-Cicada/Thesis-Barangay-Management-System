import React, { useState } from 'react'
import { Container } from '@mui/material'
import ChecklistIcon from '@mui/icons-material/Checklist'
import DashboardBox from '../DashboardBox'
import DashboardNavigation from '../DashboardNavigation'
import EquipmentAllRequest from '../equipment/EquipmentAllRequest'
import useRead from '../../hooks/useRead'
import DashboardList from '../DashboardList'
import MedicineCrud from './MedicineCrud'
import DashBoardListMed from './DashBoardListMed'
export default function Medicine() {
  const [data, setData] = useState([])
  const [status, setStatus] = useState('default')

  useRead('MedicineRequest', setData)

  const items = data.filter(item => item.status === "request").map(item => <DashBoardListMed
    key={item.id}
    item={item}
    first={item.fullname}
    second={item.email}
    third={item.phoneNumber}
    fourth={"09/08/23"}
    seventh={item.status}
    path={'MedicineRequest'}
    status={"request"}
  />)

  const acceptedItems = data.filter(item => item.status === "accepted").map(item =>
    <DashBoardListMed
    key={item.id}
    item={item}
    first={item.fullname}
    second={item.email}
    third={item.phoneNumber}
    fourth={"09/08/23"}
    seventh={item.status}
    path={'MedicineRequest'}
    status={"accepted"}/>)

  const rejectedItems = data.filter(item => item.status === "rejected").map(item => <DashBoardListMed
    key={item.id}
    item={item}
    first={item.fullname}
    second={item.email}
    third={item.phoneNumber}
    fourth={"09/08/23"}
    seventh={item.status}
    path={'MedicineRequest'}
    status={"rejected"}/>)

  const ongoingItems = data.filter(item => item.status === "ongoing").map(item => <DashBoardListMed
    key={item.id}
    item={item}
    first={item.fullname}
    second={item.email}
    third={item.phoneNumber}
    fourth={"09/08/23"}
    seventh={item.status}
    path={'MedicineRequest'}
    status={"ongoing"}/>)

  return (
    <>
      <div className='equipment-container'>
        <Container style={{
          height: '30%', display: 'flex',
          flexDirection: 'column', gap: '1em',
        }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h3>Manage Medicine</h3>
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
              name="Medicine"
              numbers={'888'}
              logo={<ChecklistIcon />} />
          </div>

        </Container>
        <DashboardNavigation setStatus={setStatus} status={status} />

        <div sx={{ border: '1px solid red', height: '70%' }}>
          {status === "default" && <EquipmentAllRequest items={items} />}
          {status === "second" && <EquipmentAllRequest items={ongoingItems} />}
          {status === "third" && <EquipmentAllRequest items={acceptedItems} />}
          {status === "fourth" && <EquipmentAllRequest items={rejectedItems} />}
          {status === "fifth" && <MedicineCrud />}

        </div>
      </div>
    </>
  )
}
