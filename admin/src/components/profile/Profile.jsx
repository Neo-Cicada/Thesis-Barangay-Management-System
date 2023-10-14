import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
  const [users, setUsers] = useState([]);

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

  const handleUpdateUser = (uid) => {
    const updatedUserData = {
      displayName: 'New Display Name', // Replace with the updated data
      email: 'newemail@example.com',    // Replace with the updated data
    };

    axios.put(`http://localhost:3001/api/updateUser/${uid}`, updatedUserData)
      .then(response => {
        // Handle the response, e.g., show a success message
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error updating user:', error);
      });
  };

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
    <div>
      <h2>User List:</h2>
      <ul>
        {users.map(user => (
          <li key={user.uid}>
            {user.email}
            <button onClick={() => handleUpdateUser(user.uid)}>Update</button>
            <button onClick={() => handleDeleteUser(user.uid)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
