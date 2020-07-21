import React from "react";

const format = (operations, width = 1024) => [
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
    breakpoints = [
        [480, 480],
        [960, 960],
        [1280, 1280],
    ],
    ...props
}) => {
    const url = `${process.env.GATSBY_API_URL}/images/pipeline?file=${image}.jpg`;
    const src = `${url}&operations=${JSON.stringify(format(operations))}`;
    let srcSet = "";

    for (const [screenWidth, imageWidth] of breakpoints) {
        const imgSrc = `${url}&operations=${JSON.stringify(
            format(operations, imageWidth)
        )}`;
        srcSet += `${imgSrc} ${screenWidth}w,`;
    }

    if (!lazy) {
        return (
            <img
                className={`block mx-auto ${className}`}
                alt={alt}
                src={src}
                srcSet={srcSet}
                {...props}
            />
        );
    }

    return (
        <img
            className={`lozad block mx-auto ${className}`}
            alt={alt}
            data-src={src}
            data-srcset={srcSet}
            {...props}
        />
    );
};

export { PipelineImage };
