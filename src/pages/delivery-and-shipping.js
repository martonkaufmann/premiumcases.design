import React from 'react'
import Layout from "../components/layout";
import SEO from "../components/seo";

const DeliveryAndShippingPage = () => (
    <Layout>
    <SEO title="Delivery And Shipping" />
    <section className="prose mx-auto">
        <h1>
            Delivery And Shipping
        </h1>
        <article>
            <h3>
                How long does it take before my order gets shipped?
            </h3>
            <p>
                We are aiming to have your order dispatched from our
                facility within 1-3 business days. However, please bear with
                us in case we are spending extra time in checking /
                perfecting your items, particularly during the peak season
                around end of the year.
            </p>
            <p>
                Furthermore, there will be chances that the item that you
                ordered may run out of stock though we are doing our best to
                avoid this from happening. We will definitely try to get you
                notified as soon as possible if that happens. You may on and
                off notice during checkout that the estimated delivery time
                is exceptionally long. This could be due to that some
                products are currently having nil inventory and restock of
                the goods is in progress.
            </p>
            <p>
                Please contact our customer service team if there is any
                question concerning the time to dispatch.
            </p>

            <h3>
                After the goods are dispatched, how long does for standard
                shipping to deliver the package?
            </h3>
            <p>
                The estimated delivery time displayed on the checkout page
                includes the preparation time to dispatch and also the
                shipping time altogether. The delivery time will vary a lot
                from country to country. In short, the shipping time alone
                could be around,
            </p>
            <dl>
                <dt>For US orders:</dt>
                <dd>2-5 business days</dd>

                <dt>For non-US orders:</dt>
                <dd>10-30 business days</dd>
            </dl>
            <p>
                Delivery time is not guaranteed as there are lot of factor
                affecting its speed. The above are estimated time required
                by the postal service and does not include the processing
                time of the Customs in the destination country. In some
                cases the local Customs office of your country may require
                additional documents and time to have your package cleared,
                and this may also cause further delay on the delivery.
            </p>
            <p>
                Please allow extra time for your order to be processed
                during public holidays and busy periods. Customs and Postal
                Service may also require extra time to work on the
                processing / delivery during peak season or before major
                festivals (e.g., Valentine’s Day). For details on public
                holidays in the destination country, please refer to the
                local government website. Please also note that delays may
                occur as a result of pending payment authorizations.
            </p>

            <h3>Import Taxes & Duties</h3>
            <p>
                Some countries outside the United States may require import
                tax, duties and related Customs fees for the imports, and
                the cost is not covered in payments you made to us. These
                charges, if applicable, are determined and charged by the
                Customs office of the destination country. For further
                details of charges, please contact your local Customs office
                directly.
            </p>
        </article>
    </section>
    </Layout>
)

export default DeliveryAndShippingPage