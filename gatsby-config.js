module.exports = {
    siteMetadata: {
      title: `Muqadar Ali Jamali`
    },
    plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: `content`,
          path: `${__dirname}/content`,
        }
      }
    ]
}