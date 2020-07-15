import { useStaticQuery, graphql } from "gatsby";

const useDevicesHook = () => {
    const {
        hasura: { devices },
    } = useStaticQuery(
        graphql`
            query {
                hasura {
                    devices {
                        id
                        name
                    }
                }
            }
        `
    );

    return devices;
};

export { useDevicesHook };
