import { Link } from "react-router-dom";

const Pricing = () =>
  <>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb ps-0 fs-base">
        <li className="breadcrumb-item"><Link to="#">Uboot</Link></li>
        <li className="breadcrumb-item"><span>Page</span></li>
        <li className="breadcrumb-item active" aria-current="page">Pricing</li>
      </ol>
    </nav>
    <div className="d-flex header justify-content-between mb-5">
      <h1 className="header-title h3">
        <i className="uil uil-usd-circle text-primary" /> Pricing
    </h1>
    </div>
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header justify-content-between">
            <h4 className="fw-700 m-0 fs-base">
              Default Pricing
          </h4>
            <div className="card-widgets">
              <Link className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></Link>
              <Link className="btn btn-warning" data-toggle="collapse" data-target="#cardCollpase0" role="button" aria-expanded="false" aria-controls="cardCollpase0"><i className="dripicons-minus" /></Link>
              <Link className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></Link>
            </div>
          </div>
          <div id="cardCollpase0" className="card-body show">
            <div id="pricing-1" className="p-4">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <div className="card border-0 shadow-lg p-0 text-center">
                    <div className="card-header border-0 p-0 d-block bg-success text-white">
                      <h6 className="text-uppercase fs-md p-3 w-100 bg-success-dark rounded-top">Free</h6>
                      <h3 className="fs-xxl">
                        <sup className="fs-md">$</sup><span>0</span>
                      </h3>
                      <p className="text-white"><strong>per month billed annually</strong></p>
                    </div>
                    <div className="card-body p-0">
                      <div className="pt-3">
                        <ul className="list-group">
                          <li className="list-group-item border-0 border-bottom p-3"><i className="bi-check2 text-success me-2" /><span>UI Kit</span></li>
                          <li className="list-group-item border-0 border-bottom p-3"><i className="bi-check2 text-success me-2" /><span>Components</span></li>
                          <li className="list-group-item border-0 border-bottom p-3"><i className="bi-check2 text-success me-2" /><span>Sections</span></li>
                          <li className="list-group-item border-0 border-bottom p-3"><i className="bi-x text-danger me-2" /><span>Technical Support</span></li>
                          <li className="list-group-item border-0 border-bottom p-3"><i className="bi-x text-danger me-2" /><span>20% Renewal Discount</span></li>
                          <li className="list-group-item border-0"><i className="bi-x text-danger me-2" /><span>Templates</span></li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-footer justify-content-center mt-4 border-0">
                      <Link to="#pablo" className="btn btn-success text-white">
                        Get Started
                    </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card border-0 shadow-lg p-0 text-center">
                    <div className="card-header border-0 p-0 pb-1 d-block bg-rose text-white">
                      <h6 className="text-uppercase fs-md p-3 w-100 bg-rose-dark rounded-top">Standard</h6>
                      <h3 className="fs-xxl py-4">
                        <sup className="fs-md">$</sup><span>10</span>
                      </h3>
                      <p className="text-white"><strong>per month billed annually</strong></p>
                    </div>
                    <div className="card-body p-0">
                      <div className="pt-5">
                        <ul className="list-group">
                          <li className="list-group-item border-0 border-bottom p-3"><i className="bi-check2 text-success me-2" /><span>UI Kit</span></li>
                          <li className="list-group-item border-0 border-bottom p-3"><i className="bi-check2 text-success me-2" /><span>Components</span></li>
                          <li className="list-group-item border-0 border-bottom p-3"><i className="bi-check2 text-success me-2" /><span>Sections</span></li>
                          <li className="list-group-item border-0 border-bottom p-3"><i className="bi-check2 text-success me-2" /><span>Technical Support</span></li>
                          <li className="list-group-item border-0 border-bottom p-3"><i className="bi-x text-danger me-2" /><span>20% Renewal Discount</span></li>
                          <li className="list-group-item border-0"><i className="bi-x text-danger me-2" /><span>Templates</span></li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-footer justify-content-center mt-5 border-0">
                      <Link to="#pablo" className="btn btn-rose text-white">
                        Get Started
                    </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card border-0 shadow-lg p-0 text-center">
                    <div className="card-header border-0 p-0 d-block bg-warning text-white">
                      <h6 className="text-uppercase fs-md p-3 w-100 bg-warning-dark rounded-top">Developer</h6>
                      <h3 className="fs-xxl">
                        <sup className="fs-md">$</sup><span>25</span>
                      </h3>
                      <p className="text-white"><strong>per month billed annually</strong></p>
                    </div>
                    <div className="card-body p-0">
                      <div className="pt-3">
                        <ul className="list-group">
                          <li className="list-group-item border-0 border-bottom p-3"><i className="bi-check2 text-success me-2" /><span>UI Kit</span></li>
                          <li className="list-group-item border-0 border-bottom p-3"><i className="bi-check2 text-success me-2" /><span>Components</span></li>
                          <li className="list-group-item border-0 border-bottom p-3"><i className="bi-check2 text-success me-2" /><span>Sections</span></li>
                          <li className="list-group-item border-0 border-bottom p-3"><i className="bi-check2 text-success me-2" /><span>Technical Support</span></li>
                          <li className="list-group-item border-0 border-bottom p-3"><i className="bi-check2 text-success me-2" /><span>20% Renewal Discount</span></li>
                          <li className="list-group-item border-0"><i className="bi-check2 text-success me-2" /><span>Templates</span></li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-footer justify-content-center mt-4 border-0">
                      <Link to="#pablo" className="btn btn-warning text-white">
                        Get Started
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end pricing-1 */}
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header justify-content-between">
            <h4 className="fw-700 m-0 fs-base">Stacked Pricing</h4>
            <div className="card-widgets">
              <Link className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></Link>
              <Link className="btn btn-warning" data-toggle="collapse" data-target="#cardCollpase1" role="button" aria-expanded="false" aria-controls="cardCollpase1"><i className="dripicons-minus" /></Link>
              <Link className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></Link>
            </div>
          </div>
          <div id="cardCollpase1" className="card-body show">
            <div id="pricing-2" className="p-4">
              <div className="row align-items-center">
                <div className="col-md-4 p-0">
                  <div className="card border-0 shadow-lg p-0 text-center">
                    <div className="card-header border-0 p-0 d-block bg-success text-white">
                      <h6 className="text-uppercase fs-md p-3 w-100 bg-success-dark rounded-top">Free</h6>
                      <h3 className="fs-xxl">
                        <sup className="fs-md">$</sup><span>0</span>
                      </h3>
                      <p className="text-white"><strong>per month billed annually</strong></p>
                    </div>
                    <div className="card-body p-0">
                      <div className="pt-3">
                        <ul className="list-group">
                          <li className="list-group-item border-0 p-3"><i className="bi-check2 text-success me-2" /><span>UI Kit</span></li>
                          <li className="list-group-item border-0 p-3"><i className="bi-check2 text-success me-2" /><span>Components</span></li>
                          <li className="list-group-item border-0 p-3"><i className="bi-check2 text-success me-2" /><span>Sections</span></li>
                          <li className="list-group-item border-0 p-3"><i className="bi-x text-danger me-2" /><span>Technical Support</span></li>
                          <li className="list-group-item border-0 p-3"><i className="bi-x text-danger me-2" /><span>20% Renewal Discount</span></li>
                          <li className="list-group-item border-0"><i className="bi-x text-danger me-2" /><span>Templates</span></li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-footer justify-content-center mt-4 border-0">
                      <Link to="#pablo" className="btn btn-success text-white">
                        Get Started
                    </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 p-0">
                  <div className="card border-0 shadow-lg p-0 text-center pricing-featured">
                    <div className="card-header border-0 p-0 pb-2 d-block bg-rose text-white">
                      <h6 className="text-uppercase fs-md p-3 w-100 bg-rose-dark rounded-top">Standard</h6>
                      <h3 className="fs-xxl py-4">
                        <sup className="fs-md">$</sup><span>10</span>
                      </h3>
                      <p className="text-white"><strong>per month billed annually</strong></p>
                    </div>
                    <div className="card-body p-0">
                      <div className="pt-5">
                        <ul className="list-group">
                          <li className="list-group-item border-0 p-3"><i className="bi-check2 text-success me-2" /><span>UI Kit</span></li>
                          <li className="list-group-item border-0 p-3"><i className="bi-check2 text-success me-2" /><span>Components</span></li>
                          <li className="list-group-item border-0 p-3"><i className="bi-check2 text-success me-2" /><span>Sections</span></li>
                          <li className="list-group-item border-0 p-3"><i className="bi-check2 text-success me-2" /><span>Technical Support</span></li>
                          <li className="list-group-item border-0 p-3"><i className="bi-x text-danger me-2" /><span>20% Renewal Discount</span></li>
                          <li className="list-group-item border-0"><i className="bi-x text-danger me-2" /><span>Templates</span></li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-footer justify-content-center mt-5 border-0">
                      <Link to="#pablo" className="btn btn-rose text-white">
                        Get Started
                    </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 p-0">
                  <div className="card border-0 shadow-lg p-0 text-center">
                    <div className="card-header border-0 p-0 d-block bg-warning text-white">
                      <h6 className="text-uppercase fs-md p-3 w-100 bg-warning-dark rounded-top">Developer</h6>
                      <h3 className="fs-xxl">
                        <sup className="fs-md">$</sup><span>25</span>
                      </h3>
                      <p className="text-white"><strong>per month billed annually</strong></p>
                    </div>
                    <div className="card-body p-0">
                      <div className="pt-3">
                        <ul className="list-group">
                          <li className="list-group-item border-0 p-3"><i className="bi-check2 text-success me-2" /><span>UI Kit</span></li>
                          <li className="list-group-item border-0 p-3"><i className="bi-check2 text-success me-2" /><span>Components</span></li>
                          <li className="list-group-item border-0 p-3"><i className="bi-check2 text-success me-2" /><span>Sections</span></li>
                          <li className="list-group-item border-0 p-3"><i className="bi-check2 text-success me-2" /><span>Technical Support</span></li>
                          <li className="list-group-item border-0 p-3"><i className="bi-check2 text-success me-2" /><span>20% Renewal Discount</span></li>
                          <li className="list-group-item border-0"><i className="bi-check2 text-success me-2" /><span>Templates</span></li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-footer justify-content-center mt-4 border-0">
                      <Link to="#pablo" className="btn btn-warning text-white">
                        Get Started
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end pricing 2 */}
          </div>
        </div>
      </div>
    </div>
  </>

export default Pricing;
