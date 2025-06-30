import React, { useState, useEffect } from "react";
import profilePhoto from "../assets/rakib.jpg";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiArrowUp,
  FiDownload,
} from "react-icons/fi";

const Hero = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/MdRakibHossen917",
      icon: <FiGithub className="w-6 h-6" />,
      color: "hover:text-gray-600 dark:hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/md-rakib-hossen-5b1aa3274/",
      icon: <FiLinkedin className="w-6 h-6" />,
      color: "hover:text-blue-600 dark:hover:text-blue-400",
    },
    {
      name: "Twitter",
      url: "https://x.com/MdRakib49720662",
      icon: <FiTwitter className="w-6 h-6" />,
      color: "hover:text-sky-500 dark:hover:text-sky-400",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "mailto:rakibhossen.dev@gmail.com";
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="w-11/12 mt-16 mx-auto min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 relative"
    >
      <motion.div
        className="w-11/12 max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16 xl:gap-24 w-full">
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative group w-48 md:w-56 lg:w-96"
            whileHover={{ scale: 1.03 }}
          >
            <div className="aspect-square rounded-full overflow-hidden border-2 border-blue-500 dark:border-blue-400 shadow-lg relative z-10 mt-5">
              <img
                src={profilePhoto}
                alt="Md Rakib Hossen"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-blue-500 dark:bg-blue-400 blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={itemVariants}
            className="text-center lg:text-left max-w-2xl w-full"
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  stiffness: 120,
                  damping: 12,
                  mass: 0.5,
                },
              }}
              whileTap={{ scale: 0.97, color: "#2563eb" }}
            >
              Md Rakib Hossen
            </motion.h1>

            <motion.h2
              className="dark:bg-blue-900 dark:text-blue-300 py-2 rounded-lg text-lg sm:text-xl font-medium mb-4"
              variants={itemVariants}
            >
              MERN Stack Developer | JavaScript Enthusiast
            </motion.h2>

            <motion.p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I build exceptional digital experiences with modern web
              technologies. Specializing in{" "}
              <span className="font-medium text-blue-600 dark:text-blue-400">
                React
              </span>
              ,{" "}
              <span className="font-medium text-green-600 dark:text-green-400">
                Node.js
              </span>
              , and{" "}
              <span className="font-medium text-yellow-600 dark:text-yellow-400">
                MongoDB
              </span>
              .
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              {/* Resume download link */}
              <motion.a
                href="/Rakib_Hossen_Resume.pdf"
                download="Rakib_Hossen_Resume.pdf"
                className="flex items-center gap-2 px-12 py-3 text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 rounded-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload className="w-6 h-6" /> Resume
              </motion.a>

              {/* Contact button */}
              <motion.a
                href="#contact"
                onClick={handleContactClick}
                className="flex items-center gap-2 px-6 py-3 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiMail /> Contact
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div className="flex justify-center lg:justify-start gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className={`text-gray-700 dark:text-gray-300 ${link.color} transition-colors duration-300 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800`}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Back to Top Button */}
      {showScrollButton && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
          aria-label="Back to top"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </section>
  );
};

export default Hero;
