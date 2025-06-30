import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import dashboardImg from "../assets/Dashboard.JPG";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      id: "project1",
      name: "Analytics Dashboard",
      image: dashboardImg,
      techStack: ["React", "JavaScript", "MongoDB"],
      icons: [
        <FaReact key="react" className="text-blue-500" />,
        <SiJavascript key="js" className="text-yellow-500" />,
        <SiMongodb key="mongo" className="text-green-600" />,
      ],
      description: "Data visualization dashboard with interactive charts.",
      liveLink: "https://example.com/project1",
      githubClient: "https://github.com/username/project1-client",
      category: "fullstack",
    },
    {
      id: "project2",
      name: "Portfolio Website",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
      techStack: ["React", "Tailwind CSS"],
      icons: [
        <FaReact key="react" className="text-blue-500" />,
        <SiTailwindcss key="tailwind" className="text-cyan-400" />,
      ],
      description: "Modern responsive portfolio with animations and dark mode.",
      liveLink: "https://example.com/project2",
      githubClient: "https://github.com/username/project2",
      category: "frontend",
    },
    {
      id: "project3",
      name: "API Service",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      techStack: ["Node.js", "Express", "MongoDB"],
      icons: [
        <FaNodeJs key="node" className="text-green-500" />,
        <SiExpress key="express" className="text-gray-400" />,
      ],
      description: "RESTful API service with JWT authentication.",
      liveLink: "https://example.com/project3",
      githubClient: "https://github.com/username/project3",
      category: "backend",
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-800 dark:text-white mb-4"
        >
          My <span className="text-blue-600 dark:text-blue-400">Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          A showcase of some of my recent works.
        </motion.p>
      </div>

      {/* Filter Tabs */}
      <motion.div
        className="flex justify-center mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex rounded-md shadow-sm bg-gray-100 dark:bg-gray-800 p-1">
          {["all", "frontend", "backend", "fullstack"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === tab
                  ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Project Cards - 3 per line */}
      <div className="flex flex-wrap gap-8 justify-center">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="w-full sm:w-[48%] lg:w-[32%] xl:w-[30%] 2xl:w-[28%] bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700 group"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm">{project.description}</p>
              </div>
            </div>

            <div className="p-5 space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  {project.name}
                </h3>
                <div className="flex space-x-2">
                  {project.icons.map((icon, i) => (
                    <span key={i} className="text-xl">
                      {icon}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-3">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                >
                  <FiExternalLink className="mr-1" /> Live
                </a>
                <a
                  href={project.githubClient}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 text-sm bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-md transition-colors"
                >
                  <FiGithub className="mr-1" /> Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
