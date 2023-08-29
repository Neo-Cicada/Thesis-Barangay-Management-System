import React from 'react'
import useRead from '../../hooks/useRead'
import {Container, Box} from "@mui/material"
import { useState } from 'react';
export default function Enrolled() {
  const [data, setData] = useState([])
  useRead("EnrollmentAccepted", setData);
  // item.data[0].data.childInfo is used to access data
  const items = data.map(item => (
    <h4 key={item.id}>{item.data[0].data.childInfo.childFirstName}</h4>
  ));

  // Render the array of <h4> elements if there's data, otherwise show "No data available"
  return (
    <Container sx={{ marginTop: '1em' }}>
      {items.length > 0 ? items : 'No data available'}
    </Container>
  );
}
