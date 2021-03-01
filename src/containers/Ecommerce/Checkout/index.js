import { Link } from "react-router-dom";

const Checkout = () => {
    return <>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb ps-0 fs-base">
            <li className="breadcrumb-item"><Link to="#">Uboot</Link></li>
            <li className="breadcrumb-item"><span>Ecommerce</span></li>
            <li className="breadcrumb-item active" aria-current="page">Orders</li>
          </ol>
        </nav>
        <div className="row header justify-content-between mb-4">
          <div className="col-xl-5 col-lg-12">
            <h1 className="header-title h3">
              <i className="bi-cart3 text-primary" /> Orders
            </h1>
          </div>
          <div className="col-xl-7 col-lg-12">
            <div className="header-right float-xl-right float-left mt-3 mt-xl-0">
              <form>
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search others" aria-label="Recipient's username with two button addons" />
                  <button className="btn btn-icon btn-primary" type="button"><i className="bi-search" /></button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row justify-content-between mb-4">
          <div className="col-12">
            <div className="input-group mb-3">
              <button className="btn btn-primary" type="button"><i className="bi-cloud-arrow-up" /> <span className="d-none d-md-inline">Import</span></button>
              <button className="btn btn-primary" type="button"><i className="bi-cloud-arrow-down" /> <span className="d-none d-md-inline">Export</span></button>
              <button className="btn btn-primary" type="button"><i className="bi-list-task" /> <span className="d-none d-md-inline">Customize Columns</span></button>
              <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-expanded="false">
                <i className="bi-pencil" /> <span className="d-none d-md-inline">Bulk Actions</span>
              </button>
              <ul className="dropdown-menu" style={{}}>
                <li><Link className>="dropdown-item" href="#">Delete</Link></li>
                <li><Link className>="dropdown-item" href="#">Update Statuses</Link></li>
                <li><Link className>="dropdown-item" href="#">Create Notes</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className>
                  <table id="data-table" className="table table-middle table-hover">
                    <thead>
                      <tr>
                        <th>
                          <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span />
                          </label>
                        </th>
                        <th>Order</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Billing</th>
                        <th>Ship to</th>
                        <th>Total</th>
                        <th className="text-center" style={{width: '100px'}}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <label className="custom-checkbox index-checkbox">
                            <input type="checkbox" />
                            <span />
                          </label>
                        </td>
                        <td><Link to="ecommerce-order-detail.html"><strong>#RT80SDF Megan Harrison</strong></Link></td>
                        <td>6 mins ago</td>
                        <td><span className="badge bg-success rounded">Completed</span></td>
                        <td>Megan Harrison, Patterson Fletcher, 47 City Wall RD, Clifton Upon Teme, WR6 6NG, United Kingdom (UK)
                          <span className="d-block"><i>via Cash on delivery</i></span>
                        </td>
                        <td><Link href="#">Schirsten Vander, Tech Prod, Shed 4 25 Cessna Crescent, Ballina, AK 2478, United States (US)</Link></td>
                        <td>$6,200</td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="ecommerce-order-detail.html"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-bar-chart" data-original-title="Analytics" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></Link></li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="custom-checkbox index-checkbox">
                            <input type="checkbox" />
                            <span />
                          </label>
                        </td>
                        <td><Link to="ecommerce-order-detail.html"><strong>#RT81SDF Zoe Tamayo</strong></Link></td>
                        <td>Mar 3, 2020</td>
                        <td><span className="badge bg-info rounded">Processing</span></td>
                        <td>Zoe Tamayo, SAXS, 164 Bo Meul St, Wood Stock, Western Cape, 7925, South Africa
                          <span className="d-block"><i>via Direct bank transfer</i></span>
                        </td>
                        <td><Link href="#">Zoe Tamayo, Al, 2161 Rose Street, Oak Park, Illinois(IL), 60300, United States (US)</Link></td>
                        <td>$510</td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="ecommerce-order-detail.html"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-bar-chart" data-original-title="Analytics" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></Link></li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="custom-checkbox index-checkbox">
                            <input type="checkbox" />
                            <span />
                          </label>
                        </td>
                        <td><Link to="ecommerce-order-detail.html"><strong>#RT79SDF Paul G Conger</strong></Link></td>
                        <td>Oct 27, 2019</td>
                        <td><span className="badge bg-warning rounded">On hold</span></td>
                        <td>Paul G Conger, SAXS, 1157 Goldcliff Circle, Washington, Washington DC(DC), 20005
                          <span className="d-block"><i>via Credit Card (Stripe)</i></span>
                        </td>
                        <td><Link href="#">-</Link></td>
                        <td>$1,410</td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="ecommerce-order-detail.html"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-bar-chart" data-original-title="Analytics" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></Link></li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="custom-checkbox index-checkbox">
                            <input type="checkbox" />
                            <span />
                          </label>
                        </td>
                        <td><Link to="ecommerce-order-detail.html"><strong>#RT78SDF Chery R Nicholes</strong></Link></td>
                        <td>Oct 27, 2019</td>
                        <td><span className="badge bg-warning rounded">On hold</span></td>
                        <td>Chery R Nicholes, 3259 Rosewood Lane, New York, New York(NY), 10019
                          <span className="d-block"><i>via Cash on delivery</i></span>
                        </td>
                        <td><Link href="#">Chery R Nicholes, 3259 Rosewood Lane, New York, New York(NY), 10019, US(United States)</Link></td>
                        <td>$24,960</td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="ecommerce-order-detail.html"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-bar-chart" data-original-title="Analytics" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></Link></li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="custom-checkbox index-checkbox">
                            <input type="checkbox" />
                            <span />
                          </label>
                        </td>
                        <td><Link to="ecommerce-order-detail.html"><strong>#RT80SDF Megan Harrison</strong></Link></td>
                        <td>6 mins ago</td>
                        <td><span className="badge bg-success rounded">Completed</span></td>
                        <td>Megan Harrison, Patterson Fletcher, 47 City Wall RD, Clifton Upon Teme, WR6 6NG, United Kingdom (UK)
                          <span className="d-block"><i>via Cash on delivery</i></span>
                        </td>
                        <td><Link href="#">Schirsten Vander, Tech Prod, Shed 4 25 Cessna Crescent, Ballina, AK 2478, United States (US)</Link></td>
                        <td>$6,200</td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="ecommerce-order-detail.html"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-bar-chart" data-original-title="Analytics" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></Link></li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="custom-checkbox index-checkbox">
                            <input type="checkbox" />
                            <span />
                          </label>
                        </td>
                        <td><Link to="ecommerce-order-detail.html"><strong>#RT81SDF Zoe Tamayo</strong></Link></td>
                        <td>Mar 3, 2020</td>
                        <td><span className="badge bg-info rounded">Processing</span></td>
                        <td>Zoe Tamayo, SAXS, 164 Bo Meul St, Wood Stock, Western Cape, 7925, South Africa
                          <span className="d-block"><i>via Direct bank transfer</i></span>
                        </td>
                        <td><Link href="#">Zoe Tamayo, Al, 2161 Rose Street, Oak Park, Illinois(IL), 60300, United States (US)</Link></td>
                        <td>$510</td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="ecommerce-order-detail.html"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-bar-chart" data-original-title="Analytics" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></Link></li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="custom-checkbox index-checkbox">
                            <input type="checkbox" />
                            <span />
                          </label>
                        </td>
                        <td><Link to="ecommerce-order-detail.html"><strong>#RT79SDF Paul G Conger</strong></Link></td>
                        <td>Oct 27, 2019</td>
                        <td><span className="badge bg-warning rounded">On hold</span></td>
                        <td>Paul G Conger, SAXS, 1157 Goldcliff Circle, Washington, Washington DC(DC), 20005
                          <span className="d-block"><i>via Credit Card (Stripe)</i></span>
                        </td>
                        <td><Link href="#">-</Link></td>
                        <td>$1,410</td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="ecommerce-order-detail.html"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-bar-chart" data-original-title="Analytics" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></Link></li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="custom-checkbox index-checkbox">
                            <input type="checkbox" />
                            <span />
                          </label>
                        </td>
                        <td><Link to="ecommerce-order-detail.html"><strong>#RT78SDF Chery R Nicholes</strong></Link></td>
                        <td>Oct 27, 2019</td>
                        <td><span className="badge bg-info rounded">Processing</span></td>
                        <td>Chery R Nicholes, 3259 Rosewood Lane, New York, New York(NY), 10019
                          <span className="d-block"><i>via Cash on delivery</i></span>
                        </td>
                        <td><Link href="#">Chery R Nicholes, 3259 Rosewood Lane, New York, New York(NY), 10019, US(United States)</Link></td>
                        <td>$24,960</td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="ecommerce-order-detail.html"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-bar-chart" data-original-title="Analytics" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></Link></li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="custom-checkbox index-checkbox">
                            <input type="checkbox" />
                            <span />
                          </label>
                        </td>
                        <td><Link to="ecommerce-order-detail.html"><strong>#RT81SDF Michael H Hubble</strong></Link></td>
                        <td>Mar 3, 2020</td>
                        <td><span className="badge bg-info rounded">Processing</span></td>
                        <td>Michael H Hubble, Kinsman, Ohio(OH), 44428, South Africa
                          <span className="d-block"><i>via Direct bank transfer</i></span>
                        </td>
                        <td><Link href="#">Michael Hubble, Kinsman, Ohio(OH), 44428, United States (US)</Link></td>
                        <td>$510</td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="ecommerce-order-detail.html"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-bar-chart" data-original-title="Analytics" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></Link></li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="custom-checkbox index-checkbox">
                            <input type="checkbox" />
                            <span />
                          </label>
                        </td>
                        <td><Link to="ecommerce-order-detail.html"><strong>#RT79SDF Paul G Conger</strong></Link></td>
                        <td>Oct 27, 2019</td>
                        <td><span className="badge bg-warning rounded">On hold</span></td>
                        <td>Paul G Conger, SAXS, 1157 Goldcliff Circle, Washington, Washington DC(DC), 20005
                          <span className="d-block"><i>via Credit Card (Stripe)</i></span>
                        </td>
                        <td><Link href="#">-</Link></td>
                        <td>$1,410</td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="ecommerce-order-detail.html"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-bar-chart" data-original-title="Analytics" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></Link></li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="custom-checkbox index-checkbox">
                            <input type="checkbox" />
                            <span />
                          </label>
                        </td>
                        <td><Link to="ecommerce-order-detail.html"><strong>#RT80SDF Megan Harrison</strong></Link></td>
                        <td>6 mins ago</td>
                        <td><span className="badge bg-success rounded">Completed</span></td>
                        <td>Megan Harrison, Patterson Fletcher, 47 City Wall RD, Clifton Upon Teme, WR6 6NG, United Kingdom (UK)
                          <span className="d-block"><i>via Cash on delivery</i></span>
                        </td>
                        <td><Link href="#">Schirsten Vander, Tech Prod, Shed 4 25 Cessna Crescent, Ballina, AK 2478, United States (US)</Link></td>
                        <td>$6,200</td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="ecommerce-order-detail.html"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-bar-chart" data-original-title="Analytics" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></Link></li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="custom-checkbox index-checkbox">
                            <input type="checkbox" />
                            <span />
                          </label>
                        </td>
                        <td><Link to="ecommerce-order-detail.html"><strong>#RT81SDF Zoe Tamayo</strong></Link></td>
                        <td>Mar 3, 2020</td>
                        <td><span className="badge bg-info rounded">Processing</span></td>
                        <td>Zoe Tamayo, SAXS, 164 Bo Meul St, Wood Stock, Western Cape, 7925, South Africa
                          <span className="d-block"><i>via Direct bank transfer</i></span>
                        </td>
                        <td><Link href="#">Zoe Tamayo, Al, 2161 Rose Street, Oak Park, Illinois(IL), 60300, United States (US)</Link></td>
                        <td>$510</td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="ecommerce-order-detail.html"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-bar-chart" data-original-title="Analytics" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></Link></li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
}

export default Checkout;
