import React from "react";
import { Link } from "gatsby";
import { LogoImage } from "./image/logo";
import { useSiteMetadataHook } from "./../hooks/site-metadata";

const Navigation = () => {
    const siteMetadata = useSiteMetadataHook();

    return (
        <nav className="fixed w-full top-0 z-10 bg-white flex h-16 items-center justify-between px-4 xl:px-40 shadow">
            <Link to="/" className="flex items-center">
                <LogoImage className="w-8 h-8 mr-0 md:mr-3" />
                <h3 className="hidden md:block text-lg font-light">
                    {siteMetadata.title}
                </h3>
            </Link>
            <ul className="flex space-x-8 text-lg">
                <li>
                    <Link to="/" className="flex p-1">
                        <span
                            className="mr-0 md:mr-1"
                            role="img"
                            aria-label="Home"
                        >
                            &#127968;
                        </span>{" "}
                        <span className="hidden md:block">Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/catalog" className="flex p-1">
                        <span
                            className="mr-0 md:mr-1"
                            role="img"
                            aria-label="Catalog"
                        >
                            &#128241;
                        </span>{" "}
                        <span className="hidden md:block">Catalog</span>
                    </Link>
                </li>
                <li className="snipcart-checkout flex cursor-pointer p-1">
                    <span className="mr-0 md:mr-1" role="img" aria-label="Cart">
                        &#128722;
                    </span>{" "}
                    <span className="hidden md:block">Cart</span>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
