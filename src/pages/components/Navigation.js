import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiComponentLogoLogo {
        Logo_title
      }
    }
  `);
  const logoTitle = data.strapiComponentLogoLogo.Logo_title;

  return (
    <div className="max-w-7xl bg-white h-5 p-6 m-auto flex justify-items-center">
      <div className="flex-auto text-2xl">{logoTitle}</div>
    </div>
  );
};

export default Navigation;
