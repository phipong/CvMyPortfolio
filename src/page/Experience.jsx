import React from "react";
import { motion } from "framer-motion";
import { LuMonitorCog } from "react-icons/lu";
import { MdOndemandVideo } from "react-icons/md";
import { GrCloudComputer } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

export default function Experience() {
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
  };

  return (
    <motion.div initial="hidden" animate="show" className="text-white mt-16">
      <motion.h1 variants={item} className="text-center text-5xl text-violet-300 font-serif mb-10">
        My Experience
      </motion.h1>

      <div className="container mx-auto w-[90%] lg:w-[85%] relative py-10">
        {/* Vertical line in the middle */}
        <div className="hidden lg:block absolute top-0 left-1/2 w-1 bg-violet-400 h-full -translate-x-1/2"></div>

        {/* Timeline items */}
        <div className="flex flex-col lg:grid lg:grid-cols-9 gap-6">
          
          {/* Card 1 - Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.14 }}
            className="lg:col-start-1 lg:col-end-5 bg-zinc-800 p-4 rounded-lg w-full relative"
          >
            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-1">
              <LuMonitorCog />Frontend Developer Intern at Tech Solutions
            </h2>
            <span className="text-slate-400">June 2024 - August 2025</span>
            <ul className="list-disc list-inside mt-2 text-slate-400 leading-loose">
              <li>Developed responsive web pages using React and Tailwind CSS.</li>
              <li>Collaborated with designers to implement UI/UX designs.</li>
              <li>Optimized website performance, improving load times by 20%.</li>
            </ul>
            <div className="absolute top-5 right-[-8px] w-4 h-4 bg-violet-600 rounded-full lg:hidden"></div>
          </motion.div>

          {/* Card 2 - Right */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ scale: 1.14 }}
            className="lg:col-start-6 lg:col-end-10 bg-zinc-800 p-4 rounded-lg w-full lg:w-[600px] relative"
          >
            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-1">
              <GrCloudComputer />Web Development Intern at Digital Innovations
            </h2>
            <span className="text-slate-400">August 2025 - January 2026</span>
            <ul className="list-disc list-inside mt-2 text-slate-400 leading-loose">
              <li>Built interactive website using React and Fetch API backend.</li>
              <li>Implemented RESTful APIs and integrated with MongoDB & XAMPP.</li>
              <li>Participated in code reviews and contributed to team projects.</li>
            </ul>
            <div className="absolute top-5 left-[-8px] w-4 h-4 bg-violet-600 rounded-full lg:hidden"></div>
          </motion.div>

          {/* Card 3 - Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.14 }}
            className="lg:col-start-1 lg:col-end-5 bg-zinc-800 p-4 rounded-lg w-full relative"
          >
            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-1">
              <MdOndemandVideo />Video Editing Intern at Creative Media Studio
            </h2>
            <span className="text-slate-400">June 2022 - August 2022</span>
            <ul className="list-disc list-inside mt-2 text-slate-400 leading-loose">
              <li>Assisted in editing promotional videos using Adobe Premiere Pro.</li>
              <li>Assisted in editing promotional videos using Capcut.</li>
              <li>Collaborated with the marketing team to create engaging content.</li>
            </ul>
            <div className="absolute top-5 right-[-8px] w-4 h-4 bg-violet-600 rounded-full lg:hidden"></div>
          </motion.div>

          {/* Card 4 - Right */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ scale: 1.14 }}
            className="lg:col-start-6 lg:col-end-10 bg-zinc-800 p-4 lg:w-[600px] rounded-lg w-full relative"
          >
            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-1">
              <FaGithub />Git & GitHub Workshop Participant
            </h2>
            <span className="text-slate-400">March 2024</span>
            <ul className="list-disc list-inside mt-2 text-slate-400 leading-loose">
              <li>Learned version control using Git and collaborative workflows on GitHub.</li>
              <li>Practiced branching, merging, and resolving conflicts in a team setting.</li>
            </ul>
            <div className="absolute top-5 left-[-8px] w-4 h-4 bg-violet-600 rounded-full lg:hidden"></div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}
