import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Navigation from "./components/Navigation";

const IndexPage = () => {
  const queryData = useStaticQuery(graphql`
  query {
    allStrapiPage {
      nodes {
        banner_image {
          banner_image {
            url
            localFile {
              url
            }
          }
          caption
        }
        content {
          client
          tools {
            nameoftool
            logo {
              localFile {
                url
              }
            }
          }
          description {
            data {
              description
            }
          }
          requirements {
            data {
              requirements
            }
          }
          client_logo {
            localFile {
              url
            }
          }
        }
        navbar {
          logo_title
          logo_image {
            localFile {
              url
            }
          }
        }
      }
    }
  }
`);

const [data] = queryData.allStrapiPage.nodes
const {banner} = data.banner_image;
const {navBarContent} = data.navbar;
const content = data.content;

  return (
    <main>
      <title>Portfolio</title>
      <Navigation navBarContent={navBarContent}/>
    </main>
  );
};

export default IndexPage;
