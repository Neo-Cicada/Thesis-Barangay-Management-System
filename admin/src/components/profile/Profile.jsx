import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './profile.css'
import { Container } from '@mui/material'
import DashboardBox from '../DashboardBox'
import EditIcon from '@mui/icons-material/Edit';
import ChecklistIcon from '@mui/icons-material/Checklist'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import ProfileNavigation from './ProfileNavigation';
import CreateAdmin from './CreateAdmin'
import UpdateProfile from './UpdateProfile';
const auth = getAuth();

function Profile() {
  const setTestuser = auth.currentUser;
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState('default')
  const [currentUser, setCurrentUser] = useState('')
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [updateUser, setUpdateUser] = useState()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {

        const uid = user.email;

        setCurrentUser(uid)
      } else {
        // User is signed out
        // ...
      }
    });
  }, [])

  useEffect(() => {
    console.log('executing');
    axios.get('http://localhost:3001/api/listUsers')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);


  const handleDeleteUser = (uid) => {
    axios.delete(`http://localhost:3001/api/deleteUser/${uid}`)
      .then(response => {
        // Handle the response, e.g., show a success message
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };

  return (
    <>

      <Container sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h3 style={{ fontSize: '2rem', fontWeight: "bold", color: '#3B5998' }}> Admin List</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <DashboardBox
            name="Total Admins"
            numbers={users.length}
            logo={<ChecklistIcon />} />
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid #3B5998',
            alignItems: 'center',
            justifyContent: 'center',
            height: '6em',
            paddingLeft: '1em',
            paddingRight: '1em',

            width: 'auto',
            borderRadius: '1',
            boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
          }}>
            <p style={{ fontWeight: "bold", color: '#3B5998' }}>Signedin Admin</p>
            <p>{currentUser}</p>
          </div>
        </div>
        <ProfileNavigation status={status} setStatus={setStatus} currentUser={currentUser} />
        {status === "default" && <ul style={{ listStyle: 'none', width: '100%' }}>
          {users.length <= 0 ? (
            <li>Fetching Data</li>
          ) : (
            users.map(user => (
              <li className='admin-list' key={user.uid}>
                <p style={{ fontWeight: 500, fontSize: '1.2rem' }}> {user.email}</p>
                <div className='list-action'>
                  {(currentUser === user.email) && (
                    <div style={{ display: 'flex', gap: '2px', cursor: 'pointer' }}
                      onClick={() => { setIsUpdateOpen(true), setUpdateUser(user.uid) }}>
                      <EditIcon color="info" /> <span>Update</span></div>
                  )}

                  {
                    currentUser === "test@gmail.com" &&
                    <button onClick={() => handleDeleteUser(user.uid)}>Delete</button>

                  }
                </div>

              </li>
            ))
          )}
        </ul>}
        {status === "second" && currentUser === "test@gmail.com" && <CreateAdmin />}
      </Container>
      <UpdateProfile open={isUpdateOpen} onClose={() => setIsUpdateOpen(false)} user={updateUser} />
    </>
  );
}

export default Profile;
