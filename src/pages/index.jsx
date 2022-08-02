import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Navigation from "./components/Navigation";

// markup
const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
    strapiPage {
      content {
        requirements {
          data {
            requirements
          }
        }
        description {
          data {
            description
          }
        }
        client
      }
      navbar {
        logo_title
      }
      banner_image {
        Caption
      }
    }
  }
`);

const pageTitle = data.strapiPage.banner_image.Caption;
const logoTitle = data.strapiPage.navbar.logo_title;
const content = data.strapiPage.content;
  return (
    <main>
      <title>Portfolio</title>
      <Navigation logoTitle={logoTitle}/>
    </main>
  );
};

export default IndexPage;
