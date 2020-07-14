import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const PrivacyPolicyPage = () => (
    <Layout>
        <SEO title="Privacy Policy" />
        <section className="prose mx-auto pt-8 px-12 md:px-0">
            <h1>Privacy Policy</h1>
            <article>
                <p>
                    The "Premium Cases Design" website uses cookies, tracking
                    pixels and related technologies for analyzing visitor
                    behaviour to improving our website. The data collected from
                    our website visitors will not be used by or transfered to
                    any third parties.
                </p>
                <p>
                    We use{" "}
                    <a
                        href="https://matomo.org/"
                        target="_blank"
                        rel="noreferrer"
                        className="underline"
                    >
                        matomo
                    </a>{" "}
                    to track and analyze our visitors behaviour.
                </p>
            </article>
        </section>
    </Layout>
);

export default PrivacyPolicyPage;
