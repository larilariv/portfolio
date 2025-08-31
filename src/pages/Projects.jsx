import React from "react";

import Game2048Image from "../assets/2048.png"
import CrafterTrackerImage from "../assets/crafterTracker.png"
import EveryVoltImage from "../assets/everyVolt.png"
import SewOrganizedImage from "../assets/sewOrganized.png"

const Projects = () => {
  const projects = [
    {
      name: "Crafter Tracker",
      description:
        "App for crafters to track all of their projects and see the projects of other users.",
      image: CrafterTrackerImage,
      deployedLink: "https://craftertracker.herokuapp.com",
      githubLink: "https://github.com/larilariv/CrafterTracker-Frontend",
    },
    {
      name: "Sew Organized",
      description:
        "App that displays a gallery of sewing patterns and give users the ability to create, read, update and delete pattern listings.",
      image: SewOrganizedImage,
      deployedLink: "https://glacial-ravine-51611.herokuapp.com/patterns",
      githubLink: "https://github.com/larilariv/SewOrganized",
    },
    {
      name: "Every Volt",
      description:
        "App that allows electric vehicle users to input location data and recieve the infomation of the closest charging stations.",
      image: EveryVoltImage,
      deployedLink: "https://every-volt-front.herokuapp.com",
      githubLink: "https://github.com/Every-Volt-App/front-end",
    },
    {
      name: "2048",
      description:
        "Recreation of the puzzle game 2048, a single player sliding puzzle game with a 4 x 4 grid and tiles with numerical values.",
      image: Game2048Image,
      deployedLink: "https://larilariv.github.io/2048",
      githubLink: "https://github.com/larilariv/2048",
    },
  ];

  return (
    <div className="max-w-screen-xl px-6 mx-auto lg:px-8">
      {projects.map((project) => {
        return (
          <div className="py-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Project Image */}
            <div className="relative h-64 overflow-hidden sm:h-80 md:h-full md:order-last">
              <img
                className="absolute object-contain w-full h-full"
                src={project.image}
                alt={`Screenshot of ${project.name} app`}
              />
            </div>

            {/* Project Title, Description, and Link */}
            <div className="md:py-10">
              <h2 className="text-3xl font-bold sm:text-4xl">{project.name}</h2>

              <p className="text-lg leading-relaxed mt-4 text-neutral-600">{project.description}</p>

              <a
                className="inline-flex items-center px-6 py-3 mt-8 mr-4 text-white bg-sage-500 rounded hover:bg-sage-600"
                href={project.deployedLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-sm font-medium font-['Capriola']">Live Site</span>
              </a>
              <a
                className="inline-flex items-center px-6 py-3 mt-8 text-white bg-sage-500 rounded hover:bg-sage-600"
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-sm font-medium font-['Capriola']">GitHub Repository</span>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
