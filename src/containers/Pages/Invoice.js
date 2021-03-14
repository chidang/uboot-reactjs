import { Link } from "react-router-dom";

const Invoice = () =>
  <>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb ps-0 fs-base">
        <li className="breadcrumb-item"><Link to="/">Uboot</Link></li>
        <li className="breadcrumb-item"><span>Page</span></li>
        <li className="breadcrumb-item active" aria-current="page">Invoice</li>
      </ol>
    </nav>
    <div className="d-flex header justify-content-between mb-4">
      <h1 className="header-title h3">
        <i className="fas fa-file-invoice text-primary" /> Invoice <sup className="badge bg-primary fw-300 fs-xs">NEW</sup>
      </h1>
    </div>
    <div className="card p-4">
      <h3>Invoice #04762</h3>
      <div className="row invoice-info">
        <div className="col-sm-4 invoice-col">
          From
        <address>
            <strong>William S Brock</strong><br />
          995 Luke Lane<br />
          Healdton, Oklahoma(OK), 73438<br />
          Phone: 580-229-7053<br />
          Email: info@example.com
        </address>
        </div>
        {/* /.col */}
        <div className="col-sm-4 invoice-col">
          To
        <address>
            <strong>Marvin M Barksdale</strong><br />
          2093 Cessna Drive<br />
          South Bend, Indiana(IN), 46625<br />
          Phone: 260-303-8273<br />
          Email: marvin.barksdale@example.com
        </address>
        </div>
        {/* /.col */}
        <div className="col-sm-4 invoice-col">
          <br />
          <b>Order ID:</b> 5RGSWWD<br />
          <b>Payment Due:</b> 2/2/2020<br />
          <b>Account:</b> 121D-3DCEW
      </div>
        {/* /.col */}
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="table-responsive">
            <table className="table mt-5">
              <thead>
                <tr>
                  <th className="text-center border-top-0 table-scale-border-bottom fw-700" />
                  <th className="border-top-0 table-scale-border-bottom fw-700">Item</th>
                  <th className="text-end border-top-0 table-scale-border-bottom fw-700">Cost</th>
                  <th className="text-center border-top-0 table-scale-border-bottom fw-700">Qty</th>
                  <th className="text-end border-top-0 table-scale-border-bottom fw-700">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center fw-700">1</td>
                  <td className="text-start strong">Apple Magic Keyboard (Wireless, Rechargable) (US English) - Silver</td>
                  <td className="text-end">$94.00</td>
                  <td className="text-center">1</td>
                  <td className="text-end">$94.00</td>
                </tr>
                <tr>
                  <td className="text-center fw-700">2</td>
                  <td className="text-start">
                    Apple Magic Mouse 2 (Wireless, Rechargable) - Silver</td>
                  <td className="text-end">$74.00</td>
                  <td className="text-center">1</td>
                  <td className="text-end">$74.00</td>
                </tr>
                <tr>
                  <td className="text-center fw-700">3</td>
                  <td className="text-start">
                    New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Silver</td>
                  <td className="text-end">$2,149.00</td>
                  <td className="text-center">1</td>
                  <td className="text-end">$2,149.00</td>
                </tr>
                <tr>
                  <td className="text-center fw-700">4</td>
                  <td className="text-start">Razer Kraken X Ultralight Gaming Headset</td>
                  <td className="text-end">$49.99</td>
                  <td className="text-center">1</td>
                  <td className="text-end">$49.99</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4 ms-sm-auto">
          <p className="lead">Amount Due 2/22/2014</p>
          <div className="table-responsive">
            <table className="table">
              <tbody>
                <tr>
                  <th style={{ width: '50%' }}>Subtotal:</th>
                  <td>$2,361.99</td>
                </tr>
                <tr>
                  <th>Tax (10%):</th>
                  <td>$236.199</td>
                </tr>
                <tr>
                  <th>Shipping:</th>
                  <td>$14</td>
                </tr>
                <tr className="fw-700 fs-lg">
                  <th>Total:</th>
                  <td>$2,612.189</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row no-print">
        <div className="col-xs-12">
          <button className="btn btn-info me-2"><i className="fa fa-print" /> Print</button>
          <button type="button" className="btn btn-success me-2"><i className="fa fa-credit-card" /> Submit Payment
        </button>
          <button type="button" className="btn btn-primary" style={{ marginRight: '5px' }}>
            <i className="fa fa-download" /> Generate PDF
        </button>
        </div>
      </div>
    </div>
  </>

export default Invoice;
