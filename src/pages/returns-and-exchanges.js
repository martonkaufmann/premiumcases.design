import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const ReturnsAndExchangesPage = () => (
    <Layout>
        <SEO title="Returns And Exchanges" />
        <section className="prose mx-auto">
            <h1>
                Returns And Exchanges
            </h1>
            <article>
                <h3>
                    Does Premium Cases guarantee its product?
                </h3>
                <p>
                    Of course! We're 100% committed to making you happy. Each
                    case is hand checked by a member of our team before it goes
                    out the door to ensure you get the best! While we make every
                    effort to ensure your case arrives in perfect condition,
                    sometimes things could happen. If you discover a fault with
                    the item(s) you have received, please take pictures of the
                    defect and contact us right away. We will work with you to
                    guarantee your satisfaction.
                </p>
                <p>
                    Please keep in mind that our products are made on demand
                    thus we cannot offer a refund or accept a returned item for
                    any other reason than that it is faulty and/or there are
                    issues with the print quality of the product.
                </p>
                <p>
                    Returns made will be refunded in your original form of
                    payment. If the payment was made using credit / debit card
                    or bank account, there might be a lead time required by
                    PayPal (our credit card settlement service provider) to set
                    up the credit transaction with your bank.
                </p>
            </article>
        </section>
    </Layout>
);

export default ReturnsAndExchangesPage;