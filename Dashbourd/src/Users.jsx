import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from your API using Axios
    axios.get('http://localhost:3000/Users')
      .then(response => {
        // Update the state with the fetched data
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  const handleSave = (userData) => {
    // Send a request to update the user data on the server
    axios.put(`http://localhost:3000/Users/${userData.id}`, userData)
      .then(response => {
        // Handle success, e.g., show a success message
        console.log('User data updated successfully:', response.data);

        // Optionally, you can update the local state with the new data
        setUsers(prevUsers => prevUsers.map(user =>
          user.id === userData.id ? { ...user, ...userData } : user
        ));
      })
      .catch(error => {
        // Handle error, e.g., show an error message
        console.error('Error updating user data:', error);
      });
  };

  const handleDelete = (userId) => {
    // Optimistically remove the user from the local state
    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));

    // Send a request to delete the user from the server
    axios.delete(`http://localhost:3000/Users/${userId}`)
      .then(response => {
        // Handle success, e.g., show a success message
        console.log('User deleted successfully:', response.data);
      })
      .catch(error => {
        // Handle error, e.g., show an error message
        console.error('Error deleting user:', error);

        // Roll back the state if the request fails
        axios.get('http://localhost:3000/Users')
          .then(response => {
            // Update the state with the fetched data
            setUsers(response.data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      });
  };

  const handleInputChange = (userId, field, value) => {
    // Update the local state with the changed input value
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === userId ? { ...user, [field]: value } : user
      )
    );
  };

  return (
    <div className="text-gray-900 bg-white">
     <div className="p-4 flex">
     
      </div>
      <div className="px-3 py-4 flex justify-center">
        <table className="w-8/12 text-md bg-[#9DB2BF] shadow-md rounded mb-4 ml-64">
          <thead>
            <tr className="border-b">
              <th className="text-left p-3 px-5">Name</th>
              <th className="text-left p-3 px-5">Email</th>
              <th className="text-left p-3 px-5">Role</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={index}
                className={`border-b hover:bg-orange-100 ${index % 2 === 0 ? 'bg-[#DDE6ED]' : ''}`}
              >
                <td className="p-3 px-5">
                  <input
                    type="text"
                    value={user.name}
                    className="bg-transparent"
                    onChange={(e) => handleInputChange(user.id, 'name', e.target.value)}
                  />
                </td>
                <td className="p-3 px-5">
                  <input
                    type="text"
                    value={user.email}
                    className="bg-transparent"
                    onChange={(e) => handleInputChange(user.id, 'email', e.target.value)}
                  />
                </td>
                <td className="p-3 px-5">
                  <select
                    value={user.role}
                    className="bg-transparent"
                    onChange={(e) => handleInputChange(user.id, 'role', e.target.value)}
                  >
                    <option value="user">user</option>
                    <option value="admin">admin</option>
                  </select>
                </td>
                <td className="p-3 px-5 flex justify-end">
                  <button
                    type="button"
                    className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => handleSave(user)}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
