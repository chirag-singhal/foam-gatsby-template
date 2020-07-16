module.exports = {
  pathPrefix: `/foam-gatsby-template`,
  siteMetadata: {
    title: `Foam`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-mathjax`,
        ],
      },
    },
    {
      resolve: `gatsby-theme-garden`,
      options: {
        rootNote: "/readme",
        contentPath: `${__dirname}/..`,
        mdxOtherwiseConfigured: true,
        ignore: [
          "**/_layouts/**",
          "**/.git/**",
          "**/.github/**",
          "**/.vscode/**",
        ],
      },
    },
  ],
};
