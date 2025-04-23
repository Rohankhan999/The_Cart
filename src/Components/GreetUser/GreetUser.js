import React from 'react'

const GreetUser = () => {
    const cardStyle = {
        width: '18rem',
        margin: '20px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        
      };
    
      const cardBodyStyle = {
        padding: '15px',
        textAlign: 'center',
        backgroundColor: "white",
        color: '#555',
      };
    
      const cardTitleStyle = {
        fontSize: '1.25rem',
        fontWeight: 'bold',
        marginBottom: '10px',
      };
    
      const cardTextStyle = {
        fontSize: '1rem',
        color: '#555',
      };
    
      const cardButtonStyle = {
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        textDecoration: 'none',
      };
  return (
    <div>
            <section style={{ backgroundColor: "#212529", color: "whitesmoke", fontFamily: "poppins", textAlign: "center", fontWeight: "900", margin: "0px" , paddingBottom:"20px" }}>
        <h1 style={{ paddingTop: "30px" }}>Welcome to <span className='fw-bold' style={{ color: "#0d6efd", fontWeight: "900" }}>The_Cart</span></h1>
        <p style={{ padding: "15px", textTransform: "capitalize", fontSize: "22px" }}>"Welcome to our online store, Rohan! We’re excited to have you here. Explore a wide range of products at amazing prices, carefully selected to fit your needs. Whether you’re shopping for the latest trends, exclusive deals, or unique gifts, we’ve got something for everyone. Start browsing now and enjoy a seamless shopping experience!"</p>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {/* Featured Products Card */}
          <div style={cardStyle}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4tEUuU5LYffMWQ6H1CqYJZGSSYy2lCqmB7w&s"
              alt="Featured Product"
              style={{ width: '100%' }}
            />
            <div style={cardBodyStyle}>
              <h5 style={cardTitleStyle}>Featured Product</h5>
              <p style={cardTextStyle}>High-quality product with great reviews. Limited time offer!</p>
              <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>$899.99</p>
              <a href="#" style={cardButtonStyle}>Shop Now</a>
            </div>
          </div>

          {/* Best Sellers Card */}
          <div style={cardStyle}>
            <img
              src="data:image/jpeg;base64,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"
              alt="Best Seller"
              style={{ width: '100%' }}
            />
            <div style={cardBodyStyle}>
              <h5 style={cardTitleStyle}>Best Seller</h5>
              <p style={cardTextStyle}>Top-rated product loved by our customers. Don’t miss out!</p>
              <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>$729.99</p>
              <a href="#" style={cardButtonStyle}>Shop Now</a>
            </div>
          </div>

          {/* Special Offer Card */}
          <div style={cardStyle}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRqdtTmrNgN1vH5KMZmQe8JkjbiRW22BkMrg&s"
              alt="Special Offer"
              style={{ width: '100%' }}
            />
            <div style={cardBodyStyle}>
              <h5 style={cardTitleStyle}>Special Offer</h5>
              <p style={cardTextStyle}>Save 20% on all items. Limited time only!</p>
              <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Discount</p>
              <a href="#" style={cardButtonStyle}>Shop Now</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GreetUser
