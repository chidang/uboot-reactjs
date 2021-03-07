import OrderSummary from "./OrderSummary"

const ShippingStep = (props) => {
    return (
        <>
            <div className="tab-pane show active" id="shipping-information">
                <div className="row flex-lg-row-reverse">
                    <div className="col-lg-4">
                        <OrderSummary />
                    </div>
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
                                            <tr>
                                                <td>Ship to</td>
                                                <td>3363 Cook Hill Road, Wallingford, Connecticut(CT), 06492, Wallingford CT 06492, United States</td>
                                                <td><a href="#" className="text-primary">Change</a></td>
                                            </tr>
                                        </tbody></table>
                                </div>
                                <h2 className="h4">
                                    Shipping method
                                </h2>
                                <div className="border mb-3 rounded">
                                    <div className="border-bottom p-3 d-flex justify-content-between align-items-center">
                                        <div className="d-flex">
                                            <label className="custom-radio">
                                                <input type="radio" name="checkout[shipping-rate][id]" id="checkout-shipping-rate-id-1" />
                                                <span />
                                            </label>
                                            <label htmlFor="checkout-shipping-rate-id-1">
                                                FedEx Ground
                                                <br />
                                                <span className="fs-sm">Estimated delivery: four days</span>
                                            </label>
                                        </div>
                                        $8.73
                                    </div>
                                    <div className="border-bottom p-3 d-flex justify-content-between align-items-center">
                                        <div className="d-flex">
                                            <label className="custom-radio">
                                                <input type="radio" name="checkout[shipping-rate][id]" id="checkout-shipping-rate-id-2" />
                                                <span />
                                            </label>
                                            <label htmlFor="checkout-shipping-rate-id-2">
                                                USPS Priority Mail 2-Day
                                                <br />
                                                <span className="fs-sm">1-Day or 2-Day expedited service by 3 p.m</span>
                                            </label>
                                        </div>
                                        $11.19
                                    </div>
                                    <div className="border-bottom p-3 d-flex justify-content-between align-items-center">
                                        <div className="d-flex">
                                            <label className="custom-radio">
                                                <input type="radio" name="checkout[shipping-rate][id]" id="checkout-shipping-rate-id-3" />
                                                <span />
                                            </label>
                                            <label htmlFor="checkout-shipping-rate-id-3">
                                                FedEx Express Saver
                                                <br />
                                                <span className="fs-sm">3 business days</span>
                                            </label>
                                        </div>
                                        $16.22
                                    </div>
                                    <div className="border-bottom p-3 d-flex justify-content-between align-items-center">
                                        <div className="d-flex">
                                            <label className="custom-radio">
                                                <input type="radio" name="checkout[shipping-rate][id]" id="checkout-shipping-rate-id-4" />
                                                <span />
                                            </label>
                                            <label htmlFor="checkout-shipping-rate-id-4">
                                                FedEx 2 Day
                                                <br />
                                                <span className="fs-sm">2 business days</span>
                                            </label>
                                        </div>
                                        $20.85
                                    </div>
                                    <div className="border-bottom p-3 d-flex justify-content-between align-items-center">
                                        <div className="d-flex">
                                            <label className="custom-radio">
                                                <input type="radio" name="checkout[shipping-rate][id]" id="checkout-shipping-rate-id-5" />
                                                <span />
                                            </label>
                                            <label htmlFor="checkout-shipping-rate-id-5">
                                                FedEx Standard Overnight
                                                <br />
                                                <span className="fs-sm">1 business days</span>
                                            </label>
                                        </div>
                                        $39.68
                                    </div>
                                    <div className="p-3 d-flex justify-content-between align-items-center">
                                        <div className="d-flex">
                                            <label className="custom-radio">
                                                <input type="radio" name="checkout[shipping-rate][id]" id="checkout-shipping-rate-id-6" />
                                                <span />
                                            </label>
                                            <label htmlFor="checkout-shipping-rate-id-6">
                                                FedEx First Overnight
                                                <br />
                                                <span className="fs-sm">1 business days</span>
                                            </label>
                                        </div>
                                        $132.41
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-6">
                                        <button onClick={() => props.changeStep(1)} className="btn btn-warning">
                                            <i className="bi-chevron-double-left" />
                                            Return to Information
                                        </button>
                                    </div>
                                    <div className="col-6">
                                        <div className="text-end">
                                            <button onClick={() => props.changeStep(3)} className="btn btn-danger">
                                                <i className="mdi mdi-truck-fast mr-1" /> Continue to Payment </button>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShippingStep;
