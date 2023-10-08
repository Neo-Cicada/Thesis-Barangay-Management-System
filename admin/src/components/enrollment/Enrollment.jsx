import React from 'react'
import { Container, Box, Button, Skeleton,  } from '@mui/material'
import { useState, useEffect } from 'react'
import ChecklistIcon from '@mui/icons-material/Checklist'
import DashboardBox from '../DashboardBox'
import DashboardNavigation from '../DashboardNavigation'
import EnrollmentDashNav from './EnrollmentDashNav'
import EnrollDashList from './EnrollmentDashList'
import EquipmentAllRequest from '../equipment/EquipmentAllRequest'
import useRead from '../../hooks/useRead'
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

  const items  = data.filter(item => item.status ==="request").map( item => <EnrollDashList
    key={item.id}
    item={item}
    first={item.guardianInfo.guardianFirstName}
    second={item.guardianInfo.guardianEmail}
    third={item.guardianInfo.guardianPhoneNumber}
    fourth={"09/08/23"}
    seventh={item.status}
    path={'EnrollmentRequest'}
    status={item.status}
  />
  )
  const ongoingItems  = data.filter(item => item.status ==="ongoing").map( item => <EnrollDashList
    key={item.id}
    item={item}
    first={item.guardianInfo.guardianFirstName}
    second={item.guardianInfo.guardianEmail}
    third={item.guardianInfo.guardianPhoneNumber}
    fourth={"09/08/23"}
    seventh={item.status}
    path={'EnrollmentRequest'}
    status={item.status}
  />
  )
  const acceptedItems = data.filter(item => item.status ==="accepted").map( item => <EnrollDashList
    key={item.id}
    item={item}
    first={item.guardianInfo.guardianFirstName}
    second={item.guardianInfo.guardianEmail}
    third={item.guardianInfo.guardianPhoneNumber}
    fourth={"09/08/23"}
    seventh={item.status}
    path={'EnrollmentRequest'}
    status={item.status}
  />
  )
  const rejectedItems  = data.filter(item => item.status ==="rejected").map( item => <EnrollDashList
    key={item.id}
    item={item}
    first={item.guardianInfo.guardianFirstName}
    second={item.guardianInfo.guardianEmail}
    third={item.guardianInfo.guardianPhoneNumber}
    fourth={"09/08/23"}
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
            <h3 style={{textAlign:'center'}}>Manage Enrollments</h3>
          </div>
          <div style={{ display: 'flex', gap: '1em' }}>
            <DashboardBox
              name="Total Request"
              numbers={'1'}
              logo={<ChecklistIcon />} />
            <DashboardBox
              name="Ongoing"
              numbers={'2'}
              logo={<ChecklistIcon />} />
            <DashboardBox
              name="Completed"
              numbers={'3'}
              logo={<ChecklistIcon />} />
            <DashboardBox
              name="Rejected"
              numbers={'4'}
              logo={<ChecklistIcon />} />
            <DashboardBox
              name="Enrolled"
              numbers={'888'}
              logo={<ChecklistIcon />} />
          </div>
        </Container>
        <EnrollmentDashNav setStatus={setStatus} status={status} />
        {isLoading ? (
          <Container style={{ width: '100%', }}>
            <Skeleton sx={{ width: '100%', bgcolor: '#8B9DC3', }} />
            <Skeleton sx={{ width: '100%', bgcolor: '#8B9DC3', }} animation="wave" />
            <Skeleton sx={{ width: '100%', bgcolor: '#8B9DC3', }} animation={false} />
            <Skeleton sx={{ width: '100%', bgcolor: '#8B9DC3', }} />
            <Skeleton sx={{ width: '100%', bgcolor: '#8B9DC3', }} animation="wave" />
            <Skeleton sx={{ width: '100%', bgcolor: '#8B9DC3', }} animation={false} />
            <Skeleton sx={{ width: '100%', bgcolor: '#8B9DC3', }} />
            <Skeleton sx={{ width: '100%', bgcolor: '#8B9DC3', }} animation="wave" />
            <Skeleton sx={{ width: '100%', bgcolor: '#8B9DC3', }} animation={false} />
            <Skeleton sx={{ width: '100%', bgcolor: '#8B9DC3', }} animation={false} />
          </Container>

        ) : (
          <div sx={{ border: '1px solid red', minHeight: '70%' }}>
            <div sx={{ border: '1px solid red', minHeight: '70%' }}>
              {status === "default" && <EquipmentAllRequest items={items}/>}
              {status === "second" && <EquipmentAllRequest items={ongoingItems}/>}
              {status === "third" && <EquipmentAllRequest items={acceptedItems}/>}
              {status === "fourth" && <EquipmentAllRequest items={rejectedItems}/>}

            </div>
          </div>)
        }
      </div>
    </>
  )
}
