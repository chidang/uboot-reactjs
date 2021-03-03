import { Link } from "react-router-dom";
import product from "../../../assets/images/products/product-80x80.jpg";

const ProductRating = () => {
    return (
        <>
            <div className="fs-sm mb-1"><b>PRODUCT RATING</b></div>
            <div className="card">
                <div className="widget-list">
                    <Link className="d-flex justify-content-between p-2 widget-list-item">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="my-2">
                                <img className="img-thumbnail" alt="Product" src={product} style={{ height: '50px' }} />
                            </div>
                            <div className="ms-3">
                                <h4 className="m-0 fs-base fw-700">Asphalt 8</h4>
                                <span className="m-0 fs-sm text-muted">Drive and Drift at Real Speed</span>
                                <div>
                                    <span className="badge bg-primary">$12.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="rating-wrap">
                                <div className="rating">
                                    <div className="product-rate" style={{ width: '80%' }} />
                                </div>
                            </div>
                            <span className="rating-num">(21)</span>
                        </div>
                    </Link>
                    <Link className="d-flex justify-content-between p-2 widget-list-item">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="my-2">
                                <img className="img-thumbnail" alt="Product" src={product} style={{ height: '50px' }} />
                            </div>
                            <div className="ms-3">
                                <h4 className="m-0 fs-base fw-700">Extreme landing</h4>
                                <span className="m-0 fs-sm text-muted">Simulation</span>
                                <div>
                                    <span className="badge bg-primary">$9.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="rating-wrap">
                                <div className="rating">
                                    <div className="product-rate" style={{ width: '80%' }} />
                                </div>
                            </div>
                            <span className="rating-num">(21)</span>
                        </div>
                    </Link>
                    <Link className="d-flex justify-content-between p-2 widget-list-item">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="my-2">
                                <img className="img-thumbnail" alt="Product" src={product} style={{ height: '50px' }} />
                            </div>
                            <div className="ms-3">
                                <h4 className="m-0 fs-base fw-700">Hunting Shark Simulator 3D</h4>
                                <span className="m-0 fs-sm text-muted">Caribbean Hungry Monster</span>
                                <div>
                                    <span className="badge bg-primary">$3.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="rating-wrap">
                                <div className="rating">
                                    <div className="product-rate" style={{ width: '80%' }} />
                                </div>
                            </div>
                            <span className="rating-num">(21)</span>
                        </div>
                    </Link>
                    <Link className="d-flex justify-content-between p-2 widget-list-item">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="my-2">
                                <img className="img-thumbnail" alt="Product" src={product} style={{ height: '50px' }} />
                            </div>
                            <div className="ms-3">
                                <h4 className="m-0 fs-base fw-700">Might And Magic Chess Royale</h4>
                                <span className="m-0 fs-sm text-muted">Fast Tactical</span>
                                <div>
                                    <span className="badge bg-primary">$15.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="rating-wrap">
                                <div className="rating">
                                    <div className="product-rate" style={{ width: '80%' }} />
                                </div>
                            </div>
                            <span className="rating-num">(21)</span>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default ProductRating;
