import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from '../Components/Carousel/Carousel'
import GreetUser from '../Components/GreetUser/GreetUser'
import Choose from '../Components/Choose/Choose'
import Footer from '../Components/Footer/Footer'



const Home = () => {


  return (
    <div>
      <Carousel />
      <GreetUser />
      <Choose />
      <Footer/>
    </div>
  )
}

export default Home
