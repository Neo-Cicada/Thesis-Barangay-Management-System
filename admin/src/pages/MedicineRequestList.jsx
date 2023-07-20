import { Box, Container, Button, Paper } from '@mui/material'
import React, { useState } from 'react'



export default function MedicineRequestList() {
  const [isShow, setIsShow] = useState(false)
  const [boxStyle, setBoxStyle] = useState({
    flex: 'none',
    border: '1px solid red',
    width: '70%', height: '5em', marginTop: '1em', cursor: 'pointer'
  })

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
          {isShow && 'TEst'} 1
        </Box>

        <Box sx={boxStyle}>
          2
        </Box>
        <Box sx={boxStyle}>
          3
        </Box>
        <Box sx={boxStyle}>
          4
        </Box>
        <Box sx={boxStyle}>
          5
        </Box>
        <Box sx={boxStyle}>
          6
        </Box>
        <Box sx={boxStyle}>
          7
        </Box>
        <Box sx={boxStyle}>
          8
        </Box>
        <Box sx={boxStyle}>
          9
        </Box>
        <Box sx={boxStyle}>
          10
        </Box>
      </Container>
    </>
  )
}
