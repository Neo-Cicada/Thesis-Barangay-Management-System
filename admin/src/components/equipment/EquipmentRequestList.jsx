import { Box, Container, Button, Paper } from '@mui/material'
import React, { useState } from 'react'

export default function EquipmentRequestList() {
  const [isShow, setIsShow] = useState(false)
  const boxStyle = {
    flex: 'none',
    width: '70%',
    height: isShow ? 'auto' : '5em', // Adjust the height to 'auto' when expanded, otherwise '5em'
    marginTop: '1em',
    cursor: 'pointer',
    display: 'flex', // Make the parent Box a flex container
    flexDirection: 'column', // Stack the child Boxes vertically
    boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'
  }

  const handleExpand = (e) => {
    e.preventDefault();
    setIsShow(!isShow)
  }



  return (
    <>
      <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxHeight: '25em',
        height: '100%',
        overflow: 'auto'
      }}>
        <Box sx={boxStyle} onClick={handleExpand} key='1'>
          <Box sx={{ height: '2em', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1em' }}>
            <h4>Lord Neo Barnachea</h4>
            <Box sx={{display: 'flex', gap: '1em'}}>
              <Button variant='contained'>Accept</Button>
              <Button variant='contained'>Reject</Button>
            </Box>

          </Box>
          {isShow && <Box sx={{ height: '10em  ' }}>

          </Box>}
        </Box>



      </Container>
    </>
  )
}
