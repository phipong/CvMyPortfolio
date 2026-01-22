import React from "react";
import { motion } from "framer-motion";
import { LuGuitar } from "react-icons/lu";
import { IoBasketballOutline } from "react-icons/io5";
import { IoBuildOutline } from "react-icons/io5";
import { FaRegFileVideo } from "react-icons/fa6";

export default function Skill() {
  //percent skill
  const skills = [
    { name: "Frontend", level: 85 },
    { name: "Backend", level: 65 },
    { name: "Video Editing", level: 60 },
  ];

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
  };

  return (
    <motion.div
      variants={item}
      initial="hidden"
      animate="show"
      className="skills text-white h-auto mt-16 mb-8 space-y-7">
      <div className="mx-auto mt-10 w-[90%] h-[500px] space-y-14 p-5 bg-violet-950 rounded-xl text-white">
        <h1 className="text-3xl font-bold text-violet-400 mb-5 text-center">
          My Skills
        </h1>

        {skills.map((skill) => (
          <div key={skill.name} className="mb-4">
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div
                className="bg-violet-400 h-4 rounded-full transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="hobby mx-auto w-[90%] p-5 rounded-xl bg-violet-500">
        <h2 className="text-3xl font-bold text-violet-800 mb-5 text-center">
          Hobbies
        </h2>
        <ul className="list-none p-0 m-0 flex justify-center items-center gap-10 flex-wrap">
          <li className="flex flex-col items-center justify-center w-[130px] h-[130px] bg-violet-300 text-white text-center rounded-full hover:scale-110 hover:bg-violet-400 ">
           <LuGuitar className="text-5xl" />
            Guitar
          </li>
          <li className="flex flex-col items-center justify-center w-[130px] h-[130px] bg-violet-300 text-white text-center rounded-full hover:scale-110 hover:bg-violet-400 ">
           <IoBasketballOutline className="text-5xl" />
            Backetball
          </li>
          <li className="flex flex-col items-center justify-center w-[130px] h-[130px] bg-violet-300 text-white text-center rounded-full hover:scale-110 hover:bg-violet-400 ">
           <IoBuildOutline className="text-5xl" />
            Build Website
          </li>
          <li className="flex flex-col items-center justify-center w-[130px] h-[130px] bg-violet-300 text-white text-center rounded-full hover:scale-110 hover:bg-violet-400 ">
           <FaRegFileVideo className="text-5xl" />
            Video Editing
          </li>

        </ul>
      </div>
    </motion.div>
  );
}
