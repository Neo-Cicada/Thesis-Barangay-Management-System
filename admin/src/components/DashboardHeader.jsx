import React from 'react';
import { Container } from '@mui/material';

export default function DashboardHeader() {
  return (
    <>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Date</th>
          <th>Quantity</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
    </>
  );
}