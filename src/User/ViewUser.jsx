import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ViewUser = () => {
  let { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    loaduser(id);
  }, [id]);

  const loaduser = async (id) => {
    const resp = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(resp.data);
  };
  console.log(user);
  return (
    <div className="row m-5">
      <div className="col-4 offset-4 shadow">
        <ul className="list-group">
          <li className="list-group-item active">{user.name}</li>
          <li className="list-group-item">{user.username}</li>
          <li className="list-group-item">{user.email}</li>
          <li className="list-group-item">{user.phone}</li>
          <li className="list-group-item">{user.website}</li>
        </ul>
        <Link to="/" className="btn btn-block btn-primary mt-3 mb-3">
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default ViewUser;
