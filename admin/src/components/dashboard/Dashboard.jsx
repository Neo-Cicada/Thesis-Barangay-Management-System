import React, { useState } from 'react'
import MedicineChart from './MedicineChart'
import { Container } from '@mui/material'
import './dashboard.css'
import FacilityChart from './FacilityChart'
import { BigChart } from './BigChart'
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
            {nav === 'C' && <MedicineChart />}
            {nav === 'Eq' && <MedicineChart />}
            {nav === 'D' && <MedicineChart />}
            {nav === 'E' && <MedicineChart />}
            {nav === 'F' && <MedicineChart />}
            {nav === 'M' && <MedicineChart />}
          </div>

          <div className='grap-three'>
          {nav === 'C' && <MedicineChart />}
            {nav === 'Eq' && <MedicineChart />}
            {nav === 'D' && <MedicineChart />}
            {nav === 'E' && <MedicineChart />}
            {nav === 'F' && <MedicineChart />}
            {nav === 'M' && <MedicineChart />}
            </div>
          <div className='grap-forth'>
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
