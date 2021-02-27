import product from "../../../assets/images/products/product-80x80.jpg";

const ShoppingCart = () => {
    return <>
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb ps-0 fs-base">
                <li className="breadcrumb-item"><a href="#">Uboot</a></li>
                <li className="breadcrumb-item"><span>Ecommerce</span></li>
                <li className="breadcrumb-item active" aria-current="page">Shopping Cart</li>
                </ol>
            </nav>
            <div className="d-flex header justify-content-between mb-4">
                <h1 className="header-title h3">
                <i className="bi-cart3 text-primary" />
                Shopping Cart
                </h1>
            </div>
            <div className="row">
                <div className="col-lg-8 col-md-12">
                <div className="card">
                    <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-borderless table-centered mb-0">
                        <thead className="thead-light">
                            <tr>
                            <th />
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>
                                <img alt="Product" src={product} className="img-thumbnail" width={48} />
                            </td>
                            <td>
                                <div className>
                                <a href className>Blue Dress For Woman</a>
                                <br />
                                <small className><b>Size:</b> Large </small>
                                <small><b>Color:</b> Black
                                </small>
                                </div>
                                <a href="#" className="text-danger">Delete</a>
                            </td>
                            <td>
                                $19.99
                            </td>
                            <td>
                                <input type="number" min={1} defaultValue={2} className="form-control" placeholder="Qty" style={{width: '90px'}} />
                            </td>
                            <td>
                                $39.98
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <img alt="Product" src={product} className="img-thumbnail" width={48} />
                            </td>
                            <td>
                                <div className>
                                <a href className>Woman Full Sliv Dress</a>
                                <br />
                                <small className><b>Size:</b> Large </small>
                                <small><b>Color:</b> Black
                                </small>
                                </div>
                                <a href="#" className="text-danger">Delete</a>
                            </td>
                            <td>
                                $21.99
                            </td>
                            <td>
                                <input type="number" min={1} defaultValue={1} className="form-control" placeholder="Qty" style={{width: '90px'}} />
                            </td>
                            <td>
                                $21.99
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <img alt="Product" src={product} className="img-thumbnail" width={48} />
                            </td>
                            <td>
                                <div className>
                                <a href className>Light Blue Shirt</a>
                                <br />
                                <small className><b>Size:</b> Large </small>
                                <small><b>Color:</b> Black
                                </small>
                                </div>
                                <a href="#" className="text-danger">Delete</a>
                            </td>
                            <td>
                                $26.99
                            </td>
                            <td>
                                <input type="number" min={1} defaultValue={3} className="form-control" placeholder="Qty" style={{width: '90px'}} />
                            </td>
                            <td>
                                $80.97
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    {/* end table-responsive */}
                    <div className="card-note mt-3">
                        <label htmlFor="add-note">Note</label>
                        <textarea className="form-control" id="add-note" rows={3} placeholder="Write some note.." defaultValue={""} />
                    </div>
                    {/* end card-note */}
                    </div>
                </div>
                {/* end card-body */}
                </div>
                {/* end card */}
                {/* end col-lg-8 */}
                <div className="col-lg-4">
                <div className="card">
                    <div className="card-body">
                    <h4 className="header-title mb-3">Order Summary</h4>
                    <div className="table-responsive">
                        <table className="table table-borderless text-right mb-0">
                        <tbody>
                            <tr>
                            <td>Grand Total:</td>
                            <td>$142.94</td>
                            </tr>
                            <tr>
                            <td>Discount: </td>
                            <td>-$28.59</td>
                            </tr>
                            <tr>
                            <td>Shipping Charge:</td>
                            <td>$20</td>
                            </tr>
                            <tr>
                            <td>Tax: </td>
                            <td>$20</td>
                            </tr>
                            <tr>
                            <th>Total:</th>
                            <th>$154.35</th>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                {/* end card */}
                <button type="button" className="btn btn-lg btn-danger btn-block btn-air mt-4 fs-md">Checkout</button>
                <div className="alert alert-warning mt-4" role="alert">
                    Use promo code <strong>DC20PC</strong> and get 20% discount !
                </div>
                <div className="d-flex">
                    <input type="text" className="form-control me-2" placeholder="Promo code" />
                    <button className="btn btn-primary" type="button">Apply</button>
                </div>
                </div>
            </div>
            <div className="row pt-3 pb-5">
                <div className="col-12">
                <a href="products.html" className="btn btn-warning mt-3 mt-lg-0">
                    <i className="bi-chevron-double-left" />
                    Continue Shopping
                </a>
                </div>
            </div>
            </div>

    </>
}

export default ShoppingCart;
