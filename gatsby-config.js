require("dotenv").config({
    path: `.env`,
});

module.exports = {
    siteMetadata: {
        title: "Premium Cases Design",
        description:
            "The Premium Cases tough phone case will protect your phone from even the roughest conditions. Your custom print is durable and scratch resistant!",
        author: "Premium Cases Design",
        twitter: "https://twitter.com/cases_design",
        pinterest: "https://www.pinterest.com/account1228/",
        instagram: "https://www.instagram.com/premiumcases.design/",
        url: "https://premiumcases.design",
        siteUrl: "https://premiumcases.design", // for gatsby-plugin-sitemap plugin
        logo:
            "https://api.premiumcases.design/images/thumbnail?file=logo.webp&width=256",
        twitterHandle: "cases_design",
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
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `Premium Cases Design`,
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
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-postcss`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
