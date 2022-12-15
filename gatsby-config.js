module.exports = {
  siteMetadata: {
    title: 'Eric Tuovila',
    author: 'Eric Tuovila',
    description: 'Meet Eric Tuovila',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    `{
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-K4GTT8V",
        includeInDevelopment: false,
        defaultDataLayer: function () {
          return {
            pageType: window.pageType,
          }
        },
        routeChangeEventName: "routeChangeEvent",
        enableWebVitalsTracking: false,
      },
    }`
  ],
}
