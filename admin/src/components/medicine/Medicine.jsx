import React, { useState, useEffect } from 'react'
import { Container } from '@mui/material'
import ChecklistIcon from '@mui/icons-material/Checklist'
import DashboardBox from '../DashboardBox'
import DashboardNavigation from '../DashboardNavigation'
import EquipmentAllRequest from '../equipment/EquipmentAllRequest'
import useRead from '../../hooks/useRead'
import DashboardList from '../DashboardList'
import MedicineCrud from './MedicineCrud'
import DashBoardListMed from './DashBoardListMed'
import Loading from '../Loading'
import Filter from '../Filter'
export default function Medicine() {
  const [data, setData] = useState([])
  const [status, setStatus] = useState('default')
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  useRead('MedicineRequest', setData)
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
    .map(item => <DashBoardListMed
      key={item.id}
      item={item}
      first={item.fullname}
      second={item.email}
      third={item.phoneNumber}
      fourth={item.timestamp ? item.timestamp.toDate().toLocaleString() : 'No timestamp'}
      seventh={item.status}
      path={'MedicineRequest'}
      status={"request"}
    />)

  const acceptedItems = data
    .filter(item => item.status === "accepted")
    .filter(item => !searchQuery || item.fullname.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => (b.timestamp && a.timestamp ? b.timestamp.toDate() - a.timestamp.toDate() : 0))
    .map(item =>
      <DashBoardListMed
        key={item.id}
        item={item}
        first={item.fullname}
        second={item.email}
        third={item.phoneNumber}
        fourth={item.timestamp ? item.timestamp.toDate().toLocaleString() : 'No timestamp'}
        seventh={item.status}
        path={'MedicineRequest'}
        status={"accepted"} />)

  const rejectedItems = data
    .filter(item => item.status === "rejected")
    .filter(item => !searchQuery || item.fullname.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => (b.timestamp && a.timestamp ? b.timestamp.toDate() - a.timestamp.toDate() : 0))
    .map(item =>
      <DashBoardListMed
        key={item.id}
        item={item}
        first={item.fullname}
        second={item.email}
        third={item.phoneNumber}
        fourth={item.timestamp ? item.timestamp.toDate().toLocaleString() : 'No timestamp'}
        seventh={item.status}
        path={'MedicineRequest'}
        status={"rejected"} />)

  const ongoingItems = data
    .filter(item => item.status === "ongoing")
    .filter(item => !searchQuery || item.fullname.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => (b.timestamp && a.timestamp ? b.timestamp.toDate() - a.timestamp.toDate() : 0))
    .map(item => <DashBoardListMed
      key={item.id}
      item={item}
      first={item.fullname}
      second={item.email}
      third={item.phoneNumber}
      fourth={item.timestamp ? item.timestamp.toDate().toLocaleString() : 'No timestamp'}
      seventh={item.status}
      path={'MedicineRequest'}
      status={"ongoing"} />)

  return (
    <>
      <div className='equipment-container'>
        <Container style={{
          height: '30%', display: 'flex',
          flexDirection: 'column', gap: '1em',
        }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: "bold", color: '#3B5998' }}>Manage Medicine</h3>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <DashboardBox
              name="Request"
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
        <DashboardNavigation setStatus={setStatus} status={status} />
        <Filter setSearchQuery={setSearchQuery}/>
        {isLoading ? (
          <Loading />

        ) : (
          <div sx={{ border: '1px solid red', height: '70%' }}>
            {status === "default" && <EquipmentAllRequest items={items} />}
            {status === "second" && <EquipmentAllRequest items={ongoingItems} />}
            {status === "third" && <EquipmentAllRequest items={acceptedItems} />}
            {status === "fourth" && <EquipmentAllRequest items={rejectedItems} />}
            {status === "fifth" && <MedicineCrud />}

          </div>
        )}
      </div>
    </>
  )
}
