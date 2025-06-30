import React from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMessageSquare,
  FiMapPin,
  FiSend,
} from "react-icons/fi";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const contactMethods = [
    {
      icon: <FiMail className="text-blue-500" size={24} />,
      title: "Email",
      value: "rakibhossen.dev@gmail.com",
      link: "mailto:rakibhossen.dev@gmail.com",
    },
    {
      icon: <FiPhone className="text-green-500" size={24} />,
      title: "Phone",
      value: "+8801300981501",
      link: "tel:+8801300981501",
    },
    {
      icon: <FaWhatsapp className="text-green-500" size={24} />,
      title: "WhatsApp",
      value: "+8801300981501",
      link: "https://wa.me/8801300981501",
    },
    {
      icon: <FiMapPin className="text-red-500" size={24} />,
      title: "Location",
      value: "Dhaka, Bangladesh",
      link: "https://maps.google.com/?q=Dhaka,Bangladesh",
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="text-blue-600" size={20} />,
      link: "https://www.linkedin.com/in/md-rakib-hossen-5b1aa3274/",
    },
    {
      icon: <FaGithub className="text-gray-800 dark:text-gray-300" size={20} />,
      link: "https://github.com/MdRakibHossen917",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 scroll-mt-25 mt-5 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Get In <span className="text-blue-600 dark:text-blue-400">Touch</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Feel free to reach out for collaborations or just a friendly hello
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start p-4 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="p-3 mr-4 rounded-lg bg-gray-50 dark:bg-gray-700">
                {method.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {method.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {method.value}
                </p>
              </div>
            </a>
          ))}

          {/* Social Links */}
          <div className="pt-4">
            <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-3">
              Connect with me
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Send me a message
          </h3>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Hello Rakib, I would like to talk about..."
              ></textarea>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center w-full px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
            >
              <FiSend className="mr-2" /> Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
