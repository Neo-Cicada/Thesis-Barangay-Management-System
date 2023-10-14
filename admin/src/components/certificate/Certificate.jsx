import React, { useEffect } from 'react'
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
import DashboardListCert from './DashboardListCert'
import Loading from '../Loading'
export default function Certificate() {
  const [data, setData] = useState([])
  const [status, setStatus] = useState('default')
  const [isLoading, setIsLoading] = useState(true);

  useRead('CertificateRequest', setData);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const AllItems = data.filter(item => item.status === "request").map(item => <DashboardListCert
    key={item.id}
    item={item}
    first={item.fullname}
    second={item.email}
    third={item.phoneNumber}
    fourth={"09/08/23"}
    seventh={item.status}
    path={'CertificateRequest'}
    status={"request"}
  />)
  const ongoingItems = data.filter(item => item.status === "ongoing").map(item => <DashboardListCert
    key={item.id}
    item={item}
    first={item.fullname}
    second={item.email}
    third={item.phoneNumber}
    fourth={"09/08/23"}
    seventh={item.status}
    path={'CertificateRequest'}
    status={"ongoing"}
  />)
  const acceptedItems = data.filter(item => item.status === "accepted").map(item => <DashboardListCert
    key={item.id}
    item={item}
    first={item.fullname}
    second={item.email}
    third={item.phoneNumber}
    fourth={"09/08/23"}
    seventh={item.status}
    path={'CertificateRequest'}
    status={"accepted"}
  />)
  const rejectedItems = data.filter(item => item.status === "rejected").map(item => <DashboardListCert
    key={item.id}
    item={item}
    first={item.fullname}
    second={item.email}
    third={item.phoneNumber}
    fourth={"09/08/23"}
    seventh={item.status}
    path={'CertificateRequest'}
    status={"rejected"}
  />)
  // console.log(items)
  return (
    <>
      <div className="certificate-container">
        <Container style={{ height: '30%', display: 'flex', flexDirection: 'column', gap: '1em', }}>
          <div className='manageEquipment-title'>
            <h3 style={{fontSize:'2rem', fontWeight:"bold", color:'#3B5998'}}>Manage Documents</h3>
          </div>
          <Box className="equipmentDashboardBoxes" sx={{ display: 'flex', justifyContent:'space-around'}}>
            <DashboardBox
              name="Total"
              numbers={AllItems.length}
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
        {isLoading ? (
          <Loading/>
        ) : (
          <div sx={{ border: '1px solid red', minHeight: '70%' }}>
            <div sx={{ border: '1px solid red', minHeight: '70%' }}>
              {status === "default" && <EquipmentAllRequest items={AllItems}/>}
              {status === "second" && <EquipmentAllRequest items={ongoingItems} />}
              {status === "third" && <EquipmentAllRequest  items={acceptedItems}/>}
              {status === "fourth" && <EquipmentAllRequest items={rejectedItems} />}
              {status === "fifth" && <CertificateCrud />}
            </div>
          </div>)
        }
      </div>
    </>
  )
}
