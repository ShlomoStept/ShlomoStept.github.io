module.exports = {
  siteMetadata: {
    description: "Personal page of Shlomo Stept",
    locale: "en",
    title: "Shlomo Stept",
    formspreeEndpoint: "https://formspree.io/f/mpzkopyd",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: false,
        theme: "gh-inspired",
      },
    },
  ],
}
