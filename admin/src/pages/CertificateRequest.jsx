import { Box, Container, Button } from '@mui/material'
import React, { useState } from 'react'


export default function CertificateRequest() {
  const [isShow, setIsShow] = useState(false)
  const [boxStyle, setBoxStyle] = useState({
    border: '1px solid red',
    width: '70%', height: '5em', marginTop: '1em', cursor: 'pointer'
  })

  const handleExpand = (e) => {
    e.preventDefault();
    setIsShow(!isShow)
  }



  return (
    <>
      <Container fullWidth sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
        <Box sx={boxStyle} onClick={handleExpand} key='1'>

          {isShow && 'TEst'}
        </Box>
        <Box sx={boxStyle}>

        </Box>
        <Box sx={boxStyle}>

        </Box>
        <Box sx={boxStyle}>

        </Box>
        
      </Container>
    </>
  )
}
