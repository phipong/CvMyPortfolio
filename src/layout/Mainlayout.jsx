import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Home from '../page/Home'
import About from '../page/About'
import Contact from '../page/Contact'
import Experience from '../page/Experience'
import Skill from '../page/Skill'
import Personal from '../page/personal'


export default function () {
  return (
    <div>
        <div className='sticky top-4 mb-10 z-50'> 
            <Nav/>
        </div>
        <Home/>
        <About/>
        <Personal/>
        <Experience/>
        <Skill/>
        <Contact/>
        <Footer/>
    </div>
  )
}
