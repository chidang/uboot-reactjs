import BillingForm from './BillingForm';

const BillingSection = (props) => {
    return (
        <>
            <h2 className="h4 mt-3">
                Billing address
            </h2>
            <p>Select the address that matches your card or payment method.</p>
            <div id="order-billing-address" className="border mb-3 rounded">
                <div className="billing-address">
                    <div className="billing-address-header border-bottom p-3 d-flex justify-content-between align-items-center">
                        <div className="d-flex">
                            <label className="custom-radio">
                                <input
                                    type="radio"
                                    name="checkout[billing-address][id]"
                                    id="checkout-billing-address-id-1"
                                    checked={props.billingAddress === 'Same as billing address'}
                                    onChange={() => props.changeBillingAddess('Same as billing address')}
                                />
                                <span />
                            </label>
                            <label htmlFor="checkout-billing-address-id-1">
                                <span className="fw-700">Same as shipping address</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="billing-address">
                    <div className="billing-address-header border-bottom p-3">
                        <div className="d-flex">
                            <label className="custom-radio">
                                <input
                                    type="radio"
                                    name="checkout[billing-address][id]"
                                    id="checkout-billing-address-id-2"
                                    checked={props.billingAddress === 'Difference billing address'}
                                    onChange={() => props.changeBillingAddess('Difference billing address')}
                                />
                                <span />
                            </label>
                            <label htmlFor="checkout-billing-address-id-2">
                                <span className="fw-700"> Use a different billing address</span>
                            </label>
                        </div>
                    </div>
                    { props.billingAddress === 'Difference billing address' ? <BillingForm /> : null }
                </div>
            </div>
        </>
    );
}

export default BillingSection; 
