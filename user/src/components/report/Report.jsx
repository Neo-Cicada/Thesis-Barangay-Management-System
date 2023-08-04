import React from 'react'
import {Container} from '@mui/material'
import './styles/report.css'
import useRead from '../../hooks/useRead'
import { useState } from 'react'
export default function Report() {
  const [data, setData] = useState([]);


  return (
    <>
      <Container className='reportContainer' >
       <h2>Total Collection from Certificates</h2>
        <div className='collectionBox'>

        </div>
      </Container>
    </>
  )

}