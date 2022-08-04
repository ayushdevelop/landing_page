import React from "react";

const ClientDetails = ({ project }) => {
  const { client, client_logo } = project;
  const logoSrc = client_logo.localFile.url;

  return (
    <div className="w-16 flex flex-col items-center justify-start mt-10 mr-8">
      <img src={logoSrc} className="w-12 h-12" />
      <div className="m-2">
        <h3 className="text-xs text-gray-800">{client}</h3>
      </div>
    </div>
  );
};
export default ClientDetails;
