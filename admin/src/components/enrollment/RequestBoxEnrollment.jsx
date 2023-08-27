import { Box, Container, Button, Paper, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react';
import ChildInfo from './ChildInfo'
import FatherInfo from './FatherInfo'
import MotherInfo from './MotherInfo'
import GuardianInfo from './GuardianInfo'
const SecondBox = ({data}) =>{
    const [infoStatus, setInfoStatus] = useState("child")
    return(
        <>
            <Box sx={{ height: '15em', border: '1px solid red' }}>
                <Box sx={{height: '10%', border: '1px solid red', display:'flex',
                         justifyContent:'center', alignItems:'center'}}>
                    <Button onClick={(e)=> {
                        e.stopPropagation()
                        setInfoStatus("child")}}
                    >Child Information</Button>
                    <Button onClick={(e)=> {
                        e.stopPropagation()
                        setInfoStatus("father")}}
                    >Father Information</Button>
                    <Button onClick={(e)=> {
                        e.stopPropagation()
                        setInfoStatus("mother")}}
                    >Mother Information</Button>
                    <Button onClick={(e)=> {
                        e.stopPropagation()
                        setInfoStatus("guardian")}}
                    >Guardian Information</Button>
                </Box>
                <Box sx={{border:'1px solid pink', height: '90%'}}>
                    {infoStatus === "child" && <h1>Child</h1>}
                    {infoStatus === "father" && <h1>father</h1>}
                    {infoStatus === "mother" && <h1>mother</h1>}
                    {infoStatus === "guardian" && <h1>guardian</h1>}

                </Box>
            </Box>

        </>
    )
}


export default function RequestBoxEnrollment({data}) {
    const [isShow, setIsShow] = useState(false);
    const childInfo = data[0].data.childInfo;
    const motherInfo = data[0].data.motherInfo;
    const fatherInfo = data[0].data.fatherInfo;
    const guardianInfo = data[0].data.guardianInfo;
    const handleExpand = (e) => {
        e.preventDefault();
        setIsShow(!isShow);
        console.log(data[0].data.childInfo)
      }
    const boxStyle = {

        flex: 'none',
        width: '100%',
        height: isShow ? 'auto' : '5em', // Adjust the height to 'auto' when expanded, otherwise '5em'
        cursor: 'pointer',
        display: 'flex', // Make the parent Box a flex container
        flexDirection: 'column', // Stack the child Boxes vertically
        boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'
      }
  return (
    <>
        <Box sx={boxStyle}  onClick={handleExpand}>
          <Box sx={{ height: '2em',
             display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1em' }}>
             <h4>{childInfo.childFirstName} {childInfo.childLastName}</h4>
            <Box sx={{display: 'flex', gap: '1em'}}>
              <Button variant='contained' >Accept</Button>
              <Button variant='contained' >Reject</Button>
            </Box>
          </Box>
          {isShow && <SecondBox data={data}/>}
        </Box>
    </>
  )
}
