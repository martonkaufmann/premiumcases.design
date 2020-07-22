import React, { useState } from "react";
import { Link } from "gatsby";
import slugify from "slugify";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { PipelineImage } from "../components/image/pipeline";
import { Pinterest } from "./../components/social/pinterest";
import { Twitter } from "./../components/social/twitter";
import { PrimaryButton } from "../components/button/primary";
import { CaseCard } from "./../components/card/case";
import { useSiteMetadataHook } from "./../hooks/site-metadata";

const CaseTemplate = ({ pageContext: { case: c, recommended } }) => {
    const siteMetadata = useSiteMetadataHook();
    const [deviceId, setSelectedDeviceId] = useState(1);
    const price = (c.price / 100).toFixed(2);
    const caseDevice = c.cases_devices.find(cd => cd.device.id === deviceId);
    const caseDefaultImageUrl = `${
        process.env.GATSBY_API_URL
    }/images/resize?file=${
        c.cases_devices.find(cd => cd.device.id === 2).image
    }.jpg&width=640`;
    const caseUrl = `${siteMetadata.url}/case/${c.id}/${slugify(c.name)}`;

    return (
        <Layout>
            <SEO
                title={`${c.name} - iPhone Tough Case`}
                meta={[
                    {
                        name: "twitter:image",
                        content: caseDefaultImageUrl,
                    },
                    {
                        name: "og:type",
                        content: "product",
                    },
                ]}
            />
            <header className="bg-primary text-white text-lg py-3 text-center font-bold">
                LAUNCH DISCOUNT! Use the following discount code when checking
                out to get a 20% discount. Code: PCD20
            </header>
            <section className="flex flex-col md:flex-row mx-4 xl:mx-40 mb-24">
                <section>
                    <PipelineImage
                        alt={caseDevice.device.name}
                        image={caseDevice.image}
                        lazy={false}
                    />
                </section>
                <aside className="mt-16">
                    <h1 className="text-2xl font-bold mb-2">{c.name}</h1>
                    <section className="mb-6">${price}</section>
                    <section className="mb-12 flex space-x-2">
                        <Pinterest media={caseDefaultImageUrl} url={caseUrl} />
                        <Twitter
                            text={`Awesome case by @${siteMetadata.twitterHandle}\n${caseUrl}`}
                        />
                    </section>
                    <section className="mb-12">
                        <ol>
                            <li className="mb-1">
                                <h3>
                                    Dual layer case for extra durability and
                                    protection
                                </h3>
                            </li>
                            <li className="mb-1">
                                <h3>
                                    Impact resistant Polycarbonate outer shell
                                </h3>
                            </li>
                            <li className="mb-1">
                                <h3>
                                    Inner TPU liner for extra impact resistance
                                </h3>
                            </li>
                            <li className="mb-1">
                                <h3>Photographic print quality</h3>
                            </li>
                            <li>
                                <h3>Clear, open ports for connectivity</h3>
                            </li>
                        </ol>
                    </section>
                    <section className="mb-12">
                        <header className="text-lg mb-4">
                            Select your device
                        </header>
                        <div className="flex flex-wrap">
                            {c.cases_devices.map(({ device }) => (
                                <button
                                    key={`device-${device.id}`}
                                    className={`py-3 px-4 rounded-none focus:outline-none transition duration-200 transition-colors bg-primary bg-opacity-0 ${
                                        device.id === deviceId
                                            ? "bg-opacity-100 text-white"
                                            : "hover:bg-opacity-25 active:bg-opacity-100"
                                    }`}
                                    onClick={() =>
                                        setSelectedDeviceId(device.id)
                                    }
                                >
                                    {device.name}
                                </button>
                            ))}
                        </div>
                    </section>
                    <PrimaryButton
                        data-item-id={c.id}
                        data-item-price={price}
                        data-item-image={caseDefaultImageUrl}
                        data-item-name={c.name}
                        data-item-custom1-name="Device"
                        data-item-custom1-options={c.cases_devices
                            .map(({ device }) => device.name)
                            .join("|")}
                        data-item-custom1-value={caseDevice.device.name}
                        data-item-url={caseUrl}
                        className="snipcart-add-item w-full md:w-auto"
                    >
                        <span role="img" aria-label="Cart">
                            &#128722;
                        </span>{" "}
                        Add to cart - ${price}
                    </PrimaryButton>
                </aside>
            </section>
            <section>
                <h4 className="bg-primary text-white text-center py-4 mb-12 text-xl sm:text-2xl md:text-3xl font-bold mx-3">
                    You might also like
                </h4>
                <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-12 mx-4 mb-12">
                    {recommended.map(c => (
                        <CaseCard key={`case-${c.id}`} {...c} />
                    ))}
                </section>
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
        </Layout>
    );
};

export default CaseTemplate;
