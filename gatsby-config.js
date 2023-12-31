// gatsby-config.js
module.exports = {
  siteMetadata: {
    title: `BellaBakes`,
    siteUrl: `https://www.shanecrosby.com/sites/bellabakes`
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: "images"
    },
    "gatsby-transformer-json",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: './src/data/',
      },
      __key: "data"
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        "fonts": ['Alegreya Sans:300,700','Twinkle Star'],
        "display": 'swap'
      }
    }
  ]
};
