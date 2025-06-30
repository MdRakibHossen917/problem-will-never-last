import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 py-20 px-4 sm:px-6 lg:px-8 dark:bg-gray-900 w-full flex justify-center"
    >
      <motion.div
        className="max-w-5xl mx-auto text-gray-700 dark:text-gray-300  "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          About <span className="text-blue-600 dark:text-blue-400">Me</span>
        </h2>

        <p className="text-lg leading-relaxed mb-6">
          I am <strong>Md Rakib Hossen</strong>, a passionate and dedicated{" "}
          <strong>MERN Stack Developer</strong> with a solid foundation in
          JavaScript, React, Node.js, Express, and MongoDB. With a background in{" "}
          <strong>Computer Science & Engineering</strong>, I have successfully
          transformed my academic knowledge into practical, real-world
          development skills.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          I see web development not just as a job, but as a creative journey.
          Through every project, I strive to build user-friendly and
          performance-optimized applications. Writing clean, maintainable code
          and creating modern, responsive designs are central to my work.
        </p>

        <p className="text-lg leading-relaxed">
          I am always eager to learn new technologies, enhance my skills, and
          take on new challenges. Whether working independently or collaborating
          with a team, I bring focus, responsibility, and creativity to every
          task.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
