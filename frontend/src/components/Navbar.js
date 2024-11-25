import React from 'react';

const Navbar = ({ setCurrentView }) => {
  return (
    <nav className="navbar">
      <button onClick={() => setCurrentView('users')}>User Management</button>
      <button onClick={() => setCurrentView('roles')}>Role Management</button>
    </nav>
  );
};

export default Navbar;
