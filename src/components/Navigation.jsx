import React from "react";

const Navigation = ({ navBarContent }) => {
  const { logo_title, logo_image } = navBarContent;
  const [imgSrc] = logo_image; // image url source
  const src = imgSrc.localFile.url;

  return (
    <div className="max-w-6xl h-5 m-auto p-12 flex flex-col sm:flex-row sm:justify-start items-center sm:items-center">
      <img src={src} className="m-2 w-10 h-10" alt="company logo"/>
      <div className="m-2 text-2xl text-gray-500">{logo_title}</div>
    </div>
  );
};

export default Navigation;
