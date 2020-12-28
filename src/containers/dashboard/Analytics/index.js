// import AudienceOverviewChart from './AudienceOverviewChart';
import BarChart from "./BarChart";

const Analytics = () => {
    return <>
      <h1 className="header-title h3 mb-4">
        <span className="text-primary"><i className="bi-bar-chart"></i></span> Analytics <span className="fw-300">Dashboard</span>
      </h1>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body px-4">
              <h4 className="mb-4 fs-base">Audience Overview</h4>
              <div className="row">
                <div className="col-xl-8 pl-0">
                  <div className="chart chart-sm">
                  <BarChart />
                  </div>
                </div>
                <div className="col-xl-4">
                  <div id="user-section-pie-chart" className="mt-lg-5 mt-xl-3" style={{height: "220px"}}></div>
                  <table className="table table-sm table-sm-width table-borderless mb-0 mx-auto text-center">
                    <tbody>
                      <tr>
                        <td>New Visitor</td>
                        <td>Return Visitor</td>
                      </tr>
                      <tr>
                        <td>35.57%</td>
                        <td>64.43%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
              <div className="row row-border w-100 ml-0">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 d-flex align-items-center justify-content-around mb-3 mb-lg-0">
                  <div className="easy-pie-chart position-relative d-inline-flex align-items-center justify-content-center" data-percent="86">
                    <div className="d-flex flex-column align-items-center justify-content-center position-absolute pos-left pos-right pos-top pos-bottom fw-300 fs-sm">
                      <span className="percent d-block"></span>
                    </div>
                  </div>
                  <span className="d-inline-block ml-2 mr-4">
                    User Retention
                  </span>
                  <span className="compositebar">4,6,7,7,4,3,2,1,4</span>
                  <span className="text-success ml-2"><i className="fas fa-arrow-up"></i> 19.27%</span>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 d-flex align-items-center justify-content-around mb-3 mb-lg-0">
                  <div className="easy-pie-chart position-relative d-inline-flex align-items-center justify-content-center" data-percent="65">
                    <div className="d-flex flex-column align-items-center justify-content-center position-absolute pos-left pos-right pos-top pos-bottom fw-300 fs-sm">
                      <span className="percent d-block"></span>
                    </div>
                  </div>
                  <span className="d-inline-block ml-2 mr-4">
                    New Visitor
                  </span>
                  <span className="compositebar">4,6,7,7,8,6,5,4,4</span>
                  <span className="text-warning ml-2"><i className="fas fa-arrow-down"></i> 5.98%</span>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 d-flex align-items-center justify-content-around mb-3 mb-lg-0">
                  <div className="easy-pie-chart position-relative d-inline-flex align-items-center justify-content-center" data-percent="72">
                    <div className="d-flex flex-column align-items-center justify-content-center position-absolute pos-left pos-right pos-top pos-bottom fw-300 fs-sm">
                      <span className="percent d-block"></span>
                    </div>
                  </div>
                  <span className="d-inline-block ml-2 mr-4">
                    Session
                  </span>
                  <span className="compositebar">8,6,7,5,6,2,4,6,4</span>
                  <span className="text-info ml-2"><i className="fas fa-arrow-up"></i> 9.34%</span>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 d-flex align-items-center justify-content-around mb-3 mb-lg-0">
                  <div className="easy-pie-chart position-relative d-inline-flex align-items-center justify-content-center" data-percent="56">
                    <div className="d-flex flex-column align-items-center justify-content-center position-absolute pos-left pos-right pos-top pos-bottom fw-300 fs-sm">
                      <span className="percent d-block"></span>
                    </div>
                  </div>
                  <span className="d-inline-block ml-2 mr-4">
                    Site Usage
                  </span>
                  <span className="compositebar">9,8,7,3,4,2,7,9,8</span>
                  <span className="text-danger ml-2"><i className="fas fa-arrow-down"></i> 6.12%</span>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 col-xxl-3 d-flex order-2 order-xxl-3">
          <div className="card w-100">
            <div className="d-flex justify-content-between p-3">
              <h5 className="card-title mb-0">Sessions by device</h5>
              <div className="card-actions float-right">
                <div className="d-inline-block dropdown show">
                  <a href="#" data-toggle="dropdown" data-display="static">
                    <i className="far fa-ellipsis-v"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Export</a>
                    <a className="dropdown-item" href="#">Profit</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body p-3">
              <div id="analytics-section-by-device" style={{height: "220px"}}></div>
              <table className="table table-sm table-sm-width table-borderless mb-0 mx-auto text-center">
                <tbody>
                  <tr>
                    <td><i className="dripicons-device-desktop text-primary fs-lg"></i></td>
                    <td><i className="dripicons-device-mobile text-primary fs-lg"></i></td>
                  </tr>
                  <tr>
                    <td>Desktop</td>
                    <td>Mobile</td>
                  </tr>
                  <tr>
                    <td>60%</td>
                    <td>40%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-12 col-xxl-6 d-flex order-3 order-xxl-2">
          <div className="card w-100">
            <div className="d-flex justify-content-between p-3">
              <h5 className="card-title mb-0">Sessions by country</h5>
              <div className="card-actions">
                <div className="d-inline-block dropdown show">
                  <a href="#" data-toggle="dropdown" data-display="static">
                    <i className="far fa-ellipsis-v"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Export</a>
                    <a className="dropdown-item" href="#">Profit</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body px-4">
              <div id="world_map" style={{height: "300px"}}></div>
              <div id="horizontal-bar-chart" className="nv-axis-y-hide" style={{height: "150px"}}></div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xxl-3 d-flex order-1 order-xxl-1">
          <div className="card w-100">
            <div className="d-flex justify-content-between p-3">
              <h5 className="card-title mb-0">How do you acquire users?</h5>
              <div className="card-actions float-right">
                <div className="d-inline-block dropdown show">
                  <a href="#" data-toggle="dropdown" data-display="static">
                    <i className="far fa-ellipsis-v"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Export</a>
                    <a className="dropdown-item" href="#">Profit</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body px-4">
              <canvas id="dashboard-bar-chartjs"></canvas>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 md-12 d-flex">
          <div className="card w-100">
            <div className="d-flex justify-content-between p-3">
              <h5 className="card-title mb-0">What pages do your users visit?</h5>
              <div className="card-actions">
                <div className="d-inline-block dropdown show">
                  <a href="#" data-toggle="dropdown" data-display="static">
                    <i className="far fa-ellipsis-v"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Export</a>
                    <a className="dropdown-item" href="#">Profit</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body px-4">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Page</th>
                      <th scope="col">Pageviews</th>
                      <th scope="col">Page Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>/</td>
                      <td>356</td>
                      <td>$1,000</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>/contact</td>
                      <td>1482</td>
                      <td>$1,368</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>/our-services</td>
                      <td>351489</td>
                      <td>$2,999</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>/hire-us</td>
                      <td>242479</td>
                      <td>$5,000</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>/shop</td>
                      <td>1343897</td>
                      <td>$699</td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>/products</td>
                      <td>9728</td>
                      <td>$8,999</td>
                    </tr>
                    <tr>
                      <th scope="row">6</th>
                      <td>/portfolio</td>
                      <td>2946</td>
                      <td>$1,999</td>
                    </tr>
                    <tr>
                      <th scope="row">7</th>
                      <td>/our-clients</td>
                      <td>2930</td>
                      <td>$2,999</td>
                    </tr>
                    <tr>
                      <th scope="row">8</th>
                      <td>/blog</td>
                      <td>2297</td>
                      <td>$5,000</td>
                    </tr>
                    <tr>
                      <th scope="row">9</th>
                      <td>/industries</td>
                      <td>35186</td>
                      <td>$699</td>
                    </tr>
                    <tr>
                      <th scope="row">10</th>
                      <td>/explore</td>
                      <td>2390</td>
                      <td>$8,999</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 md-12 d-flex">
          <div className="card w-100">
            <div className="d-flex justify-content-between p-3">
              <h5 className="card-title mb-0">Events</h5>
              <div className="card-actions float-right">
                <div className="d-inline-block dropdown show">
                  <a href="#" data-toggle="dropdown" data-display="static">
                    <i className="far fa-ellipsis-v"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Export</a>
                    <a className="dropdown-item" href="#">Profit</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body px-4">
              <div id="demo-calendar"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  }
  
  export default Analytics;
  