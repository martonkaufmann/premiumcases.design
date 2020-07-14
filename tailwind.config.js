module.exports = {
    purge: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
    theme: {
        extend: {
            colors: {
                primary: "#f56565",
                secondary: "#2a2938",
            },
        },
    },
    variants: {},
    plugins: [require("@tailwindcss/typography")],
};
