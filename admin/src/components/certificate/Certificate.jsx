import React, {useEffect} from 'react'
import { Container, Box, Skeleton } from '@mui/material'
import '../../styles/certificate.css'
import DashboardBox from '../DashboardBox'
import ChecklistIcon from '@mui/icons-material/Checklist'
import DashboardNavigation from '../DashboardNavigation'
import { useState } from 'react'
import EquipmentAllRequest from '../equipment/EquipmentAllRequest'
import useRead from '../../hooks/useRead'
import DashboardList from '../DashboardList'
import CertificateCrud from './CertificateCrud'
export default function Certificate() {
  const [status, setStatus] = useState('default')
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const rejectedItems = data.filter(item => item.status === "rejected")
    .map(item => <DashboardList
      key={item.id}
      first={item.firstname + " " + item.lastname}
      second={item.email}
      third={item.phoneNumber}
      fourth={"09/08/23"}
      fifth={'888'}
      sixth={item.certificate}
      seventh={item.status}
      status={item.status} />)

  return (
    <>
      <div className="certificate-container">
        <Container style={{ height: '30%', display: 'flex', flexDirection: 'column', gap: '1em', }}>
          <div className='manageEquipment-title'>
            <h3>Manage Certificate</h3>
          </div>
          <Box className="equipmentDashboardBoxes" sx={{ display: 'flex', gap: '1em' }}>
            <DashboardBox
              name="Total"
              // numbers={items.length}
              logo={<ChecklistIcon />} />
            <DashboardBox
              name="Ongoing"
              // numbers={ongoingItems.length}
              logo={<ChecklistIcon />} />
            <DashboardBox
              name="Completed"
              // numbers={acceptedItems.length}
              logo={<ChecklistIcon />} />
            <DashboardBox
              name="Rejected"
              // numbers={rejectedItems.length}
              logo={<ChecklistIcon />} />
            <DashboardBox
              name="Certificates"
              numbers={'11'}
              logo={<ChecklistIcon />} />
          </Box>
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
              {status === "default" && <EquipmentAllRequest />}
              {status === "second" && <EquipmentAllRequest />}
              {status === "third" && <EquipmentAllRequest  />}
              {status === "fourth" && <EquipmentAllRequest  />}
              {status === "fifth" && <CertificateCrud />}
            </div>
          </div>)
        }
      </div>
    </>
  )
}
