const Amazon = (props) => {
    return (
        <>
            <div className="payment-gateway">
                <div className="payment-gateway-header border-bottom p-3 d-flex justify-content-between align-items-center">
                    <div className="d-flex">
                        <label className="custom-radio">
                            <input
                                type="radio"
                                name="checkout[payment-rate][id]"
                                id="checkout-payment-rate-id-3"
                                checked={props.selected}
                                onChange={() => props.changePaymentMethod('Amazon')}
                            />
                            <span />
                        </label>
                        <label htmlFor="checkout-payment-rate-id-3">
                            <span className="fw-700">Amazon pay</span>
                        </label>
                    </div>
                </div>
                { 
                !!props.selected ?
                    <div className="payment-gateway-content p-5 border-bottom flex-column justify-content-center align-items-center">
                        <span className="payment-gateway-outsite" />
                        <p className="mt-3">You will be asked to login with Amazon.</p>
                    </div>
                :
                    null
                }
            </div>
        </>
    );
}

export default Amazon;
