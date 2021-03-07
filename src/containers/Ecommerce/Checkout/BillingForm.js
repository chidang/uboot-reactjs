import Select from 'react-select';
import countries from "../../../data/countries";

const BillingForm = (props) => {
    return (
        <>
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
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group mb-3">
                            <label>Country</label>
                            <Select options={countries} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="form-group mb-3">
                            <label htmlFor="billing-address-1">Address</label>
                            <input className="form-control" type="text" placeholder="Street address, P.O. box, company name, c/o" id="billing-address-1" />
                        </div>
                    </div>
                </div>
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
            </div>
        </>
    );
}

export default BillingForm; 
