import React, { useState } from 'react'
import MedicineChart from './MedicineChart'
import { Container } from '@mui/material'
import './dashboard.css'
import FacilityChart from './FacilityChart'
import { BigChart } from './BigChart'
import ReportCharts from './ReportChart'
import EnrollmentChart from './EnrollmentChart'
import EquipmentChart from './EquipmentChart'
import CertificateChart from './CertificateChart'
import RecentReport from './recentActivities/RecentReport'
import RecentMedicines from './recentActivities/RecentMedicines'
import RecentFacilities from './recentActivities/RecentFacilities'
import RecentEquipment from './recentActivities/RecentEquipment'
import RecentEnrollments from './recentActivities/RecentEnrollments'
import RecentCertificate from './recentActivities/RecentCertificate'
export default function Dashboard() {

  const [nav, setNav] = useState('C')
  const activeStyle = {
    color: '#DFE3EE',
    backgroundColor: '#3B5998',
  }

  return (
    <>
      <Container className='dashboard-container'>
        <h2 style={{
          fontSize: '2rem', fontWeight: "bold",
          color: '#3B5998', height: '10%', display: 'flex',
          alignItems: 'center', justifyContent: 'center'
        }} >Dashboard</h2>
        <div className='dashbox'>
          <div className='grap-one'>
            <BigChart />
          </div>
          <div className='grap-two'>
            {nav === 'C' && <ReportCharts />}
            {nav === 'Eq' && <EquipmentChart />}
            {nav === 'D' && <CertificateChart />}
            {nav === 'E' && <EnrollmentChart />}
            {nav === 'F' && <FacilityChart />}
            {nav === 'M' && <MedicineChart />}
          </div>

          <div className='grap-three'>
            {nav === 'C' && <RecentReport/>}
            {nav === 'Eq' && <RecentEquipment/>}
            {nav === 'D' && <RecentCertificate/>}
            {nav === 'E' && <RecentEnrollments/>}
            {nav === 'F' && <RecentFacilities/>}
            {nav === 'M' && <RecentMedicines/>}
          </div>
          <div className='grap-forth'>
            <div>
              <h2 style={{textAlign:'center', fontWeight: 600}}>Dashboard</h2>
              <h2 style={{textAlign:'center', fontWeight: 600}}>Navigation</h2>
            </div>
            <div
              className='graph-nav'
              onClick={() => setNav('C')}
              style={nav === 'C' ? activeStyle : {}}>
              Complaints</div>

            <div
              style={nav === 'Eq' ? activeStyle : {}}
              className='graph-nav'
              onClick={() => setNav('Eq')}>
              Equipments</div>
            <div
              style={nav == 'D' ? activeStyle : {}}
              className='graph-nav'
              onClick={() => setNav('D')}>
              Documents</div>
            <div
              style={nav === 'E' ? activeStyle : {}}
              className='graph-nav'
              onClick={() => setNav('E')}>
              Enrollments</div>
            <div
              style={nav === 'F' ? activeStyle : {}}
              className='graph-nav'
              onClick={() => setNav('F')}>
              Facilities</div>
            <div
              style={nav === 'M' ? activeStyle : {}}
              className='graph-nav'
              onClick={() => setNav('M')}>
              Medicines</div>
          </div>


        </div>
      </Container>
    </>
  )
}
