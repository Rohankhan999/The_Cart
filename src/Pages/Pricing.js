import React from 'react';
import Footer from '../Components/Footer/Footer';
import Carousel from '../Components/Carousel/Carousel';

const pricingData = [
  {
    title: "Samsung Galaxy A14",
    price: "Rs. 45,999",
    features: ["4GB RAM", "64GB Storage", "5000mAh Battery"],
  },
  {
    title: "iPhone 13",
    price: "Rs. 199,999",
    features: ["128GB Storage", "A15 Bionic Chip", "Dual Camera"],
  },
  {
    title: "Infinix Note 30",
    price: "Rs. 39,999",
    features: ["8GB RAM", "256GB Storage", "33W Fast Charging"],
  },
  {
    title: "Realme C55",
    price: "Rs. 35,999",
    features: ["6GB RAM", "128GB Storage", "90Hz Display"],
  },
  {
    title: "Xiaomi Redmi Note 12",
    price: "Rs. 48,999",
    features: ["6GB RAM", "128GB Storage", "Snapdragon 685"],
  },
  {
    title: "iPhone SE (2022)",
    price: "Rs. 129,999",
    features: ["A15 Bionic", "4.7” Display", "64GB Storage"],
  },
  {
    title: "Tecno Spark 10",
    price: "Rs. 29,999",
    features: ["8GB RAM", "128GB Storage", "Dual Flash"],
  },
  {
    title: "Vivo Y22",
    price: "Rs. 41,999",
    features: ["4GB RAM", "64GB Storage", "18W Fast Charge"],
  },
  {
    title: "Motorola G13",
    price: "Rs. 34,999",
    features: ["4GB RAM", "128GB Storage", "Stereo Speakers"],
  },
];

const Pricing = () => {
  return (
    <div>
      <Carousel/>
    <div className="text-white" style={{backgroundColor:"#212529"}}>
      <h2 className="text-center mb-4 fw-bold pt-5 pb-5">Best Deals from <span style={{color:"#0d6efd"}}>The Mart</span></h2>
      <div  style={{display:"flex" , justifyContent:"center" , gap:"30px" , flexWrap:"wrap" , paddingBottom:"30px"}}>
        {pricingData.map((item, index) => (
          <div className="col-md-4 col-sm-6" key={index}>
            <div className="card h-100 w-100 shadow text-center">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <h3 className="text-primary">{item.price}</h3>
                <ul className="list-unstyled mt-3 mb-4">
                  {item.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <button className="btn btn-dark">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Pricing;
