import React from 'react'
import { Container, Box, Button, Skeleton, } from '@mui/material'
import { useState, useEffect } from 'react'
import ChecklistIcon from '@mui/icons-material/Checklist'
import DashboardBox from '../DashboardBox'
import DashboardNavigation from '../DashboardNavigation'
import EnrollmentDashNav from './EnrollmentDashNav'
import EnrollDashList from './EnrollmentDashList'
import EquipmentAllRequest from '../equipment/EquipmentAllRequest'
import useRead from '../../hooks/useRead'
import Loading from '../Loading'
export default function Enrollment() {
  const [status, setStatus] = useState('default')
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  useRead('EnrollmentRequest', setData)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const items = data
    .filter(item => item.status === "request")
    .sort((a, b) => (b.timestamp && a.timestamp ? b.timestamp.toDate() - a.timestamp.toDate() : 0))
    .map(item => <EnrollDashList
      key={item.id}
      item={item}
      first={item.guardianInfo.guardianFirstName}
      second={item.guardianInfo.guardianEmail}
      third={item.guardianInfo.guardianPhoneNumber}
      fourth={item.timestamp ? item.timestamp.toDate().toLocaleString() : 'No timestamp'}
      seventh={item.status}
      path={'EnrollmentRequest'}
      status={item.status}
    />
    )
  const ongoingItems = data.filter(item => item.status === "ongoing")
    .sort((a, b) => (b.timestamp && a.timestamp ? b.timestamp.toDate() - a.timestamp.toDate() : 0))
    .map(item => <EnrollDashList
      key={item.id}
      item={item}
      first={item.guardianInfo.guardianFirstName}
      second={item.guardianInfo.guardianEmail}
      third={item.guardianInfo.guardianPhoneNumber}
      fourth={item.timestamp ? item.timestamp.toDate().toLocaleString() : 'No timestamp'}
      seventh={item.status}
      path={'EnrollmentRequest'}
      status={item.status}
    />
    )
  const acceptedItems = data.filter(item => item.status === "accepted")
    .sort((a, b) => (b.timestamp && a.timestamp ? b.timestamp.toDate() - a.timestamp.toDate() : 0))
    .map(item => <EnrollDashList
      key={item.id}
      item={item}
      first={item.guardianInfo.guardianFirstName}
      second={item.guardianInfo.guardianEmail}
      third={item.guardianInfo.guardianPhoneNumber}
      fourth={item.timestamp ? item.timestamp.toDate().toLocaleString() : 'No timestamp'}
      seventh={item.status}
      path={'EnrollmentRequest'}
      status={item.status}
    />
    )
  const rejectedItems = data
    .filter(item => item.status === "rejected")
    .sort((a, b) => (b.timestamp && a.timestamp ? b.timestamp.toDate() - a.timestamp.toDate() : 0))
    .map(item => <EnrollDashList
      key={item.id}
      item={item}
      first={item.guardianInfo.guardianFirstName}
      second={item.guardianInfo.guardianEmail}
      third={item.guardianInfo.guardianPhoneNumber}
      fourth={item.timestamp ? item.timestamp.toDate().toLocaleString() : 'No timestamp'}
      seventh={item.status}
      path={'EnrollmentRequest'}
      status={item.status}
    />
    )
  return (
    <>
      <div className='equipment-container'>
        <Container style={{
          height: '30%', display: 'flex',
          flexDirection: 'column', gap: '1em',
        }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: "bold", color: '#3B5998' }}>Manage Enrollments</h3>
          </div>
          <div style={{ display: 'flex', gap: '1em', justifyContent: 'space-around' }}>
            <DashboardBox
              name="Total Request"
              numbers={items.length}
              logo={<ChecklistIcon />} />
            <DashboardBox
              name="Ongoing"
              numbers={ongoingItems.length}
              logo={<ChecklistIcon />} />
            <DashboardBox
              name="Enrolled"
              numbers={acceptedItems.length}
              logo={<ChecklistIcon />} />
            <DashboardBox
              name="Rejected"
              numbers={rejectedItems.length}
              logo={<ChecklistIcon />} />

          </div>
        </Container>
        <EnrollmentDashNav setStatus={setStatus} status={status} />
        {isLoading ? (
          <Loading />

        ) : (
          <div sx={{ border: '1px solid red', minHeight: '70%' }}>
            <div sx={{ border: '1px solid red', minHeight: '70%' }}>
              {status === "default" && <EquipmentAllRequest items={items} />}
              {status === "second" && <EquipmentAllRequest items={ongoingItems} />}
              {status === "third" && <EquipmentAllRequest items={acceptedItems} />}
              {status === "fourth" && <EquipmentAllRequest items={rejectedItems} />}

            </div>
          </div>)
        }
      </div>
    </>
  )
}
