import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/Signup.css'; // Import the Signup.css file

export default function Signup() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    Geolocation: ""
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.Geolocation}))
      const response = await fetch("http://localhost:5000/api/createuser", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.Geolocation})
      });
      const json = await response.json()
      console.log(json);

      if (!json.success) {
          alert("Enter valid credentials")
      }
      if (json.success) {
        localStorage.setItem("authToken", json.authToken);
        console.log(localStorage.getItem("authToken"))
        navigate("/");
    }
  
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="form-title" style={{fontWeight:'bold'}}>Sign up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="name"
              value={credentials.name}
              onChange={onChange}
            />
          </div>
          <div className="form-group">

            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="email"
              value={credentials.email}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="password"
              value={credentials.password}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            
            <input
              type="text"
              className="form-control"
              name="Geolocation"
              placeholder="address"
              value={credentials.Geolocation}
              onChange={onChange}
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="submit-btn" style={{padding:'5px 10px'}}>
              Sign up
            </button>
            <p className='login-account-link'>Already a user?{" "}
            <Link to="/login">Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}
