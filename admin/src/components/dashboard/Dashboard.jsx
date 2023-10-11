import React from 'react'
import MedicineChart from './MedicineChart'
import { Container } from '@mui/material'
import './dashboard.css'
import FacilityChart from './FacilityChart'
import { BigChart } from './BigChart'
export default function Dashboard() {
  return (
    <>
      <Container className='dashboard-container'>
        <h2 style={{ fontSize: '2rem', fontWeight: "bold", color: '#3B5998', height: '10%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >Dashboard</h2>
        <div className='dashbox'>
          <div className='grap-one'>
            <BigChart />
          </div>
          <div className='grap-two'>
            <MedicineChart />
          </div>

          <div className='grap-three'> <MedicineChart /></div>
          <div className='grap-forth'>4boxes of all accepted, rejected,ongoing,rejeted</div>


        </div>
      </Container>
    </>
  )
}
