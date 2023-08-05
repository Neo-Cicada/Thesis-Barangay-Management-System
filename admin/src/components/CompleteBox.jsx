import React from 'react'
import { Box, Button, Typography, Skeleton } from '@mui/material'
import { useState } from 'react'
import useRead from '../hooks/useRead'

const SecondBox = ({ data }) => {

    return (
        <>
            <Box sx={{ height: '10em  ' }}>
                <Typography>
                    First name: {data.data.data.data.firstname}
                </Typography>
                <Typography>
                    Last name: {data.data.data.data.lastname}
                </Typography>
                <Typography>
                    Email Address: {data.data.data.data.email}
                </Typography>
                <Typography>
                    Phone Number: {data.data.data.data.phoneNumber}
                </Typography>
                <Typography>Equipment: {data.data.data.data.equipment}</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1em' }}>
                    <Typography>
                        Start date: {data.data.data.data.startDate}
                    </Typography><Typography>
                        End date: {data.data.data.data.endDate}
                    </Typography>
                </Box>
            </Box>

        </>
    )
}




const CompleteBox = ({data}) => {
    const [isShow, setIsShow] = useState(false)
    const handleExpand = (e) => {
        e.preventDefault();
        setIsShow(!isShow);
        console.log(data.data.data.data.email)
    }


    const boxStyle = {

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
                     <h4>{data.data.data.data.firstname} {data.data.data.data.lastname}</h4>
                </Box>
                {isShow && <SecondBox data={data}/>}
            </Box>
        </>
    )
}
export default CompleteBox;