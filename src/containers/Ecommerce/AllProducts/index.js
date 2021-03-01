import { Link } from "react-router-dom";
import product from "../../../assets/images/products/product-80x80.jpg";

const AllProduct = () => {
    return <>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb ps-0 fs-base">
            <li className="breadcrumb-item"><Link to="#">Uboot</Link></li>
            <li className="breadcrumb-item"><span>Ecommerce</span></li>
            <li className="breadcrumb-item active" aria-current="page">Products</li>
          </ol>
        </nav>
        <div className="row header justify-content-between mb-4">
          <div className="col-12">
            <h1 className="header-title h3">
              <i className="bi-cart3 text-primary" /> Products
            </h1>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-12">
            <div className="input-group">
              <button className="btn btn-primary" type="button"><i className="bi-plus-circle" /> <span className="d-none d-md-inline">Add Product</span></button>
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
                        <th>Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Units Sold</th>
                        <th>Status</th>
                        <th className="text-center no-sort">Action</th>
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
                          <Link to="ecommerce-product-detail.html">
                            <img className="img-thumbnail" alt="Product" src={product} width={48} />
                          </Link>
                        </td>
                        <td><Link to="ecommerce-product-detail.html">Blue Dress For Woman</Link></td>
                        <td>Classic Tee</td>
                        <td>$19</td>
                        <td>32</td>
                        <td>2</td>
                        <td><span className="badge bg-success rounded">Active</span></td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="ecommerce-add-product.html"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-bar-chart" data-original-title="Analytics" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-stickies" data-original-title="Duplicate" data-toggle="tooltip" /></Link></li>
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
                        <td><Link to="ecommerce-product-detail.html"><img className="img-thumbnail" alt="Product" src={product} width={48} /></Link></td>
                        <td><Link to="ecommerce-product-detail.html">Lether Gray Tuxedo</Link></td>
                        <td>Classic Pullover Hoodie</td>
                        <td>$25</td>
                        <td>56</td>
                        <td>43</td>
                        <td><span className="badge bg-danger rounded">Deactive</span></td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="ecommerce-add-product.html"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-bar-chart" data-original-title="Analytics" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-stickies" data-original-title="Duplicate" data-toggle="tooltip" /></Link></li>
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
                        <td><Link to="ecommerce-product-detail.html"><img className="img-thumbnail" alt="Product" src={product} width={48} /></Link></td>
                        <td><Link to="ecommerce-product-detail.html">Woman Full Sliv Dress</Link></td>
                        <td>Classic Pullover Hoodie</td>
                        <td>$21</td>
                        <td>44</td>
                        <td>19</td>
                        <td><span className="badge bg-success rounded">Active</span></td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="ecommerce-add-product.html"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-bar-chart" data-original-title="Analytics" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-stickies" data-original-title="Duplicate" data-toggle="tooltip" /></Link></li>
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
                        <td><Link to="ecommerce-product-detail.html"><img className="img-thumbnail" alt="Product" src={product} width={48} /></Link></td>
                        <td><Link to="ecommerce-product-detail.html">Light Blue Shirt</Link></td>
                        <td>Classic Tee</td>
                        <td>$23</td>
                        <td>44</td>
                        <td>0</td>
                        <td><span className="badge bg-danger rounded">Deactive</span></td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="ecommerce-add-product.html"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-bar-chart" data-original-title="Analytics" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-stickies" data-original-title="Duplicate" data-toggle="tooltip" /></Link></li>
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
                        <td><Link to="ecommerce-product-detail.html"><img className="img-thumbnail" alt="Product" src={product} width={48} /></Link></td>
                        <td><Link to="ecommerce-product-detail.html">Blue Dress For Woman</Link></td>
                        <td>Classic Pullover Hoodie</td>
                        <td>$26</td>
                        <td>23</td>
                        <td>1</td>
                        <td><span className="badge bg-warning rounded">Pending</span></td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="ecommerce-add-product.html"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-bar-chart" data-original-title="Analytics" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-stickies" data-original-title="Duplicate" data-toggle="tooltip" /></Link></li>
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
                        <td><Link to="ecommerce-product-detail.html"><img className="img-thumbnail" alt="Product" src={product} width={48} /></Link></td>
                        <td><Link to="ecommerce-product-detail.html">Blue Casual Check Shirt</Link></td>
                        <td>Classic Tee</td>
                        <td>$19</td>
                        <td>14</td>
                        <td>5</td>
                        <td><span className="badge bg-success rounded">Active</span></td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="ecommerce-add-product.html"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-bar-chart" data-original-title="Analytics" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-stickies" data-original-title="Duplicate" data-toggle="tooltip" /></Link></li>
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
                        <td><Link to="ecommerce-product-detail.html"><img className="img-thumbnail" alt="Product" src={product} width={48} /></Link></td>
                        <td><Link to="ecommerce-product-detail.html">White Black Line Dress</Link></td>
                        <td>Classic Pullover Hoodie</td>
                        <td>$18</td>
                        <td>19</td>
                        <td>23</td>
                        <td><span className="badge bg-danger rounded">Deactive</span></td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="ecommerce-add-product.html"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-bar-chart" data-original-title="Analytics" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-stickies" data-original-title="Duplicate" data-toggle="tooltip" /></Link></li>
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
                        <td><Link to="ecommerce-product-detail.html"><img className="img-thumbnail" alt="Product" src={product} width={48} /></Link></td>
                        <td><Link to="ecommerce-product-detail.html">Men Blue Jins Shirt</Link></td>
                        <td>Classic Tee</td>
                        <td>$21</td>
                        <td>76</td>
                        <td>145</td>
                        <td><span className="badge bg-success rounded">Active</span></td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="ecommerce-add-product.html"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-bar-chart" data-original-title="Analytics" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-stickies" data-original-title="Duplicate" data-toggle="tooltip" /></Link></li>
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
                        <td><Link to="ecommerce-product-detail.html"><img className="img-thumbnail" alt="Product" src={product} width={48} /></Link></td>
                        <td><Link to="ecommerce-product-detail.html">Woman Full Sliv Dress</Link></td>
                        <td>Classic Tee</td>
                        <td>$27</td>
                        <td>22</td>
                        <td>86</td>
                        <td><span className="badge bg-warning rounded">Pending</span></td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="ecommerce-add-product.html"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-bar-chart" data-original-title="Analytics" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-stickies" data-original-title="Duplicate" data-toggle="tooltip" /></Link></li>
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
                        <td><Link to="ecommerce-product-detail.html"><img className="img-thumbnail" alt="Product" src={product} width={48} /></Link></td>
                        <td><Link to="ecommerce-product-detail.html">Red &amp; Black Check Shirt</Link></td>
                        <td>Classic Tee</td>
                        <td>$16</td>
                        <td>28</td>
                        <td>18</td>
                        <td><span className="badge bg-success rounded">Active</span></td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="ecommerce-add-product.html"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-bar-chart" data-original-title="Analytics" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-stickies" data-original-title="Duplicate" data-toggle="tooltip" /></Link></li>
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
                        <td><Link to="ecommerce-product-detail.html"><img className="img-thumbnail" alt="Product" src={product} width={48} /></Link></td>
                        <td><Link to="ecommerce-product-detail.html">Men Blue Jins Shirt</Link></td>
                        <td>Classic Tee</td>
                        <td>$19</td>
                        <td>15</td>
                        <td>92</td>
                        <td><span className="badge bg-warning rounded">Pending</span></td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="ecommerce-add-product.html"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-bar-chart" data-original-title="Analytics" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-stickies" data-original-title="Duplicate" data-toggle="tooltip" /></Link></li>
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
                        <td><Link to="ecommerce-product-detail.html"><img className="img-thumbnail" alt="Product" src={product} width={48} /></Link></td>
                        <td><Link to="ecommerce-product-detail.html">Military And Veterans T-shirts</Link></td>
                        <td>Classic Tee</td>
                        <td>$17.99</td>
                        <td>44</td>
                        <td>11</td>
                        <td><span className="badge bg-danger rounded">Deactive</span></td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="ecommerce-add-product.html"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-bar-chart" data-original-title="Analytics" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-stickies" data-original-title="Duplicate" data-toggle="tooltip" /></Link></li>
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
                        <td><Link to="ecommerce-product-detail.html"><img className="img-thumbnail" alt="Product" src={product} width={48} /></Link></td>
                        <td><Link to="ecommerce-product-detail.html">Just Eat It! Hamburger</Link></td>
                        <td>Classic Tee</td>
                        <td>$18</td>
                        <td>67</td>
                        <td>35</td>
                        <td><span className="badge bg-success rounded">Active</span></td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="ecommerce-add-product.html"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-bar-chart" data-original-title="Analytics" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-stickies" data-original-title="Duplicate" data-toggle="tooltip" /></Link></li>
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
                        <td><Link to="ecommerce-product-detail.html"><img className="img-thumbnail" alt="Product" src={product} width={48} /></Link></td>
                        <td><Link to="ecommerce-product-detail.html">I'm Just Here For The Boos</Link></td>
                        <td>Classic Tee</td>
                        <td>$21</td>
                        <td>16</td>
                        <td>67</td>
                        <td><span className="badge bg-success rounded">Active</span></td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="ecommerce-add-product.html"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-bar-chart" data-original-title="Analytics" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-stickies" data-original-title="Duplicate" data-toggle="tooltip" /></Link></li>
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
                        <td><Link to="ecommerce-product-detail.html"><img className="img-thumbnail" alt="Product" src={product} width={48} /></Link></td>
                        <td><Link to="ecommerce-product-detail.html">Patriotic Dog Paw</Link></td>
                        <td>Classic Tee</td>
                        <td>$22</td>
                        <td>61</td>
                        <td>13</td>
                        <td><span className="badge bg-danger rounded">Deactive</span></td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="ecommerce-add-product.html"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-bar-chart" data-original-title="Analytics" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-stickies" data-original-title="Duplicate" data-toggle="tooltip" /></Link></li>
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
                        <td><Link to="ecommerce-product-detail.html"><img className="img-thumbnail" alt="Product" src={product} width={48} /></Link></td>
                        <td><Link to="ecommerce-product-detail.html">T-Shirt Form Girls</Link></td>
                        <td>Classic Tee</td>
                        <td>$23</td>
                        <td>39</td>
                        <td>45</td>
                        <td><span className="badge bg-warning rounded">Pending</span></td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="ecommerce-add-product.html"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-bar-chart" data-original-title="Analytics" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-stickies" data-original-title="Duplicate" data-toggle="tooltip" /></Link></li>
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
                        <td><Link to="ecommerce-product-detail.html"><img className="img-thumbnail" alt="Product" src={product} width={48} /></Link></td>
                        <td><Link to="ecommerce-product-detail.html">T-Shirt Form Girls</Link></td>
                        <td>Classic Tee</td>
                        <td>$17</td>
                        <td>23</td>
                        <td>23</td>
                        <td><span className="badge bg-success rounded">Active</span></td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="ecommerce-add-product.html"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-bar-chart" data-original-title="Analytics" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-stickies" data-original-title="Duplicate" data-toggle="tooltip" /></Link></li>
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
                        <td><Link to="ecommerce-product-detail.html"><img className="img-thumbnail" alt="Product" src={product} width={48} /></Link></td>
                        <td><Link to="ecommerce-product-detail.html">Blue Dress For Woman</Link></td>
                        <td>Classic Tee</td>
                        <td>$18</td>
                        <td>48</td>
                        <td>25</td>
                        <td><span className="badge bg-success rounded">Active</span></td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="ecommerce-add-product.html"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-bar-chart" data-original-title="Analytics" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-stickies" data-original-title="Duplicate" data-toggle="tooltip" /></Link></li>
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
                        <td><Link to="ecommerce-product-detail.html"><img className="img-thumbnail" alt="Product" src={product} width={48} /></Link></td>
                        <td><Link to="ecommerce-product-detail.html">Woman Full Sliv Dress</Link></td>
                        <td>Classic Pullover Hoodie</td>
                        <td>$21</td>
                        <td>35</td>
                        <td>44</td>
                        <td><span className="badge bg-danger rounded">Deactive</span></td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="ecommerce-add-product.html"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-bar-chart" data-original-title="Analytics" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-stickies" data-original-title="Duplicate" data-toggle="tooltip" /></Link></li>
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
                        <td><Link to="ecommerce-product-detail.html"><img className="img-thumbnail" alt="Product" src={product} width={48} /></Link></td>
                        <td><Link to="ecommerce-product-detail.html">Woman Full Sliv Dress</Link></td>
                        <td>Classic Tee</td>
                        <td>$23</td>
                        <td>9</td>
                        <td>11</td>
                        <td><span className="badge bg-success rounded">Active</span></td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="ecommerce-add-product.html"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-bar-chart" data-original-title="Analytics" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-stickies" data-original-title="Duplicate" data-toggle="tooltip" /></Link></li>
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
                        <td><Link to="ecommerce-product-detail.html"><img className="img-thumbnail" alt="Product" src={product} width={48} /></Link></td>
                        <td><Link to="ecommerce-product-detail.html">Blue Casual Check Shirt</Link></td>
                        <td>Classic Tee</td>
                        <td>$24</td>
                        <td>56</td>
                        <td>12</td>
                        <td><span className="badge bg-success rounded">Active</span></td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="ecommerce-add-product.html"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-bar-chart" data-original-title="Analytics" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-stickies" data-original-title="Duplicate" data-toggle="tooltip" /></Link></li>
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
                        <td><Link to="ecommerce-product-detail.html"><img className="img-thumbnail" alt="Product" src={product} width={48} /></Link></td>
                        <td><Link to="ecommerce-product-detail.html">Men Blue Jins Shirt</Link></td>
                        <td>Classic Tee</td>
                        <td>$25</td>
                        <td>16</td>
                        <td>45</td>
                        <td><span className="badge bg-success rounded">Active</span></td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="ecommerce-add-product.html"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-bar-chart" data-original-title="Analytics" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-stickies" data-original-title="Duplicate" data-toggle="tooltip" /></Link></li>
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
                        <td><Link to="ecommerce-product-detail.html"><img className="img-thumbnail" alt="Product" src={product} width={48} /></Link></td>
                        <td><Link to="ecommerce-product-detail.html">Blue Dress For Woman</Link></td>
                        <td>Classic Pullover Hoodie</td>
                        <td>$23</td>
                        <td>76</td>
                        <td>56</td>
                        <td><span className="badge bg-success rounded">Active</span></td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="ecommerce-add-product.html"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-bar-chart" data-original-title="Analytics" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-stickies" data-original-title="Duplicate" data-toggle="tooltip" /></Link></li>
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
                        <td><Link to="ecommerce-product-detail.html"><img className="img-thumbnail" alt="Product" src={product} width={48} /></Link></td>
                        <td><Link to="ecommerce-product-detail.html">T-Shirt Form Girls</Link></td>
                        <td>Pillow</td>
                        <td>$25</td>
                        <td>45</td>
                        <td>15</td>
                        <td><span className="badge bg-success rounded">Active</span></td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="ecommerce-add-product.html"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-bar-chart" data-original-title="Analytics" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-stickies" data-original-title="Duplicate" data-toggle="tooltip" /></Link></li>
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
                        <td><Link to="ecommerce-product-detail.html"><img className="img-thumbnail" alt="Product" src={product} width={48} /></Link></td>
                        <td><Link to="ecommerce-product-detail.html">Light Blue Shirt</Link></td>
                        <td>Classic Tee</td>
                        <td>$26</td>
                        <td>34</td>
                        <td>35</td>
                        <td><span className="badge bg-success rounded">Active</span></td>
                        <td>
                          <ul className="list-unstyled table-actions">
                            <li><Link to="ecommerce-add-product.html"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-bar-chart" data-original-title="Analytics" data-toggle="tooltip" /></Link></li>
                            <li><Link to="#"><i className="bi-stickies" data-original-title="Duplicate" data-toggle="tooltip" /></Link></li>
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

export default AllProduct;
