import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
    return (
        <html {...props.htmlAttributes}>
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                {props.headComponents}
                <link
                    rel="stylesheet"
                    href="https://cdn.snipcart.com/themes/v3.0.17/default/snipcart.css"
                />
            </head>
            <body {...props.bodyAttributes}>
                {props.preBodyComponents}
                <div
                    key={`body`}
                    id="___gatsby"
                    dangerouslySetInnerHTML={{ __html: props.body }}
                />
                {props.postBodyComponents}
                {/* <script
                    async={true}
                    crossOrigin="*"
                    src={`https://embed.tawk.to/${process.env.GATSBY_TAWK_TOKEN}/default`}
                /> */}
                <script
                    defer={true}
                    crossOrigin="*"
                    src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
                />
                <script
                    defer={true}
                    crossOrigin="*"
                    src="https://cdn.snipcart.com/themes/v3.0.17/default/snipcart.js"
                    id="snipcart"
                    data-api-key={process.env.GATSBY_SNIPCART_TOKEN}
                />
            </body>
        </html>
    );
}

HTML.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array,
};