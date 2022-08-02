import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Navigation = () => {
  const data = useStaticQuery(graphql`
   query {
     strapiComponentLogoLogo {
       logo_title
     }
   }
 `);
 

const logoTitle = data.strapiComponentLogoLogo.logo_title;

  return (
    <div className="max-w-7xl bg-white h-5 p-6 m-auto flex items-center">
      <div className="ml-20 mt-10 text-2xl text-gray-500">{logoTitle}</div>
    </div>
  );
};

export default Navigation;
