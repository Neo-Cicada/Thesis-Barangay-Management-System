import * as React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import CardMembershipOutlinedIcon from '@mui/icons-material/CardMembershipOutlined';
import FamilyRestroomOutlinedIcon from '@mui/icons-material/FamilyRestroomOutlined';
import HouseSidingOutlinedIcon from '@mui/icons-material/HouseSidingOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import { useState, useEffect } from 'react';





export default function FormMenu() {
  const location = useLocation();
  const loc = location.pathname
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // console.log(windowWidth )
  const activeLink = {
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    borderBottom: '3px solid blue'

  }
  const normalLink = {
    color: 'blue',
    display: 'flex',
    flexDirection: 'column',

  }
  // console.log(loc)
  return (
    <>
      <Box sx={{display: 'flex', gap: '1em', width: '100%', justifyContent: 'center'}}>

        <Button
          to="certificate-request-form"
          component={Link}
          sx={loc === '/forms/certificate-request-form' ? activeLink : normalLink} >

          <CardMembershipOutlinedIcon /> <Typography> Certificate</Typography>

        </Button>
        <Button
          to="enrollment-request-form"
          component={Link}
          sx={loc === '/forms/enrollment-request-form' ? activeLink : normalLink}
        >
          <FamilyRestroomOutlinedIcon />
          Enrollment
        </Button>
        <Button
          to="facility-request-form"
          component={Link}
          sx={loc === '/forms/facility-request-form' ? activeLink : normalLink}
        >

          <HouseSidingOutlinedIcon /> Facility
        </Button>
        <Button
          to="medicine-request-form"
          component={Link}
          sx={loc === '/forms/medicine-request-form' ? activeLink : normalLink}
        >
          <MedicalServicesOutlinedIcon /> Medicine
        </Button>
        <Button
          to="equipment-request-form"
          component={Link}

          sx={loc === '/forms/equipment-request-form' ? activeLink : normalLink}
        >
          <BookmarkAddIcon /> Equipment
        </Button>

      </Box>
    </>

  );
}