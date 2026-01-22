import React from 'react'
import Nav from '../components/Nav'
import MainRoute from '../routes/MainRoute'
import Footer from '../components/Footer'


export default function () {
  return (
    <div>
        <div className='sticky top-4 mb-10 z-50'> 
            <Nav/>
        </div>
        <MainRoute/>
        <Footer/>
    </div>
  )
}
