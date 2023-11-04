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
import Filter from '../Filter';
export default function Equipment() {
  const [data, setData] = useState([])
  const [status, setStatus] = useState("default")
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useRead('EquipmentRequest', setData)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  const allItems = data
    .filter(item => item.status === 'request')
    .filter(item => !searchQuery || item.fullname.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => (b.timestamp && a.timestamp ? b.timestamp.toDate() - a.timestamp.toDate() : 0))
    .map(item => <DashboardList
      key={item.id}
      item={item}
      first={item.fullname}
      second={item.email}
      third={item.phoneNumber}
      fourth={item.timestamp ? item.timestamp.toDate().toLocaleString() : 'No timestamp'}
      seventh={item.status}
      path={'EquipmentRequest'}
      status={"request"}
    />

    )
  const ongoingItems = data
    .filter(item => item.status === 'ongoing')
    .filter(item => !searchQuery || item.fullname.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => (b.timestamp && a.timestamp ? b.timestamp.toDate() - a.timestamp.toDate() : 0))
    .map(item => <DashboardList
      key={item.id}
      item={item}
      first={item.fullname}
      second={item.email}
      third={item.phoneNumber}
      fourth={item.timestamp ? item.timestamp.toDate().toLocaleString() : 'No timestamp'}
      seventh={item.status}
      path={'EquipmentRequest'}
      status={item.status}
    />

    )
  const acceptedItems = data
    .filter(item => item.status === 'accepted')
    .filter(item => !searchQuery || item.fullname.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => (b.timestamp && a.timestamp ? b.timestamp.toDate() - a.timestamp.toDate() : 0))

    .map(item => <DashboardList
      key={item.id}
      item={item}
      first={item.fullname}
      second={item.email}
      third={item.phoneNumber}
      fourth={item.timestamp ? item.timestamp.toDate().toLocaleString() : 'No timestamp'}
      seventh={item.status}
      path={'EquipmentRequest'}
      status={item.status}
    />

    )
  const rejectedItems = data
    .filter(item => item.status === 'rejected')
    .filter(item => !searchQuery || item.fullname.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => (b.timestamp && a.timestamp ? b.timestamp.toDate() - a.timestamp.toDate() : 0))
    .map(item =>
      <DashboardList
        key={item.id}
        item={item}
        first={item.fullname}
        second={item.email}
        third={item.phoneNumber}
        fourth={item.timestamp ? item.timestamp.toDate().toLocaleString() : 'No timestamp'}
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
            <h3 style={{ fontSize: '2rem', fontWeight: "bold", color: '#3B5998' }}>Manage Equipment</h3>
          </div>
          <Box className="equipmentDashboardBoxes" sx={{ display: 'flex', justifyContent: 'space-around' }}>
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
          </Box>

        </Container>

        <DashboardNavigation setStatus={setStatus} status={status} />
        <Filter setSearchQuery={setSearchQuery}/>


        {isLoading ? (
          <Loading />

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
