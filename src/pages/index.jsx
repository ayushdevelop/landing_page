import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Navigation from "./components/Navigation";
import Banner from "./components/Banner";
import Project from "./components/Projects";

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
                  id
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
            strapi_id
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

  const [data] = queryData.allStrapiPage.nodes;
  const banner = data.banner_image;
  const navBarContent = data.navbar;
  const projectDetails = data.content;
  const title = banner.caption;

  return (
    <main>
      <title>{title}</title>
      <Navigation navBarContent={navBarContent} />
      <Banner bannerImage={banner} />
      <Project projectDetails={projectDetails} portfolio={title} />
    </main>
  );
};

export default IndexPage;
