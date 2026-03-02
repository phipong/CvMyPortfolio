import React from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact() {
  //animation
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
  };
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  //request emailjs
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
  // Prevent sending if any field is empty
    if (!formData.name || !formData.email || !formData.message) return;

    emailjs
      .sendForm(
        "service_fado3ai", // replace with your Service ID
        "template_6chf8g3", // replace with your Template ID
        formRef.current,
        "Uykd0I_SYtNcOVz1R", // replace with your Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          formRef.current.reset();
          setLoading(false);
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          setLoading(false);
        },
      );
  };
  //disable button send
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    massage: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Check if all fields are filled
  const isFormValid = formData.name && formData.email && formData.message;
  return (
    <motion.div
      initial="hidden"
      animate="show"
      id="contact"
      className="w-full px-4 h-[940px] lg:h-[550px] mt-24"
    >
      <div className="flex flex-col lg:flex-row items-center gap-6 max-w-7xl mx-auto">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="w-full lg:w-1/2 bg-violet-950 p-6 rounded-xl"
        >
          <h1 className="text-3xl lg:text-4xl text-violet-400 font-bold mb-5 text-center">
            Contact Us
          </h1>

          <form
            className="flex flex-col gap-4 w-full md:w-2/3 mx-auto"
            ref={formRef}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-2 rounded"
              onChange={handleChange}
              value={formData.name}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-2 rounded"
              onChange={handleChange}
              value={formData.email}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="p-2 rounded h-32"
              onChange={handleChange}
              value={formData.message}
              required
            ></textarea>
            <button
              type="submit"
              disabled={!isFormValid || loading} // disabled if empty or sending
              className={`bg-white text-violet-400 font-bold p-2 rounded ${
                !isFormValid || loading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-200 transition"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>

        {/* Divider */}
        <div className="hidden lg:block w-[3px] bg-violet-400 self-stretch"></div>

        {/* Quick Contact */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="w-full lg:w-1/2 lg:h-[400px] bg-violet-400 rounded-xl text-white"
        >
          <div className="p-8">
          <h2 className="text-3xl text-violet-900 lg:text-4xl font-semibold">
            Quick Contact
          </h2>

          <div className="w-12 h-1 bg-violet-950 my-4"></div>

          <div className="text-xl space-y-7">
            <p>
              <span className="font-semibold text-violet-900">Phone : </span>
              081268336
            </p>
           
            <p>
              <span className="font-semibold text-violet-900">GitHub: </span>
              https://github.com/phipong
            </p>
          </div>
          </div>
           <div className="bg-violet-700 rounded-b-xl text-center px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-6 lg:h-[135px]">
  <p className="font-serif text-base sm:text-lg lg:text-lg leading-relaxed text-white">
    I'm interested in freelance opportunities and collaborations.
    I’m also open to exploring new partnerships that bring creativity and shared growth.
  </p>
</div>

        </motion.div>
      </div>
    </motion.div>
  );
}
