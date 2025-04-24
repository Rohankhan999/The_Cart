import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from "../Components/Footer/Footer";
import Carousel from '../Components/Carousel/Carousel';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("No user found! Please sign up first.");
      return;
    }

    if (email === savedUser.email && password === savedUser.password) {
      alert("Login Successful!");
      localStorage.setItem("isLoggedIn", true); // optional for auth checks
      navigate("/dashboard"); // redirect after login
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div>
      <Carousel />
      <h1 className='text-center pt-5' style={{ backgroundColor: "#212529", margin: "0px", color: "white" }}>
        The Cart - <span style={{ color: "#0D6EFD" }}>Login</span>
      </h1>

      <div className="pt-5 pb-5 d-flex align-items-center justify-content-center min-vh-100" style={{ backgroundColor: "#212529" }}>
        <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>
          <p className="text-center mt-3">
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default Login;
