import { Box, Container, Button, Paper, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react';
import ChildInfo from './ChildInfo'
import FatherInfo from './FatherInfo'
import MotherInfo from './MotherInfo'
import GuardianInfo from './GuardianInfo'
import useTransfer from '../../hooks/useTransfer'
const SecondBox = ({data}) =>{
    const [infoStatus, setInfoStatus] = useState("child")
    const childInfo = data[0].data.childInfo;
    const motherInfo = data[0].data.motherInfo;
    const fatherInfo = data[0].data.fatherInfo;
    const guardianInfo = data[0].data.guardianInfo;
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
                    {infoStatus === "child" && <ChildInfo data={childInfo}/>}
                    {infoStatus === "father" && <FatherInfo data={fatherInfo}/>}
                    {infoStatus === "mother" && <MotherInfo data={motherInfo}/>}
                    {infoStatus === "guardian" && <GuardianInfo data={guardianInfo}/>}

                </Box>
            </Box>

        </>
    )
}


export default function RequestBoxEnrollment({data, dataID}) {
    const [isShow, setIsShow] = useState(false);
    const childInfo = data[0].data.childInfo;
    const motherInfo = data[0].data.motherInfo;
    const fatherInfo = data[0].data.fatherInfo;
    const guardianInfo = data[0].data.guardianInfo;
    const handleExpand = (e) => {
        e.preventDefault();
        setIsShow(!isShow);
        console.log(dataID)
      }
    const handleAccept = async (e) =>{
        e.stopPropagation();
        await useTransfer("EnrollmentAccepted", "EnrollmentRequest", dataID, data).then(()=>console.log("Transfer Succ fucking cess"))
    }
    const handleDecline = async (e) =>{
        e.stopPropagation();
        await e.stopProgation("EnrollmentRejected", "EnrollmentRequest", dataID, data);

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
              <Button variant='contained' onClick={handleAccept}>Accept</Button>
              <Button variant='contained' onClick={handleDecline}>Reject</Button>
            </Box>
          </Box>
          {isShow && <SecondBox data={data}/>}
        </Box>
    </>
  )
}