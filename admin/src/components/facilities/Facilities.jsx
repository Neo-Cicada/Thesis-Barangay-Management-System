import React, { useState, useEffect } from 'react'
import { Container, Skeleton, Box } from '@mui/material'
import ChecklistIcon from '@mui/icons-material/Checklist'
import DashboardBox from '../DashboardBox'
import DashboardNavigation from '../DashboardNavigation'
import FacilityCrud from './FacilityCrud'
import useRead from '../../hooks/useRead'
import DashboardList from '../DashboardList'
import EquipmentAllRequest from '../../components/equipment/EquipmentAllRequest'
export default function Facilities() {
  const [data, setData] = useState([])
  const [status, setStatus] = useState('default')
  const [isLoading, setIsLoading] = useState(true)
  useRead('FacilityAllRequest', setData)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  const items = data.filter(item => item.status === "request").map((item) => <DashboardList
    first={item.firstname}
    second={item.email}
    third={item.phoneNumber}
    fourth={'12/12/12'}
    fifth={'Time'}
    sixth={item.facility}
    seventh={'request'}
    itemId={item.id}
    status={'ongoing'}
    path="FacilityAllRequest"
  />)
  return (
    <>
      <div className='equipment-container'>

        <Container style={{ height: '30%', display: 'flex', flexDirection: 'column', gap: '1em', }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h3>Manage Facilities</h3>
          </div>
          <div style={{ display: 'flex', gap: '1em' }}>
            <DashboardBox
              name="Total"
              numbers={'888'}
              logo={<ChecklistIcon />} />
            <DashboardBox
              name="Ongoing"
              numbers={'888'}
              logo={<ChecklistIcon />} />
            <DashboardBox
              name="Completed"
              numbers={'888'}
              logo={<ChecklistIcon />} />
            <DashboardBox
              name="Rejected"
              numbers={'888'}
              logo={<ChecklistIcon />} />
            <DashboardBox
              name="Facilities"
              numbers={'888'}
              logo={<ChecklistIcon />} />
          </div>
        </Container>
        <DashboardNavigation setStatus={setStatus} status={status} />

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

              {status === "fifth" && <FacilityCrud />}

            </div>
          </div>
        )}
      </div>
    </>
  )
}
