import React, { useState } from 'react';
import mockApi from '../mockApi/mockApi';

const UserManagement = () => {
  const [users, setUsers] = useState(mockApi.getUsers());
  const [newUser, setNewUser] = useState({ name: '', role: '', status: 'Active' });

  const addUser = () => {
    mockApi.addUser(newUser);
    setUsers(mockApi.getUsers());
    setNewUser({ name: '', role: '', status: 'Active' });
  };

  const deleteUser = (id) => {
    mockApi.deleteUser(id);
    setUsers(mockApi.getUsers());
  };

  return (
    <div className="user-management">
      <h2>User Management</h2>
      <div className="add-user">
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Role"
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        />
        <button onClick={addUser}>Add User</button>
      </div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.role} - {user.status}{' '}
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
