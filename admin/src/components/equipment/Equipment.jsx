import React, { useEffect } from 'react'
import '../../styles/equipment.css'
import { Container, Box, Skeleton } from '@mui/material'
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
import Loading from '../Loading'
export default function Equipment() {
  const [data, setData] = useState([])
  const [status, setStatus] = useState("default")
  const [isLoading, setIsLoading] = useState(true);
  useRead('EquipmentRequest', setData)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  const allItems = data.filter(item => item.status === 'request').map(item => <DashboardList
    key={item.id}
    item={item}
    first={item.fullname}
    second={item.email}
    third={item.phoneNumber}
    fourth={"09/08/23"}
    seventh={item.status}
    path={'EquipmentRequest'}
    status={"request"}
  />

  )
  const ongoingItems = data.filter(item => item.status === 'ongoing').map(item => <DashboardList
    key={item.id}
    item={item}
    first={item.fullname}
    second={item.email}
    third={item.phoneNumber}
    fourth={"09/08/23"}
    seventh={item.status}
    path={'EquipmentRequest'}
    status={item.status}
  />

  )
  const acceptedItems = data.filter(item => item.status === 'accepted').map(item => <DashboardList
    key={item.id}
    item={item}
    first={item.fullname}
    second={item.email}
    third={item.phoneNumber}
    fourth={"09/08/23"}
    seventh={item.status}
    path={'EquipmentRequest'}
    status={item.status}
  />

  )
  const rejectedItems = data.filter(item => item.status === 'rejected').map(item =>
    <DashboardList
      key={item.id}
      item={item}
      first={item.fullname}
      second={item.email}
      third={item.phoneNumber}
      fourth={"09/08/23"}
      seventh={item.status}
      path={'EquipmentRequest'}
      status={item.status}
    />

  )

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



        {isLoading ? (
          <Loading/>

        ) : (
          <div sx={{ border: '1px solid red', minHeight: '70%' }}>
            <div sx={{ border: '1px solid red', minHeight: '70%' }}>
              {status === "default" && <EquipmentAllRequest items={allItems} />}
              {status === "second" && <EquipmentAllRequest items={ongoingItems} />}

              {status == "third" && <EquipmentAllRequest items={acceptedItems} />}
              {status === "fourth" && <EquipmentAllRequest items={rejectedItems} />}
              {status === "fifth" && <EquipmentCrud />}

            </div>
          </div>
        )}

      </div>
    </>
  )
}
