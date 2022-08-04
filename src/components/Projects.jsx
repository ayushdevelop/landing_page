import React from "react";

import ClientDetails from "./ProjectDetails/ClientDetail";
import Tools from "./ProjectDetails/Tools";
import Requirements from "./ProjectDetails/Requirements";
import Description from "./ProjectDetails/Description";

const Project = ({ projectDetails, portfolio }) => {
  return (
    <div className="max-w-6xl m-auto mt-20 p-6 md:max-w-2xl">
      <h2 className="text-center font-semibold text-xl text-gray-600 md:font-bold md:text-3xl">
        {portfolio}
      </h2>
      {projectDetails.map((project) => (
        <div
          className="flex md:justify-evenly md:flex-row md:mt-12 md:mb-10 flex-col items-center justify-center md:items-start"
          key={project.strapi_id}
        >
          <ClientDetails project={project} />
          <div className="m-2 md:ml-8 max-w-3xl">
            <Tools project={project} />
            {project.requirements && <Requirements project={project} />}
            <Description project={project} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
