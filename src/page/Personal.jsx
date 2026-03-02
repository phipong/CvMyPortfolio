import { motion } from "framer-motion";

export default function Personal() {
  return (
    <section className="text-white" id="personal">
      <motion.div
        className="container mx-auto mb-10 bg-gray-800 rounded-2xl p-12 w-[95%] lg:w-[80%]"
        
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl text-violet-300 font-serif mb-8">
          Personal Information
        </h1>

        {/* Content */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 text-base sm:text-lg text-slate-400">

          {/* LEFT SIDE */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
            <h2 className="text-xl font-serif font-semibold">Personal Details</h2>
              <p>
                <span className="text-violet-400">Full Name:</span>{" "}
                Neak Pichvothanakpong
              </p>
              <p>
                <span className="text-violet-400">Dob:</span> 14 October 2005
              </p>
              <p>
                <span className="text-violet-400">Address:</span> Phnom Penh,
                Cambodia
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-semibold">
                Language
              </h2>
              <p>
                <span className="text-violet-400">Khmer:</span> Native
              </p>
              <p>
                <span className="text-violet-400">English:</span> Intermediate
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <img
              src="/img/IMG_5905 phi.jpg"
              alt="profile"
              className="w-60 sm:w-72 lg:w-80 h-auto rounded-xl object-cover shadow-lg hover:scale-105 transition duration-500"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}