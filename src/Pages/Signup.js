import React, { useState } from 'react'
import Footer from "../Components/Footer/Footer"
import Carousel from '../Components/Carousel/Carousel'

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault(); // Page reload se bachaata hai

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // User data object
    const user = {
      name,
      email,
      password
    };

    // Save user to localStorage
    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup Successful!");
    
    // Reset form (optional)
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div>
      <Carousel />
      <h1 className='text-center pt-5' style={{ backgroundColor: "#212529", margin: "0px", color: "white" }}>
        The Cart - <span style={{ color: "#0D6EFD" }}>SignUp</span>
      </h1>

      <div className="pt-5 pb-5 d-flex align-items-center justify-content-center min-vh-100" style={{ backgroundColor: "#212529" }}>
        <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
          <h2 className="text-center mb-4">Create Account</h2>
          <form onSubmit={handleSignup}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Sign Up</button>
          </form>
          <p className="text-center mt-3">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Signup;
