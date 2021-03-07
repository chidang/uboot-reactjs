import OrderSummary from './OrderSummary';
import BillingSection from './BillingSection';
import PaymentMethod from './PaymentMethod';

const PaymentStep = (props) => {
    return (
        <>
            <div className="tab-pane show active" id="payment-information">
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
                                    <PaymentMethod.CreditCard
                                        selected={props.paymentMethod === 'Credit Card'}
                                        changePaymentMethod= {props.changePaymentMethod}
                                    />
                                    <PaymentMethod.Paypal
                                        selected={props.paymentMethod === 'Paypal'}
                                        changePaymentMethod= {props.changePaymentMethod}
                                    />
                                    <PaymentMethod.Amazon
                                        selected={props.paymentMethod === 'Amazon'}
                                        changePaymentMethod= {props.changePaymentMethod}
                                    />
                                    <PaymentMethod.Klarna
                                        selected={props.paymentMethod === 'Klarna'}
                                        changePaymentMethod= {props.changePaymentMethod}
                                    />
                                </div>
                                <BillingSection
                                    changeBillingAddess={props.changeBillingAddess}
                                    billingAddress={props.billingAddress}
                                />
                                <div className="row mt-4">
                                    <div className="col-6">
                                        <button onClick={() => props.changeStep(2)} className="btn btn-warning">
                                            <i className="bi-chevron-double-left" />
                                            Return to shipping
                                        </button>
                                    </div>
                                    <div className="col-6">
                                        <div className="text-end">
                                            <a href="#" className="btn btn-danger">
                                                <i className="mdi mdi-truck-fast mr-1" /> Complete order </a>
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

export default PaymentStep; 
