import React, { useState, useEffect } from 'react';

import Main from "./components/Main";
import Login from "./components/Login";

function App() {
  // Check if the user is authenticated from localStorage on component initialization
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );

  // useEffect to update localStorage when isAuthenticated changes
  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);

  const handleSignout = async () => {
    // Perform sign out logic here
    setIsAuthenticated(false); // Update the state to reflect logout
  };

  return (
    <>
      {isAuthenticated ? <Main handleSignout={handleSignout}/> : <Login setLoginStatus={setIsAuthenticated} />}
    </>
  );
}

export default App;
