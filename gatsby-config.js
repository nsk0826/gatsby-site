/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const env = process.env.NODE_ENV || 'development';
require('dotenv').config({path: `./.env.${env}`}); 
const path = require('path');
console.log('path : ' + path)

require('dotenv').config({
  path:`env.${process.env.NODE_ENV}`
});
console.log(process.env.API_KEY)

module.exports = {
  siteMetadata: {
    title: "はじめてのGatsby Site",
    author: "Reffect",
    category: ["Laravel", "Vue.js", "React"],
    user: { name: "John Doe", email: "john@example.com" },
  },
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      }
    },
    "gatsby-transformer-remark",
    {
      resolve:"gatsby-source-microcms",
      options:{
        apiKey:process.env.API_KEY,
        serviceId:'nskservices',
        apis:[
          {
            endpoint:"test02"
          },
        ],
      },
    },
  ],
}
