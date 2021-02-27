import { useContext } from 'react';
import BarChart from "./BarChart";
import SettingContext from '../../../context/setting-context';
import DoughnutChart from "./DoughnutChart";
import PieChart from "./PieChart";
import WorldMap from "./WorldMap";
import Calendar from "./Calendar";
// import EasyPieChart from "./EasyPieChart";

const Analytics = () => {
  const settingContext = useContext(SettingContext);
  let theme = { color: settingContext.themeColor  }
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
                <div className="col-xl-8 ps-0">
                  <div className="chart chart-sm">
                  
                  </div>
                </div>
                <div className="col-xl-4">
                <div style={{height: "220px"}}>
                  <DoughnutChart theme={theme} />
                </div>
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
              <div className="row row-border w-100 ms-0">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 d-flex align-items-center justify-content-around mb-3 mb-lg-0">
                  <span className="d-inline-block ms-2 me-4">
                    User Retention
                  </span>
                  <span className="compositebar">4,6,7,7,4,3,2,1,4</span>
                  <span className="text-success ms-2"><i className="fas fa-arrow-up"></i> 19.27%</span>
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
              <div id="analytics-section-by-device" style={{height: "220px"}}>
                <PieChart theme={theme} />
              </div>
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
              <WorldMap theme={theme}/>
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
            <BarChart theme={theme} />
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
            <Calendar />
            </div>
          </div>
        </div>
      </div>
    </>
  }
  
  export default Analytics;
  