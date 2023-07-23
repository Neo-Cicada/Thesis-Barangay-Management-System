import React from 'react'
import { Box, Button} from '@mui/material';
import { useState } from 'react';

const CompleteBox = () => {
    const [isShow, setIsShow] = useState(false)
    const handleExpand = (e) => {
        e.preventDefault();
        setIsShow(!isShow);
    }
    const boxStyle = {
        marginTop: '1em',
        flex: 'none',
        width: '100%',
        height: isShow ? 'auto' : '5em', // Adjust the height to 'auto' when expanded, otherwise '5em'
        cursor: 'pointer',
        display: 'flex', // Make the parent Box a flex container
        flexDirection: 'column', // Stack the child Boxes vertically
        boxShadow: 'rgba(144, 238, 144, 0.7) 0px 2px 4px 0px, rgba(144, 238, 144, 0.5) 0px 4px 10px 2px'

    }
    return (
        <>
            <Box sx={boxStyle} onClick={handleExpand}>
                <Box sx={{
                    height: '2em',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1em'
                }}>
                    <h4>Hello world</h4>
                    <Button>Mark as done</Button>
                </Box>
                {isShow && <h1>This is where more data go</h1>}
            </Box>
        </>
    )
}
export default CompleteBox;