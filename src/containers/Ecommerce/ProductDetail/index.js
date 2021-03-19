import { Link } from "react-router-dom";
import product from "../../../assets/images/products/product-540x60.jpg";
import { Tabs, Tab } from "react-bootstrap";
import AdditionalInfoTab from './AdditionalInfoTab';
import DescriptionTab from './DescriptionTab';
import ReviewsTab from './ReviewsTab';

const ProductDetail = () => {
    return <>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb ps-0 fs-base">
            <li className="breadcrumb-item"><Link to="/">Uboot</Link></li>
            <li className="breadcrumb-item"><span>Ecommerce</span></li>
            <li className="breadcrumb-item active" aria-current="page">Product Detail</li>
          </ol>
        </nav>
        <div className="d-flex header justify-content-between mb-4">
          <h1 className="header-title h3">
            <i className="bi-cart3 text-primary" /> Product Detail
          </h1>
        </div>
        <div className="card p-5">
          <div className="row">
            {/* begin col product-image */}
            <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
              <div className="product-image-box text-center mb-4 p-3 rounded">
                <img id="product-img" src={product} className="img-fluid" alt="Product Detail" />
              </div>
              {/* begin product-gallery */}
              <div className="product-gallery d-flex justify-content-center">
                <Link to="#" className="product-gallery-item">
                  <img src={product} className="img-fluid img-thumbnail p-2" style={{maxWidth: '60px'}} alt="Product-img" />
                </Link>
                <Link to="#" className="product-gallery-item ms-2">
                  <img src={product} className="img-fluid img-thumbnail p-2" style={{maxWidth: '60px'}} alt="Product-img" />
                </Link>
                <Link to="#" className="product-gallery-item ms-2">
                  <img src={product} className="img-fluid img-thumbnail p-2" style={{maxWidth: '60px'}} alt="Product-img" />
                </Link>
                <Link to="#" className="product-gallery-item ms-2">
                  <img src={product} className="img-fluid img-thumbnail p-2" style={{maxWidth: '60px'}} alt="Product-img" />
                </Link>
              </div>
              {/* end product-gallery */}
            </div>
            {/* end col product-image */}
            {/* begin col product-detail */}
            <div className="col-lg-6 col-md-6">
              {/* begin product-detail */}
              <div className="product-detail">
                <h3 className="product-title">T-Shirt Form Girls</h3>
                <div className="product-price mb-2">
                  <span className="price text-primary fs-lg fw-700 me-2">$24.65</span>
                  <del>$29.00</del>
                  <div className="text-success d-inline ms-2">
                    <span>15% Off</span>
                  </div>
                </div>
                {/* end product-price */}
                <div className="rating-wrap">
                  <div className="rating">
                    <div className="product-rate" style={{width: '86%'}} />
                  </div>
                  <span className="rating-num">(21)</span>
                </div>
                {/* end rating-wrap */}
                <div className="product-desc mt-2">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis enim volutpat, interdum odio vel, sagittis massa.</p>
                </div>
                <div className="product-sort-info">
                  <ul className="list-unstyled">
                    <li><i className="bi-shield-check text-primary" /> If you're not 100% satisfied with your physical order, let us know and we'll make it right.</li>
                    <li><i className="bi-arrow-repeat text-primary" /> 30 Day Return Policy</li>
                    <li><i className="bi-cash text-primary" /> Cash on Delivery available</li>
                  </ul>
                </div>
                {/* end product-sort-info */}
                <div className="product-switch-wrap clearfix">
                  <strong className="switch-label">Color</strong>
                  <ul className="product-color-list">
                    <li className="product-color-list-item ">
                      <div className="product-color-block" style={{backgroundColor: '#3f83dc'}} />
                    </li>
                    <li className="product-color-list-item ">
                      <div className="product-color-block" style={{backgroundColor: '#e54252'}} />
                    </li>
                    <li className="product-color-list-item ">
                      <div className="product-color-block" style={{backgroundColor: '#222222'}} />
                    </li>
                    <li className="product-color-list-item ">
                      <div className="product-color-block" style={{backgroundColor: '#898989'}} />
                    </li>
                    <li className="product-color-list-item ">
                      <div className="product-color-block" style={{backgroundColor: '#595b43'}} />
                    </li>
                  </ul>
                </div>
                {/* end product-switch-wrap */}
                <div className="product-switch-wrap clearfix">
                  <strong className="switch-lable">Size</strong>
                  <ul className="product-size-switch">
                    <li className="product-size-list-item active">
                      <div className="product-size-block">xs</div>
                    </li>
                    <li className="product-size-list-item">
                      <div className="product-size-block">s</div>
                    </li>
                    <li className="product-size-list-item">
                      <div className="product-size-block">m</div>
                    </li>
                    <li className="product-size-list-item">
                      <div className="product-size-block">l</div>
                    </li>
                    <li className="product-size-list-item">
                      <div className="product-size-block">xl</div>
                    </li>
                  </ul>
                </div>
                {/* end product-switch-wrap */}
              </div>
              {/* end product-detail */}
              <hr />
              <ul className="product-meta list-unstyled">
                <li>SKU: <Link className="fw-700" to="#">AC31RFT</Link></li>
                <li>Category: <Link className="fw-700" to="#">Classic Pullover Hoodie</Link></li>
                <li>Tags: <Link to="#" className="badge bg-primary rounded">Cloth</Link> <Link to="#" className="badge bg-primary rounded">printed</Link> <Link to="#" className="badge bg-primary rounded">T-shirt</Link> </li>
              </ul>
              <hr />
              <div className="row">
                <div className="col-md-4">
                  <h5 className="fw-700">Available Stock:</h5>
                  <p className="text-sm lh-150">2,986</p>
                </div>
                <div className="col-md-4">
                  <h5 className="fw-700">Number of Orders:</h5>
                  <p className="text-sm lh-150">6,196</p>
                </div>
                <div className="col-md-4">
                  <h5 className="fw-700">Revenue:</h5>
                  <p className="text-sm lh-150">$10,986,341</p>
                </div>
              </div>
              {/* end row */}
            </div>
            {/* end col product-detail */}
          </div>
          {/* end row */}
          <div className="row">
            <div className="col-12">
            <Tabs defaultActiveKey="description">
              <Tab eventKey="description" title="Description">
                <DescriptionTab />
              </Tab>
              <Tab eventKey="additional_info" title="Additional info">
                <AdditionalInfoTab />
              </Tab>
              <Tab eventKey="reviews" title="Reviews (2)">
                <ReviewsTab />
              </Tab>
            </Tabs>
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
    </>
}

export default ProductDetail;
