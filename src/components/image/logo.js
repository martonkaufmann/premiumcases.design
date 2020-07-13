import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const LogoImage = ({ image, alt, className = "", ...props }) => {
    const result = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <img
            className={`lozad block mx-auto ${className}`}
            alt={`${result.site.siteMetadata.title} logo`}
            data-src={`${process.env.GATSBY_IMAGES}/thumbnail?file=logo.webp&width=256`}
            {...props}
        />
    );
};

export default LogoImage;
