const path = require("path");

module.exports = {
  siteMetadata: {
    title: `FS CFP`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@context": path.resolve(__dirname, "src/context"),
          "@components": path.resolve(__dirname, "src/components"),
          "@styles": path.resolve(__dirname, "src/styles"),
          "@images": path.resolve(__dirname, "static/images"),
        },
        extensions: ["js", "sass", "svg", "png"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {},
        // Set to none to allow builds to continue on image errors
        failOn: `none`,
        // deprecated options and their defaults:
        base64Width: 20,
        forceBase64Format: `png`, // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
      },
    },
  ],
};
