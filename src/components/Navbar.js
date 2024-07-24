import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';  // Correct path
import ProfileMenu from './ProfileMenu';  // Import ProfileMenu

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">EduGenius AI</Link>
      </div>
      <div className="navbar-menu">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </div>
      <div className="navbar-profile">
        <ProfileMenu />
      </div>
    </nav>
  );
}

export default Navbar;
