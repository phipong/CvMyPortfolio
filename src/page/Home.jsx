import React from "react";
import { motion } from "framer-motion";
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export default function Home() {
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
    className="mt-5 text-white">
      <motion.div variants={item} className="Box container mx-auto w-[90%] lg:h-[590px] lg:w-[85%] 
                flex flex-col-reverse lg:flex-row 
                items-center justify-between 
                gap-10 p-6 lg:p-10"
      >
        {/* LEFT Text */}
        <div className="left text-center space-y-3 lg:text-left lg:w-1/2">
          <motion.h1 variants={item} className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-3">
            Welcome to <span className="text-violet-300">PHIPONG</span>
          </motion.h1>

          <h3 className="text-lg sm:text-xl text-violet-400 lg:text-2xl mb-3">
            Full Stack Developer
          </h3>

          <motion.span variants={item} className="text-gray-600 block max-w-md mx-auto lg:mx-0">
            I'm always ready to learn and grow in the field of web development.
          </motion.span>
        <div className="link text-4xl flex justify-center lg:justify-center gap-6 mt-6">
          <motion.a variants={item} whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 300, damping: 15 }} className="hover:text-violet-600" href="https://github.com/phipong"><FaGithub /></motion.a>
          <motion.a variants={item} whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 300, damping: 15 }} className="hover:text-violet-600" href="https://www.facebook.com/phipong9999"><FaFacebook /></motion.a>
          <motion.a variants={item} whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 300, damping: 15 }} className="hover:text-violet-600" href="https://t.me/Phipong"><FaTelegram /></motion.a>
        </div>
        </div>

        {/* RIGHT Image */}
        <div className="right lg:w-1/2 flex justify-center lg:justify-end">
          <div className="group relative">
            <img
              className="
          w-40 sm:w-52 md:w-60 lg:w-64
          rounded-2xl
          transition-all duration-500 ease-out
          group-hover:scale-105
          group-hover:-translate-y-2
          group-hover:shadow-xl
          group-hover:shadow-indigo-500/40
        "
              src="/img/Picsart_25-06-30_20-08-08-685.jpg"
              alt="Phipong"
            />
          </div>
        </div>
      </motion.div>

    </motion.div>
  );
}
