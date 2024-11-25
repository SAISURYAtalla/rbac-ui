let users = [
    { id: 1, name: 'John Doe', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', role: 'Editor', status: 'Inactive' },
  ];
  
  let roles = [
    { name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
    { name: 'Editor', permissions: ['Read', 'Write'] },
  ];
  
  const mockApi = {
    getUsers: () => users,
    addUser: (user) => {
      users.push({ ...user, id: users.length + 1 });
    },
    deleteUser: (id) => {
      users = users.filter((user) => user.id !== id);
    },
    getRoles: () => roles,
    addRole: (role) => {
      roles.push(role);
    },
  };
  
  export default mockApi;
  