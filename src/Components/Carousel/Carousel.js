import React from 'react'
import img from "../../assets/Images/The_Cart.co (5).png"
import img2 from "../../assets/Images/The_Cart.co (6).png"
import img3 from "../../assets/Images/The_Cart.co (4).png"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel" // NOTE: If using Bootstrap 5
        data-bs-interval="4000" // Slide every 3 seconds
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
              
              <img className="d-block w-100" src={img}  alt="First slide" style={{filter: 'blur(1px) brightness(8px)'}}/>
          </div>
          <div className="carousel-item">
             
              <img className="d-block w-100" src={img2}  alt="Second slide" style={{filter: 'blur(1px) brightness(8px)'}}/>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={img3}
              alt="Third slide"
              style={{filter: 'blur(1px) brightness(8px)'}}
            />
          </div>
        </div>

        {/* Prev Button */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        {/* Next Button */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>

  )
}

export default Carousel
