const OrderDetail = () => {
    return <>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb ps-0 fs-base">
            <li className="breadcrumb-item"><a href="#">Uboot</a></li>
            <li className="breadcrumb-item"><span>Ecommerce</span></li>
            <li className="breadcrumb-item active" aria-current="page">Order Detail</li>
          </ol>
        </nav>
        <div className="d-flex header justify-content-between mb-4">
          <h1 className="header-title h3">
            <i className="bi-cart3 text-primary" />
            Order Detail
          </h1>
          <div className="header-right d-none d-md-block">
            <button className="btn btn-primary" type="button"><i className="bi-plus-circle" /> <span className="d-none d-md-inline">Add Order</span></button>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="card order-detail">
              <div className="card-body">
                <h3 className="order-data-heading">
                  Order #14 details </h3>
                <p className="order-data-meta order-number">
                  Payment via Cash on delivery. Paid on September 14, 2020 @ 3:28 am. Customer IP: <span className="order-customerIP">231.34.1.22</span>
                </p>
                <div className="row order-data-column-container">
                  <div className="col-xl-6 order-data-column pe-xl-5">
                    <h4>General</h4>
                    <form>
                      <div className="form-field d-flex flex-row align-items-center">
                        <div className="me-2 mb-3">
                          <label htmlFor="order-date">Date created:</label>
                          <div className="d-flex align-items-center">
                            <input className="form-control datepicker" id="order-date" name="rder-date" />
                            <span className="mx-2">@</span>
                            <input type="text" className="hour form-control me-2" style={{flex: '0 0 60px'}} placeholder="h" name="order-date-hour" min={0} max={23} step={1} pattern="([01]?[0-9]{1}|2[0-3]{1})" />
                            <span className="me-2">:</span>
                            <input type="text" className="minute form-control" style={{flex: '0 0 60px'}} placeholder="m" name="order-date-minute" min={0} max={59} step={1} defaultValue={27} pattern="[0-5]{1}[0-9]{1}" />
                          </div>
                        </div>
                      </div>
                      {/* end form-field */}
                      <div className="form-field mb-3">
                        <label htmlFor="order-status">Status:</label>
                        <select className="select2" id="order-status" name="order-status" data-placeholder="Please select status">
                          <option />
                          <option value={1}>Completed</option>
                          <option value={2}>Pending Payment</option>
                          <option value={3}>Processing</option>
                          <option value={4}>On Hold</option>
                          <option value={5}>Cancelled</option>
                          <option value={6}>Refunded</option>
                          <option value={6}>Failed</option>
                        </select>
                      </div>
                      {/* end form-field */}
                      <div className="form-field mb-3">
                        <label htmlFor="customer">Customer:</label>
                        <select className="select2" id="customer" name="customer" data-placeholder="Please select customer">
                          <option />
                          <option value={1}>Megan Harrison</option>
                          <option value={2}>Zoe Tamayo</option>
                          <option value={3}>Paul G Conger</option>
                          <option value={4}>Chery R Nicholes</option>
                        </select>
                      </div>
                      {/* end form-field */}
                    </form>
                  </div>
                  {/* end order-data-column */}
                  <div className="col-xl-6 order-data-column">
                    <h4>Billing</h4>
                    <address className="mb-3">
                      Megan Harrison<br />
                      Patterson Fletcher, 47 City Wall RD<br />
                      Clifton Upon Teme, WR6 6NG<br />
                      United Kingdom (UK)
                    </address>
                    <div className="mb-3"><span className="fw-700 d-block">Email address:</span>
                      <a href="mailto:support@techprod.com">support@techprod.com</a>
                    </div>
                    <div><span className="fw-700 d-block">Phone:</span>
                      <a href="tel:04598xxx">04598xxx</a>
                    </div>
                  </div>
                  {/* end order-data-column */}
                </div>
                {/* end row order-data-column-container */}
                <hr />
                <div className="row order-data-column-container">
                  <div className="col-xl-6 order-data-column">
                    <h4>Shipping</h4>
                    <address className="mb-3">
                      Megan Harrison<br />
                      Shed 4 25 Cessna Crescent<br />
                      Ballina, AK 2478<br />
                      United States (US)
                    </address>
                    <div className="mb-3"><span className="fw-700 d-block">Customer provided note:</span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis enim volutpat, interdum odio vel, sagittis massa.
                    </div>
                  </div>
                  {/* end order-data-column */}
                  <div className="col-xl-6 order-data-column">
                    <h4>Delivery Information</h4>
                    <address className="mb-3">
                      UPS Delivery<br />
                      Order ID: 04598xxx<br />
                      Payment Mode: COD<br />
                    </address>
                  </div>
                  {/* end order-data-column */}
                </div>
                {/* end row order-data-column-container */}
              </div>
              {/* end card-body order-detail */}
            </div>
            {/* end card order-detail */}
            <div className="card order-items">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <table className="table mt-5">
                      <thead>
                        <tr>
                          <th className="text-center border-top-0 table-scale-border-bottom fw-700" />
                          <th className="border-top-0 table-scale-border-bottom fw-700">Item</th>
                          <th className="text-right border-top-0 table-scale-border-bottom fw-700">Cost</th>
                          <th className="text-center border-top-0 table-scale-border-bottom fw-700">Qty</th>
                          <th className="text-right border-top-0 table-scale-border-bottom fw-700">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-center fw-700">1</td>
                          <td className="text-left strong">Apple Magic Keyboard (Wireless, Rechargable) (US English) - Silver</td>
                          <td className="text-right">$94.00</td>
                          <td className="text-center">1</td>
                          <td className="text-right">$94.00</td>
                        </tr>
                        <tr>
                          <td className="text-center fw-700">2</td>
                          <td className="text-left">
                            Apple Magic Mouse 2 (Wireless, Rechargable) - Silver</td>
                          <td className="text-right">$74.00</td>
                          <td className="text-center">1</td>
                          <td className="text-right">$74.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* end col-lg-12 */}
                </div>
                {/* end row */}
                <div className="row">
                  <div className="col-4 ms-auto">
                    <div className="table-responsive">
                      <table className="table table-borderless text-right">
                        <tbody>
                          <tr>
                            <th style={{width: '50%'}}>Subtotal:</th>
                            <td>$168</td>
                          </tr>
                          <tr>
                            <th>Tax (10%)</th>
                            <td>$16.8</td>
                          </tr>
                          <tr>
                            <th>Shipping:</th>
                            <td>$14</td>
                          </tr>
                          <tr className="fw-700 fs-md border-top">
                            <th>Paid:</th>
                            <td>$198.8</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* end table-responsive */}
                    <p className>September 14, 2020 via Cash on delivery </p>
                  </div>
                </div>
                {/* end row */}
              </div>
              {/* end card-body order-item */}
              <div className="card-footer justify-content-between">
                <button type="button" className="btn btn-outline-highlight my-2">Refund</button>
                <span><a href="#">
                    <i className="fal fa-question-circle" data-original-title="To edit this order change the status back to 'Pending'" data-toggle="tooltip" />
                  </a> This order is no longer editable.</span>
              </div>
            </div>
            {/* end card order-item */}
          </div>
          {/* end col-lg-8 */}
          <div className="col-lg-4">
            <div className="card other-action">
              <div className="card-header justify-content-between">
                <h4 className="fw-700 m-0 fs-base">
                  Order actions
                </h4>
              </div>
              {/* end card-header */}
              <div className="card-body">
                <div className="d-flex">
                  <select className="form-select me-1" name="order-actions">
                    <option value>Choose an action...</option>
                    <option value="send_order_details">Email invoice / order details to customer</option>
                    <option value="send_order_details_admin">Resend new order notification</option>
                    <option value="regenerate_download_permissions">Regenerate download permissions</option>
                  </select>
                  <button type="button" className="btn btn-sm btn-icon btn-circle btn-primary mb-4">
                    <i className="bi-chevron-right" />
                  </button>
                </div>
              </div>
              {/* end card-body */}
              <div className="card-footer justify-content-between">
                <button type="button" className="btn btn-primary"><i className="bi-save" /> Update</button>
                <a href="#" className="text-danger">
                  Move to Trash
                </a>
              </div>
              {/* end card-footer */}
            </div>
            {/* end card */}
            <div className="card order-note">
              <div className="card-header justify-content-between">
                <h4 className="fw-700 m-0 fs-base">
                  Order notes
                </h4>
              </div>
              {/* end card-header */}
              <div className="card-body">
              <ul class="widget-order-notes">
                <li class="note">
                    <div class="note-content alert alert-secondary">
                    Stock levels reduced: Cats Kitty Tats Tattoos (AC31RFT) 444→443
                    </div>
                    <p class="meta fs-sm">
                    <abbr class="exact-date" title="2020-09-14 03:28:20">
                        September 14, 2020 at 3:28 am </abbr>
                    by Admin <a href="#" class="delete-note text-danger" role="button">Delete note</a>
                    </p>
                </li>
                <li class="note">
                    <div class="note-content alert alert-success">
                    Order status changed from Processing to Completed.
                    </div>
                    <p class="meta fs-sm">
                    <abbr class="exact-date" title="2020-09-14 03:28:20">
                        September 14, 2020 at 3:28 am </abbr>
                    by Admin <a href="#" class="delete-note text-danger" role="button">Delete note</a>
                    </p>
                </li>
                <li class="note">
                    <div class="note-content alert alert-warning">
                    Payment to be made upon delivery. Order status changed from Pending payment to Processing.
                    </div>
                    <p class="meta fs-sm">
                    <abbr class="exact-date" title="2020-09-14 03:28:20">
                        September 14, 2020 at 3:28 am </abbr>
                    by Admin <a href="#" class="delete-note text-danger" role="button">Delete note</a>
                    </p>
                </li>
                <li class="note">
                    <div class="note-content alert alert-info">
                    Stock levels reduced: Cats Kitty Tats Tattoos (AC31RFT) 444→443
                    </div>
                    <p class="meta fs-sm">
                    <abbr class="exact-date" title="2020-09-14 03:28:20">
                        September 14, 2020 at 3:28 am </abbr>
                    by Admin <a href="#" class="delete-note text-danger" role="button">Delete note</a>
                    </p>
                </li>
                <li class="note">
                    <div class="note-content alert alert-danger">
                    Stock levels reduced: Cats Kitty Tats Tattoos (AC31RFT) 444→443
                    </div>
                    <p class="meta fs-sm">
                    <abbr class="exact-date" title="2020-09-14 03:28:20">
                        September 14, 2020 at 3:28 am </abbr>
                    by Admin <a href="#" class="delete-note text-danger" role="button">Delete note</a>
                    </p>
                </li>
                </ul>
              </div>
              <hr />
              <div className="p-4">
                <form className>
                  <div className="mb-3">
                    <label htmlFor="note-description">Add note <a className="ms-1" href="#">
                        <i className="fal fa-question-circle" data-original-title="Add a note for your reference, or add a customer note (the user will be notified)." data-toggle="tooltip" />
                      </a></label>
                    <textarea className="form-control" id="note-description" rows={3} defaultValue={""} />
                  </div>
                  <div className="d-flex">
                    <select className="form-select me-1" name="order-actions">
                      <option value="private-note">Private note</option>
                      <option value="customer-note">Note to customer</option>
                    </select>
                    <button type="button" className="btn btn-sm btn-primary mb-4">
                      Add
                    </button>
                  </div>
                </form>
              </div>
              {/* end card-body */}
            </div>
            {/* end card */}
          </div>
          {/* end col-lg-8 */}
        </div>
        {/* end row */}
    </>
}

export default OrderDetail;
