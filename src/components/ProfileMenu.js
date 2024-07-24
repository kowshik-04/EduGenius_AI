import React, { useState } from 'react';
import '../styles.css'; // Correct path

function ProfileMenu() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Implement login functionality
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Implement logout functionality
    setIsLoggedIn(false);
  };

  return (
    <div className="profile-menu">
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <div>
          <button onClick={() => alert('Redirect to login')}>Login</button>
          <button onClick={() => alert('Redirect to signup')}>Sign Up</button>
        </div>
      )}
    </div>
  );
}

export default ProfileMenu;
