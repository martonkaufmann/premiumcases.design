import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import slugify from "slugify";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PipelineImage from "../components/image/pipeline";
import LogoImage from "../components/image/logo";
import PrimaryButton from "../components/button/primary";

const calculateHotCaseCount = () => {
    const hotCaseIncrement = 3;
    let hotCaseCount = 6;

    if (window.innerWidth >= 768) {
        hotCaseCount += hotCaseIncrement;
    }

    if (window.innerWidth >= 1024) {
        hotCaseCount += hotCaseIncrement;
    }

    if (window.innerWidth >= 1280) {
        hotCaseCount += hotCaseIncrement;
    }

    return hotCaseCount;
};

const IndexPage = () => {
    const result = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
            hasura {
                devices_by_pk(id: 2) {
                    cases_devices(order_by: { id: desc }, limit: 45) {
                        image
                        case {
                            id
                            name
                        }
                    }
                }
            }
        }
    `);

    const [hotCaseCount, setHotCaseCount] = useState(0);

    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }

        const handleResize = () => setHotCaseCount(calculateHotCaseCount());

        window.addEventListener("resize", handleResize);

        setHotCaseCount(calculateHotCaseCount());
    }, []);

    return (
        <Layout>
            <SEO title="Home" />
            <header className="flex max-h-640px">
                <section className="flex-1 hidden md:block">
                    <PipelineImage
                        className="h-full object-cover"
                        image="case-held"
                        alt="Case held"
                    />
                </section>
                <section className="flex-1 flex flex-col items-center justify-center p-4">
                    <header className="flex justify-center items-center flex-col mb-8">
                        <LogoImage className="w-16 md:w-32 mb-6" />
                        <h3 className="text-3xl font-light text-center">
                            {result.site.siteMetadata.title}
                        </h3>
                    </header>
                    <h1 className="text-base md:text-lg text-center mb-12">
                        The {result.site.siteMetadata.title} phone case will
                        protect your phone from even the roughest conditions our
                        cases are durable and scratch resistant!
                    </h1>
                </section>
            </header>
            <section className="mb-24">
                <header className="flex bg-primary text-white justify-center items-center py-4 mb-12 text-xl sm:text-2xl md:text-3xl">
                    <span role="img" aria-label="flame">
                        &#128293;
                    </span>
                    <h4 className="font-bold mx-3">HOT New Cases</h4>
                    <span role="img" aria-label="bomb">
                        &#128163;
                    </span>
                </header>
                <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-12 mx-4 mb-12">
                    {result.hasura.devices_by_pk.cases_devices
                        .slice(0, hotCaseCount)
                        .map(device => (
                            <Link
                                key={device.image}
                                to={`/case/${device.case.id}/${slugify(
                                    device.case.name
                                )}`}
                                className="flex flex-col items-center shadow rounded-lg p-4 transform transition-transform duration-150 hover:scale-105"
                            >
                                <PipelineImage
                                    image={device.image}
                                    alt={device.case.name}
                                    operations={[
                                        {
                                            operation: "extract",
                                            params: {
                                                areawidth: 640,
                                                areaheight: 830,
                                                top: 80,
                                                left: 205,
                                            },
                                        },
                                    ]}
                                />
                                <h2 className="text-base md:text-lg font-bold mt-4">
                                    {device.case.name}
                                </h2>
                            </Link>
                        ))}
                </section>
                <section className="text-center">
                    <Link to="/catalog" className="inline-block">
                        <PrimaryButton>
                            <span role="img" aria-label="Browse">
                                &#128064;
                            </span>{" "}
                            Browse catalog
                        </PrimaryButton>
                    </Link>
                </section>
            </section>
            <section className="relative mb-24">
                <PipelineImage
                    className="w-full"
                    image="catalog"
                    alt="Catalog"
                />
                <section className="absolute inset-0 bg-black bg-opacity-25 text-shadow-xs flex items-center justify-center flex-col text-white text-center text-lg sm:text-2xl md:text-3xl font-bold px-4">
                    <h3 className="mb-4">
                        Full ink density wrap and image transfer
                    </h3>
                    <h3>
                        Excellent resistance to outdoor weathering, longterm
                        optical quality
                    </h3>
                </section>
            </section>
            <section className="md:flex">
                <div className="flex-1 mb-24 md:mb-0">
                    <PipelineImage
                        className="mb-6"
                        image="tough-case-layered"
                        alt="Tough case layered"
                    />
                    <h3 className="text-center text-lg mx-4">
                        <span role="img" aria-label="Hammer">
                            &#x1F528;
                        </span>{" "}
                        Made of impact resistant TPU material with good shock
                        absorption, protecting against drop and tear.
                    </h3>
                </div>
                <div className="flex-1">
                    <PipelineImage
                        className="mb-6"
                        image="device-printer"
                        alt="Device printer"
                    />
                    <h3 className="text-center text-lg mx-4">
                        <p>
                            The main printer that is used for decoaration is IDT
                            Systems D10 Series machine.
                        </p>
                        <p>
                            The technology wraps the artwork all the way around
                            the sides of the case giving you a fully 3D printed
                            case.
                        </p>
                    </h3>
                </div>
            </section>
        </Layout>
    );
};

export default IndexPage;
