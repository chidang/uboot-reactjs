import { Link } from "react-router-dom";
import Dropzone from 'react-dropzone'

const AddProduct = () => {
    return <>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb ps-0 fs-base">
            <li className="breadcrumb-item"><Link to="/">Uboot</Link></li>
            <li className="breadcrumb-item"><span>Ecommerce</span></li>
            <li className="breadcrumb-item active" aria-current="page">Add Product</li>
          </ol>
        </nav>
        <div className="header justify-content-between mb-4">
          <h1 className="header-title h3">
            <i className="bi-cart3 text-primary" /> Add Product
          </h1>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-12">
                    <div className="form-group mb-3">
                      <label htmlFor="product-title">Title <span className="text-danger">*</span></label>
                      <input type="text" id="product-title" className="form-control" />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="product-description">Description <span className="text-danger">*</span></label>
                      <textarea className="form-control" id="product-description" rows={3} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h4>Media</h4>
                <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                  {({getRootProps, getInputProps}) => (
                    <section className="dropzone">
                      <div {...getRootProps()} className="dz-message">
                        <div className="mb-4">
                          <button className="btn btn-primary">
                            <i className="bi-cloud-arrow-up me-2" />
                            <span>Add file</span>
                          </button>
                        </div>
                        <span className="text-uppercase">or drop files to upload.</span>
                        <input {...getInputProps()} />
                        <p>This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.</p>
                      </div>
                    </section>
                  )}
                </Dropzone>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h4>Pricing</h4>
                <div className="row ">
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label htmlFor="product-price">Price</label>
                      <input className="form-control" type="text" id="product-price" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label htmlFor="product-compare-price">Compare at price</label>
                      <input className="form-control" type="text" id="product-compare-price" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label htmlFor="product-cost-per-item">Cost per item</label>
                      <input className="form-control" type="text" id="product-cost-per-item" />
                      <span className="help-block">
                        <small>Customers won’t see this</small>
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center">
                    <label className="custom-checkbox">
                      <input type="checkbox" defaultChecked="checked" /> Charge tax on this product
                      <span />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h4>Inventory</h4>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label htmlFor="product-sku">SKU (Stock Keeping Unit)</label>
                      <input className="form-control" type="text" id="product-sku" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label htmlFor="product-bar-code">Barcode (ISBN, UPC, GTIN, etc.)</label>
                      <input className="form-control" type="text" id="product-bar-code" />
                    </div>
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col-12">
                    <label className="custom-checkbox">
                      <input type="checkbox" defaultChecked="checked" /> Track quantity
                      <span />
                    </label>
                  </div>
                  <div className="col-12">
                    <label className="custom-checkbox">
                      <input type="checkbox" defaultChecked="checked" /> Continue selling when out of stock
                      <span />
                    </label>
                  </div>
                </div>
                <h5 className="mt-3">QUANTITY</h5>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label htmlFor="product-quantity">Stock quantity</label>
                      <input className="form-control" type="number" id="product-quantity" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label htmlFor="product-backorder">Allow backorder</label>
                      <select className="form-select" id="product-backorder">
                        <option>No not allow</option>
                        <option>Allow, but notify customer</option>
                        <option>Allow</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label htmlFor="product-threshold">Low stock threshold</label>
                      <input className="form-control" type="number" id="product-threshold" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h4 className="mb-3">Shipping</h4>
                <div className="row border-bottom mb-3 pb-3">
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label htmlFor="product-weight">Weight (kg)</label>
                      <input className="form-control" type="text" id="product-weight" />
                    </div>
                  </div>
                </div>
                <div className="row border-bottom mb-3 pb-3">
                  <label htmlFor="product-length" className="col-lg-2 col-form-label fw-700">Dimensions (cm)</label>
                  <div className="col-lg-10">
                    <div className="row">
                      <div className="col-3">
                        <input className="form-control" type="text" id="product-length" placeholder="Length" />
                      </div>
                      <div className="col-3">
                        <input className="form-control" type="text" id="product-width" placeholder="Width" />
                      </div>
                      <div className="col-3">
                        <input className="form-control" type="text" id="product-height" placeholder="Height" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label htmlFor="product-shipping-class">Shipping Class</label>
                      <select className="form-select" id="product-shipping-class">
                        <option>No shipping class</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h4>Variants</h4>
                <div className="row mb-3">
                  <div className="form-group">
                    <label htmlFor="product-variant-1">Option 1</label>
                  </div>
                  <div className="col-3">
                    <input className="form-control" type="text" placeholder="Size" id="product-variant-1" />
                  </div>
                  <div className="col-9">
                    <input className="form-control" type="text" id="value-product-variant-1" placeholder="Separate options with a comma" />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="form-group">
                    <label htmlFor="product-variant-2">Option 2</label>
                  </div>
                  <div className="col-3">
                    <input className="form-control" type="text" placeholder="Color" id="product-variant-2" />
                  </div>
                  <div className="col-9">
                    <input className="form-control" type="text" id="value-product-variant-2" placeholder="Separate options with a comma" />
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="form-group">
                    <label htmlFor="product-variant-3">Option 3</label>
                  </div>
                  <div className="col-3">
                    <input className="form-control" type="text" placeholder="Style" id="product-variant-3" />
                  </div>
                  <div className="col-9">
                    <input className="form-control" type="text" id="value-product-variant-3" placeholder="Separate options with a comma" />
                  </div>
                </div>
                <button className="btn btn-sm btn-outline-highlight" type="button"><i className="bi-plus-circle me-2" />Add another option</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h4>Organization</h4>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group mb-3">
                      <label htmlFor="product-type">Product type</label>
                      <input className="form-control" type="text" id="product-type" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group mb-3">
                      <label htmlFor="product-vendor">Vendor</label>
                      <input className="form-control" type="text" id="product-vendor" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h4>Product categories</h4>
                <div>
                  <label className="custom-checkbox">
                    <input type="checkbox" /> Leggings
                    <span />
                  </label>
                  <label className="custom-checkbox">
                    <input type="checkbox" /> Pet Hoodie
                    <span />
                  </label>
                  <label className="custom-checkbox">
                    <input type="checkbox" /> Unisex / Men's T-shirt
                    <span />
                  </label>
                  <label className="custom-checkbox">
                    <input type="checkbox" /> Women's T-shirt
                    <span />
                  </label>
                </div>
                <button className="btn btn-sm btn-outline-highlight" type="button"><i className="bi-plus-circle me-2" />Add new category</button>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h4>Product tags</h4>
                <form>
                  <div className="d-flex align-items-center">
                    <div className="form-group me-1 flex-grow-1">
                      <input type="text" className="form-control" />
                    </div>
                    <button type="button" className="btn btn-sm btn-outline-highlight">
                      Add
                    </button>
                  </div>
                  <span className="fs-sm"><i>Separate tags with commas</i></span>
                  <div className="product-tags mt-2">
                    <span className="badge bg-primary me-2"><Link to="#"><i className="bi-x" /></Link> T-shirt</span>
                    <span className="badge bg-primary me-2"><Link to="#"><i className="bi-x" /></Link> Christmas</span>
                    <span className="badge bg-primary me-2"><Link to="#"><i className="bi-x" /></Link> Lorem</span>
                    <span className="badge bg-primary me-2"><Link to="#"><i className="bi-x" /></Link> Ipsum</span>
                  </div>
                </form>
              </div>
            </div>
            <div className="card">
              <div className="card-body d-flex justify-content-between">
                <button className="btn btn-outline-highlight" type="button">Save Draft</button>
                <button className="btn btn-primary" type="button"><i className="bi-save me-2" />Save</button>
              </div>
            </div>
          </div>
        </div>
    </>
}

export default AddProduct;
