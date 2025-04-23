import React from 'react'
import Footer from "../Components/Footer/Footer"
import  Carousel  from '../Components/Carousel/Carousel'
const Signup = () => {

 return(
  <div>
    
  <Carousel/>
  <h1 className='text-center pt-5' style={{backgroundColor: "#212529" , margin:"0px" , color:"#0D6EFD"}}>Sign Up</h1>
  <div className="pt-5 pb-5 d-flex align-items-center justify-content-center min-vh-100" style={{ backgroundColor: "#212529" }}>
    
  <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
    <h2 className="text-center mb-4">Create Account</h2>
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Full Name</label>
        <input type="text" className="form-control" id="name" placeholder="Enter your name" />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" placeholder="Enter your email" />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" placeholder="Enter password" />
      </div>
      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
        <input type="password" className="form-control" id="confirmPassword" placeholder="Re-enter password" />
      </div>
      <button type="submit" className="btn btn-primary w-100">Sign Up</button>
    </form>
    <p className="text-center mt-3">
      Already have an account? <a href="/login">Login</a>
    </p>
  </div>
</div>
<Footer/>
</div>
 )
}

export default Signup
