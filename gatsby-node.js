/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const slugify = require("slugify");

exports.createPages = async ({ actions, graphql }) => {
    const { data } = await graphql(`
        query {
            hasura {
                cases {
                    id
                    name
                    price
                    cases_devices {
                        image
                        device {
                            id
                            name
                        }
                    }
                }
            }
        }
    `);

    for (const c of data.hasura.cases) {
        actions.createPage({
            path: `/case/${c.id}/${slugify(c.name)}`,
            component: require.resolve(`./src/templates/case.js`),
            context: { case: c },
        });
    }
};
