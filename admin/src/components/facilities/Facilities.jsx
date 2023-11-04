import React, { useState, useEffect } from 'react'
import { Container, Skeleton, Box } from '@mui/material'
import ChecklistIcon from '@mui/icons-material/Checklist'
import DashboardBox from '../DashboardBox'
import DashboardNavigation from '../DashboardNavigation'
import FacilityCrud from './FacilityCrud'
import useRead from '../../hooks/useRead'
import DashboardList from '../DashboardList'
import DashboardListFaci from './DashboardListFaci'
import Loading from '../Loading'
import EquipmentAllRequest from '../../components/equipment/EquipmentAllRequest'
import Filter from '../Filter'
export default function Facilities() {
  const [data, setData] = useState([])
  const [status, setStatus] = useState('default')
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  useRead('FacilityRequest', setData)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  const items = data
    .filter(item => item.status === "request")
    .filter(item => !searchQuery || item.fullname.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => (b.timestamp && a.timestamp ? b.timestamp.toDate() - a.timestamp.toDate() : 0))
    .map((item) => <DashboardListFaci
      key={item.id}
      item={item}
      first={item.fullname}
      second={item.email}
      third={item.phoneNumber}
      fourth={item.timestamp ? item.timestamp.toDate().toLocaleString() : 'No timestamp'}
      seventh={item.status}
      path={'FacilityRequest'}
      status={"request"}
    />)
  const ongoingItems = data
    .filter(item => item.status === "ongoing")
    .filter(item => !searchQuery || item.fullname.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => (b.timestamp && a.timestamp ? b.timestamp.toDate() - a.timestamp.toDate() : 0))
    .map((item) => <DashboardListFaci
    key={item.id}
    item={item}
    first={item.fullname}
    second={item.email}
    third={item.phoneNumber}
    fourth={item.timestamp ? item.timestamp.toDate().toLocaleString() : 'No timestamp'}
    seventh={item.status}
    path={'FacilityRequest'}
    status={"ongoing"}
  />)
  const acceptdItems = data
    .filter(item => item.status === "accepted")
    .filter(item => !searchQuery || item.fullname.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => (b.timestamp && a.timestamp ? b.timestamp.toDate() - a.timestamp.toDate() : 0))
    .map((item) => <DashboardListFaci
    key={item.id}
    item={item}
    first={item.fullname}
    second={item.email}
    third={item.phoneNumber}
    fourth={item.timestamp ? item.timestamp.toDate().toLocaleString() : 'No timestamp'}
    seventh={item.status}
    path={'FacilityRequest'}
    status={"accepted"}
  />)
  const rejectedItems = data
    .filter(item => item.status === "rejected")
    .filter(item => !searchQuery || item.fullname.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => (b.timestamp && a.timestamp ? b.timestamp.toDate() - a.timestamp.toDate() : 0))
    .map((item) => <DashboardListFaci
    key={item.id}
    item={item}
    first={item.fullname}
    second={item.email}
    third={item.phoneNumber}
    fourth={item.timestamp ? item.timestamp.toDate().toLocaleString() : 'No timestamp'}
    seventh={item.status}
    path={'FacilityRequest'}
    status={"rejected"}
  />)
  return (
    <>
      <div className='equipment-container'>

        <Container style={{ height: '30%', display: 'flex', flexDirection: 'column', gap: '1em', }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: "bold", color: '#3B5998' }}>Manage Facilities</h3>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
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
              numbers={acceptdItems.length}
              logo={<ChecklistIcon />} />
            <DashboardBox
              name="Rejected"
              numbers={rejectedItems.length}
              logo={<ChecklistIcon />} />

          </div>
        </Container>
        <DashboardNavigation setStatus={setStatus} status={status} />
        <Filter setSearchQuery={setSearchQuery}/>
        {isLoading ? (
          <Loading />

        ) : (
          <div sx={{ border: '1px solid red', minHeight: '70%' }}>
            <div sx={{ border: '1px solid red', minHeight: '70%' }}>
              {status === "default" && <EquipmentAllRequest items={items} />}
              {status === "second" && <EquipmentAllRequest items={ongoingItems} />}
              {status === "third" && <EquipmentAllRequest items={acceptdItems} />}
              {status === "fourth" && <EquipmentAllRequest items={rejectedItems} />}
              {status === "fifth" && <FacilityCrud />}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
