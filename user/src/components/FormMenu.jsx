import * as React from 'react';
import { Box, Container, ThemeProvider, createTheme, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import CardMembershipOutlinedIcon from '@mui/icons-material/CardMembershipOutlined';
import FamilyRestroomOutlinedIcon from '@mui/icons-material/FamilyRestroomOutlined';
import HouseSidingOutlinedIcon from '@mui/icons-material/HouseSidingOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';






export default function FormMenu() {

  return (
    <>
      <Box sx={{display: 'flex', gap: '1em'}}>
        
          <Link to="certificate-request-form" activeClassName="active">
           <CardMembershipOutlinedIcon/> Certificate
          </Link>
          <Link to="enrollment-request-form">
            <FamilyRestroomOutlinedIcon/>
            Enrollment
          </Link>
          <Link to="facility-request-form">
            <HouseSidingOutlinedIcon/> Facility
          </Link>
          <Link to="medicine-request-form">
            <MedicalServicesOutlinedIcon/> Medicine
          </Link>
          <Link to="equipment-request-form">
            <BookmarkAddIcon/> Equipment
          </Link>
        
      </Box>
    </>

  );
}