import React from 'react';
import Navbar from './components/Navbar';
import UserManagement from './components/UserManagement';
import RoleManagement from './components/RoleManagement';
import './App.css';

function App() {
  const [currentView, setCurrentView] = React.useState('users');

  return (
    <div className="App">
      <Navbar setCurrentView={setCurrentView} />
      {currentView === 'users' && <UserManagement />}
      {currentView === 'roles' && <RoleManagement />}
    </div>
  );
}

export default App;
