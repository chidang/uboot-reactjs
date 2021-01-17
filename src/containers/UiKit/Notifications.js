import { Link } from "react-router-dom";

const Notifications = () => 
<>
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb pl-0 fs-base">
        <li className="breadcrumb-item"><a href="#">Uboot</a></li>
        <li className="breadcrumb-item"><span>UI Kit</span></li>
        <li className="breadcrumb-item active" aria-current="page">Notification</li>
        </ol>
    </nav>
    <div className="header mb-4">
        <h1 className="header-title h3">
        <i className="bi-bell text-primary" />
        Notification
        </h1>
        <p className="mt-2">
        Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
        </p>
    </div>
    <div className="row">
        <div className="col-md-6">
        <div className="card">
            <div className="card-header">
            <h4 className="fw-700 m-0 fs-base">Default <span className="fw-300"><i>Alerts</i></span></h4>
            </div>
            <div className="card-body">
            <div className="bd-callout bd-callout-highlight">
                Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight <strong>required</strong> contextual classes (e.g., <code>.alert-success</code>). For background color use class <code>.bg-* </code>, <code>.text-white </code>
            </div>
            <div className="alert alert-primary" role="alert"> <strong>Primary - </strong> A simple primary alert—check it out! </div>
            <div className="alert alert-secondary" role="alert"> <strong>Secondary - </strong> A simple secondary alert—check it out! </div>
            <div className="alert alert-success" role="alert"> <strong>Success - </strong> A simple success alert—check it out! </div>
            <div className="alert alert-danger" role="alert"> <strong>Error - </strong> A simple danger alert—check it out! </div>
            <div className="alert alert-warning bg-warning text-white border-0" role="alert"> <strong>Warning - </strong> A simple warning alert—check it out! </div>
            <div className="alert alert-info bg-info text-white border-0" role="alert"> <strong>Info - </strong> A simple info alert—check it out! </div>
            <div className="alert alert-light bg-light text-dark border-0" role="alert"> <strong>Light - </strong> A simple light alert—check it out! </div>
            <div className="alert alert-dark border-0 mb-0" role="alert"> <strong>Dark - </strong> A simple dark alert—check it out! </div>
            </div>
        </div>
        </div>
        <div className="col-md-6">
        <div className="card">
            <div className="card-header">
            <h4 className="fw-700 m-0 fs-base">Dismissing <span className="fw-300"><i>Alerts</i></span></h4>
            </div>
            <div className="card-body">
            <div className="bd-callout bd-callout-highlight"> Add a dismiss button and the <code>.alert-dismissible</code> class, which adds extra padding to the right of the alert and positions the <code>.close</code> button. </div>
            <div className="alert alert-primary alert-dismissible bg-primary text-white border-0 fade show" role="alert"> <button type="button" className="close" data-dismiss="alert" aria-label="Close"> <i className="bi-x" /> </button> <strong>Primary - </strong> A simple primary alert—check it out! </div>
            <div className="alert alert-secondary alert-dismissible bg-secondary text-white border-0 fade show" role="alert"> <button type="button" className="close" data-dismiss="alert" aria-label="Close"> <i className="bi-x" /> </button> <strong>Secondary - </strong> A simple secondary alert—check it out! </div>
            <div className="alert alert-success alert-dismissible bg-success text-white border-0 fade show" role="alert"> <button type="button" className="close" data-dismiss="alert" aria-label="Close"> <i className="bi-x" /> </button> <strong>Success - </strong> A simple success alert—check it out! </div>
            <div className="alert alert-danger alert-dismissible bg-danger text-white border-0 fade show" role="alert"> <button type="button" className="close" data-dismiss="alert" aria-label="Close"> <i className="bi-x" /> </button> <strong>Error - </strong> A simple danger alert—check it out! </div>
            <div className="alert alert-warning alert-dismissible fade show" role="alert"> <button type="button" className="close" data-dismiss="alert" aria-label="Close"> <i className="bi-x" /> </button> <strong>Warning - </strong> A simple warning alert—check it out! </div>
            <div className="alert alert-info alert-dismissible fade show" role="alert"> <button type="button" className="close" data-dismiss="alert" aria-label="Close"> <i className="bi-x" /> </button> <strong>Info - </strong> A simple info alert—check it out! </div>
            <div className="alert alert-light alert-dismissible fade show" role="alert"> <button type="button" className="close" data-dismiss="alert" aria-label="Close"> <i className="bi-x" /> </button> <strong>Light - </strong> A simple light alert—check it out! </div>
            <div className="alert alert-dark alert-dismissible fade show mb-0" role="alert"> <button type="button" className="close" data-dismiss="alert" aria-label="Close"> <i className="bi-x" /> </button> <strong>Dark - </strong> A simple dark alert—check it out! </div>
            </div>
        </div>
        </div>
    </div>
  <div className="row">
    <div className="col-md-6">
      <div className="card">
        <div className="card-header">
          <h4 className="fw-700 m-0 fs-base">Custom <span className="fw-300"><i>Alerts</i></span></h4>
        </div>
        <div className="card-body">
          <div className="bd-callout bd-callout-highlight"> Display alert with transparent background and with contextual text color. Use classes <code>.bg-white</code>, and <code>.text-*</code>. E.g. <code>bg-white text-primary</code>. </div>
          <div className="alert alert-primary bg-white text-primary" role="alert"> This is a <strong>primary</strong> alert—check it out! </div>
          <div className="bd-callout bd-callout-highlight"> Display alert with filled background. Use classes <code>.bg-*</code>, and <code>.text-white</code>. E.g. <code>bg-success text-white</code>. </div>
          <div className="alert alert-success" role="alert"><i className="bi-check2 mr-2" /> This is a <strong>success</strong> alert - check it out! </div>
          <div className="alert alert-danger" role="alert"><i className="bi-x-circle mr-2" /> This is a <strong>danger</strong> alert - check it out! </div>
          <div className="alert alert-warning" role="alert"> <i className="bi-exclamation-triangle mr-2" /> This is a <strong>warning</strong> alert - check it out! </div>
          <div className="alert alert-info" role="alert"> <i className="bi-info-circle mr-2" /> This is a <strong>info</strong> alert - check it out! </div>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="card">
        <div className="card-header">
          <h4 className="fw-700 m-0 fs-base">Additional content <span className="fw-300"><i>content</i></span></h4>
        </div>
        <div className="card-body">
          <div className="bd-callout bd-callout-highlight"> Alerts can also contain additional HTML elements like headings, paragraphs and dividers. </div>
          <div className="alert alert-success" role="alert">
            <h4 className="alert-heading">Well done!</h4>
            <p className="text-success">Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
            <hr />
            <p className="text-success mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

export default Notifications;
