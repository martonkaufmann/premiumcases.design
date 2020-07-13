import React, { useState } from "react";
import slugify from "slugify";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PipelineImage from "../components/image/pipeline";
import PrimaryButton from "../components/button/primary";

const CaseTemplate = ({ pageContext: { case: c } }) => {
    const [deviceId, setSelectedDeviceId] = useState(1);
    const price = (c.price / 100).toFixed(2);
    const caseDevice = c.cases_devices.find(cd => cd.device.id === deviceId);
    const caseDefaultImageUrl = `${process.env.GATSBY_IMAGES}/resize?file=${
        c.cases_devices.find(cd => cd.device.id === 2).image
    }.jpg&width=640`;

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
            <section className="flex flex-col md:flex-row xl:mx-40 px-4 xl:px-0">
                <section>
                    <PipelineImage
                        alt={caseDevice.device.name}
                        image={caseDevice.image}
                        lazy={false}
                    />
                </section>
                <aside className="mt-16">
                    <h1 className="text-2xl font-bold mb-2">{c.name}</h1>
                    <section className="mb-12">${price}</section>
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
                        data-item-url={`${process.env.GATSBY_APP_URL}/case/${
                            c.id
                        }/${c.id}/${slugify(c.name)}`}
                        className="snipcart-add-item w-full md:w-auto"
                    >
                        <span role="img" aria-label="Cart">
                            &#128722;
                        </span>{" "}
                        Add to cart - ${price}
                    </PrimaryButton>
                </aside>
            </section>
        </Layout>
    );
};

export default CaseTemplate;
