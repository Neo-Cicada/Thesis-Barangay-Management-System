import React from 'react'
import { Box, Container, Button, Paper } from '@mui/material'
import { useState } from 'react'


const SecondBox = () =>{

    return(
        <>
            <Box sx={{ height: '10em  ' }}>
            

            </Box>

        </>
    )
}




export default function RequestBox(data) {

    const information = data.data

    const [isShow, setIsShow] = useState(false)
    const handleExpand = (e) => {
        e.preventDefault();
        setIsShow(!isShow)
      }
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

  return (
    <>
      <Box sx={boxStyle} onClick={handleExpand} key='1'>
          <Box sx={{ height: '2em',
             display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1em' }}>
            <h4>{information.data.firstname} {information.data.lastname} </h4>
            <Box sx={{display: 'flex', gap: '1em'}}>
              <Button variant='contained' onClick={(e)=>e.stopPropagation()}>Accept</Button>
              <Button variant='contained' onClick={()=>console.log(information)}>Reject</Button>
            </Box>

          </Box>
          {isShow && <SecondBox />}
        </Box>
    </>
  )
}
