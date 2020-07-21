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
                        twitterHandle
                    }
                }
            }
        `
    );

    return siteMetadata;
};

export { useSiteMetadataHook };
