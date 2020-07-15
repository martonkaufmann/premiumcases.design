import { useStaticQuery, graphql } from "gatsby";

const useSiteMetadataHook = () => {
    const {
        site: { siteMetadata },
    } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        url
                        description
                        twitter
                        instagram
                        pinterest
                        logo
                    }
                }
            }
        `
    );

    return siteMetadata;
};

export { useSiteMetadataHook };
