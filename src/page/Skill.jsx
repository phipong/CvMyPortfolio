import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { LuGuitar } from "react-icons/lu";
import { IoBasketballOutline, IoBuildOutline } from "react-icons/io5";
import { FaRegFileVideo } from "react-icons/fa6";

export default function Skill() {
  const skills = [
    { name: "Frontend", level: 80 },
    { name: "Backend", level: 65 },
    { name: "Video Editing", level: 60 },
  ];

  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  // Trigger animation when section enters viewport
  React.useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [inView, controls]);

  const skillVariants = {
    hidden: { width: 0 },
    show: (level) => ({
      width: `${level}%`,
      transition: { duration: 1.2, ease: "easeInOut" },
    }),
  };
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      ref={containerRef}
      id="skill"
      className="skills text-white h-auto mt-16 mb-8 space-y-7"
    >
      <div className="flex flex-col lg:flex-row justify-center items-start p-3">
        <div className="mx-auto mt-10 w-[90%] h-auto space-y-14 p-5 bg-violet-950 rounded-xl text-white">
          <h1 className="text-3xl font-bold text-violet-400 mb-5 text-center">
            My Skills
          </h1>

          {skills.map((skill) => (
            <div key={skill.name} className="mb-4">
              <div className="flex justify-between mb-1">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                <motion.div
                  className="bg-violet-400 h-4 rounded-full"
                  custom={skill.level}
                  variants={skillVariants}
                  initial="hidden"
                  animate={controls}
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="Card w-[90%] mx-auto p-5 mt-5 rounded-xl text-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <ul className="list-disc list-inside text-left text-lg border border-violet-400 rounded-xl p-4 marker:text-violet-400">
              <h3 className="text-xl font-semibold mb-2">Languages</h3>
              <li>JavaScript</li>
              <li>PHP</li>
              <li>C</li>
              <li>C++</li>
            </ul>

            {/* Card 2 */}
            <ul className="list-disc list-inside text-left text-lg border border-violet-400 rounded-xl p-4 marker:text-violet-400">
              <h3 className="text-xl font-semibold mb-2">Other</h3>
              <li>Git & GitHub</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Boostrap</li>
              <li>Tailwind CSS</li>
            </ul>

            {/* Card 3 */}
            <ul className="list-disc list-inside text-left text-lg border border-violet-400 rounded-xl p-4 marker:text-violet-400">
              <h3 className="text-xl font-semibold mb-2">DataBases</h3>
              <li>MySQL</li>
              <li>Docker (Low Level)</li>
            </ul>

            {/* Card 4 */}
            <ul className="list-disc list-inside text-left text-lg border border-violet-400 rounded-xl p-4 marker:text-violet-400">
              <h3 className="text-xl font-semibold mb-2">Frameworks</h3>
              <li>React.js</li>
              <li>Laravel</li>
            </ul>
          </div>
        </div>
      </div>

      <motion.div
        className="Project-demo mx-auto w-[90%] p-5 rounded-xl"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl font-bold text-violet-200 mb-5 text-center mt-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects Demo
        </motion.h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {/* Card 1 */}
          <motion.div
            className="Card-bike group w-full sm:w-[48%] lg:w-[35%] lg:h-[500px] h-[470px] border-2 border-violet-400 rounded-xl overflow-hidden 
                  hover:border-violet-600 transition-all duration-300 bg-gray-900"
            variants={card}
            whileHover={{ y: -10, scale: 1.03 }}
          >
            <a
              href="https://sellbike.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-full h-52 sm:h-56 lg:h-64 object-cover transition-transform duration-500 hover:scale-105"
                src="/img/webbike.png"
                alt="Bike Selling Website"
              />
              <h3 className="text-white p-2 text-2xl font-semibold font-serif">
                Bike Selling Website
              </h3>
              <h4 className="text-gray-400 ps-2">Web Design</h4>
              <ul className="flex gap-2 sm:gap-3 p-2 text-sm sm:text-lg flex-wrap">
                {["React.js", "Tailwind", "JavaScript", "Responsive"].map(
                  (tech) => (
                    <li
                      key={tech}
                      className="bg-violet-400 px-2 py-1 rounded-lg transition-all duration-300 group-hover:bg-violet-500"
                    >
                      {tech}
                    </li>
                  ),
                )}
              </ul>
            </a>
            <div className="p-2 mt-2 sm:mt-3 flex justify-start">
              <a
                className="px-3 py-2 text-sm sm:text-base bg-violet-500 rounded-md hover:bg-violet-800 transition-colors duration-300 transform hover:scale-105"
                href="https://github.com/phipong/sellbike"
              >
                Source Code
              </a>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="Card-bike group w-full sm:w-[48%] lg:w-[35%] lg:h-[500px] h-[470px] border-2 border-violet-400 rounded-xl overflow-hidden 
                  hover:border-violet-600 transition-all duration-300 bg-gray-900"
            variants={card}
            whileHover={{ y: -10, scale: 1.03 }}
          >
            <a
              href="https://project-2-63qa.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-full h-52 sm:h-56 lg:h-64 object-cover transition-transform duration-500 hover:scale-105"
                src="/img/blogy.png"
                alt="Blogy Website"
              />
              <h3 className="text-white p-2 text-2xl font-semibold font-serif">
                Blogy Website
              </h3>
              <h4 className="text-gray-400 ps-2">Web Design</h4>
              <ul className="flex gap-2 sm:gap-3 p-2 text-sm sm:text-lg flex-wrap">
                {["Html", "Bootstrap", "CSS", "Responsive"].map((tech) => (
                  <li
                    key={tech}
                    className="bg-violet-400 px-2 py-1 rounded-lg transition-all duration-300 group-hover:bg-violet-500"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </a>
            <div className="p-2 mt-2 sm:mt-3 flex justify-start">
              <a
                className="px-3 py-2 text-sm sm:text-base bg-violet-500 rounded-md hover:bg-violet-800 transition-colors duration-300 transform hover:scale-105"
                href="https://github.com/phipong/Project-2"
              >
                Source Code
              </a>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="Card-bike group w-full sm:w-[48%] lg:w-[35%] lg:h-[500px] h-[470px] border-2 border-violet-400 rounded-xl overflow-hidden 
                  hover:border-violet-600 transition-all duration-300 bg-gray-900"
            variants={card}
            whileHover={{ y: -10, scale: 1.03 }}
          >
            <a
              href="https://phipong.github.io/Aeon-shopping/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-full h-52 sm:h-56 lg:h-64 object-cover transition-transform duration-500 hover:scale-105"
                src="/img/Aeon.png"
                alt="Blogy Website"
              />
              <h3 className="text-white p-2 text-2xl font-semibold font-serif">
                Aeon Shopping Website
              </h3>
              <h4 className="text-gray-400 ps-2">Web Design</h4>
              <ul className="flex gap-2 sm:gap-3 p-2 text-sm sm:text-lg flex-wrap">
                {["Html", "CSS", "No Responsive"].map((tech) => (
                  <li
                    key={tech}
                    className="bg-violet-400 px-2 py-1 rounded-lg transition-all duration-300 group-hover:bg-violet-500"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </a>
            <div className="p-2 mt-2 sm:mt-3 flex justify-start">
              <a
                className="px-3 py-2 text-sm sm:text-base bg-violet-500 rounded-md hover:bg-violet-800 transition-colors duration-300 transform hover:scale-105"
                href="https://github.com/phipong/Aeon-shopping"
              >
                Source Code
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="hobby mx-auto w-[90%] p-5 rounded-xl bg-violet-500">
        <h2 className="text-3xl font-bold text-violet-800 mb-5 text-center">
          Hobbies
        </h2>
        <ul className="list-none p-0 m-0 flex justify-center items-center gap-10 flex-wrap">
          <li className="flex flex-col items-center justify-center w-[130px] h-[130px] bg-violet-300 text-white text-center rounded-full hover:scale-110 hover:bg-violet-400">
            <LuGuitar className="text-5xl" />
            Guitar
          </li>
          <li className="flex flex-col items-center justify-center w-[130px] h-[130px] bg-violet-300 text-white text-center rounded-full hover:scale-110 hover:bg-violet-400">
            <IoBasketballOutline className="text-5xl" />
            Basketball
          </li>
          <li className="flex flex-col items-center justify-center w-[130px] h-[130px] bg-violet-300 text-white text-center rounded-full hover:scale-110 hover:bg-violet-400">
            <IoBuildOutline className="text-5xl" />
            Build Website
          </li>
          <li className="flex flex-col items-center justify-center w-[130px] h-[130px] bg-violet-300 text-white text-center rounded-full hover:scale-110 hover:bg-violet-400">
            <FaRegFileVideo className="text-5xl" />
            Video Editing
          </li>
        </ul>
      </div>
    </div>
  );
}
