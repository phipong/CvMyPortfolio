import { motion } from "framer-motion";
import { LuGuitar } from "react-icons/lu";
import { IoBasketballOutline, IoBuildOutline } from "react-icons/io5";
import { FaRegFileVideo } from "react-icons/fa";

const hobbies = [
  { icon: <LuGuitar className="text-5xl" />, name: "Guitar" },
  { icon: <IoBasketballOutline className="text-5xl" />, name: "Basketball" },
  { icon: <IoBuildOutline className="text-5xl" />, name: "Build Website" },
  { icon: <FaRegFileVideo className="text-5xl" />, name: "Video Editing" },
];

export default function HobbyMarquee() {
  return (
    <div className="hobby mx-auto w-[90%] p-5 rounded-xl bg-violet-500 overflow-hidden">
      <h2 className="text-3xl font-bold text-violet-800 mb-5 text-center">
        Hobbies
      </h2>

      <motion.div
        className="flex gap-10"
        animate={{ x: ["100%", "-100%"] }} // start offscreen right, move to left
        transition={{
          duration: 10, // total scroll time
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* First copy */}
        {hobbies.map((hobby, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-[130px] h-[130px] bg-violet-300 text-white text-center rounded-full flex-shrink-0"
          >
            {hobby.icon}
            {hobby.name}
          </div>
        ))}

        {/* Duplicate for seamless loop */}
        {hobbies.map((hobby, index) => (
          <div
            key={"dup-" + index}
            className="flex flex-col items-center justify-center w-[130px] h-[130px] bg-violet-300 text-white text-center rounded-full flex-shrink-0"
          >
            {hobby.icon}
            {hobby.name}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
