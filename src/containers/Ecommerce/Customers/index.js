import { Link } from "react-router-dom";
import femaleAvatar from "../../../assets/images/default-female-avatar.jpg";

const Customer = () => {
    return <>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb ps-0 fs-base">
            <li className="breadcrumb-item"><Link to="#">Uboot</Link></li>
            <li className="breadcrumb-item"><span>Ecommerce</span></li>
            <li className="breadcrumb-item active" aria-current="page">Customers</li>
          </ol>
        </nav>
        <div className="row header justify-content-between mb-4">
          <div className="col-xl-5 col-lg-12">
            <h1 className="header-title h3">
              <i className="bi-cart3 text-primary" /> Customers
            </h1>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-12">
            <div className="mt-3 mt-xl-0">
              <div className="input-group mb-3">
                <button className="btn btn-primary" type="button"><i className="bi-plus-circle" /> <span className="d-none d-md-inline">Add Customer</span></button>
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
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="table-responsive">
                  <table id="ecommerce-datatable" className="table table-middle table-hover table-responsive">
                    <thead>
                      <tr>
                        <th className="no-sort">
                          <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span />
                          </label>
                        </th>
                        <th className="no-sort">Image</th>
                        <th>Name</th>
                        <th>Last Active</th>
                        <th>Email</th>
                        <th>Orders</th>
                        <th>Total Spend</th>
                        <th>Postcode</th>
                        <th>Status</th>
                        <th style={{width: '80px'}} className="text-center no-sort">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span />
                          </label>
                        </td>
                        <td>
                          <Link to="#"><img src={femaleAvatar} style={{height: '50px'}} alt="User" className="rounded-circle" /></Link>
                        </td>
                        <td>
                          <Link to="#">Schirsten Vander</Link>
                        </td>
                        <td>
                          September 14, 2020
                        </td>
                        <td>
                          <Link to="#">schirstenv@techprod.com</Link>
                        </td>
                        <td>
                          5
                        </td>
                        <td>
                          $4,200
                        </td>
                        <td>
                          60300
                        </td>
                        <td>
                          <span className="badge bg-success rounded">Active</span>
                        </td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="#"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></Link></li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span />
                          </label>
                        </td>
                        <td>
                          <Link to="#"><img src={femaleAvatar} style={{height: '50px'}} alt="user-image" className="rounded-circle" /></Link>
                        </td>
                        <td>
                          <Link to="#">Megan Harrison</Link>
                        </td>
                        <td>
                          September 12, 2020
                        </td>
                        <td>
                          <Link to="#">megan@techprod.com</Link>
                        </td>
                        <td>
                          2
                        </td>
                        <td>
                          $1,700
                        </td>
                        <td>
                          60400
                        </td>
                        <td>
                          <span className="badge bg-success rounded">Active</span>
                        </td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="#"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></Link></li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span />
                          </label>
                        </td>
                        <td>
                          <Link to="#"><img src={femaleAvatar} style={{height: '50px'}} alt="user-image" className="rounded-circle" /></Link>
                        </td>
                        <td>
                          <Link to="#">Zoe Tamayo</Link>
                        </td>
                        <td>
                          Jul 24, 2020
                        </td>
                        <td>
                          <Link to="#">zoe@techprod.com</Link>
                        </td>
                        <td>
                          4
                        </td>
                        <td>
                          $2,500
                        </td>
                        <td>
                          50200
                        </td>
                        <td>
                          <span className="badge bg-danger rounded">Deactive</span>
                        </td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="#"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></Link></li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span />
                          </label>
                        </td>
                        <td>
                          <Link to="#"><img src={femaleAvatar} style={{height: '50px'}} alt="user-image" className="rounded-circle" /></Link>
                        </td>
                        <td>
                          <Link to="#">Paul G Conger</Link>
                        </td>
                        <td>
                          Jun 3, 2020
                        </td>
                        <td>
                          <Link to="#">paul@techprod.com</Link>
                        </td>
                        <td>
                          6
                        </td>
                        <td>
                          $5,100
                        </td>
                        <td>
                          41500
                        </td>
                        <td>
                          <span className="badge bg-success rounded">Active</span>
                        </td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="#"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></Link></li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span />
                          </label>
                        </td>
                        <td>
                          <Link to="#"><img src={femaleAvatar} style={{height: '50px'}} alt="user-image" className="rounded-circle" /></Link>
                        </td>
                        <td>
                          <Link to="#">Sandra H Williams</Link>
                        </td>
                        <td>
                          September 18, 2020
                        </td>
                        <td>
                          <Link to="#">sandra@techprod.com</Link>
                        </td>
                        <td>
                          5
                        </td>
                        <td>
                          $4,200
                        </td>
                        <td>
                          52650
                        </td>
                        <td>
                          <span className="badge bg-success rounded">Active</span>
                        </td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="#"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></Link></li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span />
                          </label>
                        </td>
                        <td>
                          <Link to="#"><img src={femaleAvatar} style={{height: '50px'}} alt="user-image" className="rounded-circle" /></Link>
                        </td>
                        <td>
                          <Link to="#">Delores W Hartwell</Link>
                        </td>
                        <td>
                          Aug 12, 2020
                        </td>
                        <td>
                          <Link to="#">delores@techprod.com</Link>
                        </td>
                        <td>
                          2
                        </td>
                        <td>
                          $1,700
                        </td>
                        <td>
                          60400
                        </td>
                        <td>
                          <span className="badge bg-success rounded">Active</span>
                        </td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="#"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></Link></li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span />
                          </label>
                        </td>
                        <td>
                          <Link to="#"><img src={femaleAvatar} style={{height: '50px'}} alt="user-image" className="rounded-circle" /></Link>
                        </td>
                        <td>
                          <Link to="#">Roderick A Jorgensen</Link>
                        </td>
                        <td>
                          Jul 24, 2020
                        </td>
                        <td>
                          <Link to="#">roderick@techprod.com</Link>
                        </td>
                        <td>
                          11
                        </td>
                        <td>
                          $3,500
                        </td>
                        <td>
                          77493
                        </td>
                        <td>
                          <span className="badge bg-danger rounded">Deactive</span>
                        </td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="#"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></Link></li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span />
                          </label>
                        </td>
                        <td>
                          <Link to="#"><img src={femaleAvatar} style={{height: '50px'}} alt="user-image" className="rounded-circle" /></Link>
                        </td>
                        <td>
                          <Link to="#">Christian G Stone</Link>
                        </td>
                        <td>
                          Jun 3, 2020
                        </td>
                        <td>
                          <Link to="#">christian@techprod.com</Link>
                        </td>
                        <td>
                          6
                        </td>
                        <td>
                          $5,100
                        </td>
                        <td>
                          41500
                        </td>
                        <td>
                          <span className="badge bg-success rounded">Active</span>
                        </td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="#"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></Link></li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span />
                          </label>
                        </td>
                        <td>
                          <Link to="#"><img src={femaleAvatar} style={{height: '50px'}} alt="user-image" className="rounded-circle" /></Link>
                        </td>
                        <td>
                          <Link to="#">Zoe Tamayo</Link>
                        </td>
                        <td>
                          Jul 24, 2020
                        </td>
                        <td>
                          <Link to="#">zoe@techprod.com</Link>
                        </td>
                        <td>
                          4
                        </td>
                        <td>
                          $2,500
                        </td>
                        <td>
                          50200
                        </td>
                        <td>
                          <span className="badge bg-danger rounded">Deactive</span>
                        </td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="#"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></Link></li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span />
                          </label>
                        </td>
                        <td>
                          <Link to="#"><img src={femaleAvatar} style={{height: '50px'}} alt="user-image" className="rounded-circle" /></Link>
                        </td>
                        <td>
                          <Link to="#">Paul G Conger</Link>
                        </td>
                        <td>
                          Jun 3, 2020
                        </td>
                        <td>
                          <Link to="#">paul@techprod.com</Link>
                        </td>
                        <td>
                          6
                        </td>
                        <td>
                          $5,100
                        </td>
                        <td>
                          41500
                        </td>
                        <td>
                          <span className="badge bg-success rounded">Active</span>
                        </td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="#"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></Link></li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span />
                          </label>
                        </td>
                        <td>
                          <Link to="#"><img src={femaleAvatar} style={{height: '50px'}} alt="user-image" className="rounded-circle" /></Link>
                        </td>
                        <td>
                          <Link to="#">Sandra H Williams</Link>
                        </td>
                        <td>
                          September 18, 2020
                        </td>
                        <td>
                          <Link to="#">sandra@techprod.com</Link>
                        </td>
                        <td>
                          5
                        </td>
                        <td>
                          $4,200
                        </td>
                        <td>
                          52650
                        </td>
                        <td>
                          <span className="badge bg-success rounded">Active</span>
                        </td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="#"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></Link></li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span />
                          </label>
                        </td>
                        <td>
                          <Link to="#"><img src={femaleAvatar} style={{height: '50px'}} alt="user-image" className="rounded-circle" /></Link>
                        </td>
                        <td>
                          <Link to="#">Delores W Hartwell</Link>
                        </td>
                        <td>
                          Aug 12, 2020
                        </td>
                        <td>
                          <Link to="#">delores@techprod.com</Link>
                        </td>
                        <td>
                          2
                        </td>
                        <td>
                          $1,700
                        </td>
                        <td>
                          60400
                        </td>
                        <td>
                          <span className="badge bg-success rounded">Active</span>
                        </td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="#"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></Link></li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span />
                          </label>
                        </td>
                        <td>
                          <Link to="#"><img src={femaleAvatar} style={{height: '50px'}} alt="user-image" className="rounded-circle" /></Link>
                        </td>
                        <td>
                          <Link to="#">Roderick A Jorgensen</Link>
                        </td>
                        <td>
                          Jul 24, 2020
                        </td>
                        <td>
                          <Link to="#">roderick@techprod.com</Link>
                        </td>
                        <td>
                          11
                        </td>
                        <td>
                          $3,500
                        </td>
                        <td>
                          77493
                        </td>
                        <td>
                          <span className="badge bg-danger rounded">Deactive</span>
                        </td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="#"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></Link></li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span />
                          </label>
                        </td>
                        <td>
                          <Link to="#"><img src={femaleAvatar} style={{height: '50px'}} alt="user-image" className="rounded-circle" /></Link>
                        </td>
                        <td>
                          <Link to="#">Christian G Stone</Link>
                        </td>
                        <td>
                          Jun 3, 2020
                        </td>
                        <td>
                          <Link to="#">christian@techprod.com</Link>
                        </td>
                        <td>
                          6
                        </td>
                        <td>
                          $5,100
                        </td>
                        <td>
                          41500
                        </td>
                        <td>
                          <span className="badge bg-success rounded">Active</span>
                        </td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="#"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></Link></li>
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

export default Customer;
