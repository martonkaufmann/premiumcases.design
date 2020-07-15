import React from "react";

const PrimaryButton = ({ children, className, ...props }) => (
    <button
        className={`text-white border-b-4 py-4 px-12 border-primary rounded-lg bg-secondary text-lg focus:outline-none ${className}`}
        {...props}
    >
        {children}
    </button>
);

export { PrimaryButton };
