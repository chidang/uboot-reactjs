import product from "../../../assets/images/products/product-80x80.jpg";

const OrderSummary = () => {
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="header-title mb-3">Order Summary</h4>
                <div className="table-responsive">
                    <table className="table table-borderless mb-0 align-middle">
                        <tbody>
                            <tr>
                                <td>
                                    <div className="product-thumbnail-wrapper mt-2">
                                        <img alt="Product" src={product} className="img-thumbnail" width={48} />
                                        <span className="product-thumbnail-quantity">2</span>
                                    </div>
                                </td>
                                <td>
                                    Light Blue Shirt
                                    <br />
                                    <span>Black / XL</span>
                                </td>
                                <td>$39.98</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="product-thumbnail-wrapper mt-2">
                                        <img alt="Product" src={product} className="img-thumbnail" width={48} />
                                        <span className="product-thumbnail-quantity">1</span>
                                    </div>
                                </td>
                                <td>
                                    Woman Full Sliv Dress
                                    <br />
                                    <span>Black / S</span>
                                </td>
                                <td>$21.99</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="product-thumbnail-wrapper mt-2">
                                        <img alt="Product" src={product} className="img-thumbnail" width={48} />
                                        <span className="product-thumbnail-quantity">3</span>
                                    </div>
                                </td>
                                <td>
                                    Blue Dress For Woman
                                <br />
                                    <span>Black / M</span>
                                </td>
                                <td>$80.97</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <hr />
                <form>
                    <div className="d-flex my-4">
                        <input type="text" className="form-control me-2" placeholder="Gift card or discount code" />
                        <button className="btn btn-primary" type="button">Apply</button>
                    </div>
                </form>
                <hr />
                <div className="table-responsive">
                    <table className="table table-borderless text-end mb-0">
                        <tbody>
                            <tr>
                                <td>Sub Total:</td>
                                <td>$142.94</td>
                            </tr>
                            <tr>
                                <td>Shipping:</td>
                                <td>$20</td>
                            </tr>
                            <tr>
                                <th>Total:</th>
                                <th>$162.94</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;
