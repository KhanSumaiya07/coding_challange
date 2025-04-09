import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      alert("Invalid email format");
      return;
    }

    if (form.password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    localStorage.setItem("userCredentials", JSON.stringify(form));
    alert("Signup successful!");
    navigate("/login");
  };

  return (
    <div className="page-wrapper">
      <form onSubmit={handleSubmit} className="login-wrapper">
        <h3 className="page-heading">Register</h3>
        <div className="container">
          <div className="inputs-container">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="inputs-container">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="inputs-container">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
          <div style={{ display: "flex", gap: "4px", marginTop: "10px" }}>
            <span style={{ fontSize: "14px" }}>Already registered?</span>
            <Link className="reg-link" to="/login">
              Login
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
