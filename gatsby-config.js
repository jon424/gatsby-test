module.exports = {
  siteMetadata: {
    title: 'Jon\'s Blog',
    description: 'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@gatsbyjs',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    'gatsby-plugin-sharp',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
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
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          },
          {
            resolve: 'gatsby-remark-vscode',
            options: {
              theme: 'High Contrast'
            }
          }]
        //Abyss
        // Dark+ (default dark)
        // Light+ (default light)
        // Dark (Visual Studio)
        // Light (Visual Studio)
        // High Contrast
        // Kimbie Dark
        // Monokai Dimmed
        // Monokai
        // Quiet Light
        // Red
        // Solarized Dark
        // Solarized Light
        // Tomorrow Night Blue
      }
    },
  ],
};
