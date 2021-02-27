import femaleAvatar from "../../../assets/images/default-female-avatar.jpg";

const Customer = () => {
    return <>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb ps-0 fs-base">
            <li className="breadcrumb-item"><a href="#">Uboot</a></li>
            <li className="breadcrumb-item"><span>Ecommerce</span></li>
            <li className="breadcrumb-item active" aria-current="page">Customers</li>
          </ol>
        </nav>
        <div className="row header justify-content-between mb-4">
          <div className="col-xl-5 col-lg-12">
            <h1 className="header-title h3">
              <i className="bi-cart3 text-primary" />
              Customers
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
                  <li><a className="dropdown-item" href="#">Delete</a></li>
                  <li><a className="dropdown-item" href="#">Update Statuses</a></li>
                  <li><a className="dropdown-item" href="#">Create Notes</a></li>
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
                          <a href="#"><img src={femaleAvatar} style={{height: '50px'}} alt="User" className="rounded-circle" /></a>
                        </td>
                        <td>
                          <a href="#">Schirsten Vander</a>
                        </td>
                        <td>
                          September 14, 2020
                        </td>
                        <td>
                          <a href="#">schirstenv@techprod.com</a>
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
                            <li><a href="#"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></a></li>
                            <li><a href="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></a></li>
                            <li><a href="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></a></li>
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
                          <a href="#"><img src={femaleAvatar} style={{height: '50px'}} alt="user-image" className="rounded-circle" /></a>
                        </td>
                        <td>
                          <a href="#">Megan Harrison</a>
                        </td>
                        <td>
                          September 12, 2020
                        </td>
                        <td>
                          <a href="#">megan@techprod.com</a>
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
                            <li><a href="#"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></a></li>
                            <li><a href="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></a></li>
                            <li><a href="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></a></li>
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
                          <a href="#"><img src={femaleAvatar} style={{height: '50px'}} alt="user-image" className="rounded-circle" /></a>
                        </td>
                        <td>
                          <a href="#">Zoe Tamayo</a>
                        </td>
                        <td>
                          Jul 24, 2020
                        </td>
                        <td>
                          <a href="#">zoe@techprod.com</a>
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
                            <li><a href="#"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></a></li>
                            <li><a href="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></a></li>
                            <li><a href="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></a></li>
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
                          <a href="#"><img src={femaleAvatar} style={{height: '50px'}} alt="user-image" className="rounded-circle" /></a>
                        </td>
                        <td>
                          <a href="#">Paul G Conger</a>
                        </td>
                        <td>
                          Jun 3, 2020
                        </td>
                        <td>
                          <a href="#">paul@techprod.com</a>
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
                            <li><a href="#"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></a></li>
                            <li><a href="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></a></li>
                            <li><a href="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></a></li>
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
                          <a href="#"><img src={femaleAvatar} style={{height: '50px'}} alt="user-image" className="rounded-circle" /></a>
                        </td>
                        <td>
                          <a href="#">Sandra H Williams</a>
                        </td>
                        <td>
                          September 18, 2020
                        </td>
                        <td>
                          <a href="#">sandra@techprod.com</a>
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
                            <li><a href="#"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></a></li>
                            <li><a href="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></a></li>
                            <li><a href="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></a></li>
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
                          <a href="#"><img src={femaleAvatar} style={{height: '50px'}} alt="user-image" className="rounded-circle" /></a>
                        </td>
                        <td>
                          <a href="#">Delores W Hartwell</a>
                        </td>
                        <td>
                          Aug 12, 2020
                        </td>
                        <td>
                          <a href="#">delores@techprod.com</a>
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
                            <li><a href="#"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></a></li>
                            <li><a href="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></a></li>
                            <li><a href="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></a></li>
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
                          <a href="#"><img src={femaleAvatar} style={{height: '50px'}} alt="user-image" className="rounded-circle" /></a>
                        </td>
                        <td>
                          <a href="#">Roderick A Jorgensen</a>
                        </td>
                        <td>
                          Jul 24, 2020
                        </td>
                        <td>
                          <a href="#">roderick@techprod.com</a>
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
                            <li><a href="#"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></a></li>
                            <li><a href="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></a></li>
                            <li><a href="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></a></li>
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
                          <a href="#"><img src={femaleAvatar} style={{height: '50px'}} alt="user-image" className="rounded-circle" /></a>
                        </td>
                        <td>
                          <a href="#">Christian G Stone</a>
                        </td>
                        <td>
                          Jun 3, 2020
                        </td>
                        <td>
                          <a href="#">christian@techprod.com</a>
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
                            <li><a href="#"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></a></li>
                            <li><a href="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></a></li>
                            <li><a href="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></a></li>
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
                          <a href="#"><img src={femaleAvatar} style={{height: '50px'}} alt="user-image" className="rounded-circle" /></a>
                        </td>
                        <td>
                          <a href="#">Zoe Tamayo</a>
                        </td>
                        <td>
                          Jul 24, 2020
                        </td>
                        <td>
                          <a href="#">zoe@techprod.com</a>
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
                            <li><a href="#"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></a></li>
                            <li><a href="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></a></li>
                            <li><a href="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></a></li>
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
                          <a href="#"><img src={femaleAvatar} style={{height: '50px'}} alt="user-image" className="rounded-circle" /></a>
                        </td>
                        <td>
                          <a href="#">Paul G Conger</a>
                        </td>
                        <td>
                          Jun 3, 2020
                        </td>
                        <td>
                          <a href="#">paul@techprod.com</a>
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
                            <li><a href="#"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></a></li>
                            <li><a href="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></a></li>
                            <li><a href="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></a></li>
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
                          <a href="#"><img src={femaleAvatar} style={{height: '50px'}} alt="user-image" className="rounded-circle" /></a>
                        </td>
                        <td>
                          <a href="#">Sandra H Williams</a>
                        </td>
                        <td>
                          September 18, 2020
                        </td>
                        <td>
                          <a href="#">sandra@techprod.com</a>
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
                            <li><a href="#"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></a></li>
                            <li><a href="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></a></li>
                            <li><a href="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></a></li>
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
                          <a href="#"><img src={femaleAvatar} style={{height: '50px'}} alt="user-image" className="rounded-circle" /></a>
                        </td>
                        <td>
                          <a href="#">Delores W Hartwell</a>
                        </td>
                        <td>
                          Aug 12, 2020
                        </td>
                        <td>
                          <a href="#">delores@techprod.com</a>
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
                            <li><a href="#"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></a></li>
                            <li><a href="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></a></li>
                            <li><a href="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></a></li>
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
                          <a href="#"><img src={femaleAvatar} style={{height: '50px'}} alt="user-image" className="rounded-circle" /></a>
                        </td>
                        <td>
                          <a href="#">Roderick A Jorgensen</a>
                        </td>
                        <td>
                          Jul 24, 2020
                        </td>
                        <td>
                          <a href="#">roderick@techprod.com</a>
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
                            <li><a href="#"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></a></li>
                            <li><a href="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></a></li>
                            <li><a href="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></a></li>
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
                          <a href="#"><img src={femaleAvatar} style={{height: '50px'}} alt="user-image" className="rounded-circle" /></a>
                        </td>
                        <td>
                          <a href="#">Christian G Stone</a>
                        </td>
                        <td>
                          Jun 3, 2020
                        </td>
                        <td>
                          <a href="#">christian@techprod.com</a>
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
                            <li><a href="#"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></a></li>
                            <li><a href="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></a></li>
                            <li><a href="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></a></li>
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
