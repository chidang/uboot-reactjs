const CreditCard = (props) => {
    return (
        <>
           <div className="payment-gateway">
                <div className="payment-gateway-header border-bottom p-3 d-flex justify-content-between align-items-center">
                    <div className="d-flex">
                        <label className="custom-radio">
                            <input
                                type="radio"
                                name="checkout[payment-rate][id]"
                                id="checkout-payment-rate-id-1"
                                checked={props.selected}
                                onChange={() => props.changePaymentMethod('Credit Card')}
                            />
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
                { 
                    !!props.selected ?
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
                    :
                        null
                }
                
            </div>
        </>
    );
}

export default CreditCard; 
