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
          "@styles": path.resolve(__dirname, "src/styles"),
          "@images": path.resolve(__dirname, "static/images"),
        },
        extensions: ["js", "sass", "svg", "png"],
      },
    },
  ],
};
