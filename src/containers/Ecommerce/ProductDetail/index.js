import product from "../../../assets/images/products/product-540x60.jpg";

const ProductDetail = () => {
    return <>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb pl-0 fs-base">
            <li className="breadcrumb-item"><a href="#">Uboot</a></li>
            <li className="breadcrumb-item"><span>Ecommerce</span></li>
            <li className="breadcrumb-item active" aria-current="page">Product Detail</li>
          </ol>
        </nav>
        <div className="d-flex header justify-content-between mb-4">
          <h1 className="header-title h3">
            <i className="bi-cart3 text-primary" />
            Product Detail
          </h1>
        </div>
        <div className="card p-5">
          <div className="row">
            {/* begin col product-image */}
            <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
              <div className="product-image-box text-center mb-4 p-3 rounded">
                <img id="product-img" src={product} className="img-fluid" alt="Product Image" />
              </div>
              {/* begin product-gallery */}
              <div className="product-gallery d-flex justify-content-center">
                <a href="javascript: void(0);" className="product-gallery-item">
                  <img src={product} className="img-fluid img-thumbnail p-2" style={{maxWidth: '60px'}} alt="Product-img" />
                </a>
                <a href="javascript: void(0);" className="product-gallery-item ml-2">
                  <img src={product} className="img-fluid img-thumbnail p-2" style={{maxWidth: '60px'}} alt="Product-img" />
                </a>
                <a href="javascript: void(0);" className="product-gallery-item ml-2">
                  <img src={product} className="img-fluid img-thumbnail p-2" style={{maxWidth: '60px'}} alt="Product-img" />
                </a>
                <a href="javascript: void(0);" className="product-gallery-item ml-2">
                  <img src={product} className="img-fluid img-thumbnail p-2" style={{maxWidth: '60px'}} alt="Product-img" />
                </a>
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
                  <span className="price text-primary fs-lg fw-700">$24.65</span>
                  <del>$29.00</del>
                  <div className="text-success d-inline">
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
                    <li><i className="fal fa-shield-check text-primary" /> If you're not 100% satisfied with your physical order, let us know and we'll make it right.</li>
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
                <li>SKU: <a className="fw-700" href="#">AC31RFT</a></li>
                <li>Category: <a className="fw-700" href="#">Classic Pullover Hoodie</a></li>
                <li>Tags: <a href="#" className="badge bg-primary rounded">Cloth</a> <a href="#" className="badge bg-primary rounded">printed</a> <a href="#" className="badge bg-primary rounded">T-shirt</a> </li>
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
              <div className="tab-style3">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link" id="Description-tab" data-toggle="tab" href="#Description" role="tab" aria-controls="Description" aria-selected="false">Description</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="Additional-info-tab" data-toggle="tab" href="#Additional-info" role="tab" aria-controls="Additional-info" aria-selected="false">Additional info</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" id="Reviews-tab" data-toggle="tab" href="#Reviews" role="tab" aria-controls="Reviews" aria-selected="true">Reviews (2)</a>
                  </li>
                </ul>
                <div className="tab-content shop-info-tab">
                  <div className="tab-pane fade" id="Description" role="tabpanel" aria-labelledby="Description-tab">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis enim volutpat, interdum odio vel, sagittis massa. Phasellus id turpis leo. Aenean pretium non massa a ultricies. Integer quis nulla quis nulla mollis vestibulum. Nullam erat nulla, elementum placerat augue in, ultrices aliquet tellus. Mauris suscipit orci at mauris consequat, vel posuere nibh vestibulum. Vestibulum sit amet turpis dolor. Praesent commodo nibh sed mi facilisis, vitae auctor felis semper. Suspendisse potenti. Aenean tempor, quam sit amet hendrerit euismod, enim tellus aliquam dolor, quis tristique tortor ex eu leo. Duis ligula eros, maximus non mattis sed, vehicula feugiat urna. Ut faucibus hendrerit eleifend. Aenean ipsum velit, mollis sit amet felis ut, interdum luctus nibh.</p>
                    <p>Nam placerat justo vitae porttitor euismod. Nullam sit amet enim id elit varius vestibulum ac ac tortor. Nunc non tortor vitae nulla laoreet finibus. Curabitur at sagittis neque. Sed rutrum ante sem. Praesent mattis justo quis congue convallis. In at molestie odio, a porttitor ipsum. Duis elementum, augue vitae semper mollis, nunc ex vulputate diam, et luctus diam urna ut sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra tortor eget sem vehicula, a mollis dui molestie. Suspendisse sagittis lectus in velit tristique, vel luctus odio ornare. Ut dui lorem, hendrerit sed aliquet non, eleifend eu ex. Mauris vel purus vulputate, consequat velit non, tempus enim. Mauris nibh nunc, consequat vulputate massa non, vehicula imperdiet leo. Quisque gravida justo a enim blandit, in egestas velit varius.</p>
                  </div>
                  <div className="tab-pane fade" id="Additional-info" role="tabpanel" aria-labelledby="Additional-info-tab">
                    <table className="table table-bordered">
                      <tbody>
                        <tr>
                          <td>Capacity</td>
                          <td>0.2 Kg</td>
                        </tr>
                        <tr>
                          <td>Color</td>
                          <td>Black, Brown, Red,</td>
                        </tr>
                        <tr>
                          <td>Water Resistant</td>
                          <td>Yes</td>
                        </tr>
                        <tr>
                          <td>Material</td>
                          <td>Heathered, poly/cotton/rayon blend</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="tab-pane fade active show" id="Reviews" role="tabpanel" aria-labelledby="Reviews-tab">
                    <div className="comments">
                      <h4 className="product-tab-title">2 Review For <span>T-Shirt Form Girls</span></h4>
                      <ul className="list-none comment-list mt-4">
                        <li className="d-flex flex-row">
                          <div className="comment-img mr-3">
                            <img src="assets/images/avatar.jpg" style={{height: '60px'}} alt="User" className="rounded" />
                          </div>
                          <div className="comment-block">
                            <div className="rating-wrap float-right">
                              <div className="rating">
                                <div className="product-rate" style={{width: '80%'}} />
                              </div>
                            </div>
                            <div className="customer-meta">
                              <span className="review-author fw-700 d-block">Schirsten Vander</span>
                              <span className="comment-date"><i>March 5, 2020</i></span>
                            </div>
                            <div className="description">
                              <p>Duis interdum gravida erat eu congue. Aenean malesuada sapien risus, sed lacinia dui sodales venenatis. Sed vitae felis vitae dolor consequat semper. Vestibulum hendrerit nulla justo, et hendrerit nibh accumsan et. Sed faucibus erat id eleifend accumsan.</p>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex flex-row">
                          <div className="comment-img mr-3">
                            <img src="assets/images/default-female-avatar.jpg" style={{height: '60px'}} alt="" className="rounded" />
                          </div>
                          <div className="comment-block">
                            <div className="rating-wrap float-right">
                              <div className="rating">
                                <div className="product-rate" style={{width: '60%'}} />
                              </div>
                            </div>
                            <div className="customer-meta">
                              <span className="review-author fw-700 d-block">Robert Nordic</span>
                              <span className="comment-date"><i>Apr 5, 2020</i></span>
                            </div>
                            <div className="description">
                              <p>Praesent tristique ex sit amet ante sodales, vel dignissim nisl laoreet. Nunc sit amet orci dolor. Duis sit amet porttitor diam. Sed nisi sapien, lobortis eget lacus vitae, tincidunt dapibus mauris.</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
    </>
}

export default ProductDetail;
