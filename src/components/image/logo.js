import React from "react";
import { useSiteMetadataHook } from "./../../hooks/site-metadata";

const LogoImage = ({ image, alt, className = "", ...props }) => {
    const siteMetadata = useSiteMetadataHook();

    return (
        <img
            className={`lozad block mx-auto ${className}`}
            alt={`${siteMetadata.title} logo`}
            data-src={siteMetadata.logo}
            {...props}
        />
    );
};

export { LogoImage };
