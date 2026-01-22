import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

export default function Footer() {
  return (
    <div className='space-y-3 text-violet-400 mb-10'>
      <h1 className="text-center text-gray-600">&copy; 2026 Phipong. All rights reserved.</h1>
      <h4 className="text-center block text-gray-600 "><span className='font-semibold'>About this website build</span> : React, Tailwind CSS</h4>
      <div className='flex justify-center items-center gap-3'>
        <a className='flex items-center text-lg hover:scale-110' href="https://www.facebook.com/phipong9999"><CiFacebook className='text-3xl' />Facebook</a>
        <a className='flex items-center text-lg hover:scale-110' href="https://www.instagram.com/pongg_pongg/"><FaInstagram className='text-3xl' />Instragram</a>
        <a className='flex items-center text-lg hover:scale-110' href="https://github.com/phipong"><FiGithub className='text-3xl' />GitHub</a>
      </div>
    </div>
  )
}
