import React from "react";
import { PipelineImage } from "./../image/pipeline";

const Pinterest = ({ media, url, className, ...props }) => {
    const href = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(
        url
    )}&media=${encodeURIComponent(media)}`;

    return (
        <a href={href} target="blank" rel="noreferrer" {...props}>
            <PipelineImage
                image="pinterest"
                alt="Pinterest Pin"
                className="w-10"
                breakpoints={[
                    [480, 96],
                    [960, 128],
                    [1280, 256],
                ]}
            />
        </a>
    );
};

export { Pinterest };
