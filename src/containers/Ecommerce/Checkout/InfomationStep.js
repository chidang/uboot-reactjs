import { Link } from "react-router-dom";
import Select from 'react-select';
import countries from "../../../data/countries";
import OrderSummary from "./OrderSummary"

const InfomationStep = (props) => {
    return (
        <>
            <div className="tab-pane show active" id="order-information">
                <div className="row flex-lg-row-reverse">
                    <div className="col-lg-4">
                        <OrderSummary />
                    </div>
                    {/* end col */}
                    <div className="col-lg-8">
                        <div className="card">
                            <div className="card-body">
                                <form>
                                    <div className="d-flex mt-2 mb-3 justify-content-between">
                                        <h4>Contact Information</h4>
                                        <div>
                                            <span aria-hidden="true">Already have an account?</span>
                                            <a className="text-primary ms-2" href="#">Login</a>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label htmlFor="billing-first-name">First Name <span className="text-danger">*</span></label>
                                                <input className="form-control" type="text" id="billing-first-name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label htmlFor="billing-last-name">Last Name <span className="text-danger">*</span></label>
                                                <input className="form-control" type="text" id="billing-last-name" />
                                            </div>
                                        </div>
                                    </div> {/* end row */}
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label htmlFor="billing-phone">Phone number <span className="text-danger">*</span></label>
                                                <input className="form-control" type="text" id="billing-phone" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label htmlFor="billing-email-address">Email Address <span className="text-danger">*</span></label>
                                                <input className="form-control" type="email" id="billing-email-address" />
                                            </div>
                                        </div>
                                    </div> {/* end row */}
                                    <h4 className="mt-2 mb-3">Shipping Address</h4>
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
                                                <label htmlFor="shipping-address-1">Address line 1</label>
                                                <input className="form-control" type="text" placeholder="Street address, P.O. box, company name, c/o" id="shipping-address-1" />
                                            </div>
                                        </div>
                                    </div> {/* end row */}
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group mb-3">
                                                <label htmlFor="shipping-address-2">Address line 2</label>
                                                <input className="form-control" type="text" placeholder="Apartment, suite, unit, building, floor, etc." id="shipping-address-2" />
                                            </div>
                                        </div>
                                    </div> {/* end row */}
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group mb-3">
                                                <label htmlFor="shipping-town-city">Town / City</label>
                                                <input className="form-control" type="text" id="shipping-town-city" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group mb-3">
                                                <label htmlFor="shipping-state">State / Province / Region</label>
                                                <input className="form-control" type="text" id="shipping-state" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group mb-3">
                                                <label htmlFor="shipping-zip-postal">Zip Code</label>
                                                <input className="form-control" type="text" id="shipping-zip-postal" />
                                            </div>
                                        </div>
                                    </div> {/* end row */}
                                    <div className="row">
                                    </div> {/* end row */}
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group mb-3">
                                                <label htmlFor="example-textarea">Order Notes:</label>
                                                <textarea className="form-control" id="example-textarea" rows={3} placeholder="Write some note.." defaultValue={""} />
                                            </div>
                                        </div>
                                    </div> {/* end row */}
                                    <div className="mt-2">
                                        <label className="custom-checkbox d-inline-block mr-3">
                                            <input id="checkout-remember-me" type="checkbox" /> Save this information for next time
                            <span />
                                        </label>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-6">
                                            <Link to="/ecommerce/shopping-cart" className="btn btn-warning">
                                                <i className="bi-chevron-double-left" />
                                                Return to cart
                                            </Link>
                                        </div> {/* end col */}
                                        <div className="col-6">
                                            <div className="text-end">
                                                <button className="btn btn-danger" onClick={() => props.changeStep(2)}>
                                                    <i className="mdi mdi-truck-fast mr-1" /> Continue to Shipping </button>
                                            </div>
                                        </div> {/* end col */}
                                    </div> {/* end row */}
                                </form>
                            </div>
                            {/* end card-body */}
                        </div>
                        {/* end card */}
                    </div>
                    {/* end col */}
                </div>
                {/* end row*/}
            </div>
            {/* end tab-pane */}
        </>);
};

export default InfomationStep;
