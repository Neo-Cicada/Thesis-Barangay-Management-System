import React from 'react'
import { Box, Button } from '@mui/material'
import { useState } from 'react'
import useTransfer from '../hooks/useTransfer'
const OngoingBox = ({onTransfer}) => {
    const [isShow, setIsShow] = useState(false)
    const handleExpand = (e) => {
        e.preventDefault();
        setIsShow(!isShow);
    }
   
    const boxStyle = {
        flex: 'none',
        width: '100%',
        height: isShow ? 'auto' : '5em', // Adjust the height to 'auto' when expanded, otherwise '5em'
        cursor: 'pointer',
        display: 'flex', // Make the parent Box a flex container
        flexDirection: 'column', // Stack the child Boxes vertically
        boxShadow: 'rgba(255, 200, 0, 0.5) 0px 2px 4px 0px, rgba(255, 200, 0, 0.3) 0px 4px 10px 2px'

    }

    return (
        <>
            <Box sx={boxStyle} onClick={handleExpand}>
                <Box sx={{
                    height: '2em',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1em'
                }}>
                    <h4>Hello world</h4>
                    <Button onClick={onTransfer}>Mark as done</Button>
                </Box>
                {isShow && <h1>This is where more data go</h1>}
            </Box>
        </>
    )
}

export default OngoingBox;