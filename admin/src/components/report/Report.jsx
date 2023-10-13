import React, { useState, useEffect } from 'react'
import { Container, Skeleton } from '@mui/material'
import ChecklistIcon from '@mui/icons-material/Checklist'
import DashboardBox from '../DashboardBox'
import DashboardNavigation from '../DashboardNavigation'
import EquipmentAllRequest from '../equipment/EquipmentAllRequest'
import useRead from '../../hooks/useRead'
import Loading from '../Loading'
import DashboardListRep from './DashboardListRep'
import DashRepNav from './DashRepNav'
export default function Report() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState('default')
  useRead('ReportRequest', setData)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  const items = data.filter(item => item.status === "request").map(item => <DashboardListRep
    key={item.id}
    item={item}
    first={item.fullname}
    second={item.email}
    third={item.phoneNumber}
    fourth={"09/08/23"}
    seventh={item.status}
    path={'ReportRequest'}
    status={"request"}
  />)
  const ongoingItems = data.filter(item => item.status === "ongoing").map(item => <DashboardListRep
    key={item.id}
    item={item}
    first={item.fullname}
    second={item.email}
    third={item.phoneNumber}
    fourth={item.timestamp ? item.timestamp.toDate().toLocaleString() : 'No timestamp'}
    seventh={item.status}
    path={'ReportRequest'}
    status={"ongoing"}
  />)
  const acceptedItems = data.filter(item => item.status === "accepted").map(item => <DashboardListRep
    key={item.id}
    item={item}
    first={item.fullname}
    second={item.email}
    third={item.phoneNumber}
    fourth={item.timestamp ? item.timestamp.toDate().toLocaleString() : 'No timestamp'}
    seventh={item.status}
    path={'ReportRequest'}
    status={"accepted"}
  />)
  const rejectedItems = data.filter(item => item.status === "rejected").map(item => <DashboardListRep
    key={item.id}
    item={item}
    first={item.fullname}
    second={item.email}
    third={item.phoneNumber}
    fourth={item.timestamp ? item.timestamp.toDate().toLocaleString() : 'No timestamp'}
    seventh={item.status}
    path={'ReportRequest'}
    status={"rejected"}
  />)
  return (

    <div className='equipment-container'>
      <Container style={{
        height: '30%', display: 'flex',
        flexDirection: 'column', gap: '1em',
      }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h3 style={{fontSize:'2rem', fontWeight:"bold", color:'#3B5998'}}>Manage Report</h3>
        </div>
        <div style={{ display: 'flex', gap: '1em', justifyContent:'space-around' }}>
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
        </div>

      </Container>
      <DashRepNav setStatus={setStatus} status={status} />
      {isLoading ? (
        <Loading />

      ) : (
        <div sx={{ border: '1px solid red', height: '70%' }}>
          {status === "default" && <EquipmentAllRequest items={items} />}
          {status === "second" && <EquipmentAllRequest items={ongoingItems} />}
          {status === "third" && <EquipmentAllRequest items={acceptedItems} />}
          {status === "fourth" && <EquipmentAllRequest items={rejectedItems} />}
        </div>)}

    </div>
  )
}
