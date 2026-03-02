import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Home from '../page/Home'
import About from '../page/About'
import Contact from '../page/Contact'
import Experience from '../page/Experience'
import Skill from '../page/Skill'
import Information from '../page/Information'

export default function Mainlayout() {
  return (
    <div>
        <div className='sticky top-4 mb-10 z-50'> 
            <Nav/>
        </div>
        <Home/>
        <About/>
        <Information/>
        <Experience/>
        <Skill/>
        <Contact/>
        <Footer/>
    </div>
  )
}
