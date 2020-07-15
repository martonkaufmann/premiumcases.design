import React, { useState } from "react";
import slugify from "slugify";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { PipelineImage } from "../components/image/pipeline";
import { PrimaryButton } from "../components/button/primary";
import { CaseCard } from "./../components/card/case";

const CatalogTemplate = ({ pageContext: { cases } }) => {
    console.log(cases);

    return (
        <Layout>
            <SEO title="Catalog" />
        </Layout>
    );
};

export default CatalogTemplate;
