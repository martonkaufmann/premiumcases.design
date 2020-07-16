import React from "react";
import { Link } from "gatsby";
import slugify from "slugify";
import { PipelineImage } from "./../image/pipeline";

const CaseCard = ({ image, name, id, lazy = true }) => (
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
        <h2 className="text-base md:text-lg font-bold mt-4">{name}</h2>
    </Link>
);

export { CaseCard };
