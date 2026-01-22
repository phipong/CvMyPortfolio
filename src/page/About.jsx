import React from 'react'
import { motion } from 'framer-motion';
import { PiStudentBold } from "react-icons/pi";

export default function About() {
   const container = {
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.15,
        },
      },
    };
    
    const item = {
      hidden: { opacity: 0, y: 40 },
      show: { opacity: 1, y: 0 },
    };
  return (
    <motion.div 
    variants={container}
    initial="hidden"
    animate="show"
    className='mt-5 text-white'>
      <motion.div variants={item} className="container mx-auto w-[90%] h-[900px] lg:h-[550px] lg:w-[85%] flex flex-col gap-3 items-center mt-16 mb-4">
       <div className='space-y-6 p-2'>
         <h1 className='text-5xl text-center text-violet-300 font-serif'>About me</h1>
         <p className='text-lg text-slate-400 leading-loose'>I am a motivated and beginner web developer with a strong passion for learning and growing in the field of web development. 
          While I am just starting my journey and do not have professional experience yet, I am dedicated to building my skills in HTML, CSS, JavaScript, and modern frameworks like React and Tailwind CSS.
           I enjoy solving problems, creating responsive and user-friendly web interfaces, and continuously expanding my knowledge. 
           My goal is to contribute to meaningful projects and develop practical experience while learning from real-world challenges.
           </p>
       </div>
       <div>
          <div className='space-y-4 p-2 text-slate-400'>
            <h2 className='text-2xl flex items-center gap-1'><PiStudentBold />Education</h2>
            <ul className='list-disc list-inside text-lg leading-loose'>
              <li>Bachelor's Degree in Computer Science, RUPP University (2023 - Present)</li>
              <li>High School Diploma, Hun Sen Borey 100 Knong High School (2017 - 2023)</li>
            </ul>
          </div>
       </div>
        </motion.div>
    </motion.div>
  )
}
