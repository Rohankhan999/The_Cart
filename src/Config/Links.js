import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Team from '../Pages/OurTeam'
import Career from '../Pages/Career'
import Profile from '../Pages/Profile'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import Pricing from '../Pages/Pricing'
import Dashborad from '../Pages/Dashborad'
import NotFound from '../Pages/NotFound'
const Links = () => {
    return (
        <div>
                <Routes>
                    <Route path='/' element={<Home />}>Home</Route>
                    <Route path='/about' element={<About />}>About</Route>
                    <Route path='/contact' element={<Contact />}>Contact</Route>
                    <Route path='/team' element={<Team />}>Team</Route>
                    <Route path='/career' element={<Career />}>Career</Route>
                    <Route path='/profile' element={<Profile />}>Profile</Route>
                    <Route path='/signup' element={<Signup />}>Sign up</Route>
                    <Route path='/login' element={<Login />}>Login</Route>
                    <Route path='/pricing' element={<Pricing />}>Pricing</Route>
                    <Route path='/dashboard' element={<Dashborad />}>Dashboard</Route>
                    <Route path='*' element={<NotFound />}>Not Found</Route>
                </Routes>
        </div>
    )
}

export default Links
