import React from "react";
import { PipelineImage } from "./../image/pipeline";

const Twitter = ({ text, className, ...props }) => {
    const href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        text
    )}`;

    return (
        <a href={href} target="blank" rel="noreferrer" {...props}>
            <PipelineImage
                image="twitter"
                alt="Twitter Tweet"
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

export { Twitter };
