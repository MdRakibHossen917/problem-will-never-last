import React from "react";
import { useParams, Link } from "react-router";

const projects = [
  {
    id: "project1",
    name: "Awesome Project One",
    image:
      "https://via.placeholder.com/400x200?text=Project+One",
    techStack: ["React", "Node.js", "MongoDB"],
    description: "This is a demo project to show my skills.",
    liveLink: "https://example.com/project1",
    githubClient: "https://github.com/username/project1-client",
    challenges: "Handling API errors and authentication.",
    futurePlans: "Add more features and mobile app support.",
  },
  {
    id: "project2",
    name: "Awesome Project Two",
    image:
      "https://via.placeholder.com/400x200?text=Project+Two",
    techStack: ["React", "Express", "Firebase"],
    description: "Another demo project.",
    liveLink: "https://example.com/project2",
    githubClient: "https://github.com/username/project2-client",
    challenges: "Real-time updates and offline handling.",
    futurePlans: "Improve UI and add dark mode.",
  },
  {
    id: "project3",
    name: "Awesome Project Three",
    image:
      "https://via.placeholder.com/400x200?text=Project+Three",
    techStack: ["Vue", "Laravel", "MySQL"],
    description: "Third project demo.",
    liveLink: "https://example.com/project3",
    githubClient: "https://github.com/username/project3-client",
    challenges: "Database optimization.",
    futurePlans: "Add multi-language support.",
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div>
        <h2 className="text-2xl font-bold">Project Not Found</h2>
        <Link to="/" className="text-blue-600 hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">{project.name}</h2>
      <img
        src={project.image}
        alt={project.name}
        className="w-full max-w-xl rounded mb-4"
      />
      <p className="mb-2">
        <strong>Main Tech Stack:</strong> {project.techStack.join(", ")}
      </p>
      <p className="mb-2">
        <strong>Description:</strong> {project.description}
      </p>
      <p className="mb-2">
        <strong>Live Project Link: </strong>
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          {project.liveLink}
        </a>
      </p>
      <p className="mb-2">
        <strong>GitHub Repository (Client): </strong>
        <a
          href={project.githubClient}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          {project.githubClient}
        </a>
      </p>
      <p className="mb-2">
        <strong>Challenges Faced:</strong> {project.challenges}
      </p>
      <p className="mb-2">
        <strong>Potential Improvements / Future Plans:</strong>{" "}
        {project.futurePlans}
      </p>
      <Link
        to="/"
        className="inline-block mt-4 text-blue-600 hover:underline"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ProjectDetails;
