import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Buttons = () =>
    <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb ps-0 fs-base">
                <li className="breadcrumb-item"><Link to="/">Uboot</Link></li>
                <li className="breadcrumb-item"><span>UI Kit</span></li>
                <li className="breadcrumb-item active" aria-current="page">Button</li>
            </ol>
        </nav>
        <div className="d-flex header justify-content-between">
            <h1 className="header-title h3">
                <i className="bi-box text-primary" /> Button
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
                                <div className="bd-example">
                                    <Button variant="primary">Primary</Button>
                                    <Button variant="secondary">Secondary</Button>
                                    <Button variant="success">Success</Button>
                                    <Button variant="info">Info</Button>
                                    <Button variant="warning">Warning</Button>
                                    <Button variant="danger">Danger</Button>
                                    <Button variant="link">Link</Button>
                                </div>
                                <div className="bd-example">
                                    <Button variant="danger" className="btn-lg">Large</Button>
                                    <Button variant="success">Normal</Button>
                                    <Button variant="warning" className="btn-sm">Small</Button>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="bd-example">
                                    <Button variant="primary" disabled="disabled">Primary</Button>
                                    <Button variant="secondary" disabled="disabled">Secondary</Button>
                                    <Button variant="success" disabled="disabled">Success</Button>
                                    <Button variant="info" disabled="disabled">Info</Button>
                                    <Button variant="warning" disabled="disabled">Warning</Button>
                                    <Button variant="danger" disabled="disabled">Danger</Button>
                                    <Button variant="link" disabled="disabled">Link</Button>
                                </div>
                                <div className="bd-example">
                                    <Button variant="outline-primary">Primary</Button>
                                    <Button variant="outline-secondary">Secondary</Button>
                                    <Button variant="outline-success">Success</Button>
                                    <Button variant="outline-danger">Danger</Button>
                                    <Button variant="outline-warning">Warning</Button>
                                    <Button variant="outline-info">Info</Button>
                                    <Button variant="outline-light">Light</Button>
                                    <Button variant="outline-dark">Dark</Button>
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
                                <div className="bd-example">
                                    <Button variant="primary" className="btn-rounded">Primary</Button>
                                    <Button variant="secondary" className="btn-rounded">Secondary</Button>
                                    <Button variant="success" className="btn-rounded">Success</Button>
                                    <Button variant="danger" className="btn-rounded">Danger</Button>
                                    <Button variant="warning" className="btn-rounded">Warning</Button>
                                    <Button variant="info" className="btn-rounded">Info</Button>
                                    <Button variant="light" className="btn-rounded">Light</Button>
                                    <Button variant="dark" className="btn-rounded">Dark</Button>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="bd-example">
                                    <Button variant="outline-primary" className="btn-rounded">Primary</Button>
                                    <Button variant="outline-secondary" className="btn-rounded">Secondary</Button>
                                    <Button variant="outline-success" className="btn-rounded">Success</Button>
                                    <Button variant="outline-danger" className="btn-rounded">Danger</Button>
                                    <Button variant="outline-warning" className="btn-rounded">Warning</Button>
                                    <Button variant="outline-info" className="btn-rounded">Info</Button>
                                    <Button variant="outline-light" className="btn-rounded">Light</Button>
                                    <Button variant="outline-dark" className="btn-rounded">Dark</Button>
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
                        <div className="bd-example">
                            <Button variant="light" className="btn-ripple">Light</Button>
                            <Button variant="secondary" className="btn-ripple">Secondary</Button>
                            <Button variant="primary" className="btn-ripple">Primary</Button>
                            <Button variant="success" className="btn-ripple">Success</Button>
                            <Button variant="info" className="btn-ripple">Info</Button>
                            <Button variant="danger" className="btn-ripple">Danger</Button>
                            <Button variant="warning" className="btn-ripple">Warning</Button>
                            <hr />
                            <Button variant="light" className="btn-ripple btn-rounded">Light</Button>
                            <Button variant="secondary" className="btn-ripple btn-rounded">Secondary</Button>
                            <Button variant="primary" className="btn-ripple btn-rounded">Primary</Button>
                            <Button variant="success" className="btn-ripple btn-rounded">Success</Button>
                            <Button variant="info" className="btn-ripple btn-rounded">Info</Button>
                            <Button variant="danger" className="btn-ripple btn-rounded">Danger</Button>
                            <Button variant="warning" className="btn-ripple btn-rounded">Warning</Button>
                            <hr />
                            <Button variant="light" className="btn-ripple btn-rounded btn-sm">Light</Button>
                            <Button variant="secondary" className="btn-ripple btn-rounded btn-sm">Secondary</Button>
                            <Button variant="primary" className="btn-ripple btn-rounded btn-sm">Primary</Button>
                            <Button variant="success" className="btn-ripple btn-rounded btn-sm">Success</Button>
                            <Button variant="info" className="btn-ripple btn-rounded btn-sm">Info</Button>
                            <Button variant="danger" className="btn-ripple btn-rounded btn-sm">Danger</Button>
                            <Button variant="warning" className="btn-ripple btn-rounded btn-sm">Warning</Button>
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
                        <div className="bd-example">
                            <Button variant="light" className="btn-air">Light</Button>
                            <Button variant="secondary" className="btn-air">Secondary</Button>
                            <Button variant="primary" className="btn-air">Primary</Button>
                            <Button variant="success" className="btn-air">Success</Button>
                            <Button variant="info" className="btn-air">Info</Button>
                            <Button variant="danger" className="btn-air">Danger</Button>
                            <Button variant="warning" className="btn-air">Warning</Button>
                            <hr />
                            <Button variant="light" className="btn-air btn-rounded">Light</Button>
                            <Button variant="secondary" className="btn-air btn-rounded">Secondary</Button>
                            <Button variant="primary" className="btn-air btn-rounded">Primary</Button>
                            <Button variant="success" className="btn-air btn-rounded">Success</Button>
                            <Button variant="info" className="btn-air btn-rounded">Info</Button>
                            <Button variant="danger" className="btn-air btn-rounded">Danger</Button>
                            <Button variant="warning" className="btn-air btn-rounded">Warning</Button>
                            <hr />
                            <Button variant="light" className="btn-air btn-rounded btn-sm">Light</Button>
                            <Button variant="secondary" className="btn-air btn-rounded btn-sm">Secondary</Button>
                            <Button variant="primary" className="btn-air btn-rounded btn-sm">Primary</Button>
                            <Button variant="success" className="btn-air btn-rounded btn-sm">Success</Button>
                            <Button variant="info" className="btn-air btn-rounded btn-sm">Info</Button>
                            <Button variant="danger" className="btn-air btn-rounded btn-sm">Danger</Button>
                            <Button variant="warning" className="btn-air btn-rounded btn-sm">Warning</Button>
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
                        <div className="bd-example">
                            <Button variant="success" className="btn-xl">
                                <i className="bi-hand-thumbs-up" /> <span>Thumbs Up</span>
                            </Button>
                            <Button variant="warning" className="btn-lg">
                                <i className="bi-exclamation-triangle" /> <span>Warning</span>
                            </Button>
                            <Button variant="info" className="mb-4">
                                <span>Home</span> <i className="bi-house" />
                            </Button>
                            <Button variant="danger" className="mb-4">
                                <span>Alarm</span> <i className="bi-alarm" />
                            </Button>
                            <hr />
                            <Button variant="primary" className="btn-icon">
                                <i className="bi-search" />
                            </Button>
                            <Button variant="info" className="btn-icon btn-circle">
                                <i className="bi-camera" />
                            </Button>
                            <Button variant="success" className="btn btn-icon">
                                <i className="bi-shield" />
                            </Button>
                            <Button variant="facebook" className="btn btn-icon">
                                <i className="fab fa-facebook-f" />
                            </Button>
                            <Button variant="twitter" className="btn btn-icon">
                                <i className="fab fa-twitter" />
                            </Button>
                            <Button variant="google" className="btn btn-icon">
                                <i className="fab fa-google" />
                            </Button>
                            <Button variant="instagram" className="btn btn-icon">
                                <i className="fab fa-instagram" />
                            </Button>
                            <Button variant="linkedin" className="btn btn-icon">
                                <i className="fab fa-linkedin" />
                            </Button>
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
                        <div className="bd-example">
                            <Link to="#" className="btn btn-facebook"><span className="me-2"><i className="fab fa-facebook-f" /></span> Facebook</Link>
                            <Link to="#" className="btn btn-twitter"><span className="me-2"><i className="fab fa-twitter" /></span> Twitter</Link>
                            <Link to="#" className="btn btn-google"><span className="me-2"><i className="fab fa-google" /></span> Google</Link>
                            <Link to="#" className="btn btn-instagram"><span className="me-2"><i className="fab fa-instagram" /></span> Instagram</Link>
                            <Link to="#" className="btn btn-linkedin"><span className="me-2"><i className="fab fa-linkedin-in" /></span> Linkedin</Link>
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
                        <div className="bd-example">
                            <span className="btn btn-label-primary">Primary</span>
                            <span className="btn btn-label-success">Success</span>
                            <span className="btn btn-label-info">Info</span>
                            <span className="btn btn-label-danger">Danger</span>
                            <span className="btn btn-label-warning">Warning</span>
                            <span className="btn btn-label-dark">Dark</span>
                            <hr />
                            <span className="btn btn-label-primary btn-rounded">Primary</span>
                            <span className="btn btn-label-success btn-rounded">Success</span>
                            <span className="btn btn-label-info btn-rounded">Info</span>
                            <span className="btn btn-label-danger btn-rounded">Danger</span>
                            <span className="btn btn-label-warning btn-rounded">Warning</span>
                            <span className="btn btn-label-dark btn-rounded">Dark</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

export default Buttons;
