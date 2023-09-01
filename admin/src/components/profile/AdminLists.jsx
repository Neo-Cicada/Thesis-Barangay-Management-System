import React from 'react'
import { Container, Box } from '@mui/material'
import ScrollableContainer from '../ScrollableContainer'
export default function AdminLists() {
  return (
    <>
      <ScrollableContainer sx={{
      }}>
        <h3>Admin Lists</h3>
        <Box sx={{ border: '1px solid red', width: '90%', height: '4em', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>Admin Name</Box> <Box>Remove</Box>
        </Box>
        <Box sx={{ border: '1px solid red', width: '90%', height: '4em', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>Admin Name</Box> <Box>Remove</Box>

        </Box>
      </ScrollableContainer>
    </>
  )
}
