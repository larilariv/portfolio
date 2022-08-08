import React, { useState } from "react";

const Projects = () => {
  const projects = [
    {
      name: "2048",
      description:
        "A recreation of the puzzle game 2048, a single player sliding puzzle game with a 4 x 4 grid and tiles with numerical values.",
      image: "images/2048.png",
      deployedLink: "https://larilariv.github.io/2048",
      githubLink: "https://github.com/larilariv/2048",
    },
    {
      name: "Sew Organized",
      description:
        "An app that displays a gallery of sewing patterns and give users the ability to create, read, update and delete pattern listings.",
      image: "images/sewOrganized.png",
      deployedLink: "https://glacial-ravine-51611.herokuapp.com/patterns",
      githubLink: "https://github.com/larilariv/SewOrganized",
    },
    {
      name: "Every Volt",
      description:
        "An app that allows electric vehicle users to input location data and recieve the infomation of the closest charging stations.",
      image: "images/everyVolt.png",
      deployedLink: "https://every-volt-front.herokuapp.com",
      githubLink: "https://github.com/Every-Volt-App/front-end",
    },
    {
      name: "Crafter Tracker",
      description:
        "An app for crafters to track all of their projects and see the projects of other users.",
      image: "images/crafterTracker.png",
      deployedLink: "https://craftertracker.herokuapp.com",
      githubLink: "https://github.com/larilariv/CrafterTracker-Frontend",
    },
  ];

  return (
    <div>
      <section>
        {projects.map((project) => {
          return (
            <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last">
                  <img
                    className="absolute object-contain w-full h-full rounded-lg"
                    src={project.image}
                    alt="Screenshot of ${project.name} app"
                  />
                </div>

                {/* Project Title, Description, and Link */}
                <div className="lg:py-24">
                  <h2 className="text-3xl font-bold sm:text-4xl">
                    {project.name}
                  </h2>

                  <p className="mt-4 text-neutral-600">{project.description}</p>

                  <a
                    className="inline-flex items-center px-6 py-3 mt-8 mr-4 text-white bg-sage-500 rounded hover:bg-sage-600"
                    href={project.deployedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-sm font-medium">Live Site</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="ml-1.5 w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  <a
                    className="inline-flex items-center px-6 py-3 mt-8 text-white bg-sage-500 rounded hover:bg-sage-600"
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-sm font-medium">
                      GitHub Repository
                    </span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="ml-1.5 w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Projects;
