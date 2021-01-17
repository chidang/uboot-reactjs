import { Link } from "react-router-dom";

const Spinners = () => 
<>
<nav aria-label="breadcrumb">
    <ol className="breadcrumb pl-0 fs-base">
      <li className="breadcrumb-item"><a href="#">Uboot</a></li>
      <li className="breadcrumb-item"><span>UI Kit</span></li>
      <li className="breadcrumb-item active" aria-current="page">Spinner</li>
    </ol>
  </nav>
  <div className="header mb-4">
    <h1 className="header-title h3">
      <i className="bi-life-preserver text-primary" />
      Spinner
    </h1>
    <p className="mt-2">
      Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript.
    </p>
  </div>
  <div className="row">
    <div className="col-lg-6">
      <div className="card">
        <div className="card-header justify-content-between">
          <h4 className="fw-700 m-0 fs-base">
            Border spinner
          </h4>
          <div className="card-widgets">
            <a className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></a>
            <a className="btn btn-warning" data-toggle="collapse" data-target="#cardCollpase0" role="button" aria-expanded="false" aria-controls="cardCollpase0"><i className="dripicons-minus" /></a>
            <a className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></a>
          </div>
        </div>
        <div id="cardCollpase0" className="card-body show">
          <div className="spinner-border text-primary m-2" role="status" />
          <div className="spinner-border text-secondary m-2" role="status" />
          <div className="spinner-border text-success m-2" role="status" />
          <div className="spinner-border text-danger m-2" role="status" />
          <div className="spinner-border text-warning m-2" role="status" />
          <div className="spinner-border text-info m-2" role="status" />
          <div className="spinner-border text-light m-2" role="status" />
          <div className="spinner-border text-dark m-2" role="status" />
        </div>
      </div>
    </div>
    <div className="col-lg-6">
      <div className="card">
        <div className="card-header justify-content-between">
          <h4 className="fw-700 m-0 fs-base">
            Growing spinner
          </h4>
          <div className="card-widgets">
            <a className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></a>
            <a className="btn btn-warning" data-toggle="collapse" data-target="#cardCollpase1" role="button" aria-expanded="false" aria-controls="cardCollpase1"><i className="dripicons-minus" /></a>
            <a className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></a>
          </div>
        </div>
        <div id="cardCollpase1" className="card-body show">
          <div className="spinner-grow text-primary m-2" role="status" />
          <div className="spinner-grow text-secondary m-2" role="status" />
          <div className="spinner-grow text-success m-2" role="status" />
          <div className="spinner-grow text-danger m-2" role="status" />
          <div className="spinner-grow text-warning m-2" role="status" />
          <div className="spinner-grow text-info m-2" role="status" />
          <div className="spinner-grow text-light m-2" role="status" />
          <div className="spinner-grow text-dark m-2" role="status" />
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-6">
      <div className="card">
        <div className="card-header justify-content-between">
          <h4 className="fw-700 m-0 fs-base">
            Alignment
          </h4>
          <div className="card-widgets">
            <a className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></a>
            <a className="btn btn-warning" data-toggle="collapse" data-target="#cardCollpase4" role="button" aria-expanded="false" aria-controls="cardCollpase4"><i className="dripicons-minus" /></a>
            <a className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></a>
          </div>
        </div>
        <div id="cardCollpase4" className="card-body show">
          <div className="bd-callout bd-callout-highlight">
            Use <code>flexbox</code> utilities, <code>float</code> utilities, or <code>text alignment</code> utilities to place spinners exactly where you need them in any situation.
          </div>
          <p className="text-muted mb-4">Use flexbox utilities, float utilities, or text alignment utilities to place spinners exactly where you need them in any situation. </p>
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status" />
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-6">
      <div className="card">
        <div className="card-header justify-content-between">
          <h4 className="fw-700 m-0 fs-base">
            Placement
          </h4>
          <div className="card-widgets">
            <a className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></a>
            <a className="btn btn-warning" data-toggle="collapse" data-target="#cardCollpase5" role="button" aria-expanded="false" aria-controls="cardCollpase5"><i className="dripicons-minus" /></a>
            <a className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></a>
          </div>
        </div>
        <div id="cardCollpase5" className="card-body show">
          <div className="bd-callout bd-callout-highlight">Use <code>flexbox utilities</code>, <code>float utilities</code>, or <code>text alignment</code> utilities to place spinners exactly where you need them in any situation.</div>
          <div className="d-flex align-items-center"> <strong>Loading...</strong>
            <div className="spinner-border ml-auto" role="status" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-6">
      <div className="card">
        <div className="card-header justify-content-between">
          <h4 className="fw-700 m-0 fs-base">
            Size
          </h4>
          <div className="card-widgets">
            <a className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></a>
            <a className="btn btn-warning" data-toggle="collapse" data-target="#cardCollpase6" role="button" aria-expanded="false" aria-controls="cardCollpase6"><i className="dripicons-minus" /></a>
            <a className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></a>
          </div>
        </div>
        <div id="cardCollpase6" className="card-body show">
          <div className="bd-callout bd-callout-highlight">Add <code>.spinner-border-sm</code> and <code>.spinner-border.avatar-**</code> to make a smaller spinner that can quickly be used within other components.</div>
          <div className="row">
            <div className="col-lg-6">
              <div className="spinner-border avatar-lg text-primary m-2" role="status" />
              <div className="spinner-grow avatar-lg text-secondary m-2" role="status" />
            </div>
            <div className="col-lg-6">
              <div className="spinner-border avatar-md text-primary m-2" role="status" />
              <div className="spinner-grow avatar-md text-secondary m-2" role="status" />
            </div>
            <div className="col-lg-6">
              <div className="spinner-border avatar-sm text-primary m-2" role="status" />
              <div className="spinner-grow avatar-sm text-secondary m-2" role="status" />
            </div>
            <div className="col-lg-6">
              <div className="spinner-border spinner-border-sm m-2" role="status" />
              <div className="spinner-grow spinner-grow-sm m-2" role="status" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-6">
      <div className="card">
        <div className="card-header justify-content-between">
          <h4 className="fw-700 m-0 fs-base">
            Buttons spinner
          </h4>
          <div className="card-widgets">
            <a className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></a>
            <a className="btn btn-warning" data-toggle="collapse" data-target="#cardCollpase7" role="button" aria-expanded="false" aria-controls="cardCollpase7"><i className="dripicons-minus" /></a>
            <a className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></a>
          </div>
        </div>
        <div id="cardCollpase7" className="card-body show">
          <div className="bd-callout bd-callout-highlight">Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed.</div>
          <div className="row">
            <div className="col-lg-6">
              <div className="button-list"> <button className="btn btn-primary" type="button" disabled="disabled"> <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" /><span className="sr-only">Loading...</span> </button> <button className="btn btn-primary" type="button" disabled="disabled"> <span className="spinner-border spinner-border-sm mr-1" role="status" aria-hidden="true" /> Loading... </button> </div>
            </div>
            <div className="col-lg-6">
              <div className="button-list"> <button className="btn btn-primary" type="button" disabled="disabled"> <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" /> <span className="sr-only">Loading...</span> </button> <button className="btn btn-primary" type="button" disabled="disabled"> <span className="spinner-grow spinner-grow-sm mr-1" role="status" aria-hidden="true" /> Loading... </button> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

export default Spinners;
