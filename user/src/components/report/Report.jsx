import React from 'react'
import {Container} from '@mui/material'
import './styles/report.css'
import useRead from '../../hooks/useRead'
import { useState } from 'react'
export default function Report() {
  const [data, setData] = useState([]);

  useRead('CertificateCompletedStatus', setData);

  return (
    <>
      <div className='reportContainer' >
       <h2>Total Collection from Certificates</h2>
        <div className='collectionBox'>
          <p className='reportDetails'>We collected total of {data.length} as of now.</p>

          <p className='reportDetails'>And the total funds from that collection is
          <span className='totalCost'> {data.length * 50}</span>
          </p>
        </div>
      </div>
    </>
  )

}