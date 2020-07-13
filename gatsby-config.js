require("dotenv").config({
    path: `.env`,
});

module.exports = {
    siteMetadata: {
        title: `Premium Cases Design`,
        description: `The Premium Cases tough phone case will protect your phone from even the roughest conditions. Your custom print is durable and scratch resistant!`,
        author: `Premium Cases | Design`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `Premium Cases | Design`,
                start_url: `/`,
                background_color: `#2a2938`,
                theme_color: `#2a2938`,
                display: `minimal-ui`,
                icon: `src/images/logo.webp`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-source-graphql`,
            options: {
                typeName: `HASURA`,
                fieldName: `hasura`,
                url: `https://hasura.premiumcases.design/v1/graphql`,
                headers: {
                    // Learn about environment variables: https://gatsby.dev/env-vars
                    "x-hasura-admin-secret": process.env.HASURA_SECRET,
                    "content-type": "application/json",
                },
            },
        },
        `gatsby-plugin-postcss`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
