/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const slugify = require("slugify");
const Fuse = require("fuse.js");

exports.createPages = async ({ actions, graphql }) => {
    const {
        data: {
            hasura: { cases },
        },
    } = await graphql(`
        query {
            hasura {
                cases(order_by: { id: desc }) {
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

    const scrubbed = cases.map(r => {
        const { cases_devices, ...props } = r;

        props.image = cases_devices.find(cd => cd.device.id === 2).image;
        props.devices = cases_devices.map(cd => cd.device.name);

        return props;
    });

    const fuse = new Fuse(scrubbed, {
        findAllMatches: true,
        keys: ["name"],
    });

    for (const c of cases) {
        const recommended = fuse
            .search({
                $or: c.name.split(' ').map(s => ({name: s}))
            })
            .filter(r => r.item.id !== c.id)
            .map(r => r.item)
            .slice(0, 15)

        actions.createPage({
            path: `/case/${c.id}/${slugify(c.name)}`,
            component: require.resolve(`./src/templates/case.js`),
            context: { case: c, recommended },
        });
    }

    actions.createPage({
        path: `/`,
        component: require.resolve(`./src/templates/index.js`),
        context: { cases: scrubbed.slice(0, 45) },
    });

    actions.createPage({
        path: `/catalog`,
        component: require.resolve(`./src/templates/catalog.js`),
        context: { cases: scrubbed },
    });
};
