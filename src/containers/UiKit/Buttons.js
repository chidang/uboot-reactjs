import { Link } from "react-router-dom";

const Buttons = () => 
<>
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb ps-0 fs-base">
            <li className="breadcrumb-item"><Link to="#">Uboot</Link></li>
            <li className="breadcrumb-item"><span>UI Kit</span></li>
            <li className="breadcrumb-item active" aria-current="page">Button</li>
        </ol>
    </nav>
    <div className="d-flex header justify-content-between mb-4">
        <h1 className="header-title h3">
        <i className="bi-box text-primary" />
        Button
        </h1>
    </div>
    <div className="row">
        <div className="col-lg-12">
            <div className="card">
            <div className="card-header">
                <h4 className="fw-700 m-0 fs-base">Basic Buttons</h4>
            </div>
            <div className="card-body">
                <div className="row">
                <div className="col-lg-6">
                    <div className="button-list">
                    <div className>
                        <button type="button" className="btn btn-primary mb-4">Primary</button>
                        <button type="button" className="btn btn-secondary mb-4">Secondary</button>
                        <button type="button" className="btn btn-success mb-4">Success</button>
                        <button type="button" className="btn btn-info mb-4">Info</button>
                        <button type="button" className="btn btn-warning mb-4">Warning</button>
                        <button type="button" className="btn btn-danger mb-4">Danger</button>
                        <button type="button" className="btn btn-link mb-4">Link</button>
                    </div>
                    </div>
                    <div className="button-list">
                    <button type="button" className="btn btn-danger btn-lg mb-4">Large</button>
                    <button type="button" className="btn btn-success mb-4">Normal</button>
                    <button type="button" className="btn btn-warning btn-sm mb-4">Small</button>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="button-list">
                    <button type="button" className="btn btn-primary mb-4" disabled="disabled">Primary</button>
                    <button type="button" className="btn btn-secondary mb-4" disabled="disabled">Secondary</button>
                    <button type="button" className="btn btn-success mb-4" disabled="disabled">Success</button>
                    <button type="button" className="btn btn-info mb-4" disabled="disabled">Info</button>
                    <button type="button" className="btn btn-warning mb-4" disabled="disabled">Warning</button>
                    <button type="button" className="btn btn-danger mb-4" disabled="disabled">Danger</button>
                    <button type="button" className="btn btn-link mb-4" disabled="disabled">Link</button>
                    </div>
                    <div className="button-list">
                    <button type="button" className="btn btn-outline-primary mb-4">Primary</button>
                    <button type="button" className="btn btn-outline-secondary mb-4">Secondary</button>
                    <button type="button" className="btn btn-outline-success mb-4">Success</button>
                    <button type="button" className="btn btn-outline-danger mb-4">Danger</button>
                    <button type="button" className="btn btn-outline-warning mb-4">Warning</button>
                    <button type="button" className="btn btn-outline-info mb-4">Info</button>
                    <button type="button" className="btn btn-outline-light mb-4">Light</button>
                    <button type="button" className="btn btn-outline-dark mb-4">Dark</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="col-lg-12">
            <div className="card">
            <div className="card-header">
                <h4 className="fw-700 m-0 fs-base">Pill Buttons</h4>
            </div>
            <div className="card-body">
                <div className="row">
                <div className="col-lg-6">
                    <div className="button-list">
                    <button type="button" className="btn btn-primary btn-rounded mb-4">Primary</button>
                    <button type="button" className="btn btn-secondary btn-rounded mb-4">Secondary</button>
                    <button type="button" className="btn btn-success btn-rounded mb-4">Success</button>
                    <button type="button" className="btn btn-danger btn-rounded mb-4">Danger</button>
                    <button type="button" className="btn btn-warning btn-rounded mb-4">Warning</button>
                    <button type="button" className="btn btn-info btn-rounded mb-4">Info</button>
                    <button type="button" className="btn btn-light btn-rounded mb-4">Light</button>
                    <button type="button" className="btn btn-dark btn-rounded mb-4">Dark</button>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="button-list">
                    <button type="button" className="btn btn-outline-primary btn-rounded mb-4">Primary</button>
                    <button type="button" className="btn btn-outline-secondary btn-rounded mb-4">Secondary</button>
                    <button type="button" className="btn btn-outline-success btn-rounded mb-4">Success</button>
                    <button type="button" className="btn btn-outline-danger btn-rounded mb-4">Danger</button>
                    <button type="button" className="btn btn-outline-warning btn-rounded mb-4">Warning</button>
                    <button type="button" className="btn btn-outline-info btn-rounded mb-4">Info</button>
                    <button type="button" className="btn btn-outline-light btn-rounded mb-4">Light</button>
                    <button type="button" className="btn btn-outline-dark btn-rounded mb-4">Dark</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="col-lg-6">
            <div className="card">
                <div className="card-header">
                    <h4 className="fw-700 m-0 fs-base">Ripple hover effect</h4>
                </div>
                <div className="card-body">
                    <div className="button-list">
                        <button type="button" className="btn btn-light btn-ripple mb-4">Light</button>&nbsp;
                        <button type="button" className="btn btn-secondary btn-ripple mb-4">Secondary</button>&nbsp;
                        <button type="button" className="btn btn-primary btn-ripple mb-4">Primary</button>&nbsp;
                        <button type="button" className="btn btn-success btn-ripple mb-4">Success</button>&nbsp;
                        <button type="button" className="btn btn-info btn-ripple mb-4">Info</button>&nbsp;
                        <button type="button" className="btn btn-danger btn-ripple mb-4">Danger</button>&nbsp;
                        <button type="button" className="btn btn-warning btn-ripple mb-4">Warning</button>&nbsp;
                        <hr />
                        <button type="button" className="btn btn-light btn-ripple btn-rounded mb-4">Light</button>&nbsp;
                        <button type="button" className="btn btn-secondary btn-ripple btn-rounded mb-4">Secondary</button>&nbsp;
                        <button type="button" className="btn btn-primary btn-ripple btn-rounded mb-4">Primary</button>&nbsp;
                        <button type="button" className="btn btn-success btn-ripple btn-rounded mb-4">Success</button>&nbsp;
                        <button type="button" className="btn btn-info btn-ripple btn-rounded mb-4">Info</button>&nbsp;
                        <button type="button" className="btn btn-danger btn-ripple btn-rounded mb-4">Danger</button>&nbsp;
                        <button type="button" className="btn btn-warning btn-ripple btn-rounded mb-4">Warning</button>&nbsp;
                        <hr />
                        <button type="button" className="btn btn-light btn-ripple btn-rounded btn-sm mb-4">Light</button>&nbsp;
                        <button type="button" className="btn btn-secondary btn-ripple btn-rounded btn-sm mb-4">Secondary</button>&nbsp;
                        <button type="button" className="btn btn-primary btn-ripple btn-rounded btn-sm mb-4">Primary</button>&nbsp;
                        <button type="button" className="btn btn-success btn-ripple btn-rounded btn-sm mb-4">Success</button>&nbsp;
                        <button type="button" className="btn btn-info btn-ripple btn-rounded btn-sm mb-4">Info</button>&nbsp;
                        <button type="button" className="btn btn-danger btn-ripple btn-rounded btn-sm mb-4">Danger</button>&nbsp;
                        <button type="button" className="btn btn-warning btn-ripple btn-rounded btn-sm mb-4">Warning</button>&nbsp;
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-6">
            <div className="card">
                <div className="card-header">
                    <h4 className="fw-700 m-0 fs-base">Air hover effect</h4>
                </div>
                <div className="card-body">
                    <div className="button-list">
                        <button type="button" className="btn btn-light btn-air mb-4">Light</button>&nbsp;
                        <button type="button" className="btn btn-secondary btn-air mb-4">Secondary</button>&nbsp;
                        <button type="button" className="btn btn-primary btn-air mb-4">Primary</button>&nbsp;
                        <button type="button" className="btn btn-success btn-air mb-4">Success</button>&nbsp;
                        <button type="button" className="btn btn-info btn-air mb-4">Info</button>&nbsp;
                        <button type="button" className="btn btn-danger btn-air mb-4">Danger</button>&nbsp;
                        <button type="button" className="btn btn-warning btn-air mb-4">Warning</button>&nbsp;
                        <hr />
                        <button type="button" className="btn btn-light btn-air btn-rounded mb-4">Light</button>&nbsp;
                        <button type="button" className="btn btn-secondary btn-air btn-rounded mb-4">Secondary</button>&nbsp;
                        <button type="button" className="btn btn-primary btn-air btn-rounded mb-4">Primary</button>&nbsp;
                        <button type="button" className="btn btn-success btn-air btn-rounded mb-4">Success</button>&nbsp;
                        <button type="button" className="btn btn-info btn-air btn-rounded mb-4">Info</button>&nbsp;
                        <button type="button" className="btn btn-danger btn-air btn-rounded mb-4">Danger</button>&nbsp;
                        <button type="button" className="btn btn-warning btn-air btn-rounded mb-4">Warning</button>&nbsp;
                        <hr />
                        <button type="button" className="btn btn-light btn-air btn-rounded btn-sm mb-4">Light</button>&nbsp;
                        <button type="button" className="btn btn-secondary btn-air btn-rounded btn-sm mb-4">Secondary</button>&nbsp;
                        <button type="button" className="btn btn-primary btn-air btn-rounded btn-sm mb-4">Primary</button>&nbsp;
                        <button type="button" className="btn btn-success btn-air btn-rounded btn-sm mb-4">Success</button>&nbsp;
                        <button type="button" className="btn btn-info btn-air btn-rounded btn-sm mb-4">Info</button>&nbsp;
                        <button type="button" className="btn btn-danger btn-air btn-rounded btn-sm mb-4">Danger</button>&nbsp;
                        <button type="button" className="btn btn-warning btn-air btn-rounded btn-sm mb-4">Warning</button>&nbsp;
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-6">
            <div className="card">
                <div className="card-header">
                    <h4 className="fw-700 m-0 fs-base">Icons Buttons</h4>
                </div>
                <div className="card-body">
                    <div className="button-list">
                        <button type="button" className="btn btn-success btn-xl mb-4">
                            <i className="bi-hand-thumbs-up" /> <span>Thumbs Up</span>
                        </button>
                        <button type="button" className="btn btn-warning btn-lg mb-4">
                            <i className="bi-exclamation-triangle" /> <span>Warning</span>
                        </button>
                        <button type="button" className="btn btn-info mb-4">
                            <span>Home</span> <i className="bi-house" />
                        </button>
                        <button type="button" className="btn btn-danger mb-4">
                            <span>Alarm</span> <i className="bi-alarm" />
                        </button>
                        <hr />
                        <button type="button" className="btn btn-icon btn-primary mb-4">
                            <i className="bi-search" />
                        </button>
                        <button type="button" className="btn btn-icon btn-circle btn-info mb-4">
                            <i className="bi-camera" />
                        </button>
                        <button type="button" className="btn btn-icon btn-success mb-4">
                            <i className="bi-shield" />
                        </button>
                        <button type="button" className="btn btn-icon btn-facebook mb-4">
                            <i className="fab fa-facebook-f" />
                        </button>
                        <button type="button" className="btn btn-icon btn-twitter mb-4">
                            <i className="fab fa-twitter" />
                        </button>
                        <button type="button" className="btn btn-icon btn-google mb-4">
                            <i className="fab fa-google" />
                        </button>
                        <button type="button" className="btn btn-icon btn-instagram mb-4">
                            <i className="fab fa-instagram" />
                        </button>
                        <button type="button" className="btn btn-icon btn-linkedin mb-4">
                            <i className="fab fa-linkedin" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-6">
            <div className="card">
                <div className="card-header">
                    <h4 className="fw-700 m-0 fs-base">Social buttons</h4>
                </div>
                <div className="card-body">
                    <div className="button-list">
                        <Link to="#" className="btn btn-facebook mb-4"><span className="me-2"><i className="fab fa-facebook-f" /></span> Facebook</Link>&nbsp;
                        <Link to="#" className="btn btn-twitter mb-4"><span className="me-2"><i className="fab fa-twitter" /></span> Twitter</Link>&nbsp;
                        <Link to="#" className="btn btn-google mb-4"><span className="me-2"><i className="fab fa-google" /></span> Google</Link>&nbsp;
                        <Link to="#" className="btn btn-instagram mb-4"><span className="me-2"><i className="fab fa-instagram" /></span> Instagram</Link>&nbsp;
                        <Link to="#" className="btn btn-linkedin mb-4"><span className="me-2"><i className="fab fa-linkedin-in" /></span> Linkedin</Link>&nbsp;
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-6">
            <div className="card">
                <div className="card-header">
                    <h4 className="fw-700 m-0 fs-base">Label style</h4>
                </div>
                <div className="card-body">
                    <div className="button-list">
                        <span className="btn btn-label-primary mb-4">Primary</span>&nbsp;
                        <span className="btn btn-label-success mb-4">Success</span>&nbsp;
                        <span className="btn btn-label-info mb-4">Info</span>&nbsp;
                        <span className="btn btn-label-danger mb-4">Danger</span>&nbsp;
                        <span className="btn btn-label-warning mb-4">Warning</span>&nbsp;
                        <span className="btn btn-label-dark mb-4">Dark</span>&nbsp;
                        <hr />
                        <span className="btn btn-label-primary btn-rounded mb-4">Primary</span>&nbsp;
                        <span className="btn btn-label-success btn-rounded mb-4">Success</span>&nbsp;
                        <span className="btn btn-label-info btn-rounded mb-4">Info</span>&nbsp;
                        <span className="btn btn-label-danger btn-rounded mb-4">Danger</span>&nbsp;
                        <span className="btn btn-label-warning btn-rounded mb-4">Warning</span>&nbsp;
                        <span className="btn btn-label-dark btn-rounded mb-4">Dark</span>&nbsp;
                    </div>
                </div>
            </div>
        </div>
    </div>
</>

export default Buttons;
