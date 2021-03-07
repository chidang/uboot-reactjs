const Klarna = (props) => {
    return (
        <>
           <div className="payment-gateway">
                <div className="payment-gateway-header border-bottom p-3 d-flex justify-content-between align-items-center">
                    <div className="d-flex">
                        <label className="custom-radio">
                            <input
                                type="radio"
                                name="checkout[payment-rate][id]"
                                id="checkout-payment-rate-id-4"
                                checked={props.selected}
                                onChange={() => props.changePaymentMethod('Klarna')}
                            />
                            <span />
                        </label>
                        <label htmlFor="checkout-payment-rate-id-4">
                            <span className="fw-700">Pay over time with Klarna</span>
                        </label>
                    </div>
                </div>
                { !!props.selected ?
                <div className="payment-gateway-content p-5 flex-column justify-content-center align-items-center">
                    <span className="payment-gateway-outsite" />
                    <p className="mt-3">After clicking "Complete order", you will be redirected to Pay over time with Klarna to complete your purchase securely.</p>
                </div>
                :
                null }
            </div>
        </>
    );
}

export default Klarna; 
