module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-postcss",

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "articles",
        path: `${__dirname}/content/articles`
      }
    },

    {
      resolve: "gatsby-plugin-mdx"
    }
  ]
};
