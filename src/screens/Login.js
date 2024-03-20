import { useState } from "react";
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css'; // Import your custom CSS file for styling

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json();

    if (!json.success) {
      alert("Enter valid credentials");
    }
    if (json.success) {
      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("authToken", json.authToken);
      navigate("/");
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div className='login-container'>
      <div className='login-card'>
        <h4 style={{fontWeight:'bold'}}>Login</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            
            <input type="email" className="form-control" name='email' placeholder="email" value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" name='password' placeholder="password" value={credentials.password} onChange={onChange} id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-success" style={{padding:'5px 10px'}}>Log in</button>
        </form>
        <p className='create-account-link'>
          Don't have an account? <Link to="/creatuser">Create one</Link>
        </p>
      </div>
    </div>
  );
}
