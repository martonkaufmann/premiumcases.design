import React from "react";
import { Link } from "gatsby";
import slugify from "slugify";
import { PipelineImage } from "./../image/pipeline";

const CaseCard = ({ image, name, price, id, lazy = true }) => (
    <Link
        key={image}
        to={`/case/${id}/${slugify(name)}`}
        className={`flex flex-col items-center shadow rounded-lg p-4 transform transition-transform duration-150 h-full hover:scale-105`}
    >
        <PipelineImage
            image={image}
            alt={name}
            lazy={lazy}
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
        <footer className="mt-4 w-full">
            <h2 className="text-base md:text-lg font-bold">{name}</h2>
            <span className="text-sm">${(price / 100).toFixed(2)}</span>
        </footer>
    </Link>
);

export { CaseCard };
