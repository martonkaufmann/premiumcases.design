import React from "react";

const format = (operations, width) => [
    ...operations,
    {
        operation: "resize",
        params: { width },
    },
    {
        operation: "convert",
        params: {
            type: "webp",
        },
    },
];

const PipelineImage = ({
    image,
    alt,
    lazy = true,
    className = "",
    operations = [],
    ...props
}) => {
    const url = `${process.env.GATSBY_API_URL}/images/pipeline?file=${image}.jpg`;
    const smSrc = `${url}&operations=${JSON.stringify(
        format(operations, 480)
    )}`;
    const mdSrc = `${url}&operations=${JSON.stringify(
        format(operations, 800)
    )}`;
    const lgSrc = `${url}&operations=${JSON.stringify(
        format(operations, 1024)
    )}`;

    if (!lazy) {
        return (
            <img
                className={`block mx-auto ${className}`}
                alt={alt}
                src={lgSrc}
                srcSet={`${smSrc} 480w, ${mdSrc} 960w, ${lgSrc} 1280w`}
                {...props}
            />
        );
    }

    return (
        <img
            className={`lozad block mx-auto ${className}`}
            alt={alt}
            data-src={lgSrc}
            data-srcset={`${smSrc} 480w, ${mdSrc} 960w, ${lgSrc} 1280w`}
            {...props}
        />
    );
};

export { PipelineImage };
