import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";
import WorldMap from "./WorldMap";
import Calendar from "./Calendar";
import TopProducts from "./TopProducts";
import SettingContext from '../../../context/setting-context';

const Ecommerce = () => {
  const settingContext = useContext(SettingContext);
  let theme = { color: settingContext.themeColor  }
  return <>
    <h1 className="header-title h3 mb-4">
      <span className="text-primary"><i className="bi-cart3"></i></span> E-Commerce <span className="fw-300">Dashboard</span>
    </h1>
    <div className="row">
      <div className="col-md-6 col-xl-3">
        <div className="card-box-color bg-primary rounded position-relative">
          <div className="card-box-color-content color-white">
            <div className="card-box-color-section">
              <div className="fs-md fw-700 text-white">Total Earnings</div>
              <div className="card-box-color-number fs-xl text-white"><span className="card-box-color-bedge fs-md text-white">$</span>34<span className="fs-base">M</span></div>
            </div>
            <div className="card-box-icon">
              <i className="uil uil-usd-circle text-white"></i>
            </div>
          </div>
          <div className="text-light">
            <div className="progress progress-sm bg-dark m-0">
              <div className="progress-bar bg-light" style={{width: "34%"}} role="progressbar" aria-valuenow="34" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h5 className="mt-2">TARGET <span className="float-end">34%</span></h5>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-xl-3">
        <div className="card-box-color bg-primary rounded position-relative">
          <div className="card-box-color-content color-white">
            <div className="card-box-color-section">
              <div className="fs-md fw-700 text-white">Sales Today</div>
              <div className="card-box-color-number fs-xl text-white"><span className="card-box-color-bedge fs-md text-white">$</span>1,576</div>
            </div>
            <div className="card-box-icon">
              <i className="bi-cart2 text-white"></i>
            </div>
          </div>
          <div className="text-light">
            <div className="progress progress-sm bg-dark m-0">
              <div className="progress-bar bg-light" style={{width: "68%"}} role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h5 className="mt-2">TARGET <span className="float-end">68%</span></h5>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-xl-3">
        <div className="card-box-color bg-primary rounded position-relative">
          <div className="card-box-color-content color-white">
            <div className="card-box-color-section">
              <div className="fs-md fw-700 text-white">Payouts</div>
              <div className="card-box-color-number fs-xl text-white"><span className="card-box-color-bedge fs-md text-white">$</span>4,321</div>
            </div>
            <div className="card-box-icon">
              <i className="bi-receipt text-white"></i>
            </div>
          </div>
          <div className="text-light">
            <div className="progress progress-sm bg-dark m-0">
              <div className="progress-bar bg-light" style={{width: "76%"}} role="progressbar" aria-valuenow="76" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h5 className="mt-2">TARGET <span className="float-end">76%</span></h5>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-xl-3">
        <div className="card-box-color bg-primary rounded position-relative">
          <div className="card-box-color-content color-white">
            <div className="card-box-color-section">
              <div className="fs-md fw-700 text-white">Pending Orders</div>
              <div className="card-box-color-number fs-xl text-white">234</div>
            </div>
            <div className="card-box-icon">
              <i className="bi-alarm text-white"></i>
            </div>
          </div>
          <div className="text-light">
            <div className="progress progress-sm bg-dark m-0">
              <div className="progress-bar bg-light" style={{width: "28%"}} role="progressbar" aria-valuenow="28" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h5 className="mt-2">TARGET <span className="float-end">28%</span></h5>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12 d-flex">
        <div className="card w-100">
          <div className="d-flex justify-content-between p-3 pb-0">
            <h5 className="card-title mb-0">
              Revenue
            </h5>
            <div className="card-actions">
              <div className="d-inline-block dropdown show">
                <Link to="#" data-toggle="dropdown" data-display="static">
                  <i className="far fa-ellipsis-v"></i>
                </Link>
                <div className="dropdown-menu dropdown-menu-right">
                  <Link className>="dropdown-item" href="#">Action</Link>
                  <Link className>="dropdown-item" href="#">Export</Link>
                  <Link className>="dropdown-item" href="#">Profit</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body pt-0">
            <div className="row">
              <div className="col-xl-8 ps-0">
                <LineChart theme={theme}/>
              </div>
              <div className="col-xl-4">
                <h5 className="mt-3">Direct <span className="float-end">72%</span></h5>
                <div className="progress progress-sm bg-dark m-0">
                  <div className="progress-bar bg-primary" style={{width: "72%"}} role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h5 className="mt-3">Affilliate <span className="float-end">54%</span></h5>
                <div className="progress progress-sm bg-dark m-0">
                  <div className="progress-bar bg-primary" style={{width: "54%"}} role="progressbar" aria-valuenow="54" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h5 className="mt-3">Sponsored <span className="float-end">61%</span></h5>
                <div className="progress progress-sm bg-dark m-0">
                  <div className="progress-bar bg-primary" style={{width: "61%"}} role="progressbar" aria-valuenow="61" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h5 className="mt-3">Emails <span className="float-end">25%</span></h5>
                <div className="progress progress-sm bg-dark m-0">
                  <div className="progress-bar bg-primary" style={{width: "25%"}} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="row mt-4">
                  <div className="col-6 pe-1">
                    <Link to="#" className="btn btn-primary btn-block"><i className="bi-file-earmark-text me-3"></i> Export</Link>
                  </div>
                  <div className="col-6 ps-1">
                    <Link to="#" className="btn btn-primary btn-block"><i className="bi-eye me-3"></i> View More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="row">
        <div className="col-xl-5 d-flex">
          <div className="card w-100 ">
            <div className="d-flex justify-content-between p-3">
              <h5 className="card-title mb-0">Location</h5>
              <div className="card-actions">
                <div className="d-inline-block dropdown show">
                  <Link to="#" data-toggle="dropdown" data-display="static">
                    <i className="far fa-ellipsis-v"></i>
                  </Link>
                  <div className="dropdown-menu dropdown-menu-right">
                    <Link className>="dropdown-item" href="#">Action</Link>
                    <Link className>="dropdown-item" href="#">Export</Link>
                    <Link className>="dropdown-item" href="#">Profit</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body px-4">
              <WorldMap theme={theme}/>
            </div>
          </div>
        </div>
        <div className="col-xl-4 d-flex">
          <div className="card flex-fill w-100 ">
            <div className="d-flex justify-content-between p-3">
              <h5 className="card-title mb-0">Total customers: 104,664,352</h5>
              <div className="card-actions float-end">
                <div className="d-inline-block dropdown show">
                  <Link to="#" data-toggle="dropdown" data-display="static">
                    <i className="far fa-ellipsis-v"></i>
                  </Link>
                  <div className="dropdown-menu dropdown-menu-right">
                    <Link className>="dropdown-item" href="#">Action</Link>
                    <Link className>="dropdown-item" href="#">Export</Link>
                    <Link className>="dropdown-item" href="#">Profit</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body px-4">
                <div id="user-section-pie-chart" style={{height: "220px"}}>
                  <DoughnutChart theme={theme} />
                </div>
                <table className="table table-sm table-sm-width table-borderless mb-0 mx-auto text-center">
                  <tbody>
                    <tr>
                      <td>New Customer</td>
                      <td>Return Customer</td>
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
        <div className="col-xl-3 d-flex">
          <div className="card flex-fill w-100 ">
            <div className="d-flex justify-content-between p-3">
              <h5 className="card-title mb-0">Expect and Actual</h5>
              <div className="card-actions float-end">
                <div className="d-inline-block dropdown show">
                  <Link to="#" data-toggle="dropdown" data-display="static">
                    <i className="far fa-ellipsis-v"></i>
                  </Link>
                  <div className="dropdown-menu dropdown-menu-right">
                    <Link className>="dropdown-item" href="#">Action</Link>
                    <Link className>="dropdown-item" href="#">Export</Link>
                    <Link className>="dropdown-item" href="#">Profit</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body px-4">
              <BarChart theme={theme}/>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6 d-flex">
          <div className="card w-100">
            <div className="d-flex justify-content-between p-3">
              <h5 className="card-title mb-0">Events</h5>
              <div className="card-actions float-end">
                <div className="d-inline-block dropdown show">
                  <Link to="#" data-toggle="dropdown" data-display="static">
                    <i className="far fa-ellipsis-v"></i>
                  </Link>
                  <div className="dropdown-menu dropdown-menu-right">
                    <Link className>="dropdown-item" href="#">Action</Link>
                    <Link className>="dropdown-item" href="#">Export</Link>
                    <Link className>="dropdown-item" href="#">Profit</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body px-4">
            <Calendar />
            </div>
          </div>
        </div>
        <div className="col-xl-6 d-flex">
          <div className="card flex-fill w-100 ">
            <div className="d-flex justify-content-between p-3">
              <h5 className="card-title mb-0">Top Selling Products</h5>
              <div className="card-actions">
                <div className="d-inline-block dropdown show">
                  <Link to="#" data-toggle="dropdown" data-display="static">
                    <i className="far fa-ellipsis-v"></i>
                  </Link>
                  <div className="dropdown-menu dropdown-menu-right">
                    <Link className>="dropdown-item" href="#">Action</Link>
                    <Link className>="dropdown-item" href="#">Export</Link>
                    <Link className>="dropdown-item" href="#">Profit</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body px-4">
              <TopProducts />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Ecommerce;
