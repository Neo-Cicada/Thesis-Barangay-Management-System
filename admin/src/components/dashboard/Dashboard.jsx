import React from 'react'
import MedicineChart from './MedicineChart'
import './dashboard.css'
export default function Dashboard() {
  return (
    <>
      <div className='dashboard-container'>
        <h2 style={{height:'10%', display:'flex', alignItems:'center', justifyContent:'center'}}>Dashboard</h2>
        <div className='dashbox'>
          <div className='grap-one'>a graph that show what services is the most request something like that</div>
          <div className='grap-two'>Most Requested items</div>

          <div className='grap-three'>graph for each services where in shows acceptance rante and blahblha</div>
          <div className='grap-forth'>4boxes of all accepted, rejected,ongoing,rejeted</div>


        </div>
      </div>
    </>
  )
}
