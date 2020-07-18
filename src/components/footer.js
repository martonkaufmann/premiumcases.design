import React from "react";
import { Link } from "gatsby";
import { LogoImage } from "./image/logo";
import { useSiteMetadataHook } from "./../hooks/site-metadata";
import { useDevicesHook } from "./../hooks/devices";

const Footer = () => {
    const siteMetadata = useSiteMetadataHook();
    const devices = useDevicesHook();

    return (
        <footer className="flex flex-col-reverse md:flex-row justify-between bg-secondary text-white px-4 xl:px-56 py-4">
            <section className="mt-8 md:mt-0">
                <Link to="/">
                    <LogoImage className="w-12 mb-4 mx-auto" />
                    <h3 className="text-xl font-light text-center">
                        {siteMetadata.title}
                    </h3>
                </Link>
            </section>
            <section className="space-y-8 md:space-y-0 md:flex md:space-x-16">
                <section>
                    <header className="font-bold border-b-2 border-white pb-1 mb-3">
                        Devices
                    </header>
                    <ul className="space-y-1">
                        {devices.map(device => (
                            <li key={device.id}>
                                <h4>{device.name} Cases</h4>
                            </li>
                        ))}
                    </ul>
                </section>
                <section>
                    <header className="font-bold border-b-2 border-white pb-1 mb-3">
                        Support
                    </header>
                    <ul className="space-y-1">
                        <li className="mb-1" key="delivery-and-shipping">
                            <Link to="/delivery-and-shipping">
                                Delivery and Shipping
                            </Link>
                        </li>
                        <li className="mb-1" key="returns-and-exchanges">
                            <Link to="/returns-and-exchanges">
                                Returns and Exchanges
                            </Link>
                        </li>
                        <li className="mb-1" key="terms-and-conditions">
                            <Link to="/terms-and-conditions">
                                Terms and Conditions
                            </Link>
                        </li>
                        <li key="privacy-policy">
                            <Link to="/privacy-policy">Privacy Policy</Link>
                        </li>
                        <li key="contact-us">
                            <a href="mailto:account@premiumcases.design">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </section>
                <section>
                    <header className="font-bold border-b-2 border-white pb-1 mb-3">
                        Social
                    </header>
                    <ul className="space-y-1">
                        <li key="twitter">
                            <a
                                href={siteMetadata.twitter}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Twitter
                            </a>
                        </li>
                        <li key="pinterest">
                            <a
                                href={siteMetadata.pinterest}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Pinterest
                            </a>
                        </li>
                        <li key="instagram">
                            <a
                                href={siteMetadata.instagram}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Instagram
                            </a>
                        </li>
                    </ul>
                </section>
            </section>
        </footer>
    );
};

export default Footer;
