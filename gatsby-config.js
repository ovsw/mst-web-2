/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

// const path = require('path')
const clientConfig = require('./client-config')

const isProd = process.env.NODE_ENV === 'production'

// const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = {
  /* Your site config here */
  // developMiddleware: app => {
  //   app.use(
  //     '/.netlify/functions/',
  //     createProxyMiddleware({
  //       target: 'http://localhost:34567',
  //       pathRewrite: {
  //         '/.netlify/functions/': ''
  //       }
  //     })
  //   )
  // },
  siteMetadata: {
    siteUrl: 'https://www.mainstages.com'
  },
  plugins: [
    'gatsby-plugin-layout',
    {
      resolve: "gatsby-plugin-prettier-eslint",
      options: {
        prettier: {
          patterns: [
            // the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
            "**/*.{css,scss,less}",
            "**/*.{json,json5}",
            "**/*.{graphql}",
            "**/*.{md,mdx}",
            "**/*.{html}",
            "**/*.{yaml,yml}",
          ],
        },
        eslint: {
          patterns: "**/*.{js,jsx,ts,tsx}",
          customOptions: {
            fix: true,
            cache: true,
          },
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'open sans :300,400,400i,700' // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'mainstages',
        short_name: 'mainstages',
        description: 'mainstages provides virtual entertainment for families and organizations with interactive weekly classes for kids, variety shows, and online birthday parties!',
        start_url: '/',
        background_color: '#fcfef7',
        theme_color: '#87CC2F',
        display: 'standalone',
        icon: 'src/images/icon.png'
      }
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-22185905-1',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false
        // sampleRate: 5,
        // siteSpeedSampleRate: 10
      }
    },
    {
      resolve: 'gatsby-plugin-facebook-pixel',
      options: {
        pixelId: '1153724114791502'
      }
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd
      }
    },
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -200
      }
    },
    'gatsby-plugin-netlify',
    'gatsby-plugin-theme-ui'
  ]
}
