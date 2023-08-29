import React, { useState } from 'react';
import useRead from '../../hooks/useRead';
import { Container } from "@mui/material";

export default function EnrollmentRejected() {
  const [data, setData] = useState([]);
  useRead("EnrollmentRejected", setData);

  // Create an array of <h4> elements if data is available
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
