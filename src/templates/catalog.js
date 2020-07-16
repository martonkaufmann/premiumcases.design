import React, { useState } from "react";
import Fuse from "fuse.js";
import { motion } from "framer-motion";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { SecondaryButton } from "../components/button/secondary";
import { CaseCard } from "./../components/card/case";

const CatalogTemplate = ({ pageContext: { cases } }) => {
    const [term, setTerm] = useState("");
    const [results, setResults] = useState(cases);
    const fuse = new Fuse(cases, {
        includeScore: true,
        findAllMatches: true,
        keys: ["name"],
    });
    const onSearchKeyUp = e => setTerm(e.target.value);

    const onSearchClick = () => {
        setResults(term ? fuse.search(term).map(r => r.item) : cases);
    };
    const onSearchSubmit = e => {
        e.preventDefault();

        setResults(term ? fuse.search(term).map(r => r.item) : cases);
    };

    return (
        <Layout>
            <SEO title="Catalog" />
            <header className="flex bg-primary text-white justify-center items-center py-4 mb-12 text-xl sm:text-2xl md:text-3xl">
                <span role="img" aria-label="Browse">
                    &#128064;
                </span>
                <h4 className="font-bold mx-3">Catalog</h4>
            </header>
            <section className="mx-4 xl:mx-64 mb-12">
                <form onSubmit={onSearchSubmit} className="md:flex">
                    <input
                        type="text"
                        className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none mb-4 md:mb-0 md:mr-4"
                        placeholder="Search &#128270;"
                        onKeyUp={onSearchKeyUp}
                    />
                    <SecondaryButton
                        onClick={onSearchClick}
                        className="w-full md:w-auto"
                    >
                        Search
                    </SecondaryButton>
                </form>
            </section>
            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-12 mx-4 mb-12">
                {results.length === 0 ? (
                    <h5 className="col-span-5 text-center text-2xl">No cases matching the search criteria were found</h5>
                ) : (
                results.map((c, index) => (
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: (index + 1) * 0.02,
                        }}
                        key={`case-${index}-${c.id}`}
                    >
                        <CaseCard
                            lazy={results.length > 10}
                            image={c.image}
                            name={c.name}
                            id={c.id}
                        />
                    </motion.div>
                ))
                )}
            </section>
        </Layout>
    );
};

export default CatalogTemplate;
