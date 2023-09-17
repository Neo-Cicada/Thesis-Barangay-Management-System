import React, { useState, useEffect } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import useUploadDirectly from '../../hooks/useUploadDirectly';
import useRead from '../../hooks/useRead';

export default function ProfileInformation() {
  const [currentUser, setCurrentUser] = useState('');
  const [profileData, setProfileData] = useState({
    fullname: '',
    email: '',
    phoneNumber: ''
  });
  const [data, setData] = useState([]);
  useRead('ProfileData', setData);
  const userEmail = data.filter(item => item.email === profileData.email)
    .map(item  => <h1>{item.fullname}</h1>)

    useEffect(() => {
    const auth = getAuth();

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user.email);
        setProfileData({...profileData, email: user.email})
      } else {
      }
    });

    return () => unsubscribe();
  }, []);



  const onUpdateProfile = async (e) => {
    await useUploadDirectly('ProfileData', profileData)
    // console.log(data);
  }

  return (
    <Box sx={{
      height: '100%',
      width: '70%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1em'
    }}>
      <TextField
        variant='standard'
        label="Fullname"
        sx={{ width: 200 }}
        onChange={(e) => setProfileData({ ...profileData, fullname: e.target.value })}
      />
      <TextField
        variant='standard'
        value={currentUser}
        label="Email"
        onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}

        InputLabelProps={{ shrink: !!currentUser }}
        sx={{ width: 200 }}
      />
      <TextField
        onChange={(e) => setProfileData({ ...profileData, phoneNumber: e.target.value })}
        variant='standard'
        label="Phone Number"
        sx={{ width: 200 }}
      />
      <Box sx={{ width: 200 }}>
        <Button variant='outlined' onClick={onUpdateProfile}>Save</Button>
      </Box>
    </Box>
  )
}
