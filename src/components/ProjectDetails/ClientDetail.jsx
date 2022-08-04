import React from "react";

const ClientDetails = ({ project }) => {
  const { client, client_logo } = project;
  const logoSrc = client_logo.localFile.url;

  return (
    <div className="w-16 flex flex-col items-center justify-start mt-12 md:mr-8">
      <img src={logoSrc} className="w-8 h-8 md:w-12 md:h-12 md:w-14 md:h-14" alt="client logo" />
      <div className="m-2">
        <h3 className="text-xs text-gray-800 md:text-sm text-center">{client}</h3>
      </div>
    </div>
  );
};
export default ClientDetails;
