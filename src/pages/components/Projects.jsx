import React from "react";

import ClientDetails from "./Project Details Component/ClientDetail";
import Tools from "./Project Details Component/Tools";
import Requirements from "./Project Details Component/Requirements";
import Description from "./Project Details Component/Description";

const Project = ({ projectDetails, portfolio }) => {
  return (
    <div className="max-w-2xl m-auto mt-24">
      <h2 className="text-center text-bold text-3xl text-gray-600">
        {portfolio}
      </h2>
      {projectDetails.map((project) => (
        <div className="flex justify-evenly mt-12 mb-10">
          <ClientDetails project={project} />
          <div className="m-2 ml-8 max-w-3xl">
            <Tools project={project} />
            {project.requirements ? <Requirements project={project} /> : ""}
            <Description project={project} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
