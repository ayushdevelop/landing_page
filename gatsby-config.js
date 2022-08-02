require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [
    {
      singularName: "page",
      queryParams: {
        populate: {
          navbar: {
            populate: { logo_image: "*" },
          },
          banner_image: {
            populate: {
              banner_image: "*",
            },
          },
          content: {
            populate: {
              client_logo: "*",
              tools: "*",
              tools: {
                populate: {
                  logo: "*",
                },
              },
            },
          },
        },
      },
    },
  ],
  singleTypes: [],
};

module.exports = {
  siteMetadata: {
    title: `Landing Page Application`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `pages`,
        path: `${__dirname}/gatsby-config.js`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
  ],
};
