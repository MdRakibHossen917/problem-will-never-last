import React from "react";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
 
  SiPostman,
  SiBootstrap,
  SiMysql,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "React", icon: <SiReact className="text-blue-500" /> },
    {
      name: "JavaScript (ES6+)",
      icon: <SiJavascript className="text-yellow-400" />,
    },
    { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <SiCss3 className="text-blue-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Express", icon: <SiExpress className="text-gray-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    { name: "Git", icon: <SiGit className="text-orange-600" /> },
    {
      name: "GitHub",
      icon: <SiGithub className="text-gray-800 dark:text-white" />,
    },
  ];

  return (
    <section
      id="skills"
      className="scroll-mt-20 py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
          My <span className="text-blue-600 dark:text-blue-400">Skills</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Technologies and tools I use to build modern, responsive applications.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="text-4xl">{skill.icon}</div>
            <span className="text-gray-800 dark:text-white font-medium text-sm text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
