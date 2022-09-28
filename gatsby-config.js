const path = require("path");

module.exports = {
  siteMetadata: {
    title: `FS CFP`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@context": path.resolve(__dirname, "src/context"),
          "@components": path.resolve(__dirname, "src/components"),
          "@data": path.resolve(__dirname, "src/data"),
          "@styles": path.resolve(__dirname, "src/styles"),
          "@images": path.resolve(__dirname, "static/images"),
        },
        extensions: ["js", "sass", "svg", "png"],
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: true, // optional parameter to include script in development
        id: 3117772,
        sv: 6,
      },
    },
  ],
};
