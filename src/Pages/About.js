import React from 'react';
import Carousel from '../Components/Carousel/Carousel';
import Footer from '../Components/Footer/Footer';

const About = () => {
  return (
    <div>
      <Carousel />
      <section style={{ backgroundColor: "#212529", margin:"0px" , color:"white" ,padding:"25px" }}>

        <h1 className="text-center mb-4 fw-bold">About <span style={{ color: "#0d6efd" }}>The Cart</span></h1>

        <p className="lead text-center mb-5">
          Welcome to <strong>The Cart</strong> — Your Trusted Mobile Destination!
        </p>

        <div className="row mb-5">
          <div className="col-md-6">
            <h4 className="fw-semibold">Why Choose Us?</h4>
            <ul className="list-unstyled mt-3">
              <li>✅ <strong>100% Genuine Products</strong> – Only official and sealed items.</li>
              <li>🚚 <strong>Fast & Secure Delivery</strong> – Straight to your doorstep.</li>
              <li>💬 <strong>24/7 Support</strong> – Friendly team always ready to help.</li>
              <li>💵 <strong>Easy Returns & Warranty</strong> – Buy with confidence.</li>
            </ul>
          </div>

          <div className="col-md-6">
            <h4 className="fw-semibold">Our Mission</h4>
            <p className="mt-3">
              To make premium mobile technology accessible to everyone by offering competitive pricing, secure shopping, and trusted service.
            </p>

            <h4 className="fw-semibold mt-4">Our Vision</h4>
            <p>
              To become Pakistan’s most trusted and loved online store for mobile phones and accessories — powered by innovation and your trust.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h5 className="fw-semibold">Join thousands of happy customers who’ve made The Cart their go-to mobile store.</h5>
          <p className="text-muted">Let’s upgrade your digital lifestyle — one phone at a time.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

