import React from "react";
import Footer from "../Components/Footer/Footer";
import Carousel from "../Components/Carousel/Carousel";

const Login = () => {
  return (
    <div>
    <Carousel/>
    <h1 className='text-center pt-5' style={{backgroundColor: "#212529" , margin:"0px" , color:"white"}}>The Cart - <span style={{color:"#0D6EFD"}}>Login</span></h1>
    <div className="d-flex align-items-center justify-content-center min-vh-100" style={{backgroundColor: "#212529"}} >
      <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Welcome Back</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter password" />
          </div>
          <div className="mb-3 form-check d-flex justify-content-between">
            <div>
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label ms-2" htmlFor="rememberMe">Remember Me</label>
            </div>
            <a href="/forgot-password" className="text-decoration-none">Forgot Password?</a>
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <p className="text-center mt-3">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Login;
