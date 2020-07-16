import React from "react";

const SecondaryButton = ({ children, className, ...props }) => (
    <button
        className={`border py-2 px-6 border-secondary rounded-lg text-secondary focus:outline-none ${className}`}
        {...props}
    >
        {children}
    </button>
);

export { SecondaryButton };
