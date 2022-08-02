import { useStaticQuery, graphql } from "gatsby";

const useQuery = () => {
  // const data = useStaticQuery(graphql`
  //     query {
  //       strapiPage {
  //         content {
  //           requirements {
  //             data {
  //               requirements
  //             }
  //           }
  //           description {
  //             data {
  //               description
  //             }
  //           }
  //           client
  //         }
  //         navbar {
  //           logo_title
  //         }
  //         banner_image {
  //           caption
  //         }
  //       }
  //     }
  //   `);
  //   const pageTitle = data.strapiPage.banner_image.caption;
  //   const logoTitle = data.strapiPage.navbar.logo_title;
  //   const content = data.strapiPage.content;
  //   return { pageTitle, logoTitle, content };
};

export default useQuery;
