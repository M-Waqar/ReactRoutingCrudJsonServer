import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { v4 as v4uuid } from "uuid";

function Home() {
  const [users, setusers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const response = await axios.get("http://localhost:3001/users");
    if (response.status === 200) {
      setusers(response.data);
    }
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <table className="table mt-5 border shadow">
        <thead className="text-light bg-primary">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">WebSite</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={v4uuid()}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
                <td>
                  <Link
                    to={`/viewuser/${user.id}`}
                    className="btn btn-sm mr-2 btn-primary"
                  >
                    View
                  </Link>
                  <Link
                    to={`/edituser/${user.id}`}
                    className="btn btn-sm mr-2 btn-primary"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={(e) => handleDelete(user.id)}
                    className="btn btn-sm mr-2 btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
