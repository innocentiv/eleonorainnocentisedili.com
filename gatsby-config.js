module.exports = {
  siteMetadata: {
    title: `Eleonora Innocenti Sedili`,
    description: `Portfolio and website for Eleonora Innocenti Sedili`,
    author: `@vinnocenti`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/projects`,
        name: `project`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/texts`,
        name: `texts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-images-grid`,
            options: {
              className: "gatsby-resp-image-grid",
              gridGap: "1.5rem",
              margin: "0 auto 1.5rem",
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              tracedSVG: true,
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Eleonora Innocenti Sedili`,
        short_name: `Eleonora`,
        start_url: `/`,
        background_color: `#272526`,
        theme_color: `#272526`,
        display: `standalone`,
        icon: `content/images/logo.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-playground`,
  ],
}
