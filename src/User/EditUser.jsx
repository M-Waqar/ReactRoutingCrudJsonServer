import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams();
  const history = useHistory();
  const [user, setUser] = useState({});

  useEffect(() => {
    loaduser(id);
  }, [id]);

  const loaduser = async (id) => {
    const res = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/users/${id}`, user);
    history.push("/");
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div className="mt-5 p-5 border shadow">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={(e) => handleChange(e)}
                className="form-control"
                placeholder="Name"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">User Name</label>
            <div className="col-sm-10">
              <input
                type="text"
                name="username"
                value={user.username}
                onChange={(e) => handleChange(e)}
                className="form-control"
                placeholder="User Name"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input
                type="text"
                name="email"
                value={user.email}
                onChange={(e) => handleChange(e)}
                className="form-control"
                placeholder="email"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Phone</label>
            <div className="col-sm-10">
              <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={(e) => handleChange(e)}
                className="form-control"
                placeholder="Phone"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Website</label>
            <div className="col-sm-10">
              <input
                type="text"
                name="website"
                value={user.website}
                onChange={(e) => handleChange(e)}
                className="form-control"
                placeholder="Website"
              />
            </div>
          </div>
          <div className="text-center">
            <button className="btn btn-primary mr-2">Edit User</button>
            <Link to="/" className="btn btn-outline-primary">
              Back To Home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
