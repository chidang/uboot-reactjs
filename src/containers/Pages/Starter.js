import { Link } from "react-router-dom";

const Starter = () =>
  <>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb ps-0 fs-base">
        <li className="breadcrumb-item"><Link to="#">Uboot</Link></li>
        <li className="breadcrumb-item"><span>Page</span></li>
        <li className="breadcrumb-item active" aria-current="page">Starter Page</li>
      </ol>
    </nav>
    <div className="d-flex header justify-content-between mb-4">
      <h1 className="header-title h3">
        <i className="bi-star text-primary" /> Starter Page <sup className="badge bg-primary fw-300 fs-xs">ADDON</sup>
      </h1>
      <div className="header-right d-none d-md-block">
        <div className="d-flex">
          <div className="mb-4 input-group">
            <input className="form-control datepicker" name="date" />
            <span className="input-group-text" id="basic-addon1"><i className="fal fa-calendar-alt" /></span>
          </div>
          <button type="button" className="btn btn-icon bg-primary text-white mb-4 ms-3">
            <i className="bi-search" />
          </button>
          <button type="button" className="btn btn-icon bg-primary text-white mb-4 ms-3">
            <i className="fal fa-sync" />
          </button>
        </div>
      </div>
    </div>
    <div className="card p-4">
    </div>
  </>

export default Starter;
