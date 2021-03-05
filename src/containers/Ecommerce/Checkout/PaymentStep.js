import Select from 'react-select';
import countries from "../../../data/countries";
import OrderSummary from "./OrderSummary"

const PaymentStep = () => {
    return (
        <>
        <div className="tab-pane show active" id="payment-information">
            <div className="row flex-lg-row-reverse">
                <div className="col-lg-4">
                    <OrderSummary />
                </div>
                {/* end col */}
                <div className="col-lg-8">
                <div className="card">
                    <div className="card-body">
                    <div className="border p-3 mb-3 rounded">
                        <table className="table table-borderless">
                        <tbody><tr className="border-bottom">
                            <td>Contact</td>
                            <td>donnie1973@hotmail.com</td>
                            <td><a href="#" className="text-primary">Change</a></td>
                            </tr>
                            <tr className="border-bottom">
                            <td>Ship to</td>
                            <td>3363 Cook Hill Road, Wallingford, Connecticut(CT), 06492, Wallingford CT 06492, United States</td>
                            <td><a href="#" className="text-primary">Change</a></td>
                            </tr>
                            <tr>
                            <td>Method</td>
                            <td>FedEx Ground · $8.73</td>
                            <td><a href="#" className="text-primary">Change</a></td>
                            </tr>
                        </tbody></table>
                    </div>
                    <h2 className="h4">
                        Payment
                    </h2>
                    <p>All transactions are secure and encrypted.</p>
                    <div id="order-payment" className="border mb-3 rounded">
                        <div className="payment-gateway">
                        <div className="payment-gateway-header border-bottom p-3 d-flex justify-content-between align-items-center">
                            <div className="d-flex">
                            <label className="custom-radio">
                                <input type="radio" name="checkout[payment-rate][id]" id="checkout-payment-rate-id-1" />
                                <span />
                            </label>
                            <label htmlFor="checkout-payment-rate-id-1">
                                <span className="fw-700">Credit Card</span>
                            </label>
                            </div>
                            <div className="brand-icons">
                            <span className="payment-icon payment-icon-visa">
                            </span>
                            <span className="payment-icon payment-icon-master">
                            </span>
                            <span className="payment-icon payment-icon-american-express">
                            </span>
                            <span className="payment-icon payment-icon-discover">
                            </span>
                            </div>
                        </div>
                        {/* end payment-gateway-header */}
                        <div className="payment-gateway-content  border-bottom payment-gateway-content-credit-card p-3">
                            <form>
                            <div className="row">
                                <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label htmlFor="payment-card-number">Card number</label>
                                    <input className="form-control" type="text" id="payment-card-number" />
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label htmlFor="payment-name-on-card">Name on card</label>
                                    <input className="form-control" type="text" id="payment-name-on-card" />
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label htmlFor="payment-expiration-date">Expiration date (MM / YY)</label>
                                    <input className="form-control" type="text" id="payment-expiration-date" />
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label htmlFor="payment-security-code">Security code</label>
                                    <input className="form-control" type="text" id="payment-security-code" />
                                </div>
                                </div>
                            </div>
                            </form>
                        </div>
                        {/* end payment-gateway-content */}
                        </div>
                        {/* end payment-gateway */}
                        <div className="payment-gateway">
                        <div className="payment-gateway-header border-bottom p-3 d-flex justify-content-between align-items-center">
                            <div className="d-flex">
                            <label className="custom-radio">
                                <input type="radio" name="checkout[payment-rate][id]" id="checkout-payment-rate-id-2" />
                                <span />
                            </label>
                            <label htmlFor="checkout-payment-rate-id-2">
                                <span className="fw-700">Paypal</span>
                            </label>
                            </div>
                        </div>
                        {/* end payment-gateway-header */}
                        <div className="payment-gateway-content p-5 border-bottom flex-column justify-content-center align-items-center">
                            <span className="payment-gateway-outsite" />
                            <p className="mt-3">After clicking “Complete order”, you will be redirected to PayPal to complete your purchase securely.</p>
                        </div>
                        {/* end payment-gateway-content */}
                        </div>
                        {/* end payment-gateway */}
                        <div className="payment-gateway">
                        <div className="payment-gateway-header border-bottom p-3 d-flex justify-content-between align-items-center">
                            <div className="d-flex">
                            <label className="custom-radio">
                                <input type="radio" name="checkout[payment-rate][id]" id="checkout-payment-rate-id-3" />
                                <span />
                            </label>
                            <label htmlFor="checkout-payment-rate-id-3">
                                <span className="fw-700">Amazon pay</span>
                            </label>
                            </div>
                        </div>
                        {/* end payment-gateway-header */}
                        <div className="payment-gateway-content p-5 border-bottom flex-column justify-content-center align-items-center">
                            <span className="payment-gateway-outsite" />
                            <p className="mt-3">You will be asked to login with Amazon.</p>
                        </div>
                        {/* end payment-gateway-content */}
                        </div>
                        {/* end payment-gateway */}
                        <div className="payment-gateway">
                        <div className="payment-gateway-header border-bottom p-3 d-flex justify-content-between align-items-center">
                            <div className="d-flex">
                            <label className="custom-radio">
                                <input type="radio" name="checkout[payment-rate][id]" id="checkout-payment-rate-id-4" />
                                <span />
                            </label>
                            <label htmlFor="checkout-payment-rate-id-4">
                                <span className="fw-700">Pay over time with Klarna</span>
                            </label>
                            </div>
                        </div>
                        {/* end payment-gateway-header */}
                        <div className="payment-gateway-content p-5 flex-column justify-content-center align-items-center">
                            <span className="payment-gateway-outsite" />
                            <p className="mt-3">After clicking "Complete order", you will be redirected to Pay over time with Klarna to complete your purchase securely.</p>
                        </div>
                        {/* end payment-gateway-content */}
                        </div>
                        {/* end payment-gateway */}
                    </div>
                    {/* end order-payment */}
                    <h2 className="h4 mt-3">
                        Billing address
                    </h2>
                    <p>Select the address that matches your card or payment method.</p>
                    <div id="order-billing-address" className="border mb-3 rounded">
                        <div className="billing-address">
                        <div className="billing-address-header border-bottom p-3 d-flex justify-content-between align-items-center">
                            <div className="d-flex">
                            <label className="custom-radio">
                                <input type="radio" name="checkout[billing-address][id]" id="checkout-billing-address-id-1" />
                                <span />
                            </label>
                            <label htmlFor="checkout-billing-address-id-1">
                                <span className="fw-700">Same as shipping address</span>
                            </label>
                            </div>
                        </div>
                        {/* end billing-address-header */}
                        </div>
                        {/* end billing-address */}
                        <div className="billing-address">
                        <div className="billing-address-header border-bottom p-3">
                            <div className="d-flex">
                            <label className="custom-radio">
                                <input type="radio" name="checkout[billing-address][id]" id="checkout-billing-address-id-2" />
                                <span />
                            </label>
                            <label htmlFor="checkout-billing-address-id-2">
                                <span className="fw-700"> Use a different billing address</span>
                            </label>
                            </div>
                        </div>
                        {/* end billing-address-header */}
                        <div className="billing-address-content p-3">
                            <div className="row">
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                <label htmlFor="other-billing-first-name">First Name <span className="text-danger">*</span></label>
                                <input className="form-control" type="text" id="other-billing-first-name" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                <label htmlFor="other-billing-last-name">Last Name <span className="text-danger">*</span></label>
                                <input className="form-control" type="text" id="other-billing-last-name" />
                                </div>
                            </div>
                            </div>
                            {/* end row */}
                            <div className="row">
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                <label htmlFor="other-billing-phone">Phone number <span className="text-danger">*</span></label>
                                <input className="form-control" type="text" id="other-billing-phone" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                <label htmlFor="other-billing-email-address">Email Address <span className="text-danger">*</span></label>
                                <input className="form-control" type="email" id="other-billing-email-address" />
                                </div>
                            </div>
                            </div>
                            {/* end row */}
                            <div className="row">
                            <div className="col-md-12">
                                <div className="form-group mb-3">
                                <label>Country</label>
                                <Select options={countries} />
                                </div>
                            </div>
                            </div> {/* end row */}
                            <div className="row">
                            <div className="col-12">
                                <div className="form-group mb-3">
                                <label htmlFor="billing-address-1">Address</label>
                                <input className="form-control" type="text" placeholder="Street address, P.O. box, company name, c/o" id="billing-address-1" />
                                </div>
                            </div>
                            </div>
                            {/* end row */}
                            <div className="row">
                            <div className="col-md-4">
                                <div className="form-group mb-3">
                                <label htmlFor="billing-town-city">Town / City</label>
                                <input className="form-control" type="text" id="billing-town-city" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group mb-3">
                                <label htmlFor="billing-state">State / Province / Region</label>
                                <input className="form-control" type="text" id="billing-state" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group mb-3">
                                <label htmlFor="billing-zip-postal">Zip Code</label>
                                <input className="form-control" type="text" id="billing-zip-postal" />
                                </div>
                            </div>
                            </div>
                            {/* end row */}
                        </div>
                        {/* end billing-address-content */}
                        </div>
                        {/* end billing-address */}
                    </div>
                    {/* end billing-address */}
                    <div className="row mt-4">
                        <div className="col-6">
                        <a href="shopping-card.html" className="btn btn-warning">
                            <i className="bi-chevron-double-left" />
                            Return to shipping
                        </a>
                        </div>
                        {/* end col */}
                        <div className="col-6">
                        <div className="text-end">
                            <a href="#" className="btn btn-danger">
                            <i className="mdi mdi-truck-fast mr-1" /> Complete order </a>
                        </div>
                        </div>
                        {/* end col */}
                    </div>
                    {/* end row */}
                    </div>
                    {/* end card-body */}
                </div>
                {/* end card */}
                </div>
                {/* end col */}
            </div>
            {/* end row*/}
            </div>

        </>
    );
}

export default PaymentStep; 
