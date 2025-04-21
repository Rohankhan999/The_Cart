import React from 'react';
import Carousel from '../Components/Carousel/Carousel';
import Footer from '../Components/Footer/Footer';

const Contact = () => {
  return (
    <div>   
       <Carousel/>
    <div style={{backgroundColor:"#212529",padding:"30px" , color:"white"}}>
      <h1 className="text-center mb-4 fw-bold">Contact <span style={{ color: "#0d6efd" }}>Us</span></h1>

      <p className="lead text-center mb-5">
        We’d love to hear from you! Feel free to reach out for any queries, support, or feedback.
      </p>

      <div className="row">
        <div className="col-md-6 mb-4">
          <h4 className="fw-semibold">Contact Information</h4>
          <ul className="list-unstyled mt-3">
            <li><strong>Phone:</strong> <a href="tel:+92333593880">0333-593880</a>, <a href="tel:+923194970983">0319-4970983</a></li>
            <li><strong>Email:</strong> <a href="mailto:rohankhan08453@gmail.com">rohankhan08453@gmail.com</a></li>
            <li><strong>Address:</strong> Landhi, Karachi, Pakistan</li>
          </ul>
        </div>

        <div className="col-md-6">
          <h4 className="fw-semibold">Get in Touch</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your full name" required />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Write your message here..." required></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </div>

  );
};

export default Contact;
