import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (user && isLoggedIn) {
      setUserName(user.name);
      setUserEmail(user.email);
    } else {
      navigate("/login"); // agar login nahi hai to redirect
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className='d-flex justify-content-center align-items-center min-vh-100 bg-dark text-white flex-column'>
      <h1>Welcome, <span style={{ color: '#0D6EFD' }}>{userName}</span>! 🎉</h1>
      <p className="mb-1">Your email: <span style={{ color: '#ffc107' }}>{userEmail}</span></p>
      <p>This is your dashboard.</p>
      <button className='btn btn-danger mt-3' onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
