import React from "react";

import ClientDetails from "./ProjectDetails/ClientDetail";
import Tools from "./ProjectDetails/Tools";
import Requirements from "./ProjectDetails/Requirements";
import Description from "./ProjectDetails/Description";

const Project = ({ projectDetails, portfolio }) => {
  return (
    <div className="max-w-2xl m-auto mt-20">
      <h2 className="text-center text-bold text-3xl text-gray-600">
        {portfolio}
      </h2>
      {projectDetails.map((project) => (
        <div
          className="flex justify-evenly mt-12 mb-10"
          key={project.strapi_id}
        >
          <ClientDetails project={project} />
          <div className="m-2 ml-8 max-w-3xl">
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
