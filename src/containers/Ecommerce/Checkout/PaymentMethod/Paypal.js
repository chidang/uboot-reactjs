const Paypal = (props) => {
    return (
        <>
           <div className="payment-gateway">
                <div className="payment-gateway-header border-bottom p-3 d-flex justify-content-between align-items-center">
                    <div className="d-flex">
                        <label className="custom-radio">
                            <input
                                type="radio"
                                name="checkout[payment-rate][id]"
                                id="checkout-payment-rate-id-2"
                                checked={props.selected}
                                onChange={() => props.changePaymentMethod('Paypal')}
                            />
                            <span />
                        </label>
                        <label htmlFor="checkout-payment-rate-id-2">
                            <span className="fw-700">Paypal</span>
                        </label>
                    </div>
                </div>
                { !!props.selected ?
                <div className="payment-gateway-content p-5 border-bottom flex-column justify-content-center align-items-center">
                    <span className="payment-gateway-outsite" />
                    <p className="mt-3">After clicking “Complete order”, you will be redirected to PayPal to complete your purchase securely.</p>
                </div>
                :
                null }
            </div>
        </>
    );
}

export default Paypal; 
