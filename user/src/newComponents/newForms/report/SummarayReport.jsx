import React, { useContext } from 'react'
import { MyReportContext } from './ReportDialog'
export default function SummarayReport() {
  const { details, selectedReport } = useContext(MyReportContext)
  return (
    <>
      <div style={{ width: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        <div>
          <h2 style={{ textAlign: 'center' }}>
            Personal Information</h2>
          <div>
            <p>Full Name: {details.fullname}</p>
            <p>Phone Number:{details.phoneNumber}</p>
            <p>Email:{details.email}</p>
            <p>Summon the person: {details.summon ? 'Yes' : 'No'}</p>
          </div>
          <div>
            <h2 style={{ textAlign: 'center' }}>
              Selected Items</h2>
            <div>
              {details.selectedReport.map(item => <p>name: {item.name} - {item.person}</p>)}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
