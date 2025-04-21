import React from 'react'
import { FaShippingFast, FaLock, FaHeadset } from "react-icons/fa";
const Choose = () => {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        padding: '40px 0',
        backgroundColor: '#212529',
      };
    
      const cardStyle = {
        width: '300px',
        margin: '10px',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
      };
    
      const iconStyle = {
        fontSize: '3rem',
        color: '#007bff',
        marginBottom: '10px',
      };
    
      const titleStyle = {
        fontSize: '1.25rem',
        fontWeight: 'bold',
        marginBottom: '10px',
      };
    
      const descStyle = {
        fontSize: '1rem',
        color: '#555',
      };
    
  return (
    <div style={{borderTop:"white 2px solid"}} > 
        <h1 style={{color:"white",backgroundColor:'#212529' , margin:"0px", paddingTop:"20px",textAlign:"center"}}>Why Choose Us ? </h1>
       <div style={containerStyle}>
      <div style={cardStyle}>
        <FaShippingFast style={iconStyle} />
        <h4 style={titleStyle}>Fast Delivery</h4>
        <p style={descStyle}>Get your products delivered within 2–3 working days.</p>
      </div>

      <div style={cardStyle}>
        <FaLock style={iconStyle} />
        <h4 style={titleStyle}>Secure Payment</h4>
        <p style={descStyle}>100% secure payment with SSL encryption.</p>
      </div>

      <div style={cardStyle}>
        <FaHeadset style={iconStyle} />
        <h4 style={titleStyle}>24/7 Support</h4>
        <p style={descStyle}>We're here for you anytime, any day.</p>
      </div>
    </div>
 
    </div>
  )
}

export default Choose
