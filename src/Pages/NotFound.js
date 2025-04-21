import React from 'react'
import Footer from '../Components/Footer/Footer'

const NotFound = () => {
  return (
    <>
    <div style={{height:"100vh",display:'flex',justifyContent:"center",alignItems:"center",flexDirection:"column" }}>
      <h1 style={{marginTop:"50px",fontFamily:"fantasy" }}><i>Page Not Found!</i></h1>
      <img src='https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg?ga=GA1.1.1507680453.1719128961&semt=ais_hybrid&w=740' style={{width:'50%'}}></img>
    </div>
    <Footer/>
    </>
  )
}

export default NotFound
