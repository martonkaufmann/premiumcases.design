import React, { useEffect } from "react";
import PropTypes from "prop-types";
import lozad from "lozad";
import Footer from "./footer";
import Navigation from "./navigation";
import "./layout.css";

const Layout = ({ children }) => {
    useEffect(() => {
        lozad().observe();
    });

    return (
        <>
            <Navigation />
            <main className="mt-16 mb-24 text-gray-900">{children}</main>
            <Footer />
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
