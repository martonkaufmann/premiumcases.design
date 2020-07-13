import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import LogoImage from "./image/logo";

const Footer = () => {
    const result = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
            hasura {
                devices {
                    id
                    name
                }
            }
        }
    `);

    return (
        <footer className="flex flex-col-reverse md:flex-row justify-between bg-secondary text-white px-4 xl:px-56 py-4">
            <section className="mt-8 md:mt-0">
                <LogoImage className="w-12 mb-4 mx-auto" />
                <h3 className="text-xl font-light text-center">
                    {result.site.siteMetadata.title}
                </h3>
            </section>
            <section className="space-y-8 md:space-y-0 md:flex md:space-x-16">
                <section>
                    <header className="font-bold border-b-2 border-white pb-1 mb-3">
                        Devices
                    </header>
                    <ul className="space-y-1">
                        {result.hasura.devices.map(device => (
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
                    </ul>
                </section>
                <section>
                    <header className="font-bold border-b-2 border-white pb-1 mb-3">
                        Social
                    </header>
                    <ul className="space-y-1">
                        <li key="twitter">
                            <a
                                href="https://twitter.com/cases_design"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Twitter
                            </a>
                        </li>
                        <li key="pinterest">
                            <a
                                href="https://www.pinterest.com/account1228/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Pinterest
                            </a>
                        </li>
                        <li key="instagram">
                            <a
                                href="https://www.instagram.com/premiumcases.design/"
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
