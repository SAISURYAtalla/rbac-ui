import React, { useState } from 'react';
import mockApi from '../mockApi/mockApi';

const RoleManagement = () => {
  const [roles, setRoles] = useState(mockApi.getRoles());
  const [newRole, setNewRole] = useState({ name: '', permissions: [] });

  const addRole = () => {
    mockApi.addRole(newRole);
    setRoles(mockApi.getRoles());
    setNewRole({ name: '', permissions: [] });
  };

  return (
    <div className="role-management">
      <h2>Role Management</h2>
      <div className="add-role">
        <input
          type="text"
          placeholder="Role Name"
          value={newRole.name}
          onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
        />
        <button onClick={addRole}>Add Role</button>
      </div>
      <ul>
        {roles.map((role, idx) => (
          <li key={idx}>
            {role.name} - Permissions: {role.permissions.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoleManagement;
